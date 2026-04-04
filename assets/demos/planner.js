/* Activity Planner Demo */
(function () {
  var i18n = {
    en: { title: 'Activity Planner', days: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], accept: 'Accept', decline: 'Decline', st: 'Activity accepted!', sm: 'Enjoy your time together.', noAct: 'No activities planned for this day.', acts: [
      { day: 2, t: 'Candlelit Dinner', time: '7:00 PM' },
      { day: 4, t: 'Sunset Walk', time: '6:30 PM' },
      { day: 6, t: 'Movie Night', time: '8:00 PM' }
    ]},
    ru: { title: '\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0449\u0438\u043a', days: ['\u041f\u043d','\u0412\u0442','\u0421\u0440','\u0427\u0442','\u041f\u0442','\u0421\u0431','\u0412\u0441'], accept: '\u041f\u0440\u0438\u043d\u044f\u0442\u044c', decline: '\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c', st: '\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u043d\u044f\u0442\u0430!', sm: '\u041f\u0440\u0438\u044f\u0442\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438.', noAct: '\u041d\u0435\u0442 \u043f\u043b\u0430\u043d\u043e\u0432 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c.', acts: [
      { day: 2, t: '\u0423\u0436\u0438\u043d \u043f\u0440\u0438 \u0441\u0432\u0435\u0447\u0430\u0445', time: '19:00' },
      { day: 4, t: '\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u043d\u0430 \u0437\u0430\u043a\u0430\u0442\u0435', time: '18:30' },
      { day: 6, t: '\u041a\u0438\u043d\u043e-\u0432\u0435\u0447\u0435\u0440', time: '20:00' }
    ]},
    ro: { title: 'Planificator', days: ['Lun','Mar','Mie','Joi','Vin','Sam','Dum'], accept: 'Accepta', decline: 'Refuza', st: 'Activitate acceptata!', sm: 'Bucurati-va de timp impreuna.', noAct: 'Nicio activitate planificata.', acts: [
      { day: 2, t: 'Cina la lumanari', time: '19:00' },
      { day: 4, t: 'Plimbare la apus', time: '18:30' },
      { day: 6, t: 'Seara de film', time: '20:00' }
    ]}
  };

  function getLang() { var p = window.location.pathname; return p.indexOf('/ru') === 0 ? 'ru' : p.indexOf('/ro') === 0 ? 'ro' : 'en'; }
  function loadCSS(f) { if (document.getElementById('demo-css-' + f)) return; var b = (window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0) ? '../' : ''; var l = document.createElement('link'); l.id = 'demo-css-' + f; l.rel = 'stylesheet'; l.href = b + 'assets/demos/' + f; document.head.appendChild(l); }

  function open() {
    var t = i18n[getLang()]; loadCSS('common.css'); loadCSS('planner.css');
    var today = new Date(); var dow = (today.getDay() + 6) % 7;
    var actDays = t.acts.map(function (a) { return a.day; });

    var ov = document.createElement('div'); ov.className = 'demo-overlay';
    var calDays = t.days.map(function (d) { return '<div class="demo-cal-day-label">' + d + '</div>'; }).join('');
    var dayCells = '';
    for (var i = 0; i < 7; i++) {
      var dayNum = today.getDate() - dow + i;
      var cls = 'demo-cal-day' + (i === dow ? ' today selected' : '') + (actDays.indexOf(i) >= 0 ? ' has-act' : '');
      dayCells += '<div class="' + cls + '" data-d="' + i + '">' + dayNum + (actDays.indexOf(i) >= 0 ? '<div class="demo-cal-dot"></div>' : '') + '</div>';
    }

    ov.innerHTML = '<div class="demo-phone"><button class="demo-close">&times;</button><div class="demo-screen"><div class="demo-content">' +
      '<div class="demo-header">' + t.title + '</div>' +
      '<div class="demo-card"><div class="demo-cal-grid">' + calDays + dayCells + '</div></div>' +
      '<div id="d-act"></div>' +
      '</div></div></div>';
    document.body.appendChild(ov); document.body.style.overflow = 'hidden';

    function close() { ov.classList.add('closing'); setTimeout(function () { ov.remove(); document.body.style.overflow = ''; }, 250); }
    ov.querySelector('.demo-close').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });

    var actEl = ov.querySelector('#d-act');
    function showAct(dayIdx) {
      var act = t.acts.find(function (a) { return a.day === dayIdx; });
      if (!act) { actEl.innerHTML = '<div style="text-align:center;color:#7b8fa6;font-size:13px;padding:16px">' + t.noAct + '</div>'; return; }
      actEl.innerHTML = '<div class="demo-activity"><div class="demo-activity-title">' + act.t + '</div><div class="demo-activity-time">' + act.time + '</div>' +
        '<div class="demo-activity-actions"><button class="demo-act-btn accept">' + t.accept + '</button><button class="demo-act-btn decline">' + t.decline + '</button></div></div>';
      actEl.querySelector('.accept').addEventListener('click', function () {
        actEl.querySelector('.demo-activity').classList.add('accepted');
        actEl.querySelector('.demo-activity-actions').innerHTML = '<div style="color:#065F46;font-weight:600;font-size:13px;text-align:center;width:100%">&#10003; Accepted</div>';
        setTimeout(function () {
          var scr = ov.querySelector('.demo-screen');
          var suc = document.createElement('div'); suc.className = 'demo-success';
          suc.innerHTML = '<div class="demo-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="demo-success-title">' + t.st + '</div><div class="demo-success-msg">' + t.sm + '</div>';
          scr.appendChild(suc); setTimeout(close, 2000);
        }, 800);
      });
    }

    ov.querySelectorAll('.demo-cal-day').forEach(function (el) {
      el.addEventListener('click', function () {
        ov.querySelectorAll('.demo-cal-day').forEach(function (d) { d.classList.remove('selected'); });
        el.classList.add('selected');
        showAct(parseInt(el.dataset.d));
      });
    });

    showAct(dow);
  }
  window.openPlannerDemo = open;
})();
