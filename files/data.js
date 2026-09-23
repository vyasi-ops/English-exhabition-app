const IDIOMS = [
  { id:1, name:"Piece of Cake", meaning:"Something very easy to do", example:"The spelling test was a piece of cake." },
  { id:2, name:"Break the Ice", meaning:"Start conversation in an awkward situation", example:"She told a joke to break the ice at the party." },
  { id:3, name:"Spill the Beans", meaning:"Reveal a secret, often by accident", example:"Don't spill the beans about the surprise." },
  { id:4, name:"Under the Weather", meaning:"Feeling sick or unwell", example:"I stayed home because I was under the weather." },
  { id:5, name:"Cost an Arm and a Leg", meaning:"Very expensive", example:"That new phone cost an arm and a leg." },
  { id:6, name:"Once in a Blue Moon", meaning:"Something that happens very rarely", example:"He visits his cousins once in a blue moon." },
  { id:7, name:"On Cloud Nine", meaning:"Extremely happy", example:"She was on cloud nine after winning the medal." },
  { id:8, name:"Hit the Books", meaning:"To study hard", example:"I need to hit the books before the test." },
  { id:9, name:"Bite the Bullet", meaning:"Face something difficult with courage", example:"He bit the bullet and apologised first." },
  { id:10, name:"Let the Cat Out of the Bag", meaning:"Accidentally reveal a secret", example:"He let the cat out of the bag about the trip." },
  { id:11, name:"A Penny for Your Thoughts", meaning:"Asking what someone is thinking", example:"You look worried — a penny for your thoughts?" },
  { id:12, name:"Burn the Midnight Oil", meaning:"Stay up very late working or studying", example:"She burned the midnight oil finishing her essay." },
  { id:13, name:"Cry Over Spilt Milk", meaning:"Be upset about something that cannot be undone", example:"The vase broke, but no use crying over spilt milk." },
  { id:14, name:"The Ball Is in Your Court", meaning:"It is your turn to decide or act", example:"I have said yes — the ball is in your court." },
  { id:15, name:"Bark Up the Wrong Tree", meaning:"Look in the wrong place or blame the wrong person", example:"If you think I broke it, you are barking up the wrong tree." },
  { id:16, name:"Beat Around the Bush", meaning:"Avoid saying what you mean directly", example:"Stop beating around the bush and tell me." },
  { id:17, name:"Bite Off More Than You Can Chew", meaning:"Take on more than you can handle", example:"She joined five clubs and bit off more than she could chew." },
  { id:18, name:"Burn Bridges", meaning:"Ruin a relationship so it cannot be repaired", example:"Do not burn bridges with your teammates." },
  { id:19, name:"Call It a Day", meaning:"Stop working on something for now", example:"We have done enough — let us call it a day." },
  { id:20, name:"Hit the Nail on the Head", meaning:"Be exactly right about something", example:"When you said he was nervous, you hit the nail on the head." },
  { id:21, name:"When Pigs Fly", meaning:"Something that will never happen", example:"He will clean his room when pigs fly." },
  { id:22, name:"Kill Two Birds with One Stone", meaning:"Solve two problems at once", example:"Cycling to school saves time and gives exercise — killing two birds with one stone." },
  { id:23, name:"A Blessing in Disguise", meaning:"Something bad that turns out to be good", example:"Missing the bus was a blessing in disguise — I found a shortcut." },
  { id:24, name:"Sit on the Fence", meaning:"Not take a side or make a decision", example:"Stop sitting on the fence and pick a team." },
  { id:25, name:"The Last Straw", meaning:"The final problem that makes you lose patience", example:"Forgetting her birthday was the last straw." },
  { id:26, name:"Actions Speak Louder Than Words", meaning:"What you do matters more than what you say", example:"You keep promising to help — actions speak louder than words." },
  { id:27, name:"Add Fuel to the Fire", meaning:"Make a bad situation worse", example:"Shouting at him only added fuel to the fire." },
  { id:28, name:"Back to Square One", meaning:"Start over from the beginning", example:"The experiment failed, so we are back to square one." },
  { id:29, name:"Get Out of Hand", meaning:"Become uncontrollable", example:"The argument got out of hand quickly." },
  { id:30, name:"Go the Extra Mile", meaning:"Do more than what is expected", example:"She always goes the extra mile for her friends." },
  { id:31, name:"In Hot Water", meaning:"In trouble", example:"He is in hot water for skipping class." },
  { id:32, name:"Jump on the Bandwagon", meaning:"Follow a trend because others are doing it", example:"Everyone jumped on the bandwagon when fidget spinners came out." },
  { id:33, name:"Keep Your Chin Up", meaning:"Stay positive during hard times", example:"I know the match was tough — keep your chin up." },
  { id:34, name:"Miss the Boat", meaning:"Miss an opportunity", example:"If you do not sign up today, you will miss the boat." },
  { id:35, name:"No Pain, No Gain", meaning:"You must work hard to get results", example:"Training is tough, but no pain, no gain." },
  { id:36, name:"Pull Someone's Leg", meaning:"Joke with someone or tease them", example:"I am just pulling your leg — I did not eat your sandwich." },
  { id:37, name:"See Eye to Eye", meaning:"Agree with someone", example:"The two captains do not see eye to eye on strategy." },
  { id:38, name:"Steal Someone's Thunder", meaning:"Take credit or attention from someone else", example:"She stole my thunder by announcing the news first." },
  { id:39, name:"The Tip of the Iceberg", meaning:"A small part of a much bigger problem", example:"The messy desk is just the tip of the iceberg." },
  { id:40, name:"Throw in the Towel", meaning:"Give up", example:"He threw in the towel after the third round." },
  { id:41, name:"Under Your Nose", meaning:"Right in front of you but unnoticed", example:"The keys were under my nose the whole time." },
  { id:42, name:"Up in the Air", meaning:"Uncertain or not decided yet", example:"Our holiday plans are still up in the air." },
  { id:43, name:"A Taste of Your Own Medicine", meaning:"Experience the same bad treatment you give others", example:"He kept interrupting, so they gave him a taste of his own medicine." },
  { id:44, name:"At the Drop of a Hat", meaning:"Without hesitation, instantly", example:"She would help anyone at the drop of a hat." },
  { id:45, name:"Better Late Than Never", meaning:"Doing something late is better than not doing it at all", example:"You finally submitted your homework — better late than never." },
  { id:46, name:"Cut Corners", meaning:"Do something in the easiest or cheapest way, skipping quality", example:"Do not cut corners on safety." },
  { id:47, name:"Don't Judge a Book by Its Cover", meaning:"Do not judge by appearance alone", example:"The quiet kid won the debate — do not judge a book by its cover." },
  { id:48, name:"Easy as Pie", meaning:"Very easy to do", example:"Setting up the tent was easy as pie." },
  { id:49, name:"Get Cold Feet", meaning:"Become too nervous to do something", example:"He got cold feet before his speech." },
  { id:50, name:"Go Down in Flames", meaning:"Fail spectacularly", example:"Their plan went down in flames." },
  { id:51, name:"Hang in There", meaning:"Keep going and do not give up", example:"The last lap is hard, but hang in there." },
  { id:52, name:"It Takes Two to Tango", meaning:"Both people are responsible, not just one", example:"The fight was not one-sided — it takes two to tango." },
  { id:53, name:"Jump the Gun", meaning:"Act too soon, before the right time", example:"She jumped the gun and announced the winner early." },
  { id:54, name:"Keep an Eye On", meaning:"Watch carefully", example:"Keep an eye on the soup — it might boil over." },
  { id:55, name:"Leave No Stone Unturned", meaning:"Search everywhere and try everything", example:"The detective left no stone unturned." },
  { id:56, name:"Make a Long Story Short", meaning:"Get to the point quickly", example:"To make a long story short, we missed the train." },
  { id:57, name:"Not My Cup of Tea", meaning:"Not something I enjoy", example:"Horror movies are not my cup of tea." },
  { id:58, name:"On the Same Page", meaning:"In agreement, understanding each other", example:"Let us make sure we are on the same page before the project starts." },
  { id:59, name:"Play It by Ear", meaning:"Decide as you go, without a fixed plan", example:"We do not have a schedule — we will play it by ear." },
  { id:60, name:"Put All Your Eggs in One Basket", meaning:"Risk everything on a single plan", example:"Do not put all your eggs in one basket — apply to more schools." },
  { id:61, name:"Rain on Someone's Parade", meaning:"Ruin someone's plans or happy mood", example:"Do not rain on her parade — she is excited about the show." },
  { id:62, name:"Read Between the Lines", meaning:"Understand the hidden meaning", example:"She said she was fine, but read between the lines — she was not." },
  { id:63, name:"Ring a Bell", meaning:"Sound familiar", example:"That name rings a bell, but I cannot place it." },
  { id:64, name:"Rock the Boat", meaning:"Cause trouble in a stable situation", example:"Nobody wanted to rock the boat before the finals." },
  { id:65, name:"Run Out of Steam", meaning:"Lose energy or enthusiasm", example:"The team ran out of steam in the second half." },
  { id:66, name:"Save for a Rainy Day", meaning:"Keep something for when you need it later", example:"She puts aside money to save for a rainy day." },
  { id:67, name:"Speak of the Devil", meaning:"The person you were just talking about appears", example:"Speak of the devil — there is Rohan now." },
  { id:68, name:"Take It with a Grain of Salt", meaning:"Do not believe it completely", example:"He exaggerates, so take his stories with a grain of salt." },
  { id:69, name:"The Best of Both Worlds", meaning:"Enjoy two good things at the same time", example:"Working from home gives you the best of both worlds." },
  { id:70, name:"Through Thick and Thin", meaning:"In good times and bad times", example:"Best friends stick together through thick and thin." },
  { id:71, name:"Time Flies", meaning:"Time passes very quickly", example:"Time flies when you are having fun." },
  { id:72, name:"Turn Over a New Leaf", meaning:"Make a fresh start and change your behaviour", example:"He turned over a new leaf and started studying daily." },
  { id:73, name:"Two Heads Are Better Than One", meaning:"Working together is better than working alone", example:"Let us do the project together — two heads are better than one." },
  { id:74, name:"Wear Your Heart on Your Sleeve", meaning:"Show your emotions openly", example:"She wears her heart on her sleeve — you always know how she feels." },
  { id:75, name:"A Picture Is Worth a Thousand Words", meaning:"An image can explain more than words can", example:"The graph showed the damage clearly — a picture is worth a thousand words." },
  { id:76, name:"Cross That Bridge When You Come to It", meaning:"Deal with a problem only when it actually happens", example:"We will cross that bridge when we come to it." },
  { id:77, name:"Every Cloud Has a Silver Lining", meaning:"Something good comes from every bad situation", example:"Losing the match taught us a lot — every cloud has a silver lining." },
  { id:78, name:"Go Back to the Drawing Board", meaning:"Start planning again from scratch", example:"The design did not work, so we went back to the drawing board." },
  { id:79, name:"The Elephant in the Room", meaning:"An obvious problem that nobody talks about", example:"Nobody mentioned the broken window — it was the elephant in the room." },
  { id:80, name:"Wrap Your Head Around", meaning:"Understand something complicated", example:"I still cannot wrap my head around quantum physics." }
];

// 5 questions per idiom: 3 MCQ + 2 Fill-in-the-Blank (presented as multiple choice for mobile)
// All content is G4 appropriate, G6 grammar
const QUESTIONS = {
  1: [
    { type:"mcq", q:"Anya finished her art project in ten minutes and said it was simple. Which idiom fits?", opts:["Piece of Cake","Hit the Books","Bite the Bullet","Burn the Midnight Oil"], ans:0 },
    { type:"mcq", q:"What does 'Piece of Cake' mean?", opts:["Something very easy","Something delicious","Something expensive","Something surprising"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Piece of Cake'?", opts:["A student finds a maths problem very simple","A baker runs out of flour","A boy cannot find his bag","A girl is nervous about a test"], ans:0 },
    { type:"fitb", q:"The quiz had only five questions — it was a ___.", opts:["piece of cake","last straw","hot water","blue moon"], ans:0 },
    { type:"fitb", q:"Learning to tie my shoes was hard at first, but now it is a ___.", opts:["piece of cake","cold feet","long story","sharp cookie"], ans:0 }
  ],
  2: [
    { type:"mcq", q:"At the new school, Raj told a funny story so everyone would start talking. Which idiom fits?", opts:["Break the Ice","Spill the Beans","Rock the Boat","Jump the Gun"], ans:0 },
    { type:"mcq", q:"What does 'Break the Ice' mean?", opts:["Start a conversation in an awkward situation","Break something frozen","Get into an argument","Tell a secret"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Break the Ice'?", opts:["A teacher plays a name game on the first day","A boy drops his glass of water","Two friends plan a trip","A girl finishes her homework early"], ans:0 },
    { type:"fitb", q:"Nobody was talking at the table, so Sam cracked a joke to ___.", opts:["break the ice","spill the beans","call it a day","burn bridges"], ans:0 },
    { type:"fitb", q:"The new student introduced herself with a smile to ___ with the class.", opts:["break the ice","bite the bullet","miss the boat","cut corners"], ans:0 }
  ],
  3: [
    { type:"mcq", q:"Priya accidentally told Meera about the surprise birthday party. Which idiom fits?", opts:["Spill the Beans","Break the Ice","Hit the Nail on the Head","Ring a Bell"], ans:0 },
    { type:"mcq", q:"What does 'Spill the Beans' mean?", opts:["Reveal a secret","Make a mess","Cook dinner","Start an argument"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Spill the Beans'?", opts:["A boy accidentally tells his sister about her gift","A girl drops her lunch tray","A student answers a hard question","A teacher gives extra homework"], ans:0 },
    { type:"fitb", q:"Please do not ___ about the surprise trip — it is a secret!", opts:["spill the beans","burn bridges","throw in the towel","save for a rainy day"], ans:0 },
    { type:"fitb", q:"I cannot believe you ___ about the party — now everyone knows!", opts:["spilled the beans","hit the books","called it a day","sat on the fence"], ans:0 }
  ],
  4: [
    { type:"mcq", q:"Dev did not come to school because he had a cold and a sore throat. Which idiom fits?", opts:["Under the Weather","On Cloud Nine","In Hot Water","Up in the Air"], ans:0 },
    { type:"mcq", q:"What does 'Under the Weather' mean?", opts:["Feeling sick or unwell","Standing in the rain","Feeling scared","Being very cold"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Under the Weather'?", opts:["A girl stays in bed with a fever","A boy plays football in the rain","A student forgets her umbrella","A teacher cancels the trip because of storms"], ans:0 },
    { type:"fitb", q:"I am feeling a bit ___ today, so I will skip practice.", opts:["under the weather","on cloud nine","over the moon","in the dark"], ans:0 },
    { type:"fitb", q:"Mum told me to rest because I was ___.", opts:["under the weather","on the fence","in hot water","up in the air"], ans:0 }
  ],
  5: [
    { type:"mcq", q:"The bicycle Ravi wanted was so expensive that he could not afford it. Which idiom fits?", opts:["Cost an Arm and a Leg","Piece of Cake","Once in a Blue Moon","Easy as Pie"], ans:0 },
    { type:"mcq", q:"What does 'Cost an Arm and a Leg' mean?", opts:["Very expensive","Very painful","Very rare","Very large"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Cost an Arm and a Leg'?", opts:["A family saves for months to buy a new car","A boy finds a coin on the street","A girl gets a free sample at the shop","A student borrows a pencil"], ans:0 },
    { type:"fitb", q:"The new gaming laptop ___ — Dad said we cannot afford it right now.", opts:["costs an arm and a leg","breaks the ice","rings a bell","hits the books"], ans:0 },
    { type:"fitb", q:"Those concert tickets ___! I had to use all my savings.", opts:["cost an arm and a leg","flew off the handle","broke the ice","called it a day"], ans:0 }
  ],
  6: [
    { type:"mcq", q:"Grandma only visits during the summer holidays, which is very rare. Which idiom fits?", opts:["Once in a Blue Moon","At the Drop of a Hat","Time Flies","Every Cloud Has a Silver Lining"], ans:0 },
    { type:"mcq", q:"What does 'Once in a Blue Moon' mean?", opts:["Very rarely","Very quickly","Very sadly","Very brightly"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Once in a Blue Moon'?", opts:["A family eats out only on special occasions","A boy eats lunch every day","A girl reads before bed each night","A student walks to school daily"], ans:0 },
    { type:"fitb", q:"We only get snow here ___ — maybe once every ten years.", opts:["once in a blue moon","at the drop of a hat","under the weather","on cloud nine"], ans:0 },
    { type:"fitb", q:"My uncle lives abroad, so we see him only ___.", opts:["once in a blue moon","back to square one","in hot water","on the same page"], ans:0 }
  ],
  7: [
    { type:"mcq", q:"Sita was extremely happy after her team won the science competition. Which idiom fits?", opts:["On Cloud Nine","Under the Weather","In Hot Water","Up in the Air"], ans:0 },
    { type:"mcq", q:"What does 'On Cloud Nine' mean?", opts:["Extremely happy","Very confused","Very tired","Extremely scared"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'On Cloud Nine'?", opts:["A boy finds out he got the lead role in the school play","A girl loses her favourite book","A student forgets his lunch","A teacher gives a surprise test"], ans:0 },
    { type:"fitb", q:"When I found out I passed the exam, I was ___!", opts:["on cloud nine","in hot water","under the weather","on the fence"], ans:0 },
    { type:"fitb", q:"She has been ___ ever since she got accepted into the art programme.", opts:["on cloud nine","back to square one","out of hand","up in the air"], ans:0 }
  ],
  8: [
    { type:"mcq", q:"With exams next week, Neha decided to study every evening. Which idiom fits?", opts:["Hit the Books","Break the Ice","Burn Bridges","Call It a Day"], ans:0 },
    { type:"mcq", q:"What does 'Hit the Books' mean?", opts:["Study hard","Throw books away","Read for fun","Skip school"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Hit the Books'?", opts:["A student spends the weekend preparing for a test","A boy organises his bookshelf","A girl returns a library book","A teacher hands out new textbooks"], ans:0 },
    { type:"fitb", q:"The final exam is tomorrow — I really need to ___.", opts:["hit the books","call it a day","rock the boat","throw in the towel"], ans:0 },
    { type:"fitb", q:"Instead of playing video games, he decided to ___ for the quiz.", opts:["hit the books","burn bridges","jump the gun","pull my leg"], ans:0 }
  ],
  9: [
    { type:"mcq", q:"Even though he was scared of the roller coaster, Arjun went on it anyway. Which idiom fits?", opts:["Bite the Bullet","Spill the Beans","Miss the Boat","Sit on the Fence"], ans:0 },
    { type:"mcq", q:"What does 'Bite the Bullet' mean?", opts:["Face something difficult with courage","Eat something hard","Get angry quickly","Run away from danger"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Bite the Bullet'?", opts:["A girl goes to the dentist even though she is nervous","A boy skips his chores","A student copies from a friend","A teacher postpones the test"], ans:0 },
    { type:"fitb", q:"I was nervous about the presentation, but I ___ and did it anyway.", opts:["bit the bullet","burned the midnight oil","jumped on the bandwagon","threw in the towel"], ans:0 },
    { type:"fitb", q:"She had to ___ and tell her parents about the broken vase.", opts:["bite the bullet","beat around the bush","cry over spilt milk","kill two birds"], ans:0 }
  ],
  10: [
    { type:"mcq", q:"Kiran accidentally told everyone about the surprise farewell for the teacher. Which idiom fits?", opts:["Let the Cat Out of the Bag","Pull Someone's Leg","Bark Up the Wrong Tree","Speak of the Devil"], ans:0 },
    { type:"mcq", q:"What does 'Let the Cat Out of the Bag' mean?", opts:["Accidentally reveal a secret","Release a pet","Start a fight","Tell a joke"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Let the Cat Out of the Bag'?", opts:["A boy mentions a surprise gift in front of the birthday girl","A girl feeds a stray cat","A student opens his school bag","A teacher reads out loud"], ans:0 },
    { type:"fitb", q:"Oops — I think I just ___ about the surprise party!", opts:["let the cat out of the bag","burned the midnight oil","hit the nail on the head","sat on the fence"], ans:0 },
    { type:"fitb", q:"She ___ when she told Mum about the holiday plans.", opts:["let the cat out of the bag","threw in the towel","went back to the drawing board","crossed that bridge"], ans:0 }
  ],
  11: [
    { type:"mcq", q:"Nisha has been staring out of the window quietly for a while. Her friend asks what she is thinking. Which idiom fits?", opts:["A Penny for Your Thoughts","Speak of the Devil","Ring a Bell","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'A Penny for Your Thoughts' mean?", opts:["Asking what someone is thinking","Offering money","Giving advice","Making a wish"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'A Penny for Your Thoughts'?", opts:["A father notices his daughter looking thoughtful and asks what is on her mind","A boy counts his pocket money","A girl buys a candy bar","A student raises her hand in class"], ans:0 },
    { type:"fitb", q:"You have been quiet all morning. ___?", opts:["A penny for your thoughts","Once in a blue moon","Better late than never","Under the weather"], ans:0 },
    { type:"fitb", q:"She looked lost in thought, so I said, '___.'", opts:["A penny for your thoughts","Time flies","No pain, no gain","The last straw"], ans:0 }
  ],
  12: [
    { type:"mcq", q:"Aarav stayed up until midnight to finish his science project. Which idiom fits?", opts:["Burn the Midnight Oil","Hit the Nail on the Head","Call It a Day","Break the Ice"], ans:0 },
    { type:"mcq", q:"What does 'Burn the Midnight Oil' mean?", opts:["Stay up very late working or studying","Set something on fire","Waste time","Cook a late dinner"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Burn the Midnight Oil'?", opts:["A girl studies past midnight for an exam","A boy sleeps early after a tiring day","A student takes a nap during lunch","A teacher leaves school on time"], ans:0 },
    { type:"fitb", q:"She had to ___ to finish the assignment before the deadline.", opts:["burn the midnight oil","spill the beans","throw in the towel","rock the boat"], ans:0 },
    { type:"fitb", q:"We ___ all weekend preparing for the school play.", opts:["burned the midnight oil","let the cat out of the bag","jumped the gun","missed the boat"], ans:0 }
  ],
  13: [
    { type:"mcq", q:"Riya broke her favourite mug, and her mum said there was no point being upset. Which idiom fits?", opts:["Cry Over Spilt Milk","Under the Weather","Throw in the Towel","Rain on Someone's Parade"], ans:0 },
    { type:"mcq", q:"What does 'Cry Over Spilt Milk' mean?", opts:["Be upset about something that cannot be undone","Make a mess in the kitchen","Feel sick after eating","Argue with a friend"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Cry Over Spilt Milk'?", opts:["A boy keeps complaining about losing a game that is already over","A girl cleans up a spill","A student asks for extra credit","A teacher hands back test papers"], ans:0 },
    { type:"fitb", q:"The match is over — there is no use ___.", opts:["crying over spilt milk","burning the midnight oil","breaking the ice","hitting the books"], ans:0 },
    { type:"fitb", q:"I know you lost your pen, but do not ___ — we can buy a new one.", opts:["cry over spilt milk","burn bridges","jump the gun","add fuel to the fire"], ans:0 }
  ],
  14: [
    { type:"mcq", q:"Amit has made his offer. Now it is Sana's turn to decide. Which idiom fits?", opts:["The Ball Is in Your Court","Speak of the Devil","The Tip of the Iceberg","A Blessing in Disguise"], ans:0 },
    { type:"mcq", q:"What does 'The Ball Is in Your Court' mean?", opts:["It is your turn to decide or act","You are playing a sport","You lost the game","You need to practise more"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'The Ball Is in Your Court'?", opts:["A girl has been given two choices and must pick one","A boy kicks a ball over the fence","A student finishes a race","A teacher writes on the board"], ans:0 },
    { type:"fitb", q:"I have given you my answer — now ___.", opts:["the ball is in your court","the tip of the iceberg","a penny for your thoughts","time flies"], ans:0 },
    { type:"fitb", q:"We have done our part of the project. ___.", opts:["The ball is in your court","Every cloud has a silver lining","No pain, no gain","Time flies"], ans:0 }
  ],
  15: [
    { type:"mcq", q:"Tara blamed Rohan for eating the cookies, but it was actually her brother. Which idiom fits?", opts:["Bark Up the Wrong Tree","Pull Someone's Leg","Beat Around the Bush","Bite the Bullet"], ans:0 },
    { type:"mcq", q:"What does 'Bark Up the Wrong Tree' mean?", opts:["Look in the wrong place or blame the wrong person","Climb a tree","Shout loudly","Make a dog bark"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Bark Up the Wrong Tree'?", opts:["A teacher accuses the wrong student of cheating","A boy climbs his favourite tree","A girl walks her dog in the park","A student plants a tree for Earth Day"], ans:0 },
    { type:"fitb", q:"If you think I took your eraser, you are ___.", opts:["barking up the wrong tree","burning the midnight oil","biting the bullet","breaking the ice"], ans:0 },
    { type:"fitb", q:"The detective realised he had been ___ — the real clue was somewhere else.", opts:["barking up the wrong tree","on cloud nine","in hot water","on the same page"], ans:0 }
  ],
  16: [
    { type:"mcq", q:"Instead of saying what was wrong, Kabir kept talking about other things. Which idiom fits?", opts:["Beat Around the Bush","Spill the Beans","Hit the Books","Call It a Day"], ans:0 },
    { type:"mcq", q:"What does 'Beat Around the Bush' mean?", opts:["Avoid saying what you mean directly","Walk through a garden","Argue loudly","Tell a secret"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Beat Around the Bush'?", opts:["A girl hints at a problem but never actually says it","A boy searches for something in a bush","A student gives a clear answer","A teacher explains a lesson step by step"], ans:0 },
    { type:"fitb", q:"Stop ___ and tell me what really happened.", opts:["beating around the bush","burning bridges","hitting the books","throwing in the towel"], ans:0 },
    { type:"fitb", q:"He kept ___ instead of admitting he forgot the homework.", opts:["beating around the bush","biting the bullet","breaking the ice","calling it a day"], ans:0 }
  ],
  17: [
    { type:"mcq", q:"Zara signed up for six activities and now she cannot keep up with any of them. Which idiom fits?", opts:["Bite Off More Than You Can Chew","Piece of Cake","Go the Extra Mile","Kill Two Birds with One Stone"], ans:0 },
    { type:"mcq", q:"What does 'Bite Off More Than You Can Chew' mean?", opts:["Take on more than you can handle","Eat too much food","Talk too much","Study very hard"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Bite Off More Than You Can Chew'?", opts:["A boy volunteers for three projects at once and cannot finish any","A girl helps her friend with homework","A student reads a long book for fun","A teacher gives a short quiz"], ans:0 },
    { type:"fitb", q:"I think I have ___ by agreeing to organise the whole event alone.", opts:["bitten off more than I can chew","burned the midnight oil","hit the nail on the head","broken the ice"], ans:0 },
    { type:"fitb", q:"She ___ when she promised to bake cakes for the entire school.", opts:["bit off more than she could chew","threw in the towel","called it a day","sat on the fence"], ans:0 }
  ],
  18: [
    { type:"mcq", q:"Vikram was rude to his group members, and now nobody wants to work with him. Which idiom fits?", opts:["Burn Bridges","Break the Ice","Hit the Books","Bite the Bullet"], ans:0 },
    { type:"mcq", q:"What does 'Burn Bridges' mean?", opts:["Ruin a relationship so it cannot be repaired","Build something new","Light a campfire","Cross a river"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Burn Bridges'?", opts:["A student insults her teammate and they refuse to help her again","A boy builds a model bridge for science class","A girl crosses a bridge on her way to school","A teacher repairs a broken desk"], ans:0 },
    { type:"fitb", q:"Do not ___ with your classmates — you might need their help later.", opts:["burn bridges","beat around the bush","cry over spilt milk","jump on the bandwagon"], ans:0 },
    { type:"fitb", q:"He ___ by yelling at his coach, and now he is off the team.", opts:["burned bridges","hit the books","broke the ice","spilled the beans"], ans:0 }
  ],
  19: [
    { type:"mcq", q:"After painting for three hours, Mira and her dad decided to stop. Which idiom fits?", opts:["Call It a Day","Hit the Books","Burn the Midnight Oil","Go the Extra Mile"], ans:0 },
    { type:"mcq", q:"What does 'Call It a Day' mean?", opts:["Stop working on something for now","Make a phone call","Start a new project","Work through the night"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Call It a Day'?", opts:["A group of students finishes practice and goes home","A boy wakes up early to study","A girl starts a new painting","A teacher assigns extra homework"], ans:0 },
    { type:"fitb", q:"We have cleaned three rooms already — let us ___.", opts:["call it a day","burn the midnight oil","bite the bullet","break the ice"], ans:0 },
    { type:"fitb", q:"It is getting dark. I think we should ___.", opts:["call it a day","hit the books","go the extra mile","add fuel to the fire"], ans:0 }
  ],
  20: [
    { type:"mcq", q:"When Leela guessed that the teacher was planning a surprise test, she was exactly right. Which idiom fits?", opts:["Hit the Nail on the Head","Break the Ice","Let the Cat Out of the Bag","Bark Up the Wrong Tree"], ans:0 },
    { type:"mcq", q:"What does 'Hit the Nail on the Head' mean?", opts:["Be exactly right about something","Build something with tools","Make a mistake","Hurt yourself"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Hit the Nail on the Head'?", opts:["A boy correctly guesses why his friend is upset","A girl hammers a nail into wood","A student drops a heavy book","A teacher erases the board"], ans:0 },
    { type:"fitb", q:"You ___ when you said the test would be about fractions.", opts:["hit the nail on the head","burned the midnight oil","sat on the fence","threw in the towel"], ans:0 },
    { type:"fitb", q:"Her explanation of the problem ___  — that was exactly the issue.", opts:["hit the nail on the head","cost an arm and a leg","went down in flames","jumped the gun"], ans:0 }
  ],
  21: [
    { type:"mcq", q:"When asked if he would ever eat broccoli, Rohan laughed and said it would never happen. Which idiom fits?", opts:["When Pigs Fly","Once in a Blue Moon","On Cloud Nine","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'When Pigs Fly' mean?", opts:["Something that will never happen","Something funny","Something surprising","Something exciting"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'When Pigs Fly'?", opts:["A lazy student says he will start waking up at 5 am","A girl finishes her homework on time","A boy eats his vegetables","A teacher gives a day off"], ans:0 },
    { type:"fitb", q:"He will tidy his room ___ — it is never going to happen.", opts:["when pigs fly","once in a blue moon","at the drop of a hat","in hot water"], ans:0 },
    { type:"fitb", q:"She will stop talking in class ___!", opts:["when pigs fly","on cloud nine","under the weather","on the same page"], ans:0 }
  ],
  22: [
    { type:"mcq", q:"By cycling to school, Anil gets exercise and saves bus fare at the same time. Which idiom fits?", opts:["Kill Two Birds with One Stone","Go the Extra Mile","No Pain, No Gain","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Kill Two Birds with One Stone' mean?", opts:["Solve two problems at once","Hunt birds","Break two things","Win two prizes"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Kill Two Birds with One Stone'?", opts:["A girl studies vocabulary while waiting for the bus","A boy finishes one task and starts another","A student asks the teacher two questions","A teacher gives two separate assignments"], ans:0 },
    { type:"fitb", q:"If we shop for groceries on the way to Grandma's house, we can ___.", opts:["kill two birds with one stone","let the cat out of the bag","burn the midnight oil","add fuel to the fire"], ans:0 },
    { type:"fitb", q:"Studying with a friend helps us revise and have fun — we are ___.", opts:["killing two birds with one stone","beating around the bush","barking up the wrong tree","burning bridges"], ans:0 }
  ],
  23: [
    { type:"mcq", q:"Missing the school bus meant Tara walked and discovered a beautiful shortcut through the park. Which idiom fits?", opts:["A Blessing in Disguise","The Last Straw","Under the Weather","Back to Square One"], ans:0 },
    { type:"mcq", q:"What does 'A Blessing in Disguise' mean?", opts:["Something bad that turns out to be good","A hidden gift","A costume party","A lucky charm"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'A Blessing in Disguise'?", opts:["A cancelled trip leads to a fun day at home with the family","A girl forgets her umbrella and gets wet","A boy loses his homework","A student misses lunch"], ans:0 },
    { type:"fitb", q:"Getting sick before the trip seemed bad, but it was ___ — I got to rest.", opts:["a blessing in disguise","the last straw","a penny for your thoughts","the tip of the iceberg"], ans:0 },
    { type:"fitb", q:"Losing my old phone was ___ because the new one works much better.", opts:["a blessing in disguise","a taste of my own medicine","the elephant in the room","once in a blue moon"], ans:0 }
  ],
  24: [
    { type:"mcq", q:"Ankit cannot decide whether to join the football team or the cricket team. Which idiom fits?", opts:["Sit on the Fence","Throw in the Towel","Jump the Gun","Rock the Boat"], ans:0 },
    { type:"mcq", q:"What does 'Sit on the Fence' mean?", opts:["Not take a side or make a decision","Rest outside","Watch a game","Climb over something"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Sit on the Fence'?", opts:["A girl refuses to pick between two options","A boy sits on a park bench","A student finishes her project early","A teacher assigns seats"], ans:0 },
    { type:"fitb", q:"Stop ___ and just pick a colour for the poster.", opts:["sitting on the fence","burning the midnight oil","hitting the books","throwing in the towel"], ans:0 },
    { type:"fitb", q:"He has been ___ about which school to choose for weeks.", opts:["sitting on the fence","on cloud nine","in hot water","under the weather"], ans:0 }
  ],
  25: [
    { type:"mcq", q:"After three delays and a mix-up, forgetting the tickets was the final thing that made Dad lose his patience. Which idiom fits?", opts:["The Last Straw","The Tip of the Iceberg","A Blessing in Disguise","The Elephant in the Room"], ans:0 },
    { type:"mcq", q:"What does 'The Last Straw' mean?", opts:["The final problem that makes you lose patience","The end of a story","A drinking straw","The last piece of hay"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'The Last Straw'?", opts:["A teacher finally gives detention after a student is late for the fifth time","A boy finishes the last page of a book","A girl uses the last straw in the kitchen","A student packs up at the end of the day"], ans:0 },
    { type:"fitb", q:"He kept forgetting his homework, and today was ___.", opts:["the last straw","the tip of the iceberg","a piece of cake","a blessing in disguise"], ans:0 },
    { type:"fitb", q:"Being rude to the waiter was ___ — Mum made us leave the restaurant.", opts:["the last straw","the best of both worlds","once in a blue moon","a penny for your thoughts"], ans:0 }
  ],
  26: [
    { type:"mcq", q:"Meera keeps saying she will practise piano but never actually does it. Which idiom fits?", opts:["Actions Speak Louder Than Words","A Penny for Your Thoughts","Better Late Than Never","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'Actions Speak Louder Than Words' mean?", opts:["What you do matters more than what you say","Speaking loudly is important","Words are useless","Actions are noisy"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Actions Speak Louder Than Words'?", opts:["A boy promises to help but never shows up","A girl writes a long essay","A student reads out loud in class","A teacher talks about a field trip"], ans:0 },
    { type:"fitb", q:"You keep saying you will help clean up — remember, ___.", opts:["actions speak louder than words","time flies","the ball is in your court","every cloud has a silver lining"], ans:0 },
    { type:"fitb", q:"Instead of just promising, show me — ___.", opts:["actions speak louder than words","a picture is worth a thousand words","two heads are better than one","no pain, no gain"], ans:0 }
  ],
  27: [
    { type:"mcq", q:"When Ravi and Shreya were arguing, their brother teased them and made it worse. Which idiom fits?", opts:["Add Fuel to the Fire","Break the Ice","Call It a Day","Go the Extra Mile"], ans:0 },
    { type:"mcq", q:"What does 'Add Fuel to the Fire' mean?", opts:["Make a bad situation worse","Start a campfire","Cook something","Help someone"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Add Fuel to the Fire'?", opts:["A student makes fun of someone who is already upset","A girl helps put out a small fire","A boy lights a candle for his birthday","A teacher calms down the class"], ans:0 },
    { type:"fitb", q:"Shouting at your brother will only ___.", opts:["add fuel to the fire","break the ice","call it a day","hit the books"], ans:0 },
    { type:"fitb", q:"Bringing up old mistakes just ___ during the argument.", opts:["added fuel to the fire","burned the midnight oil","killed two birds with one stone","went the extra mile"], ans:0 }
  ],
  28: [
    { type:"mcq", q:"The science experiment failed completely, so the team had to start over. Which idiom fits?", opts:["Back to Square One","On Cloud Nine","A Blessing in Disguise","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Back to Square One' mean?", opts:["Start over from the beginning","Move forward quickly","Finish the race","Win a board game"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Back to Square One'?", opts:["A student's model falls apart and she has to rebuild it","A boy moves to the next level in a game","A girl finishes her painting","A teacher collects the test papers"], ans:0 },
    { type:"fitb", q:"The code had too many errors, so we are ___ .", opts:["back to square one","on cloud nine","over the moon","in the clear"], ans:0 },
    { type:"fitb", q:"After the plan failed, the team went ___.", opts:["back to square one","the extra mile","down in flames","on the bandwagon"], ans:0 }
  ],
  29: [
    { type:"mcq", q:"The food fight in the cafeteria started small but quickly became chaotic. Which idiom fits?", opts:["Get Out of Hand","Break the Ice","Piece of Cake","Hit the Nail on the Head"], ans:0 },
    { type:"mcq", q:"What does 'Get Out of Hand' mean?", opts:["Become uncontrollable","Drop something","Leave a place","Finish quickly"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Get Out of Hand'?", opts:["A friendly game turns into a loud argument","A girl carefully puts away her books","A boy follows the rules during PE","A student finishes her test calmly"], ans:0 },
    { type:"fitb", q:"The prank war between the two classes ___ very quickly.", opts:["got out of hand","broke the ice","hit the books","went the extra mile"], ans:0 },
    { type:"fitb", q:"If we do not set rules, things could ___.", opts:["get out of hand","cost an arm and a leg","ring a bell","fly off the handle"], ans:0 }
  ],
  30: [
    { type:"mcq", q:"Kavya not only finished her part of the project but also helped two classmates with theirs. Which idiom fits?", opts:["Go the Extra Mile","Hit the Books","Call It a Day","Sit on the Fence"], ans:0 },
    { type:"mcq", q:"What does 'Go the Extra Mile' mean?", opts:["Do more than what is expected","Run a long distance","Travel far away","Take a longer route"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Go the Extra Mile'?", opts:["A student stays after class to help the teacher clean up without being asked","A boy takes the bus instead of walking","A girl skips her homework","A teacher gives the class a day off"], ans:0 },
    { type:"fitb", q:"She always ___ to make sure her friends are happy.", opts:["goes the extra mile","throws in the towel","sits on the fence","cuts corners"], ans:0 },
    { type:"fitb", q:"The waiter ___ and brought us extra napkins without us asking.", opts:["went the extra mile","jumped the gun","burned bridges","rocked the boat"], ans:0 }
  ],
  31: [
    { type:"mcq", q:"Nikhil forgot to do his chores, and now his mum is upset with him. Which idiom fits?", opts:["In Hot Water","On Cloud Nine","Under the Weather","Up in the Air"], ans:0 },
    { type:"mcq", q:"What does 'In Hot Water' mean?", opts:["In trouble","Taking a bath","Feeling warm","Cooking something"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'In Hot Water'?", opts:["A boy gets caught using his phone during class","A girl boils water for tea","A student takes a warm shower","A teacher turns on the heater"], ans:0 },
    { type:"fitb", q:"You will be ___ if you do not return the library book on time.", opts:["in hot water","on cloud nine","in the clear","over the moon"], ans:0 },
    { type:"fitb", q:"He is ___ for breaking the school window.", opts:["in hot water","under the weather","on the fence","up in the air"], ans:0 }
  ],
  32: [
    { type:"mcq", q:"When everyone started wearing neon trainers, Anil bought a pair too just to fit in. Which idiom fits?", opts:["Jump on the Bandwagon","Go the Extra Mile","Break the Ice","Kill Two Birds with One Stone"], ans:0 },
    { type:"mcq", q:"What does 'Jump on the Bandwagon' mean?", opts:["Follow a trend because others are doing it","Join a music band","Get on a bus","Start a new hobby"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Jump on the Bandwagon'?", opts:["Half the class starts collecting cards because the popular kids do it","A girl invents her own game","A boy reads a book nobody else has heard of","A student starts a unique art style"], ans:0 },
    { type:"fitb", q:"Everyone ___ when the new dance went viral on social media.", opts:["jumped on the bandwagon","burned the midnight oil","sat on the fence","hit the books"], ans:0 },
    { type:"fitb", q:"I do not just ___ — I actually liked that band before it was popular.", opts:["jump on the bandwagon","throw in the towel","beat around the bush","add fuel to the fire"], ans:0 }
  ],
  33: [
    { type:"mcq", q:"After losing the match, the coach told his team to stay positive. Which idiom fits?", opts:["Keep Your Chin Up","Throw in the Towel","Burn Bridges","Go Down in Flames"], ans:0 },
    { type:"mcq", q:"What does 'Keep Your Chin Up' mean?", opts:["Stay positive during hard times","Look at the ceiling","Stand up straight","Eat with good posture"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Keep Your Chin Up'?", opts:["A girl encourages her friend after a bad test result","A boy lifts weights at the gym","A student adjusts her glasses","A teacher fixes the projector"], ans:0 },
    { type:"fitb", q:"I know you did not get selected, but ___.", opts:["keep your chin up","throw in the towel","burn bridges","jump the gun"], ans:0 },
    { type:"fitb", q:"Things are tough right now, but ___ — it will get better.", opts:["keep your chin up","add fuel to the fire","cry over spilt milk","sit on the fence"], ans:0 }
  ],
  34: [
    { type:"mcq", q:"The registration closed yesterday, and now Tina cannot join the workshop. Which idiom fits?", opts:["Miss the Boat","Jump the Gun","Call It a Day","Hit the Books"], ans:0 },
    { type:"mcq", q:"What does 'Miss the Boat' mean?", opts:["Miss an opportunity","Forget to take a ferry","Arrive late to school","Lose a race"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Miss the Boat'?", opts:["A student waits too long to sign up and the spots are full","A boy misses his school bus","A girl drops her bag on a boat","A teacher cancels a lesson"], ans:0 },
    { type:"fitb", q:"If you do not apply before Friday, you will ___.", opts:["miss the boat","burn the midnight oil","break the ice","rock the boat"], ans:0 },
    { type:"fitb", q:"I ___ on the early bird discount because I waited too long.", opts:["missed the boat","threw in the towel","burned bridges","called it a day"], ans:0 }
  ],
  35: [
    { type:"mcq", q:"Training for the marathon is hard, but Priya knows the effort will be worth it. Which idiom fits?", opts:["No Pain, No Gain","Piece of Cake","Easy as Pie","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'No Pain, No Gain' mean?", opts:["You must work hard to get results","Pain is good","Never try hard things","Give up when it hurts"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'No Pain, No Gain'?", opts:["A student practises maths every day and finally gets an A","A boy takes the easy way out","A girl skips her training session","A teacher cancels the test"], ans:0 },
    { type:"fitb", q:"I know running laps is tiring, but remember: ___.", opts:["no pain, no gain","once in a blue moon","easy as pie","time flies"], ans:0 },
    { type:"fitb", q:"She pushed through the difficult exercises because she believes ___.", opts:["no pain, no gain","a penny for your thoughts","better late than never","the best of both worlds"], ans:0 }
  ],
  36: [
    { type:"mcq", q:"Sahil told his sister that the dog ate her sandwich, but he was only joking. Which idiom fits?", opts:["Pull Someone's Leg","Spill the Beans","Let the Cat Out of the Bag","Bark Up the Wrong Tree"], ans:0 },
    { type:"mcq", q:"What does 'Pull Someone's Leg' mean?", opts:["Joke with someone or tease them","Trip someone","Help someone walk","Drag someone along"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Pull Someone's Leg'?", opts:["A girl tells her friend there is a test tomorrow as a joke","A boy trips over a rock","A student helps carry boxes","A teacher ties a knot"], ans:0 },
    { type:"fitb", q:"Relax — I am just ___! There is no spider on your head.", opts:["pulling your leg","spilling the beans","burning bridges","hitting the books"], ans:0 },
    { type:"fitb", q:"He loves ___ — you can never tell when he is being serious.", opts:["pulling people's legs","biting the bullet","breaking the ice","going the extra mile"], ans:0 }
  ],
  37: [
    { type:"mcq", q:"The two team captains could not agree on the batting order. Which idiom fits?", opts:["See Eye to Eye","Kill Two Birds with One Stone","Hit the Nail on the Head","Read Between the Lines"], ans:0 },
    { type:"mcq", q:"What does 'See Eye to Eye' mean?", opts:["Agree with someone","Stare at someone","Have good eyesight","Stand close together"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'See Eye to Eye'?", opts:["Two friends disagree on which film to watch","Two students look through a microscope","A boy and his dog make eye contact","A girl reads a sign across the road"], ans:0 },
    { type:"fitb", q:"My brother and I do not ___ on what game to play.", opts:["see eye to eye","burn the midnight oil","hit the books","call it a day"], ans:0 },
    { type:"fitb", q:"The partners finally ___ after a long discussion.", opts:["saw eye to eye","burned bridges","jumped the gun","threw in the towel"], ans:0 }
  ],
  38: [
    { type:"mcq", q:"Asha had exciting news to share, but Ravi announced his news first and got all the attention. Which idiom fits?", opts:["Steal Someone's Thunder","Rain on Someone's Parade","Break the Ice","Ring a Bell"], ans:0 },
    { type:"mcq", q:"What does 'Steal Someone's Thunder' mean?", opts:["Take credit or attention from someone else","Cause a storm","Make loud noises","Copy homework"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Steal Someone's Thunder'?", opts:["A boy shares the same idea just before his classmate was about to present it","A girl claps during a thunderstorm","A student plugs in a speaker","A teacher turns off the lights"], ans:0 },
    { type:"fitb", q:"I was about to announce my prize, but she ___ by sharing hers first.", opts:["stole my thunder","broke the ice","hit the books","burned the midnight oil"], ans:0 },
    { type:"fitb", q:"Do not ___ — let her share her good news first.", opts:["steal her thunder","rock the boat","throw in the towel","sit on the fence"], ans:0 }
  ],
  39: [
    { type:"mcq", q:"The broken chairs in class are a small part of a much bigger maintenance problem at school. Which idiom fits?", opts:["The Tip of the Iceberg","The Last Straw","The Elephant in the Room","A Blessing in Disguise"], ans:0 },
    { type:"mcq", q:"What does 'The Tip of the Iceberg' mean?", opts:["A small part of a much bigger problem","A frozen lake","The top of a mountain","A cold day"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'The Tip of the Iceberg'?", opts:["A few missing books suggest the library has a bigger organisation issue","A boy touches an ice cube","A girl draws a picture of the Arctic","A student visits a glacier"], ans:0 },
    { type:"fitb", q:"The late deliveries are just ___ — the whole supply chain has issues.", opts:["the tip of the iceberg","the last straw","a piece of cake","a penny for your thoughts"], ans:0 },
    { type:"fitb", q:"These two complaints are only ___ — there are many more.", opts:["the tip of the iceberg","the ball in your court","the elephant in the room","the best of both worlds"], ans:0 }
  ],
  40: [
    { type:"mcq", q:"After failing the audition three times, Jay decided to stop trying. Which idiom fits?", opts:["Throw in the Towel","Bite the Bullet","Go the Extra Mile","Keep Your Chin Up"], ans:0 },
    { type:"mcq", q:"What does 'Throw in the Towel' mean?", opts:["Give up","Clean up","Start again","Celebrate"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Throw in the Towel'?", opts:["A boy quits the chess club after losing every game","A girl finishes a difficult puzzle","A student scores the winning goal","A teacher starts a new lesson"], ans:0 },
    { type:"fitb", q:"The puzzle was so hard that I almost ___.", opts:["threw in the towel","hit the nail on the head","broke the ice","jumped on the bandwagon"], ans:0 },
    { type:"fitb", q:"Do not ___ now — you are so close to finishing!", opts:["throw in the towel","burn bridges","beat around the bush","spill the beans"], ans:0 }
  ],
  41: [
    { type:"mcq", q:"Meera searched the whole house for her glasses, and they were on her head the entire time. Which idiom fits?", opts:["Under Your Nose","Up in the Air","On Cloud Nine","Out of Hand"], ans:0 },
    { type:"mcq", q:"What does 'Under Your Nose' mean?", opts:["Right in front of you but unnoticed","Very smelly","Hidden underground","Far away"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Under Your Nose'?", opts:["A boy looks everywhere for the remote, which is on the sofa next to him","A girl smells a flower","A student digs in the garden","A teacher hides a surprise"], ans:0 },
    { type:"fitb", q:"The answer was right ___ the whole time — I just did not see it.", opts:["under my nose","up in the air","on cloud nine","in hot water"], ans:0 },
    { type:"fitb", q:"My phone was ___ — sitting on the desk right in front of me!", opts:["under my nose","over the moon","on the fence","in the dark"], ans:0 }
  ],
  42: [
    { type:"mcq", q:"Nobody knows yet whether the school trip will happen this year. Which idiom fits?", opts:["Up in the Air","Under the Weather","On Cloud Nine","In Hot Water"], ans:0 },
    { type:"mcq", q:"What does 'Up in the Air' mean?", opts:["Uncertain or not decided yet","Flying in a plane","Very high","Feeling dizzy"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Up in the Air'?", opts:["The family has not decided where to go for vacation","A kite flies above the park","A boy throws a ball high","A girl climbs to the top of a slide"], ans:0 },
    { type:"fitb", q:"The venue for the school fair is still ___.", opts:["up in the air","under the weather","on cloud nine","once in a blue moon"], ans:0 },
    { type:"fitb", q:"Our weekend plans are completely ___ — nothing is confirmed.", opts:["up in the air","in hot water","back to square one","down in flames"], ans:0 }
  ],
  43: [
    { type:"mcq", q:"Raj always hides other people's pencils as a prank. Today someone hid his pencil case, and he did not like it. Which idiom fits?", opts:["A Taste of Your Own Medicine","Pull Someone's Leg","The Last Straw","A Blessing in Disguise"], ans:0 },
    { type:"mcq", q:"What does 'A Taste of Your Own Medicine' mean?", opts:["Experience the same bad treatment you give others","Try a new flavour","Visit the doctor","Take a vitamin"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'A Taste of Your Own Medicine'?", opts:["A boy who always teases others gets teased himself","A girl takes cough syrup","A student shares her lunch","A teacher gives out candy"], ans:0 },
    { type:"fitb", q:"He always copies homework, so when someone copied his, it was ___.", opts:["a taste of his own medicine","a piece of cake","the tip of the iceberg","the last straw"], ans:0 },
    { type:"fitb", q:"She finally got ___ when her own prank was played back on her.", opts:["a taste of her own medicine","a blessing in disguise","a penny for her thoughts","the ball in her court"], ans:0 }
  ],
  44: [
    { type:"mcq", q:"Grandma would drop everything and rush over to help if you called her. Which idiom fits?", opts:["At the Drop of a Hat","Once in a Blue Moon","On Cloud Nine","Under the Weather"], ans:0 },
    { type:"mcq", q:"What does 'At the Drop of a Hat' mean?", opts:["Without hesitation, instantly","While wearing a hat","Very slowly","After thinking for a long time"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'At the Drop of a Hat'?", opts:["A friend immediately agrees to help you move furniture","A girl takes hours to pick an outfit","A boy sleeps through his alarm","A student waits a week to reply to a message"], ans:0 },
    { type:"fitb", q:"She would lend you her notes ___.", opts:["at the drop of a hat","once in a blue moon","when pigs fly","back to square one"], ans:0 },
    { type:"fitb", q:"He is always ready to play cricket — he would join ___.", opts:["at the drop of a hat","under the weather","up in the air","in hot water"], ans:0 }
  ],
  45: [
    { type:"mcq", q:"The assignment was due last week, but the teacher still accepted it late. Which idiom fits?", opts:["Better Late Than Never","No Pain, No Gain","Time Flies","Once in a Blue Moon"], ans:0 },
    { type:"mcq", q:"What does 'Better Late Than Never' mean?", opts:["Doing something late is better than not doing it at all","Being early is bad","Lateness is always fine","Never be late"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Better Late Than Never'?", opts:["A girl returns a library book two weeks past the due date","A boy arrives early for practice","A student skips class entirely","A teacher starts the lesson on time"], ans:0 },
    { type:"fitb", q:"You finally cleaned your room! Well, ___.", opts:["better late than never","no pain, no gain","once in a blue moon","time flies"], ans:0 },
    { type:"fitb", q:"He apologised a week later — but ___.", opts:["better late than never","actions speak louder than words","the ball is in your court","the last straw"], ans:0 }
  ],
  46: [
    { type:"mcq", q:"The builders used cheap materials to save money, and the roof started leaking. Which idiom fits?", opts:["Cut Corners","Go the Extra Mile","Hit the Nail on the Head","Call It a Day"], ans:0 },
    { type:"mcq", q:"What does 'Cut Corners' mean?", opts:["Do something in the easiest or cheapest way, skipping quality","Use scissors carefully","Take a shortcut on a road","Trim the edges of paper"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Cut Corners'?", opts:["A student copies answers from the back of the textbook instead of solving the problems","A girl neatly folds her uniform","A boy follows the recipe exactly","A teacher marks all the papers carefully"], ans:0 },
    { type:"fitb", q:"If you ___ on the project, it will not turn out well.", opts:["cut corners","burn the midnight oil","break the ice","go the extra mile"], ans:0 },
    { type:"fitb", q:"The toy broke quickly because the company ___.", opts:["cut corners","went the extra mile","hit the books","burned bridges"], ans:0 }
  ],
  47: [
    { type:"mcq", q:"The plain-looking restaurant turned out to have the best food in town. Which idiom fits?", opts:["Don't Judge a Book by Its Cover","The Tip of the Iceberg","A Blessing in Disguise","Read Between the Lines"], ans:0 },
    { type:"mcq", q:"What does 'Don't Judge a Book by Its Cover' mean?", opts:["Do not judge by appearance alone","Always read the first page","Choose books by their cover","Appearances are always correct"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Don't Judge a Book by Its Cover'?", opts:["A shy new student turns out to be an amazing singer","A girl picks a colourful notebook","A boy reads the blurb of a novel","A teacher decorates the classroom"], ans:0 },
    { type:"fitb", q:"He looked unfriendly, but he was very kind — ___.", opts:["don't judge a book by its cover","the tip of the iceberg","a taste of your own medicine","read between the lines"], ans:0 },
    { type:"fitb", q:"The old shop looked run-down, but ___ — the cakes were amazing.", opts:["don't judge a book by its cover","actions speak louder than words","every cloud has a silver lining","no pain, no gain"], ans:0 }
  ],
  48: [
    { type:"mcq", q:"The homework took only two minutes — it was really simple. Which idiom fits?", opts:["Easy as Pie","Once in a Blue Moon","On Cloud Nine","Cost an Arm and a Leg"], ans:0 },
    { type:"mcq", q:"What does 'Easy as Pie' mean?", opts:["Very easy to do","Delicious","Difficult to bake","Sweet and soft"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Easy as Pie'?", opts:["A girl finishes a jigsaw puzzle in five minutes","A boy struggles with a maths problem","A student burns her toast","A teacher explains a tricky concept"], ans:0 },
    { type:"fitb", q:"Setting up the new game on my computer was ___.", opts:["easy as pie","hard as nails","once in a blue moon","up in the air"], ans:0 },
    { type:"fitb", q:"Riding a bicycle is ___ once you learn how.", opts:["easy as pie","the last straw","in hot water","under the weather"], ans:0 }
  ],
  49: [
    { type:"mcq", q:"Aditi was ready to perform on stage, but at the last moment she felt too nervous and wanted to back out. Which idiom fits?", opts:["Get Cold Feet","Bite the Bullet","Hit the Books","Call It a Day"], ans:0 },
    { type:"mcq", q:"What does 'Get Cold Feet' mean?", opts:["Become too nervous to do something","Feel cold in winter","Run barefoot","Freeze in place"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Get Cold Feet'?", opts:["A boy decides not to jump off the diving board at the last second","A girl puts on warm socks","A student walks on cold tiles","A teacher opens a window in winter"], ans:0 },
    { type:"fitb", q:"He was about to ask the teacher a question but ___.", opts:["got cold feet","burned the midnight oil","hit the nail on the head","broke the ice"], ans:0 },
    { type:"fitb", q:"She ___ right before the singing competition and almost did not perform.", opts:["got cold feet","threw in the towel","jumped on the bandwagon","went the extra mile"], ans:0 }
  ],
  50: [
    { type:"mcq", q:"The team's plan to win the quiz failed badly — they scored zero. Which idiom fits?", opts:["Go Down in Flames","Go the Extra Mile","Once in a Blue Moon","On Cloud Nine"], ans:0 },
    { type:"mcq", q:"What does 'Go Down in Flames' mean?", opts:["Fail spectacularly","Fly a plane","Catch fire","Win a battle"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Go Down in Flames'?", opts:["A carefully planned presentation goes completely wrong","A boy roasts marshmallows over a fire","A girl lights birthday candles","A teacher shows a science experiment with fire"], ans:0 },
    { type:"fitb", q:"Their attempt at a flash mob ___ when nobody showed up.", opts:["went down in flames","broke the ice","hit the books","killed two birds with one stone"], ans:0 },
    { type:"fitb", q:"The recipe ___ — the cake came out completely flat.", opts:["went down in flames","was a piece of cake","cost an arm and a leg","rang a bell"], ans:0 }
  ],
  51: [
    { type:"mcq", q:"The cross-country race was exhausting, but the coach told everyone to keep going. Which idiom fits?", opts:["Hang in There","Throw in the Towel","Call It a Day","Jump the Gun"], ans:0 },
    { type:"mcq", q:"What does 'Hang in There' mean?", opts:["Keep going and do not give up","Hang from a bar","Wait outside","Take a break"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Hang in There'?", opts:["A friend encourages you to finish the last question of a hard test","A boy hangs his coat on a hook","A girl swings on monkey bars","A student hangs up a poster"], ans:0 },
    { type:"fitb", q:"I know the work is difficult, but ___ — you are almost done.", opts:["hang in there","throw in the towel","call it a day","jump the gun"], ans:0 },
    { type:"fitb", q:"___ — only two more laps to go!", opts:["Hang in there","Burn bridges","Beat around the bush","Spill the beans"], ans:0 }
  ],
  52: [
    { type:"mcq", q:"Both Anya and Kabir were responsible for the argument, not just one of them. Which idiom fits?", opts:["It Takes Two to Tango","See Eye to Eye","Pull Someone's Leg","The Ball Is in Your Court"], ans:0 },
    { type:"mcq", q:"What does 'It Takes Two to Tango' mean?", opts:["Both people are responsible, not just one","You need a dance partner","Two is better than one","Dancing is difficult"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'It Takes Two to Tango'?", opts:["Two students blame each other for a group project that went wrong","A boy dances alone in his room","A girl teaches her friend a dance move","A teacher plays music during class"], ans:0 },
    { type:"fitb", q:"You are both at fault — ___.", opts:["it takes two to tango","two heads are better than one","a picture is worth a thousand words","time flies"], ans:0 },
    { type:"fitb", q:"Do not only blame her — remember, ___.", opts:["it takes two to tango","the ball is in your court","actions speak louder than words","every cloud has a silver lining"], ans:0 }
  ],
  53: [
    { type:"mcq", q:"The teacher had not finished explaining the rules, but Riya already started the activity. Which idiom fits?", opts:["Jump the Gun","Miss the Boat","Hit the Books","Break the Ice"], ans:0 },
    { type:"mcq", q:"What does 'Jump the Gun' mean?", opts:["Act too soon, before the right time","Fire a weapon","Win a race","Be very excited"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Jump the Gun'?", opts:["A boy starts running before the whistle blows","A girl waits patiently for her turn","A student reads the instructions carefully","A teacher counts down from three"], ans:0 },
    { type:"fitb", q:"Do not ___ — wait until the results are officially announced.", opts:["jump the gun","hit the books","throw in the towel","burn the midnight oil"], ans:0 },
    { type:"fitb", q:"She ___ by sending the invitations before the date was confirmed.", opts:["jumped the gun","missed the boat","called it a day","burned bridges"], ans:0 }
  ],
  54: [
    { type:"mcq", q:"Mum asked me to watch the baby carefully while she stepped out. Which idiom fits?", opts:["Keep an Eye On","Read Between the Lines","See Eye to Eye","Ring a Bell"], ans:0 },
    { type:"mcq", q:"What does 'Keep an Eye On' mean?", opts:["Watch carefully","Close one eye","Wear glasses","Look away"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Keep an Eye On'?", opts:["A boy watches his younger sister at the park","A girl draws a picture of an eye","A student reads with a magnifying glass","A teacher turns off the lights"], ans:0 },
    { type:"fitb", q:"Can you ___ the cake in the oven? It might burn.", opts:["keep an eye on","read between the lines","see eye to eye","ring a bell"], ans:0 },
    { type:"fitb", q:"The teacher asked her to ___ the class while he stepped out.", opts:["keep an eye on","pull the leg of","jump the gun on","throw in the towel on"], ans:0 }
  ],
  55: [
    { type:"mcq", q:"The police searched every house, shop, and alley to find the missing cat. Which idiom fits?", opts:["Leave No Stone Unturned","Under Your Nose","The Tip of the Iceberg","Bark Up the Wrong Tree"], ans:0 },
    { type:"mcq", q:"What does 'Leave No Stone Unturned' mean?", opts:["Search everywhere and try everything","Move all the rocks","Build a stone wall","Leave a mess"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Leave No Stone Unturned'?", opts:["A student checks every cupboard looking for the missing trophy","A boy skips the hard questions on a test","A girl gives up on a puzzle","A teacher only reads half the essays"], ans:0 },
    { type:"fitb", q:"We will ___ to find your lost ring.", opts:["leave no stone unturned","throw in the towel","sit on the fence","call it a day"], ans:0 },
    { type:"fitb", q:"The detective promised to ___ in the investigation.", opts:["leave no stone unturned","beat around the bush","bark up the wrong tree","burn bridges"], ans:0 }
  ],
  56: [
    { type:"mcq", q:"Instead of explaining every little detail, Priya just told the main point. Which idiom fits?", opts:["Make a Long Story Short","Beat Around the Bush","Read Between the Lines","Add Fuel to the Fire"], ans:0 },
    { type:"mcq", q:"What does 'Make a Long Story Short' mean?", opts:["Get to the point quickly","Write a short essay","Tell a bedtime story","Read a summary"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Make a Long Story Short'?", opts:["A boy skips the details and tells his mum the main news","A girl writes a ten-page report","A student reads a novel cover to cover","A teacher tells a long story"], ans:0 },
    { type:"fitb", q:"To ___, we missed the bus and had to walk.", opts:["make a long story short","beat around the bush","burn the midnight oil","hit the books"], ans:0 },
    { type:"fitb", q:"I could explain everything, but to ___, we won!", opts:["make a long story short","add fuel to the fire","let the cat out of the bag","rock the boat"], ans:0 }
  ],
  57: [
    { type:"mcq", q:"Sahil does not enjoy watching horror movies at all. Which idiom fits?", opts:["Not My Cup of Tea","Under the Weather","Easy as Pie","On Cloud Nine"], ans:0 },
    { type:"mcq", q:"What does 'Not My Cup of Tea' mean?", opts:["Not something I enjoy","I do not drink tea","I prefer coffee","I am not thirsty"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Not My Cup of Tea'?", opts:["A girl politely says she does not like board games","A boy orders tea at a café","A student finishes a cup of hot chocolate","A teacher brews some tea in the staffroom"], ans:0 },
    { type:"fitb", q:"Hiking for hours in the rain is ___.", opts:["not my cup of tea","a piece of cake","easy as pie","the best of both worlds"], ans:0 },
    { type:"fitb", q:"Classical music is lovely, but it is ___.", opts:["not my cup of tea","once in a blue moon","under the weather","on cloud nine"], ans:0 }
  ],
  58: [
    { type:"mcq", q:"Before starting the group project, the teacher made sure all students understood the plan. Which idiom fits?", opts:["On the Same Page","See Eye to Eye","Break the Ice","The Ball Is in Your Court"], ans:0 },
    { type:"mcq", q:"What does 'On the Same Page' mean?", opts:["In agreement, understanding each other","Reading the same book","Sitting next to each other","Writing in the same notebook"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'On the Same Page'?", opts:["A team discusses their strategy and agrees on the approach","Two students share a textbook","A girl reads the same novel as her friend","A teacher opens the book to page 12"], ans:0 },
    { type:"fitb", q:"Let us make sure we are ___ before we start the experiment.", opts:["on the same page","on cloud nine","in hot water","under the weather"], ans:0 },
    { type:"fitb", q:"The meeting helped get everyone ___.", opts:["on the same page","back to square one","out of hand","up in the air"], ans:0 }
  ],
  59: [
    { type:"mcq", q:"We have no fixed plan for Saturday — we will just see what we feel like doing. Which idiom fits?", opts:["Play It by Ear","Hit the Books","Call It a Day","Jump the Gun"], ans:0 },
    { type:"mcq", q:"What does 'Play It by Ear' mean?", opts:["Decide as you go, without a fixed plan","Listen to music","Play an instrument","Use headphones"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Play It by Ear'?", opts:["A family arrives at the beach and decides activities on the spot","A student follows a strict timetable","A boy plans every minute of his day","A teacher gives a detailed schedule"], ans:0 },
    { type:"fitb", q:"We do not have a schedule, so we will just ___.", opts:["play it by ear","hit the books","burn the midnight oil","jump on the bandwagon"], ans:0 },
    { type:"fitb", q:"I am not sure what time we will arrive, so let us ___.", opts:["play it by ear","call it a day","throw in the towel","cut corners"], ans:0 }
  ],
  60: [
    { type:"mcq", q:"Tina only applied to one college and did not get in. She should have applied to more. Which idiom fits?", opts:["Put All Your Eggs in One Basket","Miss the Boat","Back to Square One","Jump the Gun"], ans:0 },
    { type:"mcq", q:"What does 'Put All Your Eggs in One Basket' mean?", opts:["Risk everything on a single plan","Go grocery shopping","Carry too many things","Make an omelette"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Put All Your Eggs in One Basket'?", opts:["A boy invests all his pocket money into one thing","A girl carefully organises her desk","A student tries three different approaches","A teacher gives multiple options"], ans:0 },
    { type:"fitb", q:"Do not ___ — have a backup plan.", opts:["put all your eggs in one basket","cry over spilt milk","burn the midnight oil","hit the books"], ans:0 },
    { type:"fitb", q:"She ___ by only preparing for one type of question.", opts:["put all her eggs in one basket","burned bridges","broke the ice","threw in the towel"], ans:0 }
  ],
  61: [
    { type:"mcq", q:"Sana was excited about her birthday, but her brother complained about the cake flavour and ruined her mood. Which idiom fits?", opts:["Rain on Someone's Parade","Steal Someone's Thunder","Spill the Beans","Break the Ice"], ans:0 },
    { type:"mcq", q:"What does 'Rain on Someone's Parade' mean?", opts:["Ruin someone's plans or happy mood","Cause a rainstorm","Walk in the rain","Cancel an event"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Rain on Someone's Parade'?", opts:["A boy tells his sister her painting is bad right after she finishes it proudly","A girl dances in the rain","A student watches a parade","A teacher brings umbrellas for the class"], ans:0 },
    { type:"fitb", q:"I do not want to ___, but I think there is a problem with the plan.", opts:["rain on your parade","steal your thunder","break the ice","hit the books"], ans:0 },
    { type:"fitb", q:"She ___ by pointing out all the flaws during his celebration.", opts:["rained on his parade","pulled his leg","broke the ice","burned the midnight oil"], ans:0 }
  ],
  62: [
    { type:"mcq", q:"The email said everything was fine, but Nila noticed something seemed off between the lines. Which idiom fits?", opts:["Read Between the Lines","Ring a Bell","See Eye to Eye","Make a Long Story Short"], ans:0 },
    { type:"mcq", q:"What does 'Read Between the Lines' mean?", opts:["Understand the hidden meaning","Read every word carefully","Skip some lines while reading","Write between ruled lines"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Read Between the Lines'?", opts:["A girl notices her friend says she is fine but her face looks sad","A boy reads a book word by word","A student highlights key points","A teacher reads aloud"], ans:0 },
    { type:"fitb", q:"She said she was not upset, but if you ___, she clearly was.", opts:["read between the lines","hit the books","burned the midnight oil","broke the ice"], ans:0 },
    { type:"fitb", q:"The letter seemed cheerful, but ___ and you will see the worry.", opts:["read between the lines","make a long story short","beat around the bush","ring a bell"], ans:0 }
  ],
  63: [
    { type:"mcq", q:"The song sounded familiar, but Arjun could not remember where he had heard it. Which idiom fits?", opts:["Ring a Bell","Speak of the Devil","Hit the Nail on the Head","Under Your Nose"], ans:0 },
    { type:"mcq", q:"What does 'Ring a Bell' mean?", opts:["Sound familiar","Make a phone call","Win a prize","Hear a doorbell"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Ring a Bell'?", opts:["A teacher mentions a name and a student vaguely remembers it","A girl rings the school bell","A boy answers the door","A student presses a buzzer in a quiz"], ans:0 },
    { type:"fitb", q:"That name ___. Have I met her before?", opts:["rings a bell","breaks the ice","hits the books","burns bridges"], ans:0 },
    { type:"fitb", q:"The place does not ___ — I do not think I have been there.", opts:["ring a bell","rock the boat","cost an arm and a leg","hit the nail on the head"], ans:0 }
  ],
  64: [
    { type:"mcq", q:"Everyone was getting along well, and nobody wanted to cause any trouble before the big game. Which idiom fits?", opts:["Rock the Boat","Break the Ice","Throw in the Towel","Jump on the Bandwagon"], ans:0 },
    { type:"mcq", q:"What does 'Rock the Boat' mean?", opts:["Cause trouble in a stable situation","Go sailing","Shake something","Dance on a ship"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Rock the Boat'?", opts:["A student brings up an argument right before a class trip","A girl rows a boat on a lake","A boy jumps on a trampoline","A teacher rearranges the furniture"], ans:0 },
    { type:"fitb", q:"Things are going smoothly — please do not ___.", opts:["rock the boat","burn the midnight oil","hit the books","throw in the towel"], ans:0 },
    { type:"fitb", q:"She did not want to ___ by asking for a different seat.", opts:["rock the boat","break the ice","miss the boat","spill the beans"], ans:0 }
  ],
  65: [
    { type:"mcq", q:"The students started the day with lots of energy, but by the afternoon they were too tired to continue. Which idiom fits?", opts:["Run Out of Steam","Throw in the Towel","Call It a Day","Get Cold Feet"], ans:0 },
    { type:"mcq", q:"What does 'Run Out of Steam' mean?", opts:["Lose energy or enthusiasm","Boil water","Take a train","Breathe heavily"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Run Out of Steam'?", opts:["A boy studies hard for two hours then cannot focus any more","A girl fills a kettle with water","A student rides a steam train","A teacher opens a window to let in fresh air"], ans:0 },
    { type:"fitb", q:"We started strong but ___ halfway through the hike.", opts:["ran out of steam","broke the ice","hit the nail on the head","jumped on the bandwagon"], ans:0 },
    { type:"fitb", q:"The team ___ in the final quarter and could not keep up.", opts:["ran out of steam","burned bridges","rocked the boat","cut corners"], ans:0 }
  ],
  66: [
    { type:"mcq", q:"Grandpa always puts a little money aside every month in case of emergencies. Which idiom fits?", opts:["Save for a Rainy Day","Once in a Blue Moon","Under the Weather","Up in the Air"], ans:0 },
    { type:"mcq", q:"What does 'Save for a Rainy Day' mean?", opts:["Keep something for when you need it later","Buy an umbrella","Save water","Wait for rain"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Save for a Rainy Day'?", opts:["A girl keeps her birthday money in a piggy bank for future use","A boy buys a raincoat","A student waters the plants","A teacher checks the weather forecast"], ans:0 },
    { type:"fitb", q:"Do not spend it all now — ___ instead.", opts:["save it for a rainy day","throw in the towel","burn the midnight oil","jump the gun"], ans:0 },
    { type:"fitb", q:"She always ___ by keeping extra supplies in her drawer.", opts:["saves for a rainy day","puts all her eggs in one basket","cuts corners","rocks the boat"], ans:0 }
  ],
  67: [
    { type:"mcq", q:"We were talking about Arun, and just then he walked into the room. Which idiom fits?", opts:["Speak of the Devil","Ring a Bell","Under Your Nose","A Penny for Your Thoughts"], ans:0 },
    { type:"mcq", q:"What does 'Speak of the Devil' mean?", opts:["The person you were just talking about appears","Talk about something scary","Whisper a secret","Tell a ghost story"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Speak of the Devil'?", opts:["Two friends discuss their absent teacher, who then walks in","A girl reads a book about monsters","A boy whispers a secret to his friend","A student tells a joke"], ans:0 },
    { type:"fitb", q:"We were just talking about you — ___!", opts:["speak of the devil","a penny for your thoughts","ring a bell","once in a blue moon"], ans:0 },
    { type:"fitb", q:"Well, ___ — here comes Neha right now!", opts:["speak of the devil","read between the lines","under your nose","better late than never"], ans:0 }
  ],
  68: [
    { type:"mcq", q:"Ravi always exaggerates his cricket scores, so his friends do not fully believe him. Which idiom fits?", opts:["Take It with a Grain of Salt","Spill the Beans","Pull Someone's Leg","Ring a Bell"], ans:0 },
    { type:"mcq", q:"What does 'Take It with a Grain of Salt' mean?", opts:["Do not believe it completely","Add salt to food","Taste something salty","Cook with care"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Take It with a Grain of Salt'?", opts:["A website makes big claims but has no proof","A girl adds salt to her soup","A boy seasons his fries","A teacher measures ingredients for science"], ans:0 },
    { type:"fitb", q:"He says he ran ten kilometres, but I would ___ that.", opts:["take it with a grain of salt","burn the midnight oil","hit the books","call it a day"], ans:0 },
    { type:"fitb", q:"Online reviews should be ___ — not all of them are honest.", opts:["taken with a grain of salt","beaten around the bush","thrown in the towel","put in one basket"], ans:0 }
  ],
  69: [
    { type:"mcq", q:"Living near the mountains gives Tina access to both skiing and hiking. Which idiom fits?", opts:["The Best of Both Worlds","Once in a Blue Moon","The Tip of the Iceberg","A Blessing in Disguise"], ans:0 },
    { type:"mcq", q:"What does 'The Best of Both Worlds' mean?", opts:["Enjoy two good things at the same time","Travel to two countries","Have two favourite foods","Win two awards"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'The Best of Both Worlds'?", opts:["A boy lives close to both the beach and the city","A girl chooses between two hobbies","A student picks one sport to play","A teacher gives either a quiz or homework, not both"], ans:0 },
    { type:"fitb", q:"Working part-time while studying gives me ___.", opts:["the best of both worlds","the tip of the iceberg","the last straw","the elephant in the room"], ans:0 },
    { type:"fitb", q:"This school has sports and music programmes — it is ___.", opts:["the best of both worlds","back to square one","up in the air","once in a blue moon"], ans:0 }
  ],
  70: [
    { type:"mcq", q:"Diya and Meera have been best friends for years and have supported each other no matter what. Which idiom fits?", opts:["Through Thick and Thin","Once in a Blue Moon","On Cloud Nine","At the Drop of a Hat"], ans:0 },
    { type:"mcq", q:"What does 'Through Thick and Thin' mean?", opts:["In good times and bad times","Moving through a forest","Eating thick and thin bread","Changing weight"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Through Thick and Thin'?", opts:["Two brothers stand by each other even when things are difficult","A girl measures the thickness of paper","A boy reads a thick book","A student folds thin sheets"], ans:0 },
    { type:"fitb", q:"True friends stand by each other ___.", opts:["through thick and thin","once in a blue moon","when pigs fly","under the weather"], ans:0 },
    { type:"fitb", q:"She has supported me ___ — I am lucky to have her.", opts:["through thick and thin","at the drop of a hat","on the same page","on cloud nine"], ans:0 }
  ],
  71: [
    { type:"mcq", q:"The summer holidays went by so quickly that it felt like they had just started. Which idiom fits?", opts:["Time Flies","Once in a Blue Moon","Better Late Than Never","When Pigs Fly"], ans:0 },
    { type:"mcq", q:"What does 'Time Flies' mean?", opts:["Time passes very quickly","Clocks can fly","Time stops","Hours are long"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Time Flies'?", opts:["A girl cannot believe it is already December","A boy checks his watch every five minutes","A student is bored during a long lecture","A teacher sets a timer for a test"], ans:0 },
    { type:"fitb", q:"It is already Friday? ___!", opts:["Time flies","No pain, no gain","Better late than never","Once in a blue moon"], ans:0 },
    { type:"fitb", q:"___ when you are having fun — the party was over before we knew it.", opts:["Time flies","The ball is in your court","Actions speak louder than words","Every cloud has a silver lining"], ans:0 }
  ],
  72: [
    { type:"mcq", q:"After getting bad marks, Rohan decided to change his habits and start studying regularly. Which idiom fits?", opts:["Turn Over a New Leaf","Throw in the Towel","Call It a Day","Go Down in Flames"], ans:0 },
    { type:"mcq", q:"What does 'Turn Over a New Leaf' mean?", opts:["Make a fresh start and change your behaviour","Pick up a fallen leaf","Open a new book","Rake leaves in the garden"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Turn Over a New Leaf'?", opts:["A girl who was always late decides to wake up early every day","A boy rakes autumn leaves","A student flips to the next page","A teacher plants a tree"], ans:0 },
    { type:"fitb", q:"After the holidays, I am going to ___ and exercise every morning.", opts:["turn over a new leaf","throw in the towel","call it a day","burn the midnight oil"], ans:0 },
    { type:"fitb", q:"He promised to ___ and stop being rude to his classmates.", opts:["turn over a new leaf","jump on the bandwagon","sit on the fence","beat around the bush"], ans:0 }
  ],
  73: [
    { type:"mcq", q:"The maths problem was tricky, so Asha and Dev worked on it together and solved it faster. Which idiom fits?", opts:["Two Heads Are Better Than One","Kill Two Birds with One Stone","See Eye to Eye","Actions Speak Louder Than Words"], ans:0 },
    { type:"mcq", q:"What does 'Two Heads Are Better Than One' mean?", opts:["Working together is better than working alone","Having two heads","Thinking twice","Being smarter than others"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Two Heads Are Better Than One'?", opts:["Two friends brainstorm ideas and come up with a great solution","A boy solves a puzzle alone","A girl finishes her test first","A student reads by herself"], ans:0 },
    { type:"fitb", q:"Let us do the project together — ___.", opts:["two heads are better than one","it takes two to tango","no pain, no gain","time flies"], ans:0 },
    { type:"fitb", q:"I was stuck, but once my friend helped, we solved it — ___.", opts:["two heads are better than one","a penny for your thoughts","every cloud has a silver lining","the ball is in your court"], ans:0 }
  ],
  74: [
    { type:"mcq", q:"Isha never hides her feelings — everyone can always tell if she is happy or sad. Which idiom fits?", opts:["Wear Your Heart on Your Sleeve","Read Between the Lines","Keep Your Chin Up","See Eye to Eye"], ans:0 },
    { type:"mcq", q:"What does 'Wear Your Heart on Your Sleeve' mean?", opts:["Show your emotions openly","Wear a special shirt","Hide your feelings","Have heart surgery"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Wear Your Heart on Your Sleeve'?", opts:["A boy's face always shows exactly how he feels","A girl wears a heart-shaped necklace","A student writes about the heart in science","A teacher draws a heart on the board"], ans:0 },
    { type:"fitb", q:"She ___ — you can always tell when something is wrong.", opts:["wears her heart on her sleeve","reads between the lines","keeps her chin up","sits on the fence"], ans:0 },
    { type:"fitb", q:"He is not good at hiding emotions — he ___.", opts:["wears his heart on his sleeve","pulls people's legs","breaks the ice","beats around the bush"], ans:0 }
  ],
  75: [
    { type:"mcq", q:"The chart explained the data much better than the long report did. Which idiom fits?", opts:["A Picture Is Worth a Thousand Words","Read Between the Lines","Make a Long Story Short","Actions Speak Louder Than Words"], ans:0 },
    { type:"mcq", q:"What does 'A Picture Is Worth a Thousand Words' mean?", opts:["An image can explain more than words can","Pictures are expensive","Take lots of photos","Words are useless"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'A Picture Is Worth a Thousand Words'?", opts:["A diagram makes a complicated science topic easy to understand","A girl writes a long essay with no pictures","A boy reads a book with no illustrations","A teacher gives a spoken explanation"], ans:0 },
    { type:"fitb", q:"Just look at this photo of the sunset — ___.", opts:["a picture is worth a thousand words","actions speak louder than words","make a long story short","two heads are better than one"], ans:0 },
    { type:"fitb", q:"Instead of describing the damage, she showed a video — ___.", opts:["a picture is worth a thousand words","better late than never","no pain, no gain","time flies"], ans:0 }
  ],
  76: [
    { type:"mcq", q:"Mum told me not to worry about what happens next year — we can deal with it when the time comes. Which idiom fits?", opts:["Cross That Bridge When You Come to It","Back to Square One","The Tip of the Iceberg","The Elephant in the Room"], ans:0 },
    { type:"mcq", q:"What does 'Cross That Bridge When You Come to It' mean?", opts:["Deal with a problem only when it actually happens","Walk across a bridge","Build a bridge","Avoid all bridges"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Cross That Bridge When You Come to It'?", opts:["A dad tells his son not to worry about college admissions in Grade 6","A boy crosses a wooden bridge","A girl builds a bridge out of blocks","A teacher shows photos of famous bridges"], ans:0 },
    { type:"fitb", q:"We do not know if it will rain — let us ___.", opts:["cross that bridge when we come to it","burn the midnight oil","throw in the towel","jump the gun"], ans:0 },
    { type:"fitb", q:"Do not stress about the final round yet — ___.", opts:["cross that bridge when you come to it","put all your eggs in one basket","go back to the drawing board","add fuel to the fire"], ans:0 }
  ],
  77: [
    { type:"mcq", q:"Losing the first match made the team practise harder, and they ended up winning the tournament. Which idiom fits?", opts:["Every Cloud Has a Silver Lining","The Tip of the Iceberg","The Last Straw","A Taste of Your Own Medicine"], ans:0 },
    { type:"mcq", q:"What does 'Every Cloud Has a Silver Lining' mean?", opts:["Something good comes from every bad situation","Clouds are made of silver","Bad weather is coming","Rain brings problems"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Every Cloud Has a Silver Lining'?", opts:["A girl who broke her arm discovers she is good at writing with her other hand","A boy watches clouds in the sky","A student draws a cloud","A teacher talks about weather"], ans:0 },
    { type:"fitb", q:"Getting lost led us to a beautiful garden — ___.", opts:["every cloud has a silver lining","the tip of the iceberg","the elephant in the room","the last straw"], ans:0 },
    { type:"fitb", q:"The power cut meant we played board games as a family — ___.", opts:["every cloud has a silver lining","a picture is worth a thousand words","two heads are better than one","time flies"], ans:0 }
  ],
  78: [
    { type:"mcq", q:"The poster design did not work, so the team started planning a completely new one. Which idiom fits?", opts:["Go Back to the Drawing Board","Back to Square One","Throw in the Towel","Call It a Day"], ans:0 },
    { type:"mcq", q:"What does 'Go Back to the Drawing Board' mean?", opts:["Start planning again from scratch","Draw a picture","Erase a whiteboard","Visit an art gallery"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Go Back to the Drawing Board'?", opts:["A group scraps their project idea and comes up with a fresh one","A boy draws on a chalkboard","A girl cleans the whiteboard","A teacher hands out blank paper"], ans:0 },
    { type:"fitb", q:"The recipe did not taste right, so we had to ___.", opts:["go back to the drawing board","throw in the towel","jump the gun","burn bridges"], ans:0 },
    { type:"fitb", q:"Our first attempt failed — time to ___.", opts:["go back to the drawing board","call it a day","cut corners","sit on the fence"], ans:0 }
  ],
  79: [
    { type:"mcq", q:"Everyone knew there was a problem with the seating plan, but nobody wanted to bring it up. Which idiom fits?", opts:["The Elephant in the Room","The Tip of the Iceberg","The Last Straw","Under Your Nose"], ans:0 },
    { type:"mcq", q:"What does 'The Elephant in the Room' mean?", opts:["An obvious problem that nobody talks about","A large animal in a building","A big surprise","A crowded space"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'The Elephant in the Room'?", opts:["A family avoids talking about the broken TV even though everyone notices it","A girl visits a zoo","A boy watches a nature documentary","A teacher shows pictures of elephants"], ans:0 },
    { type:"fitb", q:"Nobody mentioned the failing grade — it was ___.", opts:["the elephant in the room","the tip of the iceberg","the last straw","a blessing in disguise"], ans:0 },
    { type:"fitb", q:"We all saw the mistake, but it became ___ that nobody dared to point out.", opts:["the elephant in the room","the ball in your court","the best of both worlds","once in a blue moon"], ans:0 }
  ],
  80: [
    { type:"mcq", q:"The science topic was so confusing that Ria could not understand it no matter how many times she read it. Which idiom fits?", opts:["Wrap Your Head Around","Hit the Books","Burn the Midnight Oil","Break the Ice"], ans:0 },
    { type:"mcq", q:"What does 'Wrap Your Head Around' mean?", opts:["Understand something complicated","Wear a headband","Think very fast","Cover your head"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Wrap Your Head Around'?", opts:["A boy stares at a difficult maths problem for ten minutes","A girl wraps a gift","A student ties a scarf","A teacher rolls up a poster"], ans:0 },
    { type:"fitb", q:"I still cannot ___ how magnets actually work.", opts:["wrap my head around","hit the books on","burn the midnight oil for","break the ice with"], ans:0 },
    { type:"fitb", q:"It took me a week to ___ the new coding language.", opts:["wrap my head around","throw in the towel on","jump the gun on","cry over spilt milk about"], ans:0 }
  ]
};
