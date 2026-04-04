/* Daily Intimacy Demo */
(function () {
  var i18n = {
    en: { title: 'Daily Intimacy', habits: [
      { t: 'Morning greeting', d: 'Send a sweet good-morning text' },
      { t: 'Express gratitude', d: 'Tell your partner one thing you appreciate' },
      { t: 'Thinking of you', d: 'Send a random message' },
      { t: 'Daily compliment', d: 'Give a genuine compliment' },
      { t: 'Goodnight ritual', d: 'Maintain a goodnight routine' }
    ], prog: '{n}/5 completed', st: 'Done for today!', sm: 'All habits completed.' },
    ru: { title: '\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u0430\u044f \u0431\u043b\u0438\u0437\u043e\u0441\u0442\u044c', habits: [
      { t: '\u0423\u0442\u0440\u0435\u043d\u043d\u0435\u0435 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435', d: '\u041e\u0442\u043f\u0440\u0430\u0432\u044c \u0434\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e' },
      { t: '\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c', d: '\u0421\u043a\u0430\u0436\u0438 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0443 \u0447\u0442\u043e \u0446\u0435\u043d\u0438\u0448\u044c' },
      { t: '\u0414\u0443\u043c\u0430\u044e \u043e \u0442\u0435\u0431\u0435', d: '\u041e\u0442\u043f\u0440\u0430\u0432\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435' },
      { t: '\u041a\u043e\u043c\u043f\u043b\u0438\u043c\u0435\u043d\u0442', d: '\u0421\u0434\u0435\u043b\u0430\u0439 \u0438\u0441\u043a\u0440\u0435\u043d\u043d\u0438\u0439 \u043a\u043e\u043c\u043f\u043b\u0438\u043c\u0435\u043d\u0442' },
      { t: '\u0420\u0438\u0442\u0443\u0430\u043b \u043d\u0430 \u043d\u043e\u0447\u044c', d: '\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439 \u0440\u0438\u0442\u0443\u0430\u043b' }
    ], prog: '{n}/5 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e', st: '\u0413\u043e\u0442\u043e\u0432\u043e!', sm: '\u0412\u0441\u0435 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b.' },
    ro: { title: 'Intimitate zilnica', habits: [
      { t: 'Salut de dimineata', d: 'Trimite un mesaj dulce' },
      { t: 'Exprima recunostinta', d: 'Spune partenerului ce apreciezi' },
      { t: 'Ma gandesc la tine', d: 'Trimite un mesaj spontan' },
      { t: 'Compliment zilnic', d: 'Ofera un compliment sincer' },
      { t: 'Ritual de noapte', d: 'Mentine ritualul de noapte buna' }
    ], prog: '{n}/5 completate', st: 'Gata pentru azi!', sm: 'Toate obiceiurile completate.' }
  };

  function getLang() { var p = window.location.pathname; return p.indexOf('/ru') === 0 ? 'ru' : p.indexOf('/ro') === 0 ? 'ro' : 'en'; }
  function loadCSS(f) { if (document.getElementById('demo-css-' + f)) return; var b = (window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0) ? '../' : ''; var l = document.createElement('link'); l.id = 'demo-css-' + f; l.rel = 'stylesheet'; l.href = b + 'assets/demos/' + f; document.head.appendChild(l); }

  function open() {
    var t = i18n[getLang()]; loadCSS('common.css'); loadCSS('daily.css');
    var done = 0;
    var ov = document.createElement('div'); ov.className = 'demo-overlay';
    var habitsHtml = t.habits.map(function (h, i) {
      return '<div class="demo-habit" data-i="' + i + '"><div class="demo-habit-check"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="demo-habit-text">' + h.t + '</div></div>';
    }).join('');
    ov.innerHTML = '<div class="demo-phone"><button class="demo-close">&times;</button><div class="demo-screen"><div class="demo-content">' +
      '<div class="demo-header">' + t.title + '</div>' + habitsHtml +
      '<div class="demo-progress"><div class="demo-progress-fill" id="d-pf" style="width:0%"></div></div>' +
      '<div class="demo-progress-label" id="d-pl">' + t.prog.replace('{n}', '0') + '</div>' +
      '</div></div></div>';
    document.body.appendChild(ov); document.body.style.overflow = 'hidden';

    function close() { ov.classList.add('closing'); setTimeout(function () { ov.remove(); document.body.style.overflow = ''; }, 250); }
    ov.querySelector('.demo-close').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });

    var fill = ov.querySelector('#d-pf'), label = ov.querySelector('#d-pl');
    ov.querySelectorAll('.demo-habit').forEach(function (el) {
      el.addEventListener('click', function () {
        if (el.classList.contains('done')) return;
        el.classList.add('done');
        done++;
        fill.style.width = (done / 5 * 100) + '%';
        label.textContent = t.prog.replace('{n}', String(done));
        if (done === 5) {
          setTimeout(function () {
            var scr = ov.querySelector('.demo-screen');
            var suc = document.createElement('div'); suc.className = 'demo-success';
            suc.innerHTML = '<div class="demo-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="demo-success-title">' + t.st + '</div><div class="demo-success-msg">' + t.sm + '</div>';
            scr.appendChild(suc); setTimeout(close, 2000);
          }, 400);
        }
      });
    });
  }
  window.openDailyDemo = open;
})();
