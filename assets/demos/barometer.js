/* Barometer Demo — sliders + insights carousel */
(function () {
  var i18n = {
    en: {
      title: 'Emotional Barometer', eq: 'How are you feeling right now?', es: 'Slide to express your mood.',
      pq: 'How does your body feel?', ps: 'Slide to express your physical state.',
      el: ['Sad', 'Neutral', 'Happy'], pl: ['Low energy', 'Balanced', 'High energy'],
      er: 'Neutral', pr: 'Balanced',
      eSub: 'Take a moment to check in with yourself.', pSub: 'Adjust to reflect your body\u2019s current state.',
      notes: 'What\u2019s on your mind today?', log: 'Log Mood',
      st: 'Mood Logged!', sm: 'Your mood has been saved successfully.',
      ins: 'Insights', avg: 'Average Mood', phys: 'Physical State', dist: 'Mood Distribution',
      trend: '+5.2% Upward trend', dom: '57% Happy'
    },
    ru: {
      title: '\u042d\u043c\u043e\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u0430\u0440\u043e\u043c\u0435\u0442\u0440',
      eq: '\u041a\u0430\u043a \u0432\u044b \u0441\u0435\u0431\u044f \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435?',
      es: '\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u043d\u044c\u0442\u0435 \u043f\u043e\u043b\u0437\u0443\u043d\u043e\u043a.',
      pq: '\u041a\u0430\u043a \u043e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u0442\u0435\u043b\u043e?',
      ps: '\u041e\u0442\u0440\u0430\u0437\u0438\u0442\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435.',
      el: ['\u0413\u0440\u0443\u0441\u0442\u044c', '\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e', '\u0420\u0430\u0434\u043e\u0441\u0442\u044c'],
      pl: ['\u041d\u0438\u0437\u043a\u0430\u044f', '\u0411\u0430\u043b\u0430\u043d\u0441', '\u0412\u044b\u0441\u043e\u043a\u0430\u044f'],
      er: '\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e', pr: '\u0411\u0430\u043b\u0430\u043d\u0441',
      eSub: '\u0423\u0434\u0435\u043b\u0438\u0442\u0435 \u043c\u043e\u043c\u0435\u043d\u0442.', pSub: '\u041e\u0442\u0440\u0430\u0437\u0438\u0442\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435.',
      notes: '\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u0430 \u0443\u043c\u0435?', log: '\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c',
      st: '\u041d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e!',
      sm: '\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e.',
      ins: '\u0418\u043d\u0441\u0430\u0439\u0442\u044b', avg: '\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435',
      phys: '\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435',
      dist: '\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435', trend: '+5.2% \u0420\u043e\u0441\u0442', dom: '57% \u0420\u0430\u0434\u043e\u0441\u0442\u044c'
    },
    ro: {
      title: 'Barometrul emotional', eq: 'Cum va simtiti acum?', es: 'Mutati cursorul.',
      pq: 'Cum se simte corpul?', ps: 'Reflectati starea fizica.',
      el: ['Trist', 'Neutru', 'Fericit'], pl: ['Scazuta', 'Echilibrat', 'Ridicata'],
      er: 'Neutru', pr: 'Echilibrat',
      eSub: 'Acordati-va un moment.', pSub: 'Reflectati starea corpului.',
      notes: 'Ce aveti in minte?', log: 'Inregistreaza',
      st: 'Stare inregistrata!', sm: 'Salvata cu succes.',
      ins: 'Insights', avg: 'Stare medie', phys: 'Stare fizica',
      dist: 'Distributie', trend: '+5.2% Crestere', dom: '57% Fericit'
    }
  };

  var moodData = [82, 76, 68, 39, 53, 69, 81];
  var physData = [74, 70, 62, 36, 47, 60, 73];
  var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  function getLang() {
    var p = window.location.pathname;
    if (p.indexOf('/ru') === 0) return 'ru';
    if (p.indexOf('/ro') === 0) return 'ro';
    return 'en';
  }

  function getLabel(labels, v) { return v <= 33 ? labels[0] : v > 66 ? labels[2] : labels[1]; }

  function loadCSS(file) {
    if (document.getElementById('demo-css-' + file)) return;
    var base = (window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0) ? '../' : '';
    var l = document.createElement('link');
    l.id = 'demo-css-' + file;
    l.rel = 'stylesheet';
    l.href = base + 'assets/demos/' + file;
    document.head.appendChild(l);
  }

  function makeLineChart(data, color) {
    var w = 260, h = 120, px = 20, py = 10;
    var max = 100, min = 0;
    var pts = data.map(function (v, i) {
      return ((i / (data.length - 1)) * (w - px * 2) + px) + ',' + (h - py - ((v - min) / (max - min)) * (h - py * 2));
    });
    var line = pts.join(' ');
    var area = 'M' + pts[0] + ' L' + pts.join(' L') + ' L' + (w - px) + ',' + (h - py) + ' L' + px + ',' + (h - py) + ' Z';
    var labels = days.map(function (d, i) {
      return '<text x="' + ((i / (data.length - 1)) * (w - px * 2) + px) + '" y="' + (h + 2) + '" fill="#7b8fa6" font-size="9" text-anchor="middle">' + d + '</text>';
    }).join('');
    return '<svg viewBox="0 0 ' + w + ' ' + (h + 14) + '">' +
      '<path d="' + area + '" fill="' + color + '" opacity="0.15"/>' +
      '<polyline points="' + line + '" fill="none" stroke="' + color + '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      data.map(function (v, i) {
        var x = (i / (data.length - 1)) * (w - px * 2) + px;
        var y = h - py - ((v - min) / (max - min)) * (h - py * 2);
        return '<circle cx="' + x + '" cy="' + y + '" r="3" fill="#fff" stroke="' + color + '" stroke-width="2"/>';
      }).join('') +
      labels + '</svg>';
  }

  function makeBarChart() {
    var vals = [4, 2, 1], labels = ['Happy', 'Neutral', 'Sad'], colors = ['#3a7bd5', '#5b9bd5', '#94a3b8'];
    var w = 260, h = 100, bw = 50, gap = 20, off = 35;
    var bars = vals.map(function (v, i) {
      var x = off + i * (bw + gap);
      var bh = (v / 5) * (h - 30);
      return '<rect x="' + x + '" y="' + (h - 14 - bh) + '" width="' + bw + '" height="' + bh + '" rx="6" fill="' + colors[i] + '"/>' +
        '<text x="' + (x + bw / 2) + '" y="' + (h - 18 - bh) + '" fill="#0f172a" font-size="12" font-weight="700" text-anchor="middle">' + v + '</text>' +
        '<text x="' + (x + bw / 2) + '" y="' + (h) + '" fill="#7b8fa6" font-size="9" text-anchor="middle">' + labels[i] + '</text>';
    }).join('');
    return '<svg viewBox="0 0 ' + w + ' ' + (h + 4) + '">' + bars + '</svg>';
  }

  function initSlider(card, labels, readoutEl, subEl, initL, initS) {
    var track = card.querySelector('.demo-slider');
    var thumb = card.querySelector('.demo-slider-thumb');
    var dragging = false;
    function set(v) {
      v = Math.max(0, Math.min(100, v));
      thumb.style.left = v + '%';
      readoutEl.textContent = getLabel(labels, v);
    }
    function pct(e) {
      var r = track.getBoundingClientRect();
      return ((e.touches ? e.touches[0].clientX : e.clientX) - r.left) / r.width * 100;
    }
    function down(e) { dragging = true; set(pct(e)); e.preventDefault(); }
    function move(e) { if (dragging) { set(pct(e)); e.preventDefault(); } }
    function up() { dragging = false; }
    track.addEventListener('mousedown', down);
    track.addEventListener('touchstart', down, { passive: false });
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    set(50);
    readoutEl.textContent = initL;
    subEl.textContent = initS;
  }

  function showInsights(screen, t, closeFn) {
    var ins = document.createElement('div');
    ins.className = 'demo-insights';
    var slides = [
      { label: t.avg, value: t.el[2], desc: t.trend, chart: makeLineChart(moodData, '#3a7bd5') },
      { label: t.phys, value: t.pl[1], desc: t.trend, chart: makeLineChart(physData, '#5b9bd5') },
      { label: t.dist, value: t.dom, desc: '', chart: makeBarChart() }
    ];
    ins.innerHTML = '<div class="demo-insights-header">' + t.ins + '</div>' +
      '<div class="demo-insights-slides">' + slides.map(function (s, i) {
        return '<div class="demo-insight-slide' + (i === 0 ? ' active' : '') + '">' +
          '<div class="demo-kpi-label">' + s.label + '</div>' +
          '<div class="demo-kpi-value">' + s.value + '</div>' +
          (s.desc ? '<div class="demo-kpi-desc">' + s.desc + '</div>' : '') +
          '<div class="demo-chart-wrap">' + s.chart + '</div></div>';
      }).join('') + '</div>' +
      '<div class="demo-dots">' + slides.map(function (_, i) {
        return '<div class="demo-dot' + (i === 0 ? ' active' : '') + '"></div>';
      }).join('') + '</div>';
    screen.appendChild(ins);

    var cur = 0;
    var allSlides = ins.querySelectorAll('.demo-insight-slide');
    var allDots = ins.querySelectorAll('.demo-dot');
    var iv = setInterval(function () {
      cur++;
      if (cur >= slides.length) {
        clearInterval(iv);
        setTimeout(closeFn, 1200);
        return;
      }
      for (var j = 0; j < allSlides.length; j++) {
        allSlides[j].classList.toggle('active', j === cur);
        allDots[j].classList.toggle('active', j === cur);
      }
    }, 2500);
  }

  function open() {
    var t = i18n[getLang()];
    loadCSS('common.css');
    loadCSS('barometer.css');

    var ov = document.createElement('div');
    ov.className = 'demo-overlay';
    ov.innerHTML =
      '<div class="demo-phone"><button class="demo-close">&times;</button>' +
      '<div class="demo-screen"><div class="demo-content">' +
      '<div class="demo-header">' + t.title + '</div>' +
      '<div class="demo-card"><div class="demo-card-title">' + t.eq + '</div><div class="demo-card-sub">' + t.es + '</div>' +
      '<div class="demo-slider"><div class="demo-slider-thumb" style="left:50%"><div class="demo-slider-thumb-inner"></div></div></div>' +
      '<div class="demo-slider-labels"><span>' + t.el[0] + '</span><span>' + t.el[1] + '</span><span>' + t.el[2] + '</span></div>' +
      '<div class="demo-readout" id="d-er">' + t.er + '</div><div class="demo-readout-sub" id="d-es">' + t.eSub + '</div></div>' +
      '<div class="demo-card"><div class="demo-card-title">' + t.pq + '</div><div class="demo-card-sub">' + t.ps + '</div>' +
      '<div class="demo-slider"><div class="demo-slider-thumb" style="left:50%"><div class="demo-slider-thumb-inner"></div></div></div>' +
      '<div class="demo-slider-labels"><span>' + t.pl[0] + '</span><span>' + t.pl[1] + '</span><span>' + t.pl[2] + '</span></div>' +
      '<div class="demo-readout" id="d-pr">' + t.pr + '</div><div class="demo-readout-sub" id="d-ps">' + t.pSub + '</div></div>' +
      '<textarea class="demo-notes" placeholder="' + t.notes + '" rows="3"></textarea>' +
      '<button class="demo-btn-primary demo-log-btn">' + t.log + '</button>' +
      '</div></div></div>';

    document.body.appendChild(ov);
    document.body.style.overflow = 'hidden';

    var cards = ov.querySelectorAll('.demo-card');
    initSlider(cards[0], t.el, ov.querySelector('#d-er'), ov.querySelector('#d-es'), t.er, t.eSub);
    initSlider(cards[1], t.pl, ov.querySelector('#d-pr'), ov.querySelector('#d-ps'), t.pr, t.pSub);

    function close() {
      ov.classList.add('closing');
      setTimeout(function () { ov.remove(); document.body.style.overflow = ''; }, 250);
    }

    ov.querySelector('.demo-close').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });

    ov.querySelector('.demo-log-btn').addEventListener('click', function () {
      var scr = ov.querySelector('.demo-screen');
      var suc = document.createElement('div');
      suc.className = 'demo-success';
      suc.innerHTML = '<div class="demo-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>' +
        '<div class="demo-success-title">' + t.st + '</div><div class="demo-success-msg">' + t.sm + '</div>';
      scr.appendChild(suc);
      setTimeout(function () {
        suc.remove();
        showInsights(scr, t, close);
      }, 1500);
    });
  }

  window.openBarometerDemo = open;
})();
