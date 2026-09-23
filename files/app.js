// ---- State ----
let sessionIdioms = [];
let cardIdx = 0;
let cardFlipped = false;
let mcqList = [];
let mcqIdx = 0;
let mcqScore = 0;
let fitbList = [];
let fitbIdx = 0;
let fitbScore = 0;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ---- Landing ----
document.getElementById('enterBtn').addEventListener('click', () => {
  sessionIdioms = shuffle(IDIOMS).slice(0, 7);
  buildMenu();
  show('menuScreen');
});

// ---- Today's Menu ----
function buildMenu() {
  const list = document.getElementById('menuList');
  list.innerHTML = '';
  sessionIdioms.forEach((idiom, i) => {
    const li = document.createElement('div');
    li.className = 'menu-item';
    li.innerHTML = `<span class="menu-num">${i + 1}</span><span class="menu-name">${idiom.name}</span>`;
    list.appendChild(li);
  });
}

document.getElementById('startLearn').addEventListener('click', () => {
  cardIdx = 0;
  cardFlipped = false;
  renderCard();
  show('learnScreen');
});

// ---- Flashcards ----
function renderCard() {
  const idiom = sessionIdioms[cardIdx];
  const counter = document.getElementById('cardCounter');
  counter.textContent = `${cardIdx + 1} / ${sessionIdioms.length}`;

  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');
  cardFlipped = false;

  document.getElementById('cardFrontName').textContent = idiom.name;
  document.getElementById('cardBackMeaning').textContent = idiom.meaning;
  document.getElementById('cardBackExample').textContent = `"${idiom.example}"`;

  document.getElementById('prevCard').disabled = cardIdx === 0;
  const isLast = cardIdx === sessionIdioms.length - 1;
  document.getElementById('nextCard').textContent = isLast ? 'Start Quiz →' : 'Next →';
}

document.getElementById('flashcard').addEventListener('click', () => {
  cardFlipped = !cardFlipped;
  document.getElementById('flashcard').classList.toggle('flipped', cardFlipped);
});

document.getElementById('prevCard').addEventListener('click', () => {
  if (cardIdx > 0) { cardIdx--; renderCard(); }
});

document.getElementById('nextCard').addEventListener('click', () => {
  if (cardIdx < sessionIdioms.length - 1) {
    cardIdx++;
    renderCard();
  } else {
    startMCQ();
  }
});

// ---- MCQs ----
function startMCQ() {
  mcqList = [];
  sessionIdioms.forEach(idiom => {
    const qs = QUESTIONS[idiom.id].filter(q => q.type === 'mcq');
    // pick 2 random MCQs per idiom
    const picked = shuffle(qs).slice(0, 2);
    picked.forEach(q => mcqList.push({ ...q, idiomName: idiom.name }));
  });
  mcqList = shuffle(mcqList);
  mcqIdx = 0;
  mcqScore = 0;
  renderMCQ();
  show('mcqScreen');
}

function renderMCQ() {
  document.getElementById('mcqProgress').textContent = `Question ${mcqIdx + 1} of ${mcqList.length}`;
  document.getElementById('mcqScoreDisplay').textContent = `Score: ${mcqScore}`;

  if (mcqIdx >= mcqList.length) {
    document.getElementById('mcqBody').innerHTML = `
      <div class="done-box">
        <div class="done-title">MCQ Round Complete!</div>
        <p>You scored ${mcqScore} out of ${mcqList.length}.</p>
        <button class="btn" id="startFITB">Continue to Fill in the Blanks →</button>
      </div>`;
    document.getElementById('startFITB').addEventListener('click', startFITB);
    return;
  }

  const q = mcqList[mcqIdx];
  const body = document.getElementById('mcqBody');
  // shuffle option indices
  const indices = shuffle([0, 1, 2, 3]);
  const correctNewIdx = indices.indexOf(q.ans);

  body.innerHTML = `
    <div class="q-box">${q.q}</div>
    <div class="choices">
      ${indices.map((origI, newI) => `<button class="choice-btn" data-idx="${newI}" data-correct="${origI === q.ans}">${q.opts[origI]}</button>`).join('')}
    </div>
    <div class="feedback-row"></div>`;

  body.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      body.querySelectorAll('.choice-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
      });
      if (btn.dataset.correct === 'true') {
        mcqScore++;
      } else {
        btn.classList.add('wrong');
      }
      document.getElementById('mcqScoreDisplay').textContent = `Score: ${mcqScore}`;
      const row = body.querySelector('.feedback-row');
      const next = document.createElement('button');
      next.className = 'btn';
      next.textContent = mcqIdx === mcqList.length - 1 ? 'See Results' : 'Next';
      next.addEventListener('click', () => { mcqIdx++; renderMCQ(); });
      row.appendChild(next);
    });
  });
}

// ---- Fill in the Blanks ----
function startFITB() {
  fitbList = [];
  sessionIdioms.forEach(idiom => {
    const qs = QUESTIONS[idiom.id].filter(q => q.type === 'fitb');
    const picked = shuffle(qs).slice(0, 2);
    picked.forEach(q => fitbList.push({ ...q, idiomName: idiom.name }));
  });
  fitbList = shuffle(fitbList);
  fitbIdx = 0;
  fitbScore = 0;
  renderFITB();
  show('fitbScreen');
}

function renderFITB() {
  document.getElementById('fitbProgress').textContent = `Question ${fitbIdx + 1} of ${fitbList.length}`;
  document.getElementById('fitbScoreDisplay').textContent = `Score: ${fitbScore}`;

  if (fitbIdx >= fitbList.length) {
    showFinalScore();
    return;
  }

  const q = fitbList[fitbIdx];
  const body = document.getElementById('fitbBody');
  const indices = shuffle([0, 1, 2, 3]);

  // Replace ___ with a styled blank
  const sentence = q.q.replace('___', '<span class="blank-slot">______</span>');

  body.innerHTML = `
    <div class="story-box">${sentence}</div>
    <div class="choices two-col">
      ${indices.map((origI, newI) => `<button class="choice-btn" data-idx="${newI}" data-correct="${origI === q.ans}">${q.opts[origI]}</button>`).join('')}
    </div>
    <div class="feedback-row"></div>`;

  body.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      body.querySelectorAll('.choice-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
      });
      if (btn.dataset.correct === 'true') {
        fitbScore++;
        const blank = body.querySelector('.blank-slot');
        if (blank) blank.textContent = q.opts[q.ans];
      } else {
        btn.classList.add('wrong');
        const blank = body.querySelector('.blank-slot');
        if (blank) { blank.textContent = q.opts[q.ans]; blank.classList.add('revealed'); }
      }
      document.getElementById('fitbScoreDisplay').textContent = `Score: ${fitbScore}`;
      const row = body.querySelector('.feedback-row');
      const next = document.createElement('button');
      next.className = 'btn';
      next.textContent = fitbIdx === fitbList.length - 1 ? 'See Final Score' : 'Next';
      next.addEventListener('click', () => { fitbIdx++; renderFITB(); });
      row.appendChild(next);
    });
  });
}

// ---- Final Score ----
function showFinalScore() {
  const total = mcqList.length + fitbList.length;
  const score = mcqScore + fitbScore;
  const pct = Math.round((score / total) * 100);

  let emoji = '☕';
  let message = 'Keep practising!';
  if (pct >= 90) { emoji = '🏆'; message = 'Master Chef! You really know your idioms!'; }
  else if (pct >= 70) { emoji = '⭐'; message = 'Great job! You are getting the hang of it!'; }
  else if (pct >= 50) { emoji = '👍'; message = 'Not bad! A few more rounds and you will ace it!'; }

  document.getElementById('finalBody').innerHTML = `
    <div class="final-emoji">${emoji}</div>
    <div class="final-big">${score} / ${total}</div>
    <div class="final-pct">${pct}%</div>
    <p class="final-msg">${message}</p>
    <div class="score-breakdown">
      <div class="sb-row"><span>MCQs</span><span>${mcqScore} / ${mcqList.length}</span></div>
      <div class="sb-row"><span>Fill in the Blanks</span><span>${fitbScore} / ${fitbList.length}</span></div>
    </div>
    <button class="btn" id="playAgain">Play Again</button>`;

  document.getElementById('playAgain').addEventListener('click', () => show('landingScreen'));
  show('finalScreen');
}
