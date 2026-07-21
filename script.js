document.getElementById('year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Terminal typing sequence ---------- */
const termBody = document.getElementById('termBody');
const heroCta = document.getElementById('heroCta');

const sequence = [
  { prompt: '$', cmd: 'whoami' },
  { output: 'Armand Govea', big: true },
  { prompt: '$', cmd: 'cat role.txt' },
  { output: 'Full Stack Developer — React <span class="accent">·</span> Python <span class="accent">·</span> HTML5 <span class="accent">·</span> JavaScript' },
  { prompt: '$', cmd: 'echo $STATUS' },
  { output: 'Open to full-stack roles and freelance work.' }
];

function renderStatic() {
  let html = '';
  sequence.forEach(line => {
    if (line.cmd) {
      html += `<div class="term-line"><span class="term-prompt">${line.prompt}</span><span class="term-cmd">${line.cmd}</span></div>`;
    } else {
      html += `<div class="term-line"><span class="term-output${line.big ? ' big' : ''}">${line.output}</span></div>`;
    }
  });
  termBody.innerHTML = html;
  heroCta.classList.add('show');
  addInteractiveLine();
}

function typeSequence() {
  let i = 0;
  function nextLine() {
    if (i >= sequence.length) {
      heroCta.classList.add('show');
      addInteractiveLine();
      return;
    }
    const line = sequence[i];
    const row = document.createElement('div');
    row.className = 'term-line';
    termBody.appendChild(row);

    if (line.cmd) {
      const promptEl = document.createElement('span');
      promptEl.className = 'term-prompt';
      promptEl.textContent = line.prompt + ' ';
      row.appendChild(promptEl);
      const cmdEl = document.createElement('span');
      cmdEl.className = 'term-cmd';
      row.appendChild(cmdEl);

      let ci = 0;
      const text = line.cmd;
      const typer = setInterval(() => {
        cmdEl.textContent += text[ci];
        ci++;
        if (ci >= text.length) {
          clearInterval(typer);
          i++;
          setTimeout(nextLine, 260);
        }
      }, 42);
    } else {
      const outEl = document.createElement('span');
      outEl.className = 'term-output' + (line.big ? ' big' : '');
      outEl.innerHTML = line.output;
      row.appendChild(outEl);
      i++;
      setTimeout(nextLine, line.big ? 380 : 500);
    }
  }
  nextLine();
}

if (reduceMotion) {
  renderStatic();
} else {
  typeSequence();
}

/* ---------- Interactive terminal (easter egg) ---------- */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}

function pickJoke() {
  const jokes = [
    'Why do programmers prefer dark mode? Because light attracts bugs.',
    "There are 10 types of people: those who understand binary, and those who don't.",
    '99 little bugs in the code, 99 little bugs. Take one down, patch it around — 127 little bugs in the code.',
    'I would tell you a UDP joke, but you might not get it.',
    "A CSS developer walks into a bar. Or a cafe. Or a diner. Wherever, they're flexible."
  ];
  return jokes[Math.floor(Math.random() * jokes.length)];
}

const commands = {
  help: () => 'commands: whoami · about · skills · experience · projects · contact · coffee · sudo · date · joke · matrix · clear',
  whoami: () => 'Armand Govea — Full Stack Developer',
  about: () => { scrollToId('about'); return 'Scrolling to about.js ...'; },
  skills: () => { scrollToId('skills'); return 'React · Python · JavaScript · HTML5 · CSS'; },
  experience: () => { scrollToId('experience'); return 'Scrolling to experience.js ...'; },
  projects: () => { scrollToId('projects'); return 'Scrolling to projects.js ...'; },
  contact: () => { scrollToId('contact'); return 'Scrolling to contact.md ...'; },
  coffee: () => '☕ brewing... here you go. extra strong, like production bugs.',
  sudo: () => 'permission denied: nice try 😄',
  date: () => new Date().toString(),
  joke: () => pickJoke(),
  matrix: () => { triggerMatrix(); return 'wake up...'; },
  konami: () => 'try: ↑ ↑ ↓ ↓ ← → ← → B A',
  ls: () => 'about.js  experience.js  skills.json  projects.js  contact.md',
  exit: () => "there's no escape from the portfolio 😄",
  quit: () => "there's no escape from the portfolio 😄"
};

function runCommand(raw) {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return '';
  if (cmd === 'clear') { clearInteractiveLines(); return null; }
  if (commands[cmd]) return commands[cmd]();
  return `command not found: ${cmd} — try "help"`;
}

function clearInteractiveLines() {
  termBody.querySelectorAll('.term-interactive').forEach(el => el.remove());
  addInteractiveLine();
}

function addInteractiveLine() {
  const wrap = document.createElement('div');
  wrap.className = 'term-line term-interactive';
  wrap.innerHTML = '<span class="term-prompt">$</span><input type="text" class="term-input" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal command input" placeholder="type a command...">';
  termBody.appendChild(wrap);
  const input = wrap.querySelector('input');

  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const val = input.value;
    input.disabled = true;
    const output = runCommand(val);
    if (val.trim().toLowerCase() === 'clear') return;
    if (output) {
      const outLine = document.createElement('div');
      outLine.className = 'term-line term-interactive';
      const outSpan = document.createElement('span');
      outSpan.className = 'term-output';
      outSpan.textContent = output;
      outLine.appendChild(outSpan);
      termBody.appendChild(outLine);
    }
    addInteractiveLine();
    termBody.scrollTop = termBody.scrollHeight;
  });
}

/* ---------- Toast ---------- */
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'easter-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, 3200);
}

/* ---------- Konami code -> matrix rain ---------- */
const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIndex = 0;
document.addEventListener('keydown', e => {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  if (key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      triggerMatrix();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = (key === konamiCode[0]) ? 1 : 0;
  }
});

function triggerMatrix() {
  if (document.getElementById('matrixCanvas')) return;
  if (reduceMotion) {
    showToast('🎉 konami code found — rain skipped since reduced motion is on');
    return;
  }
  const canvas = document.createElement('canvas');
  canvas.id = 'matrixCanvas';
  Object.assign(canvas.style, { position: 'fixed', inset: '0', zIndex: '9999', pointerEvents: 'none' });
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fontSize = 16;
  const cols = Math.floor(canvas.width / fontSize);
  const drops = new Array(cols).fill(1);
  const chars = '01</>{}ARMANDGOVEA';

  let frame = 0;
  const maxFrames = 200;
  const timer = setInterval(() => {
    ctx.fillStyle = 'rgba(11,14,20,0.09)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#E8B94D';
    ctx.font = fontSize + 'px monospace';
    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
    frame++;
    if (frame > maxFrames) {
      clearInterval(timer);
      canvas.style.transition = 'opacity 0.6s ease';
      canvas.style.opacity = '0';
      setTimeout(() => canvas.remove(), 650);
    }
  }, 35);
  showToast('🎉 konami code activated — nice.');
}

/* ---------- Console easter egg ---------- */
console.log('%cWait, are you inspecting the code? 👀', 'color:#E8B94D;font-family:monospace;font-size:14px;font-weight:bold;');
console.log('%cSince you found this — I\'m open to full-stack roles. Armandgov27@gmail.com', 'color:#5FD0D6;font-family:monospace;font-size:12px;');

/* ---------- Active tab highlight on scroll ---------- */
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      tabs.forEach(t => t.classList.remove('active'));
      const activeTab = document.querySelector(`.tab[data-tab="${entry.target.id}"]`);
      if (activeTab) activeTab.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(s => observer.observe(s));