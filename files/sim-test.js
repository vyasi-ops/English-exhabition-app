// Headless end-to-end simulation of the StudyVerse idiom app (jsdom).
const fs = require('fs');
const vm = require('vm');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('index.html', 'utf8');
const dataJs = fs.readFileSync('data.js', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');

const mkDom = () => new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true });
let dom = mkDom();
let { window } = dom;
let doc = window.document;

// In a browser both files are classic scripts sharing one global scope, so concatenate.
const boot = () => { dom = mkDom(); window = dom.window; doc = window.document; vm.runInContext(dataJs + '\n' + appJs, window); };
boot();

let failures = 0;
const ok = (msg) => console.log('ok  : ' + msg);
const check = (cond, msg) => { if (!cond) { failures++; console.log('FAIL: ' + msg); } else { ok(msg); } };
const click = (el) => el.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
const activeScreen = () => doc.querySelector('.screen.active').id;
const byText = (sel, txt) => [...doc.querySelectorAll(sel)].find(e => e.textContent.trim() === txt);

// Ground-truth answer lookup straight from data.js (independent of app code).
// `const QUESTIONS` is script-scoped, so pull it out by evaluating data.js as an expression.
const QUESTIONS = vm.runInContext(dataJs + '\n;({ ...QUESTIONS })', mkDom().window);
const index = new Map();
for (const id in QUESTIONS)
  for (const q of QUESTIONS[id]) {
    if (!index.has(q.q)) index.set(q.q, q);
    else if (index.get(q.q).opts[q.ans] !== q.opts[q.ans]) index.set(q.q, 'AMBIGUOUS');
  }
const mcqAnswer = (t) => { const q = index.get(t); return q && q !== 'AMBIGUOUS' ? q.opts[q.ans] : null; };
const fitbAnswer = (sentenceWithBlank) => {
  for (const [, q] of index) {
    if (q.type !== 'fitb') continue;
    if (sentenceWithBlank === q.q.replace('___', '\u0000')) return q.opts[q.ans];
  }
  return null;
};

function startSession() {
  click(doc.getElementById('enterBtn'));
  click(doc.getElementById('startLearn'));
}

function walkFlashcards() {
  for (let i = 0; i < sessionIdiomCount - 1; i++) click(doc.getElementById('nextCard'));
  click(doc.getElementById('nextCard')); // last card -> quiz
}

const sessionIdiomCount = 7;

// ---------------------------------------------------------------- Landing / menu
check(activeScreen() === 'landingScreen', 'app starts on the landing screen');
click(doc.getElementById('enterBtn'));
check(activeScreen() === 'menuScreen', '"Start Session" opens the lineup');
check(doc.querySelectorAll('#menuList .menu-item').length === 7, 'lineup lists 7 idioms');
check(doc.querySelectorAll('#menuList .menu-num').length === 7, 'each lineup row is numbered');

// ---------------------------------------------------------------- Flashcards
click(doc.getElementById('startLearn'));
check(activeScreen() === 'learnScreen', '"Start Learning" opens flashcards');
check(doc.getElementById('cardFrontName').textContent.length > 0, 'card front shows the idiom');
check(doc.getElementById('cardBackMeaning').textContent.length > 0, 'card back has a meaning');
check(Math.abs(parseFloat(doc.getElementById('cardProgress').style.width) - 100 / 7) < 0.01,
  'card progress bar reflects 1/7 (' + doc.getElementById('cardProgress').style.width + ')');

const card = doc.getElementById('flashcard');
click(card);
check(card.classList.contains('flipped'), 'tapping the card flips it');
click(card);
check(!card.classList.contains('flipped'), 'tapping again flips it back');
card.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
check(card.classList.contains('flipped'), 'keyboard Enter flips the card (a11y)');
check(doc.getElementById('prevCard').disabled === true, '"Back" disabled on the first card');
click(card); // unflip
click(doc.getElementById('nextCard'));
check(doc.getElementById('cardCounter').textContent === '2 / 7', 'counter advances to 2 / 7');
check(doc.getElementById('prevCard').disabled === false, '"Back" enabled after moving forward');
click(doc.getElementById('prevCard'));
check(doc.getElementById('cardCounter').textContent === '1 / 7', '"Back" returns to card 1');
click(doc.getElementById('nextCard'));

// ---------------------------------------------------------------- MCQ round (all correct)
walkFlashcards();
check(activeScreen() === 'mcqScreen', 'finishing flashcards starts the MCQ round');

let mcqSeen = 0, mcqCorrect = 0, guard = 0;
while (activeScreen() === 'mcqScreen' && guard++ < 60) {
  const btns = [...doc.querySelectorAll('#mcqBody .choice-btn')];
  if (!btns.length) break;
  const qText = doc.querySelector('#mcqBody .q-box').textContent.trim();
  const truth = mcqAnswer(qText);

  // leak test: before answering, nothing in the DOM may reveal the right option
  const leak = btns.some(b => /correct/i.test(b.outerHTML) || b.classList.contains('correct'));
  if (leak) { check(false, 'DOM must not leak the correct answer before it is answered'); break; }
  if (!truth) { check(false, 'ground-truth answer found for: ' + qText); break; }
  check(btns.map(b => b.dataset.letter).join(',') === 'A,B,C,D', 'options labelled A/B/C/D');

  click(byText('#mcqBody .choice-btn', truth));
  mcqSeen++;
  const marked = [...doc.querySelectorAll('#mcqBody .choice-btn.correct')];
  if (marked.length !== 1 || marked[0].textContent.trim() !== truth) {
    check(false, 'exactly the right option is highlighted as correct'); break;
  }
  if (doc.querySelectorAll('#mcqBody .choice-btn.wrong').length !== 0) {
    check(false, 'a correct pick is not marked wrong'); break;
  }
  mcqCorrect++;
  const scoreTxt = doc.getElementById('mcqScoreDisplay').textContent;
  if (scoreTxt !== `Score: ${mcqCorrect}`) { check(false, 'MCQ score pill tracks correct picks (' + scoreTxt + ')'); break; }
  check([...doc.querySelectorAll('#mcqBody .choice-btn')].every(b => b.disabled), 'all options lock after answering');
  if (mcqSeen === 14) {
    const doneTitle = doc.querySelector('#mcqBody .done-title');
    check(!!doneTitle && doc.getElementById('mcqProgress').textContent === 'Question 14 of 14',
      'MCQ summary shown without an off-by-one counter ("' + doc.getElementById('mcqProgress').textContent + '")');
    check(doc.getElementById('mcqProgressFill').style.width === '100%', 'MCQ progress bar completes');
    click(doc.getElementById('startFITB'));
  } else {
    click(doc.querySelector('#mcqBody .feedback-row .btn'));
  }
}
check(mcqSeen === 14, 'MCQ round had 14 questions (saw ' + mcqSeen + ')');
check(mcqCorrect === 14, 'every correct answer was scored (+1 each)');
check(activeScreen() === 'fitbScreen', 'MCQ "Continue" moves to Fill in the Blanks');

// ---------------------------------------------------------------- FITB round (all correct)
let fitbSeen = 0, fitbCorrect = 0; guard = 0;
while (activeScreen() === 'fitbScreen' && guard++ < 60) {
  const btns = [...doc.querySelectorAll('#fitbBody .choice-btn')];
  if (!btns.length) break;
  const sentence = doc.querySelector('#fitbBody .story-box').textContent;
  const truth = fitbAnswer(sentence);
  if (!truth) { check(false, 'ground-truth answer found for blank question'); break; }
  check(doc.querySelectorAll('#fitbBody .blank-slot').length === 1, 'blank slot rendered in the sentence');

  click(byText('#fitbBody .choice-btn', truth));
  fitbSeen++;
  if (doc.querySelectorAll('#fitbBody .choice-btn.correct').length !== 1) {
    check(false, 'FITB highlights exactly one correct option'); break;
  }
  const blank = doc.querySelector('#fitbBody .blank-slot');
  if (blank.textContent.trim() !== truth) { check(false, 'blank fills with the chosen idiom ("' + blank.textContent + '")'); break; }
  fitbCorrect++;
  const scoreTxt = doc.getElementById('fitbScoreDisplay').textContent;
  if (scoreTxt !== `Score: ${fitbCorrect}`) { check(false, 'FITB score pill tracks correct picks (' + scoreTxt + ')'); break; }
  click(doc.querySelector('#fitbBody .feedback-row .btn'));
}
check(fitbSeen === 14, 'FITB round had 14 questions (saw ' + fitbSeen + ')');
check(activeScreen() === 'finalScreen', 'FITB completion shows the results screen');

// ---------------------------------------------------------------- Results
const big = doc.querySelector('.final-big').textContent.trim();
check(big === '28 / 28', 'perfect run reports 28 / 28 (got "' + big + '")');
check(doc.querySelector('.final-pct').textContent.trim() === '100% ACCURACY', 'accuracy label reads 100%');
const ring = doc.getElementById('ringFg');
check(!!ring && parseFloat(ring.style.strokeDasharray) > 400, 'score ring initialised (dasharray ' + ring.style.strokeDasharray + ')');
check(doc.querySelectorAll('.sb-row').length === 3, 'breakdown lists 3 rows');
check(doc.querySelectorAll('#finalBody .btn').length === 2, 'results offers Review + Play Again');

// ---------------------------------------------------------------- Wrong answers path
click(doc.getElementById('playAgain'));
check(activeScreen() === 'landingScreen', '"Play Again" returns to landing');
boot(); // fresh session (random idioms) for the miss-path checks
startSession();
walkFlashcards();
{
  const btns = [...doc.querySelectorAll('#mcqBody .choice-btn')];
  const qText = doc.querySelector('#mcqBody .q-box').textContent.trim();
  const truth = mcqAnswer(qText);
  const wrongBtn = btns.find(b => b.textContent.trim() !== truth);
  click(wrongBtn);
  check(wrongBtn.classList.contains('wrong'), 'a wrong pick is marked wrong');
  check(doc.querySelectorAll('#mcqBody .choice-btn.correct').length === 1, 'right option still revealed on a miss');
  check(doc.getElementById('mcqScoreDisplay').textContent === 'Score: 0', 'wrong pick does not add to the score');
  check(wrongBtn.disabled === true && btns.every(b => b.disabled), 'options stay locked after a miss');
}
click(doc.getElementById('reviewMenu') || doc.querySelector('#mcqBody .feedback-row .btn'));

// Review Lineup from results
boot();
startSession();
walkFlashcards();
guard = 0;
while (activeScreen() === 'mcqScreen' && guard++ < 60) {
  const b = doc.querySelector('#mcqBody .feedback-row .btn');
  const btns = [...doc.querySelectorAll('#mcqBody .choice-btn')];
  if (!btns.length) break;
  click(btns[0]);
  click(b || doc.querySelector('#mcqBody .feedback-row .btn'));
}
guard = 0;
while (activeScreen() === 'fitbScreen' && guard++ < 60) {
  const btns = [...doc.querySelectorAll('#fitbBody .choice-btn')];
  if (!btns.length) break;
  click(btns[0]);
  click(doc.querySelector('#fitbBody .feedback-row .btn'));
}
check(activeScreen() === 'finalScreen', 'mixed run also reaches results');
click(doc.getElementById('reviewMenu'));
check(activeScreen() === 'menuScreen', '"Review Lineup" jumps back to the session lineup');
check(doc.querySelectorAll('#menuList .menu-item').length === 7, 'lineup re-renders correctly');

console.log(failures === 0 ? '\nALL CHECKS PASSED' : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
