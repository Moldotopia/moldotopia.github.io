/* Activity Planner Demo - matches app calendar + activity cards */
(function () {
  var i18n = {
    en: {
      title: 'Activity Planner',
      dayLabels: ['S','M','T','W','T','F','S'],
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      accept: 'Accept', decline: 'Decline',
      st: 'Activity accepted!', sm: 'Enjoy your time together.',
      empty: 'No activities for this day. Tap a day with a ring.',
      acts: [
        { dow: 3, t: 'Candlelit Dinner', time: '7:00 PM', emoji: '\u2764\ufe0f', moods: ['Romantic','Cozy'] },
        { dow: 5, t: 'Sunset Walk', time: '6:30 PM', emoji: '\ud83c\udf05', moods: ['Calm','Connected'] },
        { dow: 6, t: 'Movie Night', time: '8:00 PM', emoji: '\ud83c\udf7f', moods: ['Fun','Relaxed'] }
      ]
    },
    ru: {
      title: '\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0449\u0438\u043a',
      dayLabels: ['\u0412\u0441','\u041f\u043d','\u0412\u0442','\u0421\u0440','\u0427\u0442','\u041f\u0442','\u0421\u0431'],
      months: ['\u042f\u043d\u0432\u0430\u0440\u044c','\u0424\u0435\u0432\u0440\u0430\u043b\u044c','\u041c\u0430\u0440\u0442','\u0410\u043f\u0440\u0435\u043b\u044c','\u041c\u0430\u0439','\u0418\u044e\u043d\u044c','\u0418\u044e\u043b\u044c','\u0410\u0432\u0433\u0443\u0441\u0442','\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c','\u041e\u043a\u0442\u044f\u0431\u0440\u044c','\u041d\u043e\u044f\u0431\u0440\u044c','\u0414\u0435\u043a\u0430\u0431\u0440\u044c'],
      accept: '\u041f\u0440\u0438\u043d\u044f\u0442\u044c', decline: '\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c',
      st: '\u041f\u0440\u0438\u043d\u044f\u0442\u043e!', sm: '\u041f\u0440\u0438\u044f\u0442\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438.',
      empty: '\u041d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0435\u0439. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0434\u0435\u043d\u044c \u0441 \u043a\u043e\u043b\u044c\u0446\u043e\u043c.',
      acts: [
        { dow: 3, t: '\u0423\u0436\u0438\u043d \u043f\u0440\u0438 \u0441\u0432\u0435\u0447\u0430\u0445', time: '19:00', emoji: '\u2764\ufe0f', moods: ['\u0420\u043e\u043c\u0430\u043d\u0442\u0438\u043a\u0430','\u0423\u044e\u0442'] },
        { dow: 5, t: '\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430', time: '18:30', emoji: '\ud83c\udf05', moods: ['\u0421\u043f\u043e\u043a\u043e\u0439\u0441\u0442\u0432\u0438\u0435','\u0421\u0432\u044f\u0437\u044c'] },
        { dow: 6, t: '\u041a\u0438\u043d\u043e-\u0432\u0435\u0447\u0435\u0440', time: '20:00', emoji: '\ud83c\udf7f', moods: ['\u0412\u0435\u0441\u0435\u043b\u044c\u0435','\u041e\u0442\u0434\u044b\u0445'] }
      ]
    },
    ro: {
      title: 'Planificator',
      dayLabels: ['D','L','M','M','J','V','S'],
      months: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
      accept: 'Accepta', decline: 'Refuza',
      st: 'Acceptat!', sm: 'Bucurati-va de timp.',
      empty: 'Nicio activitate. Apasati o zi cu inel.',
      acts: [
        { dow: 3, t: 'Cina la lumanari', time: '19:00', emoji: '\u2764\ufe0f', moods: ['Romantic','Confort'] },
        { dow: 5, t: 'Plimbare la apus', time: '18:30', emoji: '\ud83c\udf05', moods: ['Calm','Conectat'] },
        { dow: 6, t: 'Seara de film', time: '20:00', emoji: '\ud83c\udf7f', moods: ['Distractiv','Relaxat'] }
      ]
    }
  };

  function getLang() { var p = window.location.pathname; return p.indexOf('/ru') === 0 ? 'ru' : p.indexOf('/ro') === 0 ? 'ro' : 'en'; }
  function loadCSS(f) { if (document.getElementById('demo-css-' + f)) return; var b = (window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0) ? '../' : ''; var l = document.createElement('link'); l.id = 'demo-css-' + f; l.rel = 'stylesheet'; l.href = b + 'assets/demos/' + f; document.head.appendChild(l); }

  function open() {
    var t = i18n[getLang()]; loadCSS('common.css'); loadCSS('planner.css');
    var now = new Date();
    var year = now.getFullYear(), month = now.getMonth();
    var todayDate = now.getDate(), todayDow = now.getDay();
    var actDows = t.acts.map(function (a) { return a.dow; });

    var ov = document.createElement('div'); ov.className = 'demo-overlay';
    ov.innerHTML = '<div class="demo-phone"><button class="demo-close">&times;</button><div class="demo-screen"><div class="demo-content">' +
      '<div class="demo-header">' + t.title + '</div>' +
      '<div class="demo-card" style="padding:16px">' +
      '<div class="demo-month-header"><button class="demo-month-nav">\u2039</button><div class="demo-month-title">' + t.months[month] + ' ' + year + '</div><button class="demo-month-nav">\u203a</button></div>' +
      '<div class="demo-cal-grid" id="d-cal"></div>' +
      '</div>' +
      '<div id="d-act"></div>' +
      '</div></div></div>';
    document.body.appendChild(ov); document.body.style.overflow = 'hidden';

    function close() { ov.classList.add('closing'); setTimeout(function () { ov.remove(); document.body.style.overflow = ''; }, 250); }
    ov.querySelector('.demo-close').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });

    var calEl = ov.querySelector('#d-cal');
    var actEl = ov.querySelector('#d-act');

    // Build calendar
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var daysInPrev = new Date(year, month, 0).getDate();
    var html = t.dayLabels.map(function (d) { return '<div class="demo-cal-day-label">' + d + '</div>'; }).join('');

    // Previous month filler
    for (var i = 0; i < firstDay; i++) {
      html += '<div class="demo-cal-cell other"><div class="demo-cal-num">' + (daysInPrev - firstDay + 1 + i) + '</div></div>';
    }
    // Current month days
    for (var d = 1; d <= daysInMonth; d++) {
      var dow = (firstDay + d - 1) % 7;
      var isToday = d === todayDate;
      var hasAct = actDows.indexOf(dow) >= 0;
      var cls = 'demo-cal-cell';
      if (isToday) cls += ' today selected';
      if (hasAct) cls += ' has-act';
      html += '<div class="' + cls + '" data-d="' + d + '" data-dow="' + dow + '"><div class="demo-cal-num">' + d + '</div></div>';
    }
    // Next month filler
    var remaining = 7 - ((firstDay + daysInMonth) % 7);
    if (remaining < 7) {
      for (var j = 1; j <= remaining; j++) {
        html += '<div class="demo-cal-cell other"><div class="demo-cal-num">' + j + '</div></div>';
      }
    }
    calEl.innerHTML = html;

    function showAct(dow) {
      var act = t.acts.find(function (a) { return a.dow === dow; });
      if (!act) { actEl.innerHTML = '<div class="demo-act-empty">' + t.empty + '</div>'; return; }
      var moodsHtml = act.moods.map(function (m) { return '<span class="demo-act-mood-chip">' + m + '</span>'; }).join('');
      actEl.innerHTML = '<div class="demo-act-card pending">' +
        '<div class="demo-act-emoji">' + act.emoji + '</div>' +
        '<div class="demo-act-title">' + act.t + '</div>' +
        '<div class="demo-act-time">' + act.time + '</div>' +
        '<div class="demo-act-status pending-badge">Pending</div>' +
        '<div class="demo-act-moods">' + moodsHtml + '</div>' +
        '<div class="demo-act-actions"><button class="demo-act-btn decline">' + t.decline + '</button><button class="demo-act-btn accept">' + t.accept + '</button></div>' +
        '</div>';
      actEl.querySelector('.accept').addEventListener('click', function () {
        var card = actEl.querySelector('.demo-act-card');
        card.classList.remove('pending'); card.classList.add('accepted');
        var badge = card.querySelector('.demo-act-status');
        badge.className = 'demo-act-status accepted-badge'; badge.textContent = '\u2713 Accepted';
        card.querySelector('.demo-act-actions').remove();
        setTimeout(function () {
          var scr = ov.querySelector('.demo-screen');
          var suc = document.createElement('div'); suc.className = 'demo-success';
          suc.innerHTML = '<div class="demo-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="demo-success-title">' + t.st + '</div><div class="demo-success-msg">' + t.sm + '</div>';
          scr.appendChild(suc); setTimeout(close, 2000);
        }, 800);
      });
      actEl.querySelector('.decline').addEventListener('click', function () {
        actEl.querySelector('.demo-act-card').style.opacity = '0.3';
        setTimeout(function () { actEl.innerHTML = '<div class="demo-act-empty">' + t.empty + '</div>'; }, 300);
      });
    }

    calEl.querySelectorAll('.demo-cal-cell:not(.other)').forEach(function (el) {
      el.addEventListener('click', function () {
        calEl.querySelectorAll('.demo-cal-cell').forEach(function (c) { c.classList.remove('selected'); });
        el.classList.add('selected');
        showAct(parseInt(el.dataset.dow));
      });
    });

    showAct(todayDow);
  }
  window.openPlannerDemo = open;
})();
