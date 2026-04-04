/* ============================================
   Barometer Demo — Interactive phone simulator
   Lazy-loaded on first click. Pure vanilla JS.
   ============================================ */

(function () {
  var i18n = {
    en: {
      title: 'Emotional Barometer',
      eq: 'How are you feeling right now?',
      es: 'Slide to express your mood.',
      pq: 'How does your body feel?',
      ps: 'Slide to express your physical state.',
      el: ['Sad', 'Neutral', 'Happy'],
      pl: ['Low energy', 'Balanced', 'High energy'],
      er: 'Neutral',
      pr: 'Balanced',
      eSub: 'Take a moment to check in with yourself.',
      pSub: 'Adjust to reflect your body\u2019s current state.',
      notes: 'What\u2019s on your mind today?',
      log: 'Log Mood',
      st: 'Mood Logged!',
      sm: 'Your mood has been saved successfully.'
    },
    ru: {
      title: '\u042d\u043c\u043e\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u0430\u0440\u043e\u043c\u0435\u0442\u0440',
      eq: '\u041a\u0430\u043a \u0432\u044b \u0441\u0435\u0431\u044f \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435?',
      es: '\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u043d\u044c\u0442\u0435 \u043f\u043e\u043b\u0437\u0443\u043d\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435.',
      pq: '\u041a\u0430\u043a \u043e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u0432\u0430\u0448\u0435 \u0442\u0435\u043b\u043e?',
      ps: '\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u043d\u044c\u0442\u0435 \u043f\u043e\u043b\u0437\u0443\u043d\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u044c \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435.',
      el: ['\u0413\u0440\u0443\u0441\u0442\u044c', '\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e', '\u0420\u0430\u0434\u043e\u0441\u0442\u044c'],
      pl: ['\u041d\u0438\u0437\u043a\u0430\u044f', '\u0411\u0430\u043b\u0430\u043d\u0441', '\u0412\u044b\u0441\u043e\u043a\u0430\u044f'],
      er: '\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e',
      pr: '\u0411\u0430\u043b\u0430\u043d\u0441',
      eSub: '\u0423\u0434\u0435\u043b\u0438\u0442\u0435 \u043c\u043e\u043c\u0435\u043d\u0442, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0435\u0431\u044f.',
      pSub: '\u041e\u0442\u0440\u0430\u0437\u0438\u0442\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0442\u0435\u043b\u0430.',
      notes: '\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u0430 \u0443\u043c\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f?',
      log: '\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c',
      st: '\u041d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e!',
      sm: '\u0412\u0430\u0448\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e.'
    },
    ro: {
      title: 'Barometrul emotional',
      eq: 'Cum va simtiti acum?',
      es: 'Mutati cursorul pentru a exprima starea.',
      pq: 'Cum se simte corpul?',
      ps: 'Mutati cursorul pentru starea fizica.',
      el: ['Trist', 'Neutru', 'Fericit'],
      pl: ['Energie scazuta', 'Echilibrat', 'Energie ridicata'],
      er: 'Neutru',
      pr: 'Echilibrat',
      eSub: 'Acordati-va un moment pentru a va verifica starea.',
      pSub: 'Reflectati starea actuala a corpului.',
      notes: 'Ce aveti in minte astazi?',
      log: 'Inregistreaza',
      st: 'Stare inregistrata!',
      sm: 'Starea dvs. a fost salvata cu succes.'
    }
  };

  function getLang() {
    var path = window.location.pathname;
    if (path.indexOf('/ru') === 0) return 'ru';
    if (path.indexOf('/ro') === 0) return 'ro';
    return 'en';
  }

  function getLabel(labels, val) {
    if (val <= 33) return labels[0];
    if (val > 66) return labels[2];
    return labels[1];
  }

  function createSlider(container, labels, readoutEl, subEl, initLabel, initSub) {
    var val = 50;
    var track = container.querySelector('.demo-slider');
    var thumb = container.querySelector('.demo-slider-thumb');
    var readout = readoutEl;
    var dragging = false;

    function setVal(v) {
      val = Math.max(0, Math.min(100, v));
      thumb.style.left = val + '%';
      readout.textContent = getLabel(labels, val);
    }

    function pctFromEvent(e) {
      var rect = track.getBoundingClientRect();
      var x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      return (x / rect.width) * 100;
    }

    function onDown(e) {
      dragging = true;
      setVal(pctFromEvent(e));
      e.preventDefault();
    }
    function onMove(e) {
      if (!dragging) return;
      setVal(pctFromEvent(e));
      e.preventDefault();
    }
    function onUp() { dragging = false; }

    track.addEventListener('mousedown', onDown);
    track.addEventListener('touchstart', onDown, { passive: false });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);

    setVal(50);
    readout.textContent = initLabel;
    subEl.textContent = initSub;
  }

  function open() {
    var t = i18n[getLang()];

    // CSS (load once)
    if (!document.getElementById('demo-bar-css')) {
      var basePath = window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0 ? '../' : '';
      var link = document.createElement('link');
      link.id = 'demo-bar-css';
      link.rel = 'stylesheet';
      link.href = basePath + 'assets/demos/barometer.css';
      document.head.appendChild(link);
    }

    // Build DOM
    var overlay = document.createElement('div');
    overlay.className = 'demo-overlay';
    overlay.innerHTML =
      '<div class="demo-phone">' +
        '<button class="demo-close" aria-label="Close">&times;</button>' +
        '<div class="demo-screen">' +
          '<div class="demo-content">' +
            '<div class="demo-header">' + t.title + '</div>' +
            // Card 1: Emotional
            '<div class="demo-card">' +
              '<div class="demo-card-title">' + t.eq + '</div>' +
              '<div class="demo-card-sub">' + t.es + '</div>' +
              '<div class="demo-slider"><div class="demo-slider-thumb" style="left:50%"><div class="demo-slider-thumb-inner"></div></div></div>' +
              '<div class="demo-slider-labels"><span>' + t.el[0] + '</span><span>' + t.el[1] + '</span><span>' + t.el[2] + '</span></div>' +
              '<div class="demo-readout" id="demo-er">' + t.er + '</div>' +
              '<div class="demo-readout-sub" id="demo-es">' + t.eSub + '</div>' +
            '</div>' +
            // Card 2: Physical
            '<div class="demo-card">' +
              '<div class="demo-card-title">' + t.pq + '</div>' +
              '<div class="demo-card-sub">' + t.ps + '</div>' +
              '<div class="demo-slider"><div class="demo-slider-thumb" style="left:50%"><div class="demo-slider-thumb-inner"></div></div></div>' +
              '<div class="demo-slider-labels"><span>' + t.pl[0] + '</span><span>' + t.pl[1] + '</span><span>' + t.pl[2] + '</span></div>' +
              '<div class="demo-readout" id="demo-pr">' + t.pr + '</div>' +
              '<div class="demo-readout-sub" id="demo-ps">' + t.pSub + '</div>' +
            '</div>' +
            // Notes
            '<textarea class="demo-notes" placeholder="' + t.notes + '" rows="3"></textarea>' +
            // Log button
            '<button class="demo-log-btn">' + t.log + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Init sliders
    var cards = overlay.querySelectorAll('.demo-card');
    createSlider(cards[0], t.el, overlay.querySelector('#demo-er'), overlay.querySelector('#demo-es'), t.er, t.eSub);
    createSlider(cards[1], t.pl, overlay.querySelector('#demo-pr'), overlay.querySelector('#demo-ps'), t.pr, t.pSub);

    // Close handler
    function close() {
      overlay.classList.add('closing');
      setTimeout(function () {
        overlay.remove();
        document.body.style.overflow = '';
      }, 250);
    }

    overlay.querySelector('.demo-close').addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });

    // Log button → success
    overlay.querySelector('.demo-log-btn').addEventListener('click', function () {
      var screen = overlay.querySelector('.demo-screen');
      var success = document.createElement('div');
      success.className = 'demo-success';
      success.innerHTML =
        '<div class="demo-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>' +
        '<div class="demo-success-title">' + t.st + '</div>' +
        '<div class="demo-success-msg">' + t.sm + '</div>';
      screen.appendChild(success);
      setTimeout(close, 2200);
    });
  }

  // Expose globally
  window.openBarometerDemo = open;
})();
