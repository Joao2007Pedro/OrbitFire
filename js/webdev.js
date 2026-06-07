/* ═══════════════════════════════════════════
   OrbitFire — webdev.js
   Web Development · Prof. Israel Marques
   ─────────────────────────────────────────
   • Slideshow (3 imagens)
   • Quiz dinâmico (10 perguntas)
   • Troca de tema (3 opções)
   • Formulário com validação
═══════════════════════════════════════════ */

/* ══════════════════════════
   1. SLIDESHOW
══════════════════════════ */
(function () {
  const track  = document.getElementById('slideshowTrack');
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  const btnPrev = document.getElementById('slidePrev');
  const btnNext = document.getElementById('slideNext');
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  btnNext.addEventListener('click', () => { next(); startAuto(); });
  btnPrev.addEventListener('click', () => { prev(); startAuto(); });
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.index));
      startAuto();
    });
  });

  // Touch/swipe support
  let touchStartX = 0;
  const ss = document.getElementById('slideshow');
  ss.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; });
  ss.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); startAuto(); }
  });

  startAuto();
})();


/* ══════════════════════════
   2. TEMA DE FUNDO
══════════════════════════ */
(function () {
  const themes = {
    dark: {
      '--c-bg':        '#080C12',
      '--c-bg2':       '#0D1520',
      '--c-bg3':       '#111E2E',
      '--c-surface':   '#131F30',
      '--c-fire':      '#FF5C1A',
      '--c-orbit':     '#4A9EFF',
      '--c-orbit-2':   '#7EC8FF',
      '--c-text':      '#E8EDF3',
      '--c-text-2':    '#8A9BB0',
    },
    fire: {
      '--c-bg':        '#0F0700',
      '--c-bg2':       '#1A0C00',
      '--c-bg3':       '#221000',
      '--c-surface':   '#2A1400',
      '--c-fire':      '#FF7A2F',
      '--c-orbit':     '#FFB347',
      '--c-orbit-2':   '#FFD580',
      '--c-text':      '#FFF0E0',
      '--c-text-2':    '#CC8855',
    },
    orbit: {
      '--c-bg':        '#00080F',
      '--c-bg2':       '#001525',
      '--c-bg3':       '#001E35',
      '--c-surface':   '#002040',
      '--c-fire':      '#00B4FF',
      '--c-orbit':     '#00E5FF',
      '--c-orbit-2':   '#80F0FF',
      '--c-text':      '#D0F0FF',
      '--c-text-2':    '#5599BB',
    }
  };

  const buttons = document.querySelectorAll('.theme-btn');
  const root    = document.documentElement;

  function applyTheme(name) {
    const t = themes[name];
    if (!t) return;
    Object.entries(t).forEach(([k, v]) => root.style.setProperty(k, v));
    buttons.forEach(b => b.classList.toggle('active', b.dataset.theme === name));
    localStorage.setItem('orbitfire-theme', name);
  }

  buttons.forEach(b => b.addEventListener('click', () => applyTheme(b.dataset.theme)));

  // Restore saved theme
  const saved = localStorage.getItem('orbitfire-theme');
  if (saved && themes[saved]) applyTheme(saved);
})();


/* ══════════════════════════
   3. QUIZ DINÂMICO (10 perguntas)
══════════════════════════ */
(function () {
  const questions = [
    {
      q: "Qual satélite da NASA é usado pelo sistema FIRMS para detectar focos de calor?",
      options: ["Hubble", "Terra e Aqua", "James Webb", "Chandra"],
      answer: 1
    },
    {
      q: "Qual é a resolução espacial dos sensores MODIS/VIIRS usados para detectar queimadas?",
      options: ["10 metros", "1 quilômetro", "375 metros", "50 metros"],
      answer: 2
    },
    {
      q: "FIRMS é a sigla para:",
      options: [
        "Fire Information for Resource Management System",
        "Forest Infrared Remote Monitoring Satellite",
        "Federal Incident Response Management System",
        "Fire Integrated Remote Monitoring Service"
      ],
      answer: 0
    },
    {
      q: "Qual órgão brasileiro disponibiliza o banco de dados de queimadas (BDQueimadas)?",
      options: ["IBAMA", "INMET", "INPE", "ANA"],
      answer: 2
    },
    {
      q: "Qual bioma brasileiro concentra o maior número de focos de incêndio anuais?",
      options: ["Amazônia", "Cerrado", "Pantanal", "Caatinga"],
      answer: 1
    },
    {
      q: "O satélite CBERS-4A é resultado de parceria entre Brasil e:",
      options: ["EUA", "Rússia", "China", "Japão"],
      answer: 2
    },
    {
      q: "Qual ODS da ONU está diretamente relacionado ao combate às queimadas e ação climática?",
      options: ["ODS 1", "ODS 7", "ODS 13", "ODS 17"],
      answer: 2
    },
    {
      q: "O OrbitFire usa qual tipo de função matemática para modelar a propagação do fogo?",
      options: ["Linear", "Logarítmica", "Exponencial", "Trigonométrica"],
      answer: 2
    },
    {
      q: "Qual componente do Arduino é mais adequado para medir temperatura e umidade no campo?",
      options: ["Sensor LDR", "Sensor DHT22", "Módulo GPS", "Sensor ultrassônico"],
      answer: 1
    },
    {
      q: "Em quantos minutos o OrbitFire se propõe a entregar um alerta após a detecção orbital?",
      options: ["5 minutos", "1 hora", "30 minutos", "24 horas"],
      answer: 2
    }
  ];

  let current = 0;
  let score   = 0;
  let answered = false;

  const qEl      = document.getElementById('quizQuestion');
  const optsEl   = document.getElementById('quizOptions');
  const labelEl  = document.getElementById('quizProgressLabel');
  const fillEl   = document.getElementById('quizProgressFill');
  const cardEl   = document.getElementById('quizCard');
  const resultEl = document.getElementById('quizResult');
  const restartEl= document.getElementById('quizRestart');

  function renderQuestion() {
    answered = false;
    const q = questions[current];
    labelEl.textContent = `Pergunta ${current + 1} de ${questions.length}`;
    fillEl.style.width  = `${((current) / questions.length) * 100}%`;
    qEl.textContent     = q.q;

    optsEl.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => selectAnswer(i, btn));
      optsEl.appendChild(btn);
    });

    cardEl.classList.remove('shake');
  }

  function selectAnswer(index, btn) {
    if (answered) return;
    answered = true;
    const correct = questions[current].answer;

    document.querySelectorAll('.quiz-option').forEach((b, i) => {
      b.disabled = true;
      if (i === correct) b.classList.add('correct');
      if (i === index && i !== correct) b.classList.add('wrong');
    });

    if (index === correct) {
      score++;
    } else {
      cardEl.classList.add('shake');
    }

    setTimeout(() => {
      current++;
      if (current < questions.length) {
        renderQuestion();
      } else {
        showResult();
      }
    }, 1100);
  }

  function showResult() {
    cardEl.style.display    = 'none';
    resultEl.style.display  = 'flex';
    fillEl.style.width      = '100%';
    labelEl.textContent     = 'Concluído!';

    const pct = (score / questions.length) * 100;
    const iconEl  = document.getElementById('quizResultIcon');
    const titleEl = document.getElementById('quizResultTitle');
    const textEl  = document.getElementById('quizResultText');
    const scoreEl = document.getElementById('quizResultScore');

    if (pct >= 80) {
      iconEl.textContent  = '🏆';
      titleEl.textContent = 'Excelente!';
      textEl.textContent  = 'Você domina o tema de satélites e monitoramento ambiental.';
    } else if (pct >= 50) {
      iconEl.textContent  = '🌱';
      titleEl.textContent = 'Bom trabalho!';
      textEl.textContent  = 'Você tem uma boa base. Explore mais sobre a NASA FIRMS e o INPE.';
    } else {
      iconEl.textContent  = '🔭';
      titleEl.textContent = 'Continue aprendendo!';
      textEl.textContent  = 'O universo dos dados satelitais tem muito a revelar. Tente novamente!';
    }

    scoreEl.innerHTML = `<strong>${score}</strong> de <strong>${questions.length}</strong> corretas`;
  }

  restartEl.addEventListener('click', () => {
    current  = 0;
    score    = 0;
    cardEl.style.display   = 'flex';
    resultEl.style.display = 'none';
    renderQuestion();
  });

  renderQuestion();
})();


/* ══════════════════════════
   4. FORMULÁRIO COM VALIDAÇÃO
══════════════════════════ */
(function () {
  const form       = document.getElementById('alertForm');
  const successDiv = document.getElementById('formSuccess');
  const resetBtn   = document.getElementById('formReset');

  function showError(fieldId, errId, msg) {
    document.getElementById(fieldId).classList.add('has-error');
    document.getElementById(errId).textContent = msg;
  }

  function clearError(fieldId, errId) {
    document.getElementById(fieldId).classList.remove('has-error');
    document.getElementById(errId).textContent = '';
  }

  // Live clear on input
  ['nome','email','estado','raio'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => clearError(`fg-${id}`, `err-${id}`));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const nome   = document.getElementById('nome').value.trim();
    const email  = document.getElementById('email').value.trim();
    const estado = document.getElementById('estado').value;
    const raio   = document.getElementById('raio').value;
    const canais = document.querySelectorAll('input[name="canal"]:checked');

    // Validate nome
    if (!nome) {
      showError('fg-nome', 'err-nome', 'Informe seu nome completo.');
      valid = false;
    } else if (nome.length < 3) {
      showError('fg-nome', 'err-nome', 'Nome muito curto.');
      valid = false;
    } else { clearError('fg-nome', 'err-nome'); }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      showError('fg-email', 'err-email', 'Informe seu e-mail.');
      valid = false;
    } else if (!emailRegex.test(email)) {
      showError('fg-email', 'err-email', 'E-mail inválido.');
      valid = false;
    } else { clearError('fg-email', 'err-email'); }

    // Validate estado
    if (!estado) {
      showError('fg-estado', 'err-estado', 'Selecione seu estado.');
      valid = false;
    } else { clearError('fg-estado', 'err-estado'); }

    // Validate raio
    if (!raio) {
      showError('fg-raio', 'err-raio', 'Selecione o raio de monitoramento.');
      valid = false;
    } else { clearError('fg-raio', 'err-raio'); }

    // Validate canal
    if (canais.length === 0) {
      document.getElementById('err-canal').textContent = 'Selecione ao menos um canal de alerta.';
      document.getElementById('fg-canal').classList.add('has-error');
      valid = false;
    } else {
      document.getElementById('err-canal').textContent = '';
      document.getElementById('fg-canal').classList.remove('has-error');
    }

    if (valid) {
      form.style.display    = 'none';
      successDiv.style.display = 'flex';
    }
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    form.style.display       = 'flex';
    successDiv.style.display = 'none';
  });
})();
// Validação do formulário de alertas: Expressão Regular para e-mail e tratamento de erros