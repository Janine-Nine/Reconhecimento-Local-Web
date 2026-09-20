/* ==========================================================================
   Reconhecimento Local Web — main.js
   Comportamento de interface do protótipo estático:
     1) menu mobile (.nav-toggle abre/fecha .nav-links)
     2) marca o link do menu correspondente à página atual como .active
     3) formulário de contato (#contact-form): validação simples + feedback
        traduzido via window.RLW_I18N (definido em js/i18n.js), sem backend
        — grava a submissão em localStorage para inspeção/demonstração.
   ========================================================================== */

(function () {
  'use strict';

  function setupMobileMenu() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha o menu ao navegar (mobile) para não ficar aberto na próxima página.
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function setupActiveNavLink() {
    var currentPage = (window.location.pathname.split('/').pop() || 'home.html').toLowerCase();
    if (currentPage === '' || currentPage === '/') currentPage = 'home.html';

    document.querySelectorAll('.nav-links a').forEach(function (link) {
      var href = (link.getAttribute('href') || '').toLowerCase();
      if (href === currentPage) {
        link.classList.add('active');
      }
    });
  }

  function translate(key) {
    if (window.RLW_I18N && typeof window.RLW_I18N.translate === 'function') {
      return window.RLW_I18N.translate(key);
    }
    return key;
  }

  function setupContactForm() {
    var form = document.getElementById('contact-form');
    var successEl = document.getElementById('form-success');
    if (!form) return;

    var submitBtn = form.querySelector('button[type="submit"]');
    var defaultBtnKey = 'contato.form.send';

    function showMessage(text, isError) {
      if (!successEl) return;
      successEl.textContent = text;
      successEl.style.color = isError ? '#d84343' : '';
    }

    function clearFieldErrors() {
      form.querySelectorAll('.field .error').forEach(function (el) { el.remove(); });
    }

    function addFieldError(fieldEl, message) {
      var error = document.createElement('span');
      error.className = 'error';
      error.textContent = message;
      error.style.display = 'block';
      error.style.color = '#d84343';
      error.style.fontSize = '.78rem';
      error.style.marginTop = '.35rem';
      fieldEl.appendChild(error);
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      clearFieldErrors();
      showMessage('', false);

      var nameInput = form.querySelector('#contact-name');
      var emailInput = form.querySelector('#contact-email');
      var messageInput = form.querySelector('#contact-message');

      var isValid = true;
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nameInput.value.trim()) {
        addFieldError(nameInput.closest('.field'), translate('contato.form.requiredName'));
        isValid = false;
      }
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        addFieldError(emailInput.closest('.field'), translate('contato.form.requiredEmail'));
        isValid = false;
      }
      if (!messageInput.value.trim()) {
        addFieldError(messageInput.closest('.field'), translate('contato.form.requiredMessage'));
        isValid = false;
      }

      if (!isValid) return;

      var payload = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: (form.querySelector('#contact-phone') || {}).value || '',
        business: (form.querySelector('#contact-business') || {}).value || '',
        service: (form.querySelector('#contact-service') || {}).value || '',
        message: messageInput.value.trim(),
        submittedAt: new Date().toISOString()
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = translate('contato.form.sending');
      }

      // Protótipo estático: não há backend aqui. Guardamos a submissão em
      // localStorage só para permitir inspecionar/testar o fluxo; no app
      // Angular/Firebase (pasta irmã deste protótipo) o mesmo formulário
      // grava de verdade na coleção "contacts" do Firestore.
      window.setTimeout(function () {
        try {
          var stored = JSON.parse(window.localStorage.getItem('rlw-contact-submissions') || '[]');
          stored.push(payload);
          window.localStorage.setItem('rlw-contact-submissions', JSON.stringify(stored));
        } catch (e) { /* storage blocked, ignore */ }

        showMessage(translate('contato.form.success'), false);
        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = translate(defaultBtnKey);
        }
      }, 500);
    });
  }

  function init() {
    setupMobileMenu();
    setupActiveNavLink();
    setupContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
