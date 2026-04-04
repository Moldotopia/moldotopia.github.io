/* Cycle Tracker Demo */
(function () {
  var i18n = {
    en: { title: 'Cycle Journal', sections: [
      { t: 'Menstruation', label: 'Flow intensity', lo: 'Light', hi: 'Heavy' },
      { t: 'Symptoms', label: 'Severity', lo: 'Mild', hi: 'Severe', chips: ['Cramps','Bloating','Headache','Fatigue','Nausea','Back pain'] },
      { t: 'Mood', label: 'Mood level', lo: 'Low', hi: 'Great', chips: ['Calm','Anxious','Irritable','Happy','Sad','Energetic'] }
    ], save: 'Save Entry', notes: 'Add notes...', st: 'Entry saved!', sm: 'Your cycle data has been recorded.' },
    ru: { title: '\u0416\u0443\u0440\u043d\u0430\u043b \u0446\u0438\u043a\u043b\u0430', sections: [
      { t: '\u041c\u0435\u043d\u0441\u0442\u0440\u0443\u0430\u0446\u0438\u044f', label: '\u0418\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u044c', lo: '\u0421\u043b\u0430\u0431\u043e', hi: '\u0421\u0438\u043b\u044c\u043d\u043e' },
      { t: '\u0421\u0438\u043c\u043f\u0442\u043e\u043c\u044b', label: '\u0422\u044f\u0436\u0435\u0441\u0442\u044c', lo: '\u041b\u0435\u0433\u043a\u043e', hi: '\u0421\u0438\u043b\u044c\u043d\u043e', chips: ['\u0421\u043f\u0430\u0437\u043c\u044b','\u0412\u0437\u0434\u0443\u0442\u0438\u0435','\u0413\u043e\u043b\u043e\u0432\u043d\u0430\u044f \u0431\u043e\u043b\u044c','\u0423\u0441\u0442\u0430\u043b\u043e\u0441\u0442\u044c','\u0422\u043e\u0448\u043d\u043e\u0442\u0430','\u0411\u043e\u043b\u044c \u0432 \u0441\u043f\u0438\u043d\u0435'] },
      { t: '\u041d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435', label: '\u0423\u0440\u043e\u0432\u0435\u043d\u044c', lo: '\u041d\u0438\u0437\u043a\u043e\u0435', hi: '\u041e\u0442\u043b\u0438\u0447\u043d\u043e\u0435', chips: ['\u0421\u043f\u043e\u043a\u043e\u0439\u0441\u0442\u0432\u0438\u0435','\u0422\u0440\u0435\u0432\u043e\u0433\u0430','\u0420\u0430\u0437\u0434\u0440\u0430\u0436\u0435\u043d\u0438\u0435','\u0420\u0430\u0434\u043e\u0441\u0442\u044c','\u0413\u0440\u0443\u0441\u0442\u044c','\u042d\u043d\u0435\u0440\u0433\u0438\u044f'] }
    ], save: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c', notes: '\u0417\u0430\u043c\u0435\u0442\u043a\u0438...', st: '\u0417\u0430\u043f\u0438\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430!', sm: '\u0414\u0430\u043d\u043d\u044b\u0435 \u0446\u0438\u043a\u043b\u0430 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b.' },
    ro: { title: 'Jurnal de ciclu', sections: [
      { t: 'Menstruatie', label: 'Intensitate', lo: 'Usor', hi: 'Intens' },
      { t: 'Simptome', label: 'Severitate', lo: 'Usor', hi: 'Sever', chips: ['Crampe','Balonare','Durere de cap','Oboseala','Greata','Durere de spate'] },
      { t: 'Dispozitie', label: 'Nivel', lo: 'Scazut', hi: 'Excelent', chips: ['Calm','Anxios','Iritabil','Fericit','Trist','Energic'] }
    ], save: 'Salveaza', notes: 'Adaugati note...', st: 'Intrare salvata!', sm: 'Datele ciclului au fost inregistrate.' }
  };

  function getLang() { var p = window.location.pathname; return p.indexOf('/ru') === 0 ? 'ru' : p.indexOf('/ro') === 0 ? 'ro' : 'en'; }
  function loadCSS(f) { if (document.getElementById('demo-css-' + f)) return; var b = (window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0) ? '../' : ''; var l = document.createElement('link'); l.id = 'demo-css-' + f; l.rel = 'stylesheet'; l.href = b + 'assets/demos/' + f; document.head.appendChild(l); }

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

    // Collapsible sections
    ov.querySelectorAll('.demo-section-header').forEach(function (hd) {
      hd.addEventListener('click', function () { hd.parentElement.classList.toggle('open'); });
    });

    // Symptom chips
    ov.querySelectorAll('.demo-symptom-chip').forEach(function (chip) {
      chip.addEventListener('click', function () { chip.classList.toggle('selected'); });
    });

    // Sliders
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

    // Save
    ov.querySelector('.demo-btn-primary').addEventListener('click', function () {
      var scr = ov.querySelector('.demo-screen');
      var suc = document.createElement('div'); suc.className = 'demo-success';
      suc.innerHTML = '<div class="demo-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="demo-success-title">' + t.st + '</div><div class="demo-success-msg">' + t.sm + '</div>';
      scr.appendChild(suc); setTimeout(close, 2000);
    });
  }
  window.openCycleDemo = open;
})();
