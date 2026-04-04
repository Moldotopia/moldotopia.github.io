/* Desire Bank Swipe Demo */
(function () {
  var i18n = {
    en: { title: 'Desire Bank', like: 'LIKE', nope: 'NOPE', counter: '{n} of {t} wishes', st: 'Wishes explored!', sm: 'You swiped through the desires.', hint: 'Swipe left or right' },
    ru: { title: '\u0411\u0430\u043d\u043a \u0436\u0435\u043b\u0430\u043d\u0438\u0439', like: '\u0414\u0410', nope: '\u041d\u0415\u0422', counter: '{n} \u0438\u0437 {t}', st: '\u0416\u0435\u043b\u0430\u043d\u0438\u044f \u0438\u0437\u0443\u0447\u0435\u043d\u044b!', sm: '\u0412\u044b \u043f\u0440\u043e\u043b\u0438\u0441\u0442\u0430\u043b\u0438 \u0436\u0435\u043b\u0430\u043d\u0438\u044f.', hint: '\u0421\u0432\u0430\u0439\u043f\u043d\u0438\u0442\u0435 \u0432\u043b\u0435\u0432\u043e \u0438\u043b\u0438 \u0432\u043f\u0440\u0430\u0432\u043e' },
    ro: { title: 'Banca de dorinte', like: 'DA', nope: 'NU', counter: '{n} din {t}', st: 'Dorinte explorate!', sm: 'Ati explorat dorintele.', hint: 'Glisati stanga sau dreapta' }
  };
  var wishes = [
    { title: 'Deep Conversation', desc: 'Share hopes and dreams with open-ended questions.', img: 'deep-conversation.png' },
    { title: 'Stargazing Night', desc: 'Find a dark spot, lie close, spot constellations.', img: 'stargazing-night.png' },
    { title: 'Sunrise Walk', desc: 'Wake early, walk quietly, share intentions.', img: 'sunrise-walk.png' },
    { title: 'Candlelit Dinner', desc: 'A cozy dinner at home with candles and wine.', img: 'candlelit-dinner.png' },
    { title: 'Sunset Watching', desc: 'Wrap in a blanket and watch the sunset together.', img: 'sunset-moment.png' }
  ];

  function getLang() { var p = window.location.pathname; return p.indexOf('/ru') === 0 ? 'ru' : p.indexOf('/ro') === 0 ? 'ro' : 'en'; }
  function loadCSS(f) { if (document.getElementById('demo-css-' + f)) return; var b = (window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0) ? '../' : ''; var l = document.createElement('link'); l.id = 'demo-css-' + f; l.rel = 'stylesheet'; l.href = b + 'assets/demos/' + f; document.head.appendChild(l); }

  function open() {
    var t = i18n[getLang()];
    var base = (window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0) ? '../' : '';
    loadCSS('common.css'); loadCSS('swipe.css');

    var cur = 0;
    var ov = document.createElement('div');
    ov.className = 'demo-overlay';
    ov.innerHTML = '<div class="demo-phone"><button class="demo-close">&times;</button><div class="demo-screen"><div class="demo-content">' +
      '<div class="demo-header">' + t.title + '</div>' +
      '<div class="demo-swipe-stack" id="d-stack"></div>' +
      '<div class="demo-swipe-hint" id="d-hint"><span class="demo-swipe-arrow">\u2190</span> ' + t.hint + ' <span class="demo-swipe-arrow">\u2192</span></div>' +
      '<div class="demo-swipe-counter" id="d-cnt">' + t.counter.replace('{n}', '1').replace('{t}', wishes.length) + '</div>' +
      '</div></div></div>';
    document.body.appendChild(ov);
    document.body.style.overflow = 'hidden';

    var stack = ov.querySelector('#d-stack');
    var cntEl = ov.querySelector('#d-cnt');

    function close() { ov.classList.add('closing'); setTimeout(function () { ov.remove(); document.body.style.overflow = ''; }, 250); }
    ov.querySelector('.demo-close').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });

    function renderCard() {
      if (cur >= wishes.length) {
        var scr = ov.querySelector('.demo-screen');
        var suc = document.createElement('div'); suc.className = 'demo-success';
        suc.innerHTML = '<div class="demo-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>' +
          '<div class="demo-success-title">' + t.st + '</div><div class="demo-success-msg">' + t.sm + '</div>';
        scr.appendChild(suc);
        setTimeout(close, 2000);
        return;
      }
      var w = wishes[cur];
      var card = document.createElement('div');
      card.className = 'demo-swipe-card';
      card.innerHTML = '<img src="' + base + 'assets/images/' + w.img + '" alt="' + w.title + '" draggable="false">' +
        '<div class="demo-swipe-card-body"><h4>' + w.title + '</h4><p>' + w.desc + '</p></div>' +
        '<div class="demo-swipe-badge like">' + t.like + '</div>' +
        '<div class="demo-swipe-badge nope">' + t.nope + '</div>';
      stack.innerHTML = '';
      stack.appendChild(card);
      cntEl.textContent = t.counter.replace('{n}', String(cur + 1)).replace('{t}', String(wishes.length));
      initSwipe(card);
    }

    function initSwipe(card) {
      var startX = 0, dx = 0, dragging = false;
      var likeBadge = card.querySelector('.like');
      var nopeBadge = card.querySelector('.nope');
      var threshold = 80;

      function down(e) { dragging = true; startX = e.touches ? e.touches[0].clientX : e.clientX; card.style.transition = 'none'; e.preventDefault(); }
      function move(e) {
        if (!dragging) return;
        dx = (e.touches ? e.touches[0].clientX : e.clientX) - startX;
        var rot = dx * 0.08;
        card.style.transform = 'translateX(' + dx + 'px) rotate(' + rot + 'deg)';
        var pct = Math.min(1, Math.abs(dx) / threshold);
        if (dx > 0) { likeBadge.style.opacity = pct; nopeBadge.style.opacity = 0; }
        else { nopeBadge.style.opacity = pct; likeBadge.style.opacity = 0; }
        e.preventDefault();
      }
      function up() {
        if (!dragging) return;
        dragging = false;
        if (Math.abs(dx) > threshold) {
          var dir = dx > 0 ? 1 : -1;
          card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
          card.style.transform = 'translateX(' + (dir * 500) + 'px) rotate(' + (dir * 30) + 'deg)';
          card.style.opacity = '0';
          cur++;
          var hintEl = ov.querySelector('#d-hint');
          if (hintEl) hintEl.style.display = 'none';
          setTimeout(renderCard, 300);
        } else {
          card.style.transition = 'transform 0.3s ease';
          card.style.transform = '';
          likeBadge.style.opacity = '0';
          nopeBadge.style.opacity = '0';
        }
        dx = 0;
      }
      card.addEventListener('mousedown', down);
      card.addEventListener('touchstart', down, { passive: false });
      window.addEventListener('mousemove', move);
      window.addEventListener('touchmove', move, { passive: false });
      window.addEventListener('mouseup', up);
      window.addEventListener('touchend', up);
    }

    renderCard();
  }

  window.openSwipeDemo = open;
})();
