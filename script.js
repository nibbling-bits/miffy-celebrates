
// ---- Birthday gate ---------------------------------------------------------
// Change ONLY the value between the quotes below before uploading if desired.
// This is a lightweight gate for a static site, not strong cryptographic security.
const BIRTHDAY_SECRET = "princessmiftah";

const lockScreen = document.getElementById("lockScreen");
const birthdayWorld = document.getElementById("birthdayWorld");
const secretInput = document.getElementById("secretInput");
const unlockBtn = document.getElementById("unlockBtn");
const lockError = document.getElementById("lockError");

function normalizedSecret(value){
  return value.toLowerCase().replace(/\s+/g,"").trim();
}
function tryUnlock(){
  if(normalizedSecret(secretInput.value) === normalizedSecret(BIRTHDAY_SECRET)){
    lockError.textContent = "✨ Secret accepted. Welcome, birthday boy…";
    lockScreen.classList.add("unlocking");
    birthdayWorld.classList.remove("locked-world");
    setTimeout(()=>lockScreen.remove(),650);
  } else {
    const replies=[
      "Nope 😌 Even the password is judging you.",
      "Miffy… this is not going well. 😂",
      "Wrong secret word. Birthday-boy privileges denied.",
      "Ask Bushra before you lock yourself out of your own birthday. 👸"
    ];
    const count=Number(lockScreen.dataset.tries||0);
    lockError.textContent=replies[Math.min(count,replies.length-1)];
    lockScreen.dataset.tries=count+1;
    secretInput.select();
  }
}
unlockBtn.addEventListener("click",tryUnlock);
secretInput.addEventListener("keydown",e=>{if(e.key==="Enter")tryUnlock();});
// ---------------------------------------------------------------------------

const S=document.getElementById("screen"),M=document.getElementById("modal"),T=document.getElementById("mTitle"),X=document.getElementById("mText"),I=document.getElementById("mIcon"),B=document.getElementById("mBtn");for(let i=0;i<18;i++){let f=document.createElement("i");f.className="fly";f.style.left=5+Math.random()*90+"%";f.style.top=5+Math.random()*88+"%";f.style.animationDelay=Math.random()*3+"s";document.getElementById("flies").appendChild(f)}
const Q=[
{q:"Where did we first travel together?",o:["Goa 🌴","Perth 🐨","Bangalore 🏙️","The land of endless arguments 😌"],c:0,w:[["Miffy?! 😭","Were you even there? Think harder."],["Wrong continent 😂","Lovely trip. Wrong memory."],["Home base does not count 😌","Nice attempt. Try again."],["Tempting 😂","Emotionally plausible. Geographically incorrect."]]},
{q:"Who behaves like a spoiled princess?",o:["Bushra 👑","Miftah 👸"],c:1,w:[[[["EXCUSE ME?? 🤨","Birthday boy privilege does NOT include rewriting history. Think again, Princess Miftah. 👸"],["YOU CLICKED BUSHRA AGAIN?! 😭","The confidence with which you're giving the wrong answer is concerning."],["Miftah. My patience has left the chat. 🙂","There are TWO options. Click your own name, Princess."],["STILL BUSHRA?! 😂","The enchanted forest is judging you. CLICK MIFTAH."]]],null]},
{q:"One thing Miftah cannot stay without?",o:["Bushra ❤️","Games 🎮","Food 🍜","Sleep 😴"],c:1,w:[[[["Awwwww ❤️","Very romantic. Very sweet. Completely incorrect. 🎮"],["Flattery detected 😏","It still won't unlock the next question."]]],null,["Who are you? 🤨","Food over games? What have you done with my husband?"],["Absolutely not 😂","You have sacrificed sleep FOR games. Try again."]]},
{q:"Who makes up after each fight?",o:["Miftah 😇","Bushra 😌"],c:1,w:[[[["HAHAHAHAHAHA 😂","Sorry. The forest needed a minute after that one."],["Again?! 😭","This website deals in facts, not fantasy."]]],null]},
{q:"Who starts every fight?",o:["Bushra 😇","Miftah 🔥"],c:1,w:[[[["⚠️ DANGEROUS ANSWER DETECTED","You still have time to reconsider this decision, Miffy."],["Bold choice. Very bold. 🙂","Would you like to survive your birthday? Think carefully."]]],null]},
{q:"Who loves more?",o:["Miftah ❤️","Bushra ❤️❤️"],c:1,w:[[[["Citation needed 📚","Source: Miftah et al., Trust Me Bro (2026). Peer review rejected."],["Miffy please 😂","Self-nominations are not accepted in this category."]]],null]},
{q:"Who swiped first?",o:["Bushra 👀","Miftah 👉"],c:1,w:[[[["Historical revisionism detected 👀","The archives remember, Miffy."],["Nice try 😌","One tiny swipe started all of THIS. And it wasn't mine."]]],null]}
];
let n=0,a=Array(7).fill(0),cb=null;const C=[["Correct! 🌴","The adventure continues. You really WERE there!"],["👑 TRUTH ACCEPTED 👑","Princess Miftah has finally acknowledged his title."],["Correct! 🎮","Bushra accepts second place to the gaming console… for today."],["Peace restored 😌","Correct. Somebody has to make up after the chaos."],["Self-awareness unlocked 😂","The forest appreciates your honesty."],["Obviously. 💗","Bushra's answer key remains undefeated."],["The archives approve ✨","And look where that swipe got you…"]];
function pop(t,x,good=false,next=null){T.textContent=t;X.textContent=x;I.textContent=good?"✨":"😂";B.textContent=good?"Continue →":"Fine, let me try again 🙄";M.classList.remove("hidden");cb=next}
B.onclick=()=>{M.classList.add("hidden");let z=cb;cb=null;if(z)z()};
function unwrap(w){while(Array.isArray(w)&&w.length===1&&Array.isArray(w[0]))w=w[0];return w}
function draw(){let q=Q[n];S.innerHTML=`<div class="progress">${Q.map((_,i)=>`<i class="dot ${i<n?"done":""}"></i>`).join("")}</div><div class="tiny">QUESTION ${n+1} OF 7</div><div class="icon">${["🧳","👑","🎮","🌿","🔥","💗","✨"][n]}</div><h2>${q.q}</h2><div class="answers">${q.o.map((x,i)=>`<button class="answer" data-i="${i}">${x}</button>`).join("")}</div><small>Choose wisely. Bushra controls the answer key. 😌</small>`;S.querySelectorAll(".answer").forEach(e=>e.onclick=()=>pick(+e.dataset.i))}
function pick(i){let q=Q[n];if(i===q.c){let c=C[n];pop(c[0],c[1],true,()=>{n++;n<7?draw():door()});return}let w=unwrap(q.w[i]);if(Array.isArray(w)&&Array.isArray(w[0]))w=w[Math.min(a[n]++,w.length-1)];w=unwrap(w);pop(w[0],w[1])}
document.getElementById("start").onclick=draw;
function door(){S.innerHTML=`<div class="tiny">ALL QUESTIONS COMPLETE</div><div class="door">🚪✨</div><h2>The final door has opened…</h2><p>Turns out one little swipe led to quite an adventure.</p><button class="primary" id="go">Let's see… →</button>`;document.getElementById("go").onclick=mem}
function mem(){S.innerHTML=`<div class="tiny">A FEW CHAPTERS LATER…</div><div class="icon">🌙✨</div><h2>Look at all the little adventures that followed.</h2><div class="memories"><div class="memory">🌴<br>First adventures</div><div class="memory">🚤<br>New places</div><div class="memory">🐨<br>Silly moments</div><div class="memory">🚲<br>Exploring together</div><div class="memory">🎮<br>Lots of #me time 😏</div><div class="memory">❤️<br>Same team, always</div></div><button class="primary" id="last">One last thing… ❤️</button>`;document.getElementById("last").onclick=finale}
function finale(){S.innerHTML=`<div class="tiny">OCTOBER 3 · QUEST COMPLETE</div><div class="icon">🎂✨</div><div class="letter"><h2>Happy Birthday Miftah! ❤️</h2><p>Stay happy and blessed with lots of happiness, health and your <strong>#me time :P</strong></p><p style="font-size:23px;font-style:italic">— Bushra ❤️</p></div><div class="achievement"><div style="font-size:35px">🏆</div><strong>ACHIEVEMENT UNLOCKED</strong><p>Another year of <b>Games</b>, <b>Bushra</b> & being a <b>spoiled princess</b>. 👸🎮</p></div>`}