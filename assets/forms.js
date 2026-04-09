/* INTIMO — Form submission logic for beta signup and early interest */
(function(){
  var API_BASE = 'https://naxuunwntqxhjpqzvmos.supabase.co/functions/v1/';
  var API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5heHV1bndudHF4aGpwcXp2bW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NTczOTYsImV4cCI6MjA4ODExNzM5Nn0.3EAylVCMOclEfN0I3hP7OuXrK9vQfwyxL_m4PgSggaQ';
  var NAME_RE = /^[\p{L}\s\-'.]{2,50}$/u;
  var EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  var DEVICE_RE = /^[\p{L}0-9\s\-+().\/]{0,80}$/u;
  var _betaLast = 0, _intLast = 0;

  function showErr(el, msg) { el.textContent = msg; el.classList.add('visible'); }
  function hideErr(el) { el.classList.remove('visible'); }
  function msg(el, key) { return el.getAttribute('data-' + key) || ''; }

  function post(endpoint, body) {
    return fetch(API_BASE + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': API_KEY },
      body: JSON.stringify(body)
    }).then(function(r) { return r.json().then(function(d) { return { ok: r.ok, data: d }; }); });
  }

  window.submitBeta = function() {
    var btn = document.getElementById('betaSubmit');
    var err = document.getElementById('betaError');
    var name = document.getElementById('betaName').value.trim();
    var email = document.getElementById('betaEmail').value.trim();
    var device = document.getElementById('betaDevice').value.trim();
    var partnerEmail = document.getElementById('betaPartnerEmail').value.trim();
    var consent = document.getElementById('betaConsent').checked;
    hideErr(err);
    if (!name || !NAME_RE.test(name)) { showErr(err, msg(err, 'err-name')); return; }
    if (!email || !EMAIL_RE.test(email) || email.length > 254) { showErr(err, msg(err, 'err-email')); return; }
    if (device && !DEVICE_RE.test(device)) { showErr(err, msg(err, 'err-device')); return; }
    if (!partnerEmail || !EMAIL_RE.test(partnerEmail) || partnerEmail.length > 254) { showErr(err, msg(err, 'err-partner')); return; }
    if (email.toLowerCase() === partnerEmail.toLowerCase()) { showErr(err, msg(err, 'err-same')); return; }
    if (!consent) { showErr(err, msg(err, 'err-consent')); return; }
    var now = Date.now(); if (now - _betaLast < 10000) { showErr(err, msg(err, 'err-wait')); return; } _betaLast = now;
    var label = btn.textContent;
    btn.disabled = true; btn.textContent = msg(btn, 'loading');
    post('beta-signup', { name: name, email: email, device_model: device || null, partner_email: partnerEmail, partner_confirmed: consent })
      .then(function(res) {
        if (res.ok) { document.getElementById('betaForm').style.display = 'none'; document.getElementById('betaSuccess').style.display = 'block'; }
        else { showErr(err, res.data.error || msg(err, 'err-generic')); btn.disabled = false; btn.textContent = label; }
      }).catch(function() { showErr(err, msg(err, 'err-network')); btn.disabled = false; btn.textContent = label; });
  };

  window.openInterest = function(el) {
    var card = el.closest('.pricing-card');
    var plan = card && card.classList.contains('popular') ? 'pro' : 'plus';
    document.getElementById('interestPlan').value = plan;
    document.getElementById('interestForm').style.display = 'block';
    document.getElementById('interestSuccess').style.display = 'none';
    document.getElementById('interestError').classList.remove('visible');
    document.getElementById('interestOverlay').classList.add('open');
  };

  window.submitInterest = function() {
    var btn = document.getElementById('interestSubmit');
    var err = document.getElementById('interestError');
    var name = document.getElementById('interestName').value.trim();
    var email = document.getElementById('interestEmail').value.trim();
    var comment = document.getElementById('interestComment').value.trim();
    var plan = document.getElementById('interestPlan').value;
    hideErr(err);
    if (!name || !NAME_RE.test(name)) { showErr(err, msg(err, 'err-name')); return; }
    if (!email || !EMAIL_RE.test(email) || email.length > 254) { showErr(err, msg(err, 'err-email')); return; }
    if (comment.length > 500) { showErr(err, msg(err, 'err-comment')); return; }
    var now = Date.now(); if (now - _intLast < 10000) { showErr(err, msg(err, 'err-wait')); return; } _intLast = now;
    var label = btn.textContent;
    btn.disabled = true; btn.textContent = msg(btn, 'loading');
    post('early-interest', { name: name, email: email, plan: plan, comment: comment || null })
      .then(function(res) {
        if (res.ok) { document.getElementById('interestForm').style.display = 'none'; document.getElementById('interestSuccess').style.display = 'block'; }
        else { showErr(err, res.data.error || msg(err, 'err-generic')); btn.disabled = false; btn.textContent = label; }
      }).catch(function() { showErr(err, msg(err, 'err-network')); btn.disabled = false; btn.textContent = label; });
  };
})();
