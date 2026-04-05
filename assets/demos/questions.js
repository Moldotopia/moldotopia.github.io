/* Deep Connection Questions Demo */
(function () {
  var i18n = {
    en: {
      title: 'Deep Connection', cats: ['Feelings', 'Connection', 'Intimacy'],
      prev: '\u2190 Prev', next: 'Next \u2192', shuffle: 'Shuffle',
      st: 'Explore deeper together', sm: 'Questions open doors to connection.',
      qs: [
        { c: 0, q: 'What emotion has been visiting you most this week?', e: '\ud83d\udcad' },
        { c: 0, q: 'When did you feel most calm recently \u2014 and what helped?', e: '\ud83c\udf3f' },
        { c: 1, q: 'When do you feel most connected to me?', e: '\ud83d\udc9e' },
        { c: 1, q: 'What small moment from this week would you like to repeat?', e: '\u2728' },
        { c: 2, q: 'What makes you feel safe enough to be fully yourself with me?', e: '\ud83d\udd12' },
        { c: 2, q: 'What kind of touch feels most comforting to you right now?', e: '\ud83e\udee7' }
      ]
    },
    ru: {
      title: '\u0413\u043b\u0443\u0431\u043e\u043a\u0430\u044f \u0441\u0432\u044f\u0437\u044c', cats: ['\u0427\u0443\u0432\u0441\u0442\u0432\u0430', '\u0421\u0432\u044f\u0437\u044c', '\u0411\u043b\u0438\u0437\u043e\u0441\u0442\u044c'],
      prev: '\u2190 \u041d\u0430\u0437\u0430\u0434', next: '\u0414\u0430\u043b\u0435\u0435 \u2192', shuffle: '\u041f\u0435\u0440\u0435\u043c\u0435\u0448\u0430\u0442\u044c',
      st: '\u0418\u0441\u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0433\u043b\u0443\u0431\u0436\u0435', sm: '\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u044e\u0442 \u0434\u0432\u0435\u0440\u0438.',
      qs: [
        { c: 0, q: '\u041a\u0430\u043a\u0430\u044f \u044d\u043c\u043e\u0446\u0438\u044f \u043f\u0440\u0435\u043e\u0431\u043b\u0430\u0434\u0430\u043b\u0430 \u043d\u0430 \u044d\u0442\u043e\u0439 \u043d\u0435\u0434\u0435\u043b\u0435?', e: '\ud83d\udcad' },
        { c: 0, q: '\u041a\u043e\u0433\u0434\u0430 \u0432\u044b \u0447\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0438 \u0441\u0435\u0431\u044f \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e?', e: '\ud83c\udf3f' },
        { c: 1, q: '\u041a\u043e\u0433\u0434\u0430 \u0432\u044b \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u0441\u0435\u0431\u044f \u0431\u043b\u0438\u0436\u0435 \u0432\u0441\u0435\u0433\u043e \u043a\u043e \u043c\u043d\u0435?', e: '\ud83d\udc9e' },
        { c: 1, q: '\u041a\u0430\u043a\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0435\u0434\u0435\u043b\u0438 \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c?', e: '\u2728' },
        { c: 2, q: '\u0427\u0442\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0432\u0430\u043c \u0431\u044b\u0442\u044c \u0441\u043e\u0431\u043e\u0439 \u0441\u043e \u043c\u043d\u043e\u0439?', e: '\ud83d\udd12' },
        { c: 2, q: '\u041a\u0430\u043a\u043e\u0435 \u043f\u0440\u0438\u043a\u043e\u0441\u043d\u043e\u0432\u0435\u043d\u0438\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u0440\u0438\u044f\u0442\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e?', e: '\ud83e\udee7' }
      ]
    },
    ro: {
      title: 'Conexiune profunda', cats: ['Sentimente', 'Conexiune', 'Intimitate'],
      prev: '\u2190 Inapoi', next: 'Urmatorul \u2192', shuffle: 'Amesteca',
      st: 'Explorati mai profund', sm: 'Intrebarile deschid usi.',
      qs: [
        { c: 0, q: 'Ce emotie v-a vizitat cel mai des saptamana aceasta?', e: '\ud83d\udcad' },
        { c: 0, q: 'Cand v-ati simtit cel mai calm recent?', e: '\ud83c\udf3f' },
        { c: 1, q: 'Cand va simtiti cel mai conectat la mine?', e: '\ud83d\udc9e' },
        { c: 1, q: 'Ce moment din saptamana ati vrea sa repetati?', e: '\u2728' },
        { c: 2, q: 'Ce va face sa va simtiti suficient de in siguranta?', e: '\ud83d\udd12' },
        { c: 2, q: 'Ce tip de atingere vi se pare cel mai reconfortant?', e: '\ud83e\udee7' }
      ]
    }
  };

  function getLang() { var p = window.location.pathname; return p.indexOf('/ru') === 0 ? 'ru' : p.indexOf('/ro') === 0 ? 'ro' : 'en'; }
  function loadCSS(f) { if (document.getElementById('demo-css-' + f)) return; var b = (window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0) ? '../' : ''; var l = document.createElement('link'); l.id = 'demo-css-' + f; l.rel = 'stylesheet'; l.href = b + 'assets/demos/' + f; document.head.appendChild(l); }

  function open() {
    var t = i18n[getLang()]; loadCSS('common.css'); loadCSS('questions.css');
    var activeCat = -1, curIdx = 0, navCount = 0;
    var filtered = t.qs.slice();

    var ov = document.createElement('div'); ov.className = 'demo-overlay';
    ov.innerHTML = '<div class="demo-phone"><button class="demo-close">&times;</button><div class="demo-screen"><div class="demo-content">' +
      '<div class="demo-header">' + t.title + '</div>' +
      '<div class="demo-chips" id="d-chips"></div>' +
      '<div class="demo-question-card" id="d-qcard"></div>' +
      '<div class="demo-q-nav">' +
      '<button class="demo-q-btn" id="d-prev">' + t.prev + '</button>' +
      '<button class="demo-q-btn primary" id="d-next">' + t.next + '</button>' +
      '</div><button class="demo-q-btn" id="d-shuf" style="width:100%;margin-top:8px">' + t.shuffle + '</button>' +
      '</div></div></div>';
    document.body.appendChild(ov); document.body.style.overflow = 'hidden';

    function close() { ov.classList.add('closing'); setTimeout(function () { ov.remove(); document.body.style.overflow = ''; }, 250); }
    ov.querySelector('.demo-close').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });

    var chipsEl = ov.querySelector('#d-chips');
    var cardEl = ov.querySelector('#d-qcard');

    function renderChips() {
      chipsEl.innerHTML = t.cats.map(function (c, i) {
        return '<div class="demo-chip' + (activeCat === i ? ' active' : '') + '" data-c="' + i + '">' + c + '</div>';
      }).join('');
      chipsEl.querySelectorAll('.demo-chip').forEach(function (el) {
        el.addEventListener('click', function () {
          var ci = parseInt(el.dataset.c);
          activeCat = activeCat === ci ? -1 : ci;
          filtered = activeCat === -1 ? t.qs.slice() : t.qs.filter(function (q) { return q.c === activeCat; });
          curIdx = 0; renderChips(); showQ();
        });
      });
    }

    function showQ() {
      if (!filtered.length) return;
      var q = filtered[curIdx];
      cardEl.innerHTML = '<div class="demo-question-emoji">' + q.e + '</div><div class="demo-question-text">' + q.q + '</div><div class="demo-question-cat">' + t.cats[q.c] + '</div>';
    }

    function nav(dir) {
      curIdx = (curIdx + dir + filtered.length) % filtered.length;
      showQ(); navCount++;
      if (navCount >= 4) {
        setTimeout(function () {
          var scr = ov.querySelector('.demo-screen');
          var suc = document.createElement('div'); suc.className = 'demo-success';
          suc.innerHTML = '<div class="demo-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="demo-success-title">' + t.st + '</div><div class="demo-success-msg">' + t.sm + '</div>';
          scr.innerHTML='';scr.scrollTop=0;scr.appendChild(suc); setTimeout(close, 2000);
        }, 300);
      }
    }

    ov.querySelector('#d-prev').addEventListener('click', function () { nav(-1); });
    ov.querySelector('#d-next').addEventListener('click', function () { nav(1); });
    ov.querySelector('#d-shuf').addEventListener('click', function () {
      curIdx = Math.floor(Math.random() * filtered.length); showQ(); navCount++;
    });

    renderChips(); showQ();
  }
  window.openQuestionsDemo = open;
})();
