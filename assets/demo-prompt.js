/* Feature demo scroll prompt + post-demo hint */
(function(){
  var i18n = {
    en: {
      title: 'Want to see it in action?',
      desc: 'Try our Desire Bank - swipe through wishes and see how matching works.',
      yes: 'Show me',
      no: 'Later',
      doneTitle: 'There\'s more to explore!',
      doneDesc: 'Each feature has a <span class="demo-tryit-badge"><span class="demo-tryit-play"></span>Try it</span> button. Tap it to see how it works inside the app.',
      doneBtn: 'Got it'
    },
    ru: {
      title: 'Хотите увидеть, как это работает?',
      desc: 'Попробуйте Банк желаний - свайпайте и смотрите, как работает совпадение.',
      yes: 'Показать',
      no: 'Позже',
      doneTitle: 'Это ещё не всё!',
      doneDesc: 'У каждой функции есть кнопка <span class="demo-tryit-badge"><span class="demo-tryit-play"></span>Попробуй</span>. Нажмите, чтобы увидеть, как она работает в приложении.',
      doneBtn: 'Понятно'
    },
    ro: {
      title: 'Doriti sa vedeti cum functioneaza?',
      desc: 'Incercati Banca de dorinte - glisati si vedeti cum functioneaza potrivirea.',
      yes: 'Arata-mi',
      no: 'Mai tarziu',
      doneTitle: 'Mai sunt multe de explorat!',
      doneDesc: 'Fiecare functie are un buton <span class="demo-tryit-badge"><span class="demo-tryit-play"></span>Incearca</span>. Apasati-l pentru a vedea cum functioneaza in aplicatie.',
      doneBtn: 'Am inteles'
    }
  };

  function getLang() {
    var p = window.location.pathname;
    return p.indexOf('/ru') === 0 ? 'ru' : p.indexOf('/ro') === 0 ? 'ro' : 'en';
  }

  function getBase() {
    var p = window.location.pathname;
    return (p.indexOf('/ru') === 0 || p.indexOf('/ro') === 0) ? '../' : '';
  }

  function loadSwipeAndOpen() {
    if (window.openSwipeDemo) {
      window.openSwipeDemo();
    } else {
      var s = document.createElement('script');
      s.src = getBase() + 'assets/demos/swipe.js';
      s.onload = function() { if (window.openSwipeDemo) window.openSwipeDemo(); };
      document.head.appendChild(s);
    }
  }

  function showPrompt(t, onYes) {
    var ov = document.createElement('div');
    ov.className = 'demo-prompt-overlay';
    ov.innerHTML = '<div class="demo-prompt">' +
      '<h3>' + t.title + '</h3>' +
      '<p>' + t.desc + '</p>' +
      '<div class="demo-prompt-actions">' +
        '<button class="demo-prompt-btn secondary" id="dp-no">' + t.no + '</button>' +
        '<button class="demo-prompt-btn primary" id="dp-yes">' + t.yes + '</button>' +
      '</div></div>';
    document.body.appendChild(ov);
    ov.querySelector('#dp-yes').addEventListener('click', function(){ ov.remove(); onYes(); });
    ov.querySelector('#dp-no').addEventListener('click', function(){ ov.remove(); });
    ov.addEventListener('click', function(e){ if(e.target === ov) ov.remove(); });
  }

  // Scroll-triggered prompt (once per session)
  var prompted = false;
  var featuresEl = document.getElementById('features');
  if(featuresEl) {
    var obs = new IntersectionObserver(function(entries){
      if(entries[0].isIntersecting && !prompted) {
        prompted = true;
        obs.disconnect();
        setTimeout(function(){
          var t = i18n[getLang()];
          showPrompt(t, loadSwipeAndOpen);
        }, 800);
      }
    }, { threshold: 0.3 });
    obs.observe(featuresEl);
  }

  // Post-demo hint (called from swipe.js after completion)
  window.showDemoHint = function() {
    var t = i18n[getLang()];
    var ov = document.createElement('div');
    ov.className = 'demo-prompt-overlay';
    ov.innerHTML = '<div class="demo-prompt">' +
      '<h3>' + t.doneTitle + '</h3>' +
      '<p>' + t.doneDesc + '</p>' +
      '<div class="demo-prompt-actions">' +
        '<button class="demo-prompt-btn gotit" id="dp-ok">' + t.doneBtn + '</button>' +
      '</div></div>';
    document.body.appendChild(ov);
    ov.querySelector('#dp-ok').addEventListener('click', function(){ ov.remove(); });
    ov.addEventListener('click', function(e){ if(e.target === ov) ov.remove(); });
  };
})();
