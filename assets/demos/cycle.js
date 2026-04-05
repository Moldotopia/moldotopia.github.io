/* Cycle Tracker Demo - journal + partner insights carousel */
(function () {
  var i18n = {
    en: {
      title: 'Cycle Journal', sections: [
        { t: 'Menstruation', label: 'Flow intensity', lo: 'Light', hi: 'Heavy' },
        { t: 'Symptoms', label: 'Severity', lo: 'Mild', hi: 'Severe', chips: ['Cramps','Bloating','Headache','Fatigue','Nausea','Back pain'] },
        { t: 'Mood', label: 'Mood level', lo: 'Low', hi: 'Great', chips: ['Calm','Anxious','Irritable','Happy','Sad','Energetic'] }
      ], save: 'Save Entry', notes: 'Add notes...',
      st: 'Entry saved!', sm: 'Your cycle data has been recorded.',
      insTitle: 'Partner Insights',
      phases: [
        { name: 'Follicular Phase', emoji: '\ud83c\udf31', color: '#81C784', tip: 'Energy is rising. Great time to plan activities together.' },
        { name: 'Ovulation', emoji: '\ud83c\udf38', color: '#FFB74D', tip: 'Peak energy and connection. Plan something special.' },
        { name: 'Luteal Phase', emoji: '\ud83c\udf19', color: '#9575CD', tip: 'Energy may dip. Offer comfort and gentle support.' }
      ],
      insCards: [
        { label: 'Current Phase', tip: 'How to support' },
        { label: 'Mood Trend', desc: '30-day overview' },
        { label: 'Energy & Needs', desc: 'Support suggestions' }
      ],
      support: [
        { t: 'Check in gently', s: 'Ask how she feels today' },
        { t: 'Be practical', s: 'Help with daily tasks' },
        { t: 'Just be present', s: 'Quiet companionship matters' }
      ]
    },
    ru: {
      title: '\u0416\u0443\u0440\u043d\u0430\u043b \u0446\u0438\u043a\u043b\u0430', sections: [
        { t: '\u041c\u0435\u043d\u0441\u0442\u0440\u0443\u0430\u0446\u0438\u044f', label: '\u0418\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u044c', lo: '\u0421\u043b\u0430\u0431\u043e', hi: '\u0421\u0438\u043b\u044c\u043d\u043e' },
        { t: '\u0421\u0438\u043c\u043f\u0442\u043e\u043c\u044b', label: '\u0422\u044f\u0436\u0435\u0441\u0442\u044c', lo: '\u041b\u0435\u0433\u043a\u043e', hi: '\u0421\u0438\u043b\u044c\u043d\u043e', chips: ['\u0421\u043f\u0430\u0437\u043c\u044b','\u0412\u0437\u0434\u0443\u0442\u0438\u0435','\u0413\u043e\u043b\u043e\u0432\u043d\u0430\u044f \u0431\u043e\u043b\u044c','\u0423\u0441\u0442\u0430\u043b\u043e\u0441\u0442\u044c','\u0422\u043e\u0448\u043d\u043e\u0442\u0430','\u0411\u043e\u043b\u044c \u0432 \u0441\u043f\u0438\u043d\u0435'] },
        { t: '\u041d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435', label: '\u0423\u0440\u043e\u0432\u0435\u043d\u044c', lo: '\u041d\u0438\u0437\u043a\u043e\u0435', hi: '\u041e\u0442\u043b\u0438\u0447\u043d\u043e\u0435', chips: ['\u0421\u043f\u043e\u043a\u043e\u0439\u0441\u0442\u0432\u0438\u0435','\u0422\u0440\u0435\u0432\u043e\u0433\u0430','\u0420\u0430\u0437\u0434\u0440\u0430\u0436\u0435\u043d\u0438\u0435','\u0420\u0430\u0434\u043e\u0441\u0442\u044c','\u0413\u0440\u0443\u0441\u0442\u044c','\u042d\u043d\u0435\u0440\u0433\u0438\u044f'] }
      ], save: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c', notes: '\u0417\u0430\u043c\u0435\u0442\u043a\u0438...',
      st: '\u0417\u0430\u043f\u0438\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430!', sm: '\u0414\u0430\u043d\u043d\u044b\u0435 \u0446\u0438\u043a\u043b\u0430 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b.',
      insTitle: '\u0418\u043d\u0441\u0430\u0439\u0442\u044b \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0430',
      phases: [
        { name: '\u0424\u043e\u043b\u043b\u0438\u043a\u0443\u043b\u044f\u0440\u043d\u0430\u044f \u0444\u0430\u0437\u0430', emoji: '\ud83c\udf31', color: '#81C784', tip: '\u042d\u043d\u0435\u0440\u0433\u0438\u044f \u0440\u0430\u0441\u0442\u0451\u0442. \u041e\u0442\u043b\u0438\u0447\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438.' },
        { name: '\u041e\u0432\u0443\u043b\u044f\u0446\u0438\u044f', emoji: '\ud83c\udf38', color: '#FFB74D', tip: '\u041f\u0438\u043a \u044d\u043d\u0435\u0440\u0433\u0438\u0438 \u0438 \u0441\u0432\u044f\u0437\u0438. \u0421\u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0435.' },
        { name: '\u041b\u044e\u0442\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u0444\u0430\u0437\u0430', emoji: '\ud83c\udf19', color: '#9575CD', tip: '\u042d\u043d\u0435\u0440\u0433\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043d\u0438\u0437\u0438\u0442\u044c\u0441\u044f. \u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u0435 \u043a\u043e\u043c\u0444\u043e\u0440\u0442 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443.' }
      ],
      insCards: [
        { label: '\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0444\u0430\u0437\u0430', tip: '\u041a\u0430\u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c' },
        { label: '\u0422\u0440\u0435\u043d\u0434 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f', desc: '\u041e\u0431\u0437\u043e\u0440 30 \u0434\u043d\u0435\u0439' },
        { label: '\u042d\u043d\u0435\u0440\u0433\u0438\u044f \u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0438', desc: '\u0421\u043e\u0432\u0435\u0442\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438' }
      ],
      support: [
        { t: '\u0421\u043f\u0440\u043e\u0441\u0438\u0442\u0435 \u043c\u044f\u0433\u043a\u043e', s: '\u041a\u0430\u043a \u043e\u043d\u0430 \u0441\u0435\u0431\u044f \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442' },
        { t: '\u041f\u043e\u043c\u043e\u0433\u0438\u0442\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438', s: '\u0412\u043e\u0437\u044c\u043c\u0438\u0442\u0435 \u0447\u0430\u0441\u0442\u044c \u0434\u0435\u043b' },
        { t: '\u041f\u0440\u043e\u0441\u0442\u043e \u0431\u0443\u0434\u044c\u0442\u0435 \u0440\u044f\u0434\u043e\u043c', s: '\u0422\u0438\u0445\u043e\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0432\u0430\u0436\u043d\u043e' }
      ]
    },
    ro: {
      title: 'Jurnal de ciclu', sections: [
        { t: 'Menstruatie', label: 'Intensitate', lo: 'Usor', hi: 'Intens' },
        { t: 'Simptome', label: 'Severitate', lo: 'Usor', hi: 'Sever', chips: ['Crampe','Balonare','Durere de cap','Oboseala','Greata','Durere de spate'] },
        { t: 'Dispozitie', label: 'Nivel', lo: 'Scazut', hi: 'Excelent', chips: ['Calm','Anxios','Iritabil','Fericit','Trist','Energic'] }
      ], save: 'Salveaza', notes: 'Adaugati note...',
      st: 'Intrare salvata!', sm: 'Datele ciclului au fost inregistrate.',
      insTitle: 'Insights partener',
      phases: [
        { name: 'Faza foliculara', emoji: '\ud83c\udf31', color: '#81C784', tip: 'Energia creste. Moment bun pentru activitati impreuna.' },
        { name: 'Ovulatie', emoji: '\ud83c\udf38', color: '#FFB74D', tip: 'Energie de varf. Planificati ceva special.' },
        { name: 'Faza luteala', emoji: '\ud83c\udf19', color: '#9575CD', tip: 'Energia poate scadea. Oferiti confort si sprijin.' }
      ],
      insCards: [
        { label: 'Faza curenta', tip: 'Cum sa sprijiniti' },
        { label: 'Tendinta dispozitie', desc: 'Ultimele 30 zile' },
        { label: 'Energie si nevoi', desc: 'Sugestii de sprijin' }
      ],
      support: [
        { t: 'Intreaba cu blandete', s: 'Cum se simte astazi' },
        { t: 'Ajutor practic', s: 'Preluati din sarcini' },
        { t: 'Fiti prezent', s: 'Compania tacuta conteaza' }
      ]
    }
  };

  var moodData = [65, 72, 58, 45, 52, 68, 74, 60, 48, 55, 70, 78, 62, 50, 58, 65, 72, 55, 42, 58, 68, 75, 60, 48, 55, 64, 72, 68, 58, 70];
  var energyData = [70, 68, 55, 40, 48, 62, 72, 58, 42, 50, 65, 75, 60, 45, 52, 60, 68, 50, 38, 52, 64, 70, 55, 44, 50, 60, 68, 65, 55, 66];

  function getLang() { var p = window.location.pathname; return p.indexOf('/ru') === 0 ? 'ru' : p.indexOf('/ro') === 0 ? 'ro' : 'en'; }
  function loadCSS(f) { if (document.getElementById('demo-css-' + f)) return; var b = (window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0) ? '../' : ''; var l = document.createElement('link'); l.id = 'demo-css-' + f; l.rel = 'stylesheet'; l.href = b + 'assets/demos/' + f; document.head.appendChild(l); }

  function makeLine(data, color, w, h) {
    var px = 12, py = 8, max = 100;
    var pts = data.map(function (v, i) {
      return ((i / (data.length - 1)) * (w - px * 2) + px) + ',' + (h - py - (v / max) * (h - py * 2));
    });
    var area = 'M' + pts[0] + ' L' + pts.join(' L') + ' L' + (w - px) + ',' + (h - py) + ' L' + px + ',' + (h - py) + ' Z';
    return '<path d="' + area + '" fill="' + color + '" opacity="0.12"/>' +
      '<polyline points="' + pts.join(' ') + '" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  }

  function showInsights(screen, t, closeFn) {
    loadCSS('barometer.css');
    var phase = t.phases[0];
    var w = 260, h = 90;

    var slides = [
      // Slide 1: Current phase + tip
      '<div class="demo-insight-slide active">' +
        '<div style="font-size:48px;margin-bottom:12px">' + phase.emoji + '</div>' +
        '<div class="demo-kpi-label">' + t.insCards[0].label + '</div>' +
        '<div class="demo-kpi-value" style="color:' + phase.color + '">' + phase.name + '</div>' +
        '<div class="demo-chart-wrap" style="margin-top:12px;text-align:center">' +
        '<div style="font-size:12px;font-weight:600;color:#44566f;margin-bottom:8px">' + t.insCards[0].tip + '</div>' +
        '<div style="font-size:13px;color:#7b8fa6;line-height:1.5">' + phase.tip + '</div>' +
        '</div></div>',
      // Slide 2: Mood trend chart
      '<div class="demo-insight-slide">' +
        '<div class="demo-kpi-label">' + t.insCards[1].label + '</div>' +
        '<div class="demo-kpi-value">\ud83d\ude0a</div>' +
        '<div class="demo-kpi-desc">' + t.insCards[1].desc + '</div>' +
        '<div class="demo-chart-wrap"><svg viewBox="0 0 ' + w + ' ' + h + '">' + makeLine(moodData, '#FFB74D', w, h) + '</svg></div>' +
        '</div>',
      // Slide 3: Energy + support suggestions
      '<div class="demo-insight-slide">' +
        '<div class="demo-kpi-label">' + t.insCards[2].label + '</div>' +
        '<div class="demo-kpi-value">\u26a1</div>' +
        '<div class="demo-kpi-desc">' + t.insCards[2].desc + '</div>' +
        '<div class="demo-chart-wrap"><svg viewBox="0 0 ' + w + ' ' + h + '">' + makeLine(energyData, '#81C784', w, h) + '</svg>' +
        '<div style="margin-top:12px">' + t.support.map(function (s) {
          return '<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:8px"><div style="width:6px;height:6px;border-radius:50%;background:#81C784;margin-top:6px;flex-shrink:0"></div><div><div style="font-size:12px;font-weight:600;color:#0f172a">' + s.t + '</div><div style="font-size:11px;color:#7b8fa6">' + s.s + '</div></div></div>';
        }).join('') + '</div></div></div>'
    ];

    var ins = document.createElement('div');
    ins.className = 'demo-insights';
    ins.innerHTML = '<div class="demo-insights-header">' + t.insTitle + '</div>' +
      '<div class="demo-insights-slides">' + slides.join('') + '</div>' +
      '<div class="demo-dots"><div class="demo-dot active"></div><div class="demo-dot"></div><div class="demo-dot"></div></div>';
    screen.appendChild(ins);

    var cur = 0;
    var allSlides = ins.querySelectorAll('.demo-insight-slide');
    var allDots = ins.querySelectorAll('.demo-dot');
    var iv = setInterval(function () {
      cur++;
      if (cur >= 3) { clearInterval(iv); setTimeout(closeFn, 1200); return; }
      for (var j = 0; j < allSlides.length; j++) {
        allSlides[j].classList.toggle('active', j === cur);
        allDots[j].classList.toggle('active', j === cur);
      }
    }, 3000);
  }

  function open() {
    var t = i18n[getLang()]; loadCSS('common.css'); loadCSS('cycle.css');
    var ov = document.createElement('div'); ov.className = 'demo-overlay';
    var secs = t.sections.map(function (s, i) {
      var chips = (s.chips || []).map(function (c) { return '<div class="demo-symptom-chip">' + c + '</div>'; }).join('');
      return '<div class="demo-section" data-s="' + i + '"><div class="demo-section-header"><span class="demo-section-title">' + s.t + '</span><span class="demo-section-chevron">\u25BC</span></div>' +
        '<div class="demo-section-body"><div class="demo-section-inner">' +
        '<div class="demo-card-sub">' + s.label + '</div>' +
        '<div class="demo-cycle-slider"><div class="demo-cycle-fill" style="width:50%"></div><div class="demo-cycle-thumb" style="left:50%"></div></div>' +
        '<div class="demo-cycle-label"><span>' + s.lo + '</span><span>' + s.hi + '</span></div>' +
        (chips ? '<div class="demo-chips-grid">' + chips + '</div>' : '') +
        '<textarea class="demo-cycle-notes" placeholder="' + t.notes + '" rows="2"></textarea>' +
        '</div></div></div>';
    }).join('');

    ov.innerHTML = '<div class="demo-phone"><button class="demo-close">&times;</button><div class="demo-screen"><div class="demo-content">' +
      '<div class="demo-header">' + t.title + '</div>' + secs +
      '<button class="demo-btn-primary" style="margin-top:8px">' + t.save + '</button>' +
      '</div></div></div>';
    document.body.appendChild(ov); document.body.style.overflow = 'hidden';

    function close() { ov.classList.add('closing'); setTimeout(function () { ov.remove(); document.body.style.overflow = ''; }, 250); }
    ov.querySelector('.demo-close').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });

    ov.querySelectorAll('.demo-section-header').forEach(function (hd) {
      hd.addEventListener('click', function () { hd.parentElement.classList.toggle('open'); });
    });

    ov.querySelectorAll('.demo-symptom-chip').forEach(function (chip) {
      chip.addEventListener('click', function () { chip.classList.toggle('selected'); });
    });

    ov.querySelectorAll('.demo-cycle-slider').forEach(function (track) {
      var fill = track.querySelector('.demo-cycle-fill');
      var thumb = track.querySelector('.demo-cycle-thumb');
      var dragging = false;
      function set(v) { v = Math.max(0, Math.min(100, v)); fill.style.width = v + '%'; thumb.style.left = v + '%'; }
      function pct(e) { var r = track.getBoundingClientRect(); return ((e.touches ? e.touches[0].clientX : e.clientX) - r.left) / r.width * 100; }
      track.addEventListener('mousedown', function (e) { dragging = true; set(pct(e)); e.preventDefault(); });
      track.addEventListener('touchstart', function (e) { dragging = true; set(pct(e)); e.preventDefault(); }, { passive: false });
      window.addEventListener('mousemove', function (e) { if (dragging) set(pct(e)); });
      window.addEventListener('touchmove', function (e) { if (dragging) { set(pct(e)); e.preventDefault(); } }, { passive: false });
      window.addEventListener('mouseup', function () { dragging = false; });
      window.addEventListener('touchend', function () { dragging = false; });
    });

    ov.querySelector('.demo-btn-primary').addEventListener('click', function () {
      var scr = ov.querySelector('.demo-screen');
      var suc = document.createElement('div'); suc.className = 'demo-success';
      suc.innerHTML = '<div class="demo-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="demo-success-title">' + t.st + '</div><div class="demo-success-msg">' + t.sm + '</div>';
      scr.appendChild(suc);
      setTimeout(function () { suc.remove(); showInsights(scr, t, close); }, 1500);
    });
  }
  window.openCycleDemo = open;
})();
