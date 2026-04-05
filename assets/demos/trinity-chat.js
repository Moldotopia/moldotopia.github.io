/* INTIMO Chat Widget - templated Q&A that sells the app */
(function () {
  var i18n = {
    en: {
      name: 'INTIMO',
      status: 'Ask us anything',
      greeting: "Hi! Welcome to INTIMO. How can we help you today?",
      qa: [
        {
          q: "What can INTIMO do for us?",
          a: "INTIMO helps you and your partner stay close every day. You'll get a shared planner, a desire matching game, mood check-ins, daily intimacy habits, deep conversation starters, and cycle awareness - all encrypted and private. Think of it as a personal coach for your relationship."
        },
        {
          q: "How is this different from other apps?",
          a: "Most apps just track things. INTIMO learns your rhythm as a couple. It adapts to your energy levels, notices patterns, and suggests the right moment for a date or a conversation. Plus, everything is end-to-end encrypted - even we can't see your data."
        },
        {
          q: "What do couples love most?",
          a: "The Desire Bank is a favorite - you and your partner swipe through intimacy ideas, and when you both like the same one, it's a match! Also, the daily habits with the plant growth system - couples love watching their \"relationship plant\" grow from Seedling to Luminary."
        },
        {
          q: "Is it really free?",
          a: "Yes! The core features are free: pairing, planning, mood tracking, desires, daily habits, and cycle tracking. Premium features are coming soon, but you can build a stronger connection without paying a cent."
        }
      ],
      restart: "Ask something else"
    },
    ru: {
      name: 'INTIMO',
      status: '\u0421\u043f\u0440\u043e\u0441\u0438\u0442\u0435 \u043d\u0430\u0441',
      greeting: "\u041f\u0440\u0438\u0432\u0435\u0442! \u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 INTIMO. \u0427\u0435\u043c \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043c\u043e\u0447\u044c?",
      qa: [
        {
          q: "\u0427\u0442\u043e INTIMO \u043c\u043e\u0436\u0435\u0442 \u0434\u0430\u0442\u044c \u043d\u0430\u043c?",
          a: "INTIMO \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c \u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0431\u043b\u0438\u0437\u043a\u0438\u043c\u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c. \u0421\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u044b\u0439 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0449\u0438\u043a, \u0438\u0433\u0440\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f \u0436\u0435\u043b\u0430\u043d\u0438\u0439, \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f, \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438 \u0431\u043b\u0438\u0437\u043e\u0441\u0442\u0438, \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0435 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u044b \u0438 \u043e\u0441\u043e\u0437\u043d\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0446\u0438\u043a\u043b\u0430 - \u0432\u0441\u0451 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043e \u0438 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e. \u041a\u0430\u043a \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u043e\u0443\u0447 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439."
        },
        {
          q: "\u0427\u0435\u043c \u044d\u0442\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439?",
          a: "\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0442. INTIMO \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0440\u0438\u0442\u043c \u0432\u0430\u0448\u0435\u0439 \u043f\u0430\u0440\u044b. \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043a \u0443\u0440\u043e\u0432\u043d\u044e \u044d\u043d\u0435\u0440\u0433\u0438\u0438, \u0437\u0430\u043c\u0435\u0447\u0430\u0435\u0442 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u044b, \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0441\u0432\u0438\u0434\u0430\u043d\u0438\u044f. \u0418 \u0432\u0441\u0451 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043e - \u0434\u0430\u0436\u0435 \u043c\u044b \u043d\u0435 \u0432\u0438\u0434\u0438\u043c \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435."
        },
        {
          q: "\u0427\u0442\u043e \u043f\u0430\u0440\u0430\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e?",
          a: "\u0411\u0430\u043d\u043a \u0436\u0435\u043b\u0430\u043d\u0438\u0439 - \u0444\u0430\u0432\u043e\u0440\u0438\u0442! \u0412\u044b \u0438 \u043f\u0430\u0440\u0442\u043d\u0451\u0440 \u0441\u0432\u0430\u0439\u043f\u0430\u0435\u0442\u0435 \u0438\u0434\u0435\u0438 \u0431\u043b\u0438\u0437\u043e\u0441\u0442\u0438, \u0438 \u043a\u043e\u0433\u0434\u0430 \u043e\u0431\u043e\u0438\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 - \u044d\u0442\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435! \u0415\u0449\u0451 \u043b\u044e\u0431\u044f\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0440\u043e\u0441\u0442\u0430 \u0440\u0430\u0441\u0442\u0435\u043d\u0438\u044f - \u043f\u0430\u0440\u044b \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u044e\u0442, \u043a\u0430\u043a \u0438\u0445 \u00ab\u0440\u0430\u0441\u0442\u0435\u043d\u0438\u0435 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439\u00bb \u0440\u0430\u0441\u0442\u0451\u0442 \u043e\u0442 \u0420\u043e\u0441\u0442\u043a\u0430 \u0434\u043e \u0421\u0438\u044f\u043d\u0438\u044f."
        },
        {
          q: "\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u0434\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e?",
          a: "\u0414\u0430! \u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b: \u0441\u043e\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435, \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435, \u0436\u0435\u043b\u0430\u043d\u0438\u044f, \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438 \u0438 \u0446\u0438\u043a\u043b. \u041f\u0440\u0435\u043c\u0438\u0443\u043c-\u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441\u043a\u043e\u0440\u043e \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f, \u043d\u043e \u0443\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u0441\u0432\u044f\u0437\u044c \u043c\u043e\u0436\u043d\u043e \u0443\u0436\u0435 \u0441\u0435\u0439\u0447\u0430\u0441, \u043d\u0435 \u0437\u0430\u043f\u043b\u0430\u0442\u0438\u0432 \u043d\u0438 \u043a\u043e\u043f\u0435\u0439\u043a\u0438."
        }
      ],
      restart: "\u0421\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0435\u0449\u0451"
    },
    ro: {
      name: 'INTIMO',
      status: 'Intreaba-ne orice',
      greeting: "Salut! Bine ati venit la INTIMO. Cu ce va putem ajuta?",
      qa: [
        {
          q: "Ce poate face INTIMO pentru noi?",
          a: "INTIMO va ajuta sa ramaneti apropiati in fiecare zi. Planificator comun, jocul de potrivire a dorintelor, verificari ale dispozitiei, obiceiuri zilnice de intimitate, intrebari profunde si constientizarea ciclului - totul criptat si privat. Ca un coach personal pentru relatia voastra."
        },
        {
          q: "Cu ce difera de alte aplicatii?",
          a: "Majoritatea aplicatiilor doar urmaresc date. INTIMO invata ritmul cuplului vostru. Aplicatia se adapteaza la energia voastra, observa tipare si sugereaza momentul potrivit pentru o intalnire. Si totul este criptat end-to-end - nici noi nu vedem datele voastre."
        },
        {
          q: "Ce le place cel mai mult cuplurilor?",
          a: "Banca de dorinte este favorita - tu si partenerul explorati idei de intimitate, iar cand amandoi apreciati aceeasi idee, este un match! De asemenea, sistemul de crestere a plantei - cuplurile adora sa urmareasca cum \"planta relatiei\" creste de la Rasad la Stralucire."
        },
        {
          q: "Este cu adevarat gratuit?",
          a: "Da! Functiile de baza sunt gratuite: conectare, planificare, dispozitie, dorinte, obiceiuri si ciclul. Functiile premium vor veni curand, dar puteti construi o conexiune mai puternica fara sa platiti nimic."
        }
      ],
      restart: "Intreaba altceva"
    }
  };

  function getLang() {
    var p = window.location.pathname;
    return p.indexOf('/ru') === 0 ? 'ru' : p.indexOf('/ro') === 0 ? 'ro' : 'en';
  }

  function loadCSS() {
    if (document.getElementById('trinity-chat-css')) return;
    var b = (window.location.pathname.indexOf('/ru') === 0 || window.location.pathname.indexOf('/ro') === 0) ? '../' : '';
    var l = document.createElement('link');
    l.id = 'trinity-chat-css';
    l.rel = 'stylesheet';
    l.href = b + 'assets/demos/trinity-chat.css';
    document.head.appendChild(l);
  }

  var chatEl = null;
  var isOpen = false;

  function addMsg(container, text, type) {
    var msg = document.createElement('div');
    msg.className = 'trinity-msg ' + type;
    msg.textContent = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    return msg;
  }

  function showTyping(container) {
    var t = document.createElement('div');
    t.className = 'trinity-typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    container.appendChild(t);
    container.scrollTop = container.scrollHeight;
    return t;
  }

  function showOptions(optionsEl, qa, messagesEl, t) {
    optionsEl.innerHTML = '';
    qa.forEach(function (item) {
      var btn = document.createElement('button');
      btn.className = 'trinity-opt-btn';
      btn.textContent = item.q;
      btn.addEventListener('click', function () {
        addMsg(messagesEl, item.q, 'user');
        optionsEl.innerHTML = '';
        var typing = showTyping(messagesEl);
        setTimeout(function () {
          typing.remove();
          addMsg(messagesEl, item.a, 'bot');
          setTimeout(function () {
            var restart = document.createElement('button');
            restart.className = 'trinity-opt-btn';
            restart.textContent = t.restart;
            restart.style.borderColor = '#3a7bd5';
            restart.style.color = '#3a7bd5';
            restart.addEventListener('click', function () {
              showOptions(optionsEl, qa, messagesEl, t);
            });
            optionsEl.appendChild(restart);
          }, 500);
        }, 800 + Math.random() * 600);
      });
      optionsEl.appendChild(btn);
    });
  }

  function openChat() {
    if (isOpen) return;
    isOpen = true;
    var t = i18n[getLang()];

    var chat = document.createElement('div');
    chat.className = 'trinity-chat';
    chat.innerHTML =
      '<div class="trinity-chat-header">' +
        '<div class="trinity-chat-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>' +
        '<div><div class="trinity-chat-name">' + t.name + '</div><div class="trinity-chat-status">' + t.status + '</div></div>' +
        '<button class="trinity-chat-close">&times;</button>' +
      '</div>' +
      '<div class="trinity-chat-messages"></div>' +
      '<div class="trinity-options"></div>';

    document.body.appendChild(chat);
    chatEl = chat;

    var messagesEl = chat.querySelector('.trinity-chat-messages');
    var optionsEl = chat.querySelector('.trinity-options');

    var typing = showTyping(messagesEl);
    setTimeout(function () {
      typing.remove();
      addMsg(messagesEl, t.greeting, 'bot');
      setTimeout(function () {
        showOptions(optionsEl, t.qa, messagesEl, t);
      }, 300);
    }, 700);

    chat.querySelector('.trinity-chat-close').addEventListener('click', closeChat);
  }

  function closeChat() {
    if (!chatEl) return;
    chatEl.classList.add('closing');
    setTimeout(function () {
      chatEl.remove();
      chatEl = null;
      isOpen = false;
    }, 200);
  }

  function init() {
    loadCSS();

    var fab = document.createElement('button');
    fab.className = 'trinity-fab';
    fab.setAttribute('aria-label', 'Chat with INTIMO');
    fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>';
    fab.addEventListener('click', function () {
      if (isOpen) closeChat();
      else openChat();
    });
    document.body.appendChild(fab);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
