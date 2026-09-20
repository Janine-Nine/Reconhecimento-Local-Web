/* ==========================================================================
   Reconhecimento Local Web — i18n.js
   Tradutor PT/EN/ES sem framework, dirigido pelos atributos:
     data-i18n              -> textContent
     data-i18n-placeholder  -> placeholder
     data-i18n-aria-label   -> aria-label
   O idioma escolhido é salvo em localStorage e reaplicado em toda navegação
   entre páginas (home.html, sobre.html, projetos.html, servicos.html,
   contato.html), já que cada página carrega este mesmo script.
   ========================================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'rlw-lang';
  var SUPPORTED = ['pt', 'en', 'es'];
  var DEFAULT_LANG = 'pt';

  var translations = {
    pt: {
      nav: { home: 'Início', sobre: 'Sobre', projetos: 'Projetos', servicos: 'Serviços', contato: 'Contato' },
      footer: {
        tagline: 'Seu negócio valorizado em todos os lugares.',
        nav: 'Navegação', services: 'Serviços', contact: 'Contato',
        rights: 'Todos os direitos reservados.'
      },
      home: {
        hero: {
          title: 'Seu negócio, visível e confiável em todos os lugares',
          lead: 'Levamos sua marca ao topo das buscas locais.',
          btn1: 'Ver planos', btn2: 'Falar com especialista'
        },
        stat1: { n: '+320', l: 'negócios atendidos' },
        stat2: { n: '+98%', l: 'clientes satisfeitos' },
        stat3: { n: '48h', l: 'para primeiro diagnóstico' },
        services: {
          eyebrow: 'O que fazemos',
          title: 'Reconhecimento local de ponta a ponta',
          lead: 'Cuidamos de cada detalhe da sua presença local.'
        },
        s1: { title: 'SEO Local', text: 'Otimização de perfil e presença consistente.' },
        s2: { title: 'Gestão de Avaliações', text: 'Estratégia para conquistar e responder avaliações.' },
        s3: { title: 'Presença Web', text: 'Sites rápidos e responsivos.' },
        why: {
          eyebrow: 'Por que a Reconhecimento Local Web',
          title: 'Cada bairro tem seu próprio mapa de oportunidades',
          text: 'Trabalhamos negócio a negócio para construir reconhecimento real.'
        },
        cta: {
          title: 'Pronto para ser encontrado?',
          text: 'Peça um diagnóstico gratuito da presença local do seu negócio.',
          btn: 'Quero meu diagnóstico'
        }
      },
      sobre: {
        hero: {
          title: 'Valorizamos negócios locais desde o primeiro clique',
          lead: 'Somos uma equipe dedicada a transformar negócios locais em referências.'
        },
        mission: { title: 'Nossa missão', text: 'Tornar visível o que já é bom.' },
        vision: { title: 'Nossa visão', text: 'Ser referência em reconhecimento local.' },
        values: { title: 'Nossos valores', text: 'Transparência e resultados mensuráveis.' },
        team: {
          eyebrow: 'Quem faz acontecer',
          title: 'Uma equipe multidisciplinar',
          lead: 'Especialistas trabalhando juntos pelo seu negócio.'
        },
        t1: { role: 'Estratégia de SEO Local' },
        t2: { role: 'Design & Experiência' },
        t3: { role: 'Desenvolvimento Full Stack' },
        timeline: { eyebrow: 'Nossa trajetória', title: 'Como chegamos até aqui' },
        tl1: { t: '2024 — Primeiros passos', d: 'Início da marca do negócio.' },
        tl2: { t: '2025 — Expansão', d: 'Ampliação do site completo com o visual moderno.' },
        tl3: { t: '2026 — Reconhecimento Local Web', d: 'Lançamento da plataforma completa e multilíngue.' }
      },
      projetos: {
        hero: {
          title: 'Projetos que colocaram negócios no mapa',
          lead: 'Uma seleção de trabalhos reais em reconhecimento local.'
        },
        p1: { title: 'Rede de Padarias Trigo Dourado', text: 'Padronização de perfis em 6 unidades.' },
        p2: { title: 'Clínica OdontoVida', text: 'Site institucional multilíngue.' },
        p3: { title: 'Loja Verde Casa & Jardim', text: 'Estratégia de avaliações elevou a nota.' },
        p4: { title: 'Auto Center Rota Sul', text: 'Presença web completa com blog técnico.' },
        p5: { title: 'Studio de Pilates Equilíbrio', text: 'Reposicionamento de marca e otimização local.' },
        p6: { title: 'Mercado da Vila', text: 'Reconhecimento em múltiplos diretórios locais.' },
        cta: {
          title: 'Seu projeto pode ser o próximo',
          text: 'Vamos conversar sobre como colocar seu negócio no mapa.',
          btn: 'Iniciar meu projeto'
        }
      },
      servicos: {
        hero: {
          title: 'Serviços pensados para negócios que querem ser encontrados',
          lead: 'Planos e soluções sob medida para cada etapa.'
        },
        s1: { title: 'Diagnóstico Local', text: 'Análise completa da presença atual.' },
        s2: { title: 'SEO & Perfis Locais', text: 'Otimização contínua de perfis.' },
        s3: { title: 'Gestão de Reputação', text: 'Monitoramento e resposta de avaliações.' },
        s4: { title: 'Criação de Site', text: 'Sites institucionais rápidos e multilíngues.' },
        s5: { title: 'Conteúdo Local', text: 'Produção de conteúdo relevante.' },
        s6: { title: 'Relatórios & Métricas', text: 'Acompanhamento mensal de resultados.' },
        plans: { eyebrow: 'Planos', title: 'Escolha o plano ideal para o seu momento' },
        plan: { badge: 'Mais escolhido', btn: 'Escolher plano' },
        plan1: { name: 'Essencial', price: 'US$ 149/mês', f1: 'Diagnóstico completo', f2: 'Otimização de 1 perfil', f3: 'Relatório trimestral' },
        plan2: { name: 'Crescimento', price: 'US$ 349/mês', f1: 'Tudo do Essencial', f2: 'Gestão de reputação', f3: 'Relatório mensal', f4: 'Suporte prioritário' },
        plan3: { name: 'Autoridade Local', price: 'US$ 690/mês', f1: 'Tudo do Crescimento', f2: 'Site institucional incluso', f3: 'Conteúdo local mensal', f4: 'Consultor dedicado' }
      },
      contato: {
        hero: {
          title: 'Vamos colocar seu negócio no mapa',
          lead: 'Conte um pouco sobre seu negócio e retornaremos com um diagnóstico gratuito.'
        },
        form: {
          name: 'Nome completo', email: 'E-mail', phone: 'Telefone / WhatsApp',
          business: 'Nome do negócio', service: 'Serviço de interesse',
          select: 'Selecione um serviço', message: 'Mensagem',
          send: 'Enviar mensagem', sending: 'Enviando...',
          note: 'Respondemos em até 1 dia útil.',
          success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
          error: 'Não foi possível enviar sua mensagem agora. Tente novamente em instantes.',
          requiredName: 'Informe seu nome.',
          requiredEmail: 'Informe um e-mail válido.',
          requiredMessage: 'Escreva uma mensagem.'
        },
        info: { title: 'Outros canais', address: 'Atendimento remoto para todos os países', hours: 'Segunda a sexta, 9h às 18h' },
        map: { title: 'Área de atendimento' },
        social: { title: 'Conecte-se com a nossa equipe', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', x: 'X', instagram: 'Instagram' },
        global: {
          eyebrow: 'Presença sem fronteiras',
          title: 'Seu próximo cliente pode estar em qualquer lugar',
          text: 'Criamos estratégias digitais preparadas para diferentes mercados, idiomas e fusos horários, conectando negócios locais a pessoas em todo o mundo.',
          tag1: 'Atendimento global', tag2: 'Estratégia multilíngue', tag3: 'Canais digitais',
          map: 'Mapa mundial da nossa área de atendimento'
        }
      }
    },

    en: {
      nav: { home: 'Home', sobre: 'About', projetos: 'Projects', servicos: 'Services', contato: 'Contact' },
      footer: {
        tagline: 'Your business valued everywhere.',
        nav: 'Navigation', services: 'Services', contact: 'Contact',
        rights: 'All rights reserved.'
      },
      home: {
        hero: {
          title: 'Your business, visible and trusted everywhere',
          lead: 'We take your brand to the top of local search.',
          btn1: 'See plans', btn2: 'Talk to a specialist'
        },
        stat1: { n: '+320', l: 'businesses served' },
        stat2: { n: '+98%', l: 'satisfied clients' },
        stat3: { n: '48h', l: 'for first diagnosis' },
        services: {
          eyebrow: 'What we do',
          title: 'End-to-end local recognition',
          lead: 'We take care of every detail of your local presence.'
        },
        s1: { title: 'Local SEO', text: 'Profile optimization and consistent presence.' },
        s2: { title: 'Review Management', text: 'Strategy to earn and respond to reviews.' },
        s3: { title: 'Web Presence', text: 'Fast, responsive websites.' },
        why: {
          eyebrow: 'Why Reconhecimento Local Web',
          title: 'Every neighborhood has its own map of opportunities',
          text: "We work business by business to build real recognition."
        },
        cta: {
          title: 'Ready to be found?',
          text: "Request a free diagnosis of your business's local presence.",
          btn: 'I want my diagnosis'
        }
      },
      sobre: {
        hero: {
          title: 'Valuing local businesses since the very first click',
          lead: "We're a team dedicated to turning local businesses into references."
        },
        mission: { title: 'Our mission', text: 'Make visible what is already good.' },
        vision: { title: 'Our vision', text: 'Be a reference in local recognition.' },
        values: { title: 'Our values', text: 'Transparency and measurable results.' },
        team: {
          eyebrow: 'Who makes it happen',
          title: 'A multidisciplinary team',
          lead: 'Specialists working together for your business.'
        },
        t1: { role: 'Local SEO Strategy' },
        t2: { role: 'Design & Experience' },
        t3: { role: 'Full Stack Development' },
        timeline: { eyebrow: 'Our journey', title: 'How we got here' },
        tl1: { t: '2024 — First steps', d: "The brand's beginnings." },
        tl2: { t: '2025 — Expansion', d: 'A full website with a modern look.' },
        tl3: { t: '2026 — Reconhecimento Local Web', d: 'Launch of the full, multilingual platform.' }
      },
      projetos: {
        hero: {
          title: 'Projects that put businesses on the map',
          lead: 'A selection of real local-recognition work.'
        },
        p1: { title: 'Trigo Dourado Bakery Chain', text: 'Profile standardization across 6 locations.' },
        p2: { title: 'OdontoVida Dental Clinic', text: 'Multilingual institutional website.' },
        p3: { title: 'Verde Casa & Jardim Store', text: 'A review strategy that raised the rating.' },
        p4: { title: 'Auto Center Rota Sul', text: 'Full web presence with a technical blog.' },
        p5: { title: 'Equilíbrio Pilates Studio', text: 'Brand repositioning and local optimization.' },
        p6: { title: 'Mercado da Vila', text: 'Recognition across multiple local directories.' },
        cta: {
          title: 'Your project could be next',
          text: "Let's talk about putting your business on the map.",
          btn: 'Start my project'
        }
      },
      servicos: {
        hero: {
          title: 'Services built for businesses that want to be found',
          lead: 'Plans and solutions tailored to every stage.'
        },
        s1: { title: 'Local Diagnosis', text: 'A complete analysis of your current presence.' },
        s2: { title: 'SEO & Local Profiles', text: 'Ongoing profile optimization.' },
        s3: { title: 'Reputation Management', text: 'Monitoring and responding to reviews.' },
        s4: { title: 'Website Creation', text: 'Fast, multilingual institutional websites.' },
        s5: { title: 'Local Content', text: 'Production of relevant content.' },
        s6: { title: 'Reports & Metrics', text: 'Monthly results tracking.' },
        plans: { eyebrow: 'Plans', title: 'Choose the ideal plan for your stage' },
        plan: { badge: 'Most popular', btn: 'Choose plan' },
        plan1: { name: 'Essential', price: 'US$149/mo', f1: 'Complete diagnosis', f2: '1 profile optimized', f3: 'Quarterly report' },
        plan2: { name: 'Growth', price: 'US$349/mo', f1: 'Everything in Essential', f2: 'Reputation management', f3: 'Monthly report', f4: 'Priority support' },
        plan3: { name: 'Local Authority', price: 'US$690/mo', f1: 'Everything in Growth', f2: 'Institutional website included', f3: 'Monthly local content', f4: 'Dedicated consultant' }
      },
      contato: {
        hero: {
          title: "Let's put your business on the map",
          lead: "Tell us a bit about your business and we'll get back to you with a free diagnosis."
        },
        form: {
          name: 'Full name', email: 'Email', phone: 'Phone / WhatsApp',
          business: 'Business name', service: 'Service of interest',
          select: 'Select a service', message: 'Message',
          send: 'Send message', sending: 'Sending...',
          note: 'We respond within 1 business day.',
          success: "Message sent successfully! We'll be in touch soon.",
          error: "We couldn't send your message right now. Please try again shortly.",
          requiredName: 'Please enter your name.',
          requiredEmail: 'Please enter a valid email.',
          requiredMessage: 'Please write a message.'
        },
        info: { title: 'Other channels', address: 'Remote service for every country', hours: 'Monday to Friday, 9am to 6pm' },
        map: { title: 'Service area' },
        social: { title: 'Connect with our team', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', x: 'X', instagram: 'Instagram' },
        global: {
          eyebrow: 'Presence without borders',
          title: 'Your next client could be anywhere',
          text: 'We build digital strategies ready for different markets, languages and time zones, connecting local businesses to people all over the world.',
          tag1: 'Global service', tag2: 'Multilingual strategy', tag3: 'Digital channels',
          map: 'World map of our service area'
        }
      }
    },

    es: {
      nav: { home: 'Inicio', sobre: 'Nosotros', projetos: 'Proyectos', servicos: 'Servicios', contato: 'Contacto' },
      footer: {
        tagline: 'Tu negocio valorado en todos los lugares.',
        nav: 'Navegación', services: 'Servicios', contact: 'Contacto',
        rights: 'Todos los derechos reservados.'
      },
      home: {
        hero: {
          title: 'Tu negocio, visible y confiable en todos los lugares',
          lead: 'Llevamos tu marca a la cima de las búsquedas locales.',
          btn1: 'Ver planes', btn2: 'Hablar con un especialista'
        },
        stat1: { n: '+320', l: 'negocios atendidos' },
        stat2: { n: '+98%', l: 'clientes satisfechos' },
        stat3: { n: '48h', l: 'para el primer diagnóstico' },
        services: {
          eyebrow: 'Qué hacemos',
          title: 'Reconocimiento local de extremo a extremo',
          lead: 'Cuidamos cada detalle de tu presencia local.'
        },
        s1: { title: 'SEO Local', text: 'Optimización de perfil y presencia consistente.' },
        s2: { title: 'Gestión de Reseñas', text: 'Estrategia para conseguir y responder reseñas.' },
        s3: { title: 'Presencia Web', text: 'Sitios rápidos y responsivos.' },
        why: {
          eyebrow: 'Por qué Reconhecimento Local Web',
          title: 'Cada barrio tiene su propio mapa de oportunidades',
          text: 'Trabajamos negocio a negocio para construir un reconocimiento real.'
        },
        cta: {
          title: '¿Listo para ser encontrado?',
          text: 'Solicita un diagnóstico gratuito de la presencia local de tu negocio.',
          btn: 'Quiero mi diagnóstico'
        }
      },
      sobre: {
        hero: {
          title: 'Valoramos los negocios locales desde el primer clic',
          lead: 'Somos un equipo dedicado a convertir negocios locales en referentes.'
        },
        mission: { title: 'Nuestra misión', text: 'Hacer visible lo que ya es bueno.' },
        vision: { title: 'Nuestra visión', text: 'Ser referentes en reconocimiento local.' },
        values: { title: 'Nuestros valores', text: 'Transparencia y resultados medibles.' },
        team: {
          eyebrow: 'Quién lo hace posible',
          title: 'Un equipo multidisciplinario',
          lead: 'Especialistas trabajando juntos por tu negocio.'
        },
        t1: { role: 'Estrategia de SEO Local' },
        t2: { role: 'Diseño y Experiencia' },
        t3: { role: 'Desarrollo Full Stack' },
        timeline: { eyebrow: 'Nuestra trayectoria', title: 'Cómo llegamos hasta aquí' },
        tl1: { t: '2024 — Primeros pasos', d: 'Inicio de la marca del negocio.' },
        tl2: { t: '2025 — Expansión', d: 'Ampliación del sitio completo con un diseño moderno.' },
        tl3: { t: '2026 — Reconhecimento Local Web', d: 'Lanzamiento de la plataforma completa y multilingüe.' }
      },
      projetos: {
        hero: {
          title: 'Proyectos que pusieron negocios en el mapa',
          lead: 'Una selección de trabajos reales en reconocimiento local.'
        },
        p1: { title: 'Cadena de Panaderías Trigo Dourado', text: 'Estandarización de perfiles en 6 sucursales.' },
        p2: { title: 'Clínica OdontoVida', text: 'Sitio institucional multilingüe.' },
        p3: { title: 'Tienda Verde Casa & Jardim', text: 'Una estrategia de reseñas elevó la calificación.' },
        p4: { title: 'Auto Center Rota Sul', text: 'Presencia web completa con blog técnico.' },
        p5: { title: 'Estudio de Pilates Equilíbrio', text: 'Reposicionamiento de marca y optimización local.' },
        p6: { title: 'Mercado da Vila', text: 'Reconocimiento en múltiples directorios locales.' },
        cta: {
          title: 'Tu proyecto puede ser el próximo',
          text: 'Hablemos sobre cómo poner tu negocio en el mapa.',
          btn: 'Iniciar mi proyecto'
        }
      },
      servicos: {
        hero: {
          title: 'Servicios pensados para negocios que quieren ser encontrados',
          lead: 'Planes y soluciones a medida para cada etapa.'
        },
        s1: { title: 'Diagnóstico Local', text: 'Análisis completo de la presencia actual.' },
        s2: { title: 'SEO y Perfiles Locales', text: 'Optimización continua de perfiles.' },
        s3: { title: 'Gestión de Reputación', text: 'Monitoreo y respuesta de reseñas.' },
        s4: { title: 'Creación de Sitio Web', text: 'Sitios institucionales rápidos y multilingües.' },
        s5: { title: 'Contenido Local', text: 'Producción de contenido relevante.' },
        s6: { title: 'Informes y Métricas', text: 'Seguimiento mensual de resultados.' },
        plans: { eyebrow: 'Planes', title: 'Elige el plan ideal para tu momento' },
        plan: { badge: 'Más elegido', btn: 'Elegir plan' },
        plan1: { name: 'Esencial', price: 'US$149/mes', f1: 'Diagnóstico completo', f2: 'Optimización de 1 perfil', f3: 'Informe trimestral' },
        plan2: { name: 'Crecimiento', price: 'US$349/mes', f1: 'Todo lo de Esencial', f2: 'Gestión de reputación', f3: 'Informe mensual', f4: 'Soporte prioritario' },
        plan3: { name: 'Autoridad Local', price: 'US$690/mes', f1: 'Todo lo de Crecimiento', f2: 'Sitio institucional incluido', f3: 'Contenido local mensual', f4: 'Consultor dedicado' }
      },
      contato: {
        hero: {
          title: 'Pongamos tu negocio en el mapa',
          lead: 'Cuéntanos un poco sobre tu negocio y te responderemos con un diagnóstico gratuito.'
        },
        form: {
          name: 'Nombre completo', email: 'Correo electrónico', phone: 'Teléfono / WhatsApp',
          business: 'Nombre del negocio', service: 'Servicio de interés',
          select: 'Selecciona un servicio', message: 'Mensaje',
          send: 'Enviar mensaje', sending: 'Enviando...',
          note: 'Respondemos dentro de 1 día hábil.',
          success: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
          error: 'No pudimos enviar tu mensaje ahora. Intenta nuevamente en unos instantes.',
          requiredName: 'Ingresa tu nombre.',
          requiredEmail: 'Ingresa un correo válido.',
          requiredMessage: 'Escribe un mensaje.'
        },
        info: { title: 'Otros canales', address: 'Atención remota para todos los países', hours: 'Lunes a viernes, 9h a 18h' },
        map: { title: 'Área de atención' },
        social: { title: 'Conéctate con nuestro equipo', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', x: 'X', instagram: 'Instagram' },
        global: {
          eyebrow: 'Presencia sin fronteras',
          title: 'Tu próximo cliente puede estar en cualquier lugar',
          text: 'Creamos estrategias digitales preparadas para diferentes mercados, idiomas y husos horarios, conectando negocios locales con personas de todo el mundo.',
          tag1: 'Atención global', tag2: 'Estrategia multilingüe', tag3: 'Canales digitales',
          map: 'Mapa mundial de nuestra área de atención'
        }
      }
    }
  };

  function getNested(obj, path) {
    var parts = path.split('.');
    var current = obj;
    for (var i = 0; i < parts.length; i++) {
      if (current == null) return null;
      current = current[parts[i]];
    }
    return typeof current === 'string' ? current : null;
  }

  function detectInitialLang() {
    var stored = null;
    try { stored = window.localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage blocked */ }
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

    var browserLang = (navigator.language || navigator.userLanguage || DEFAULT_LANG)
      .toLowerCase()
      .slice(0, 2);
    return SUPPORTED.indexOf(browserLang) !== -1 ? browserLang : DEFAULT_LANG;
  }

  function applyTranslations(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang);

    var textNodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < textNodes.length; i++) {
      var key = textNodes[i].getAttribute('data-i18n');
      var value = getNested(dict, key);
      if (value !== null) textNodes[i].textContent = value;
    }

    var placeholderNodes = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < placeholderNodes.length; j++) {
      var pKey = placeholderNodes[j].getAttribute('data-i18n-placeholder');
      var pValue = getNested(dict, pKey);
      if (pValue !== null) placeholderNodes[j].setAttribute('placeholder', pValue);
    }

    var ariaNodes = document.querySelectorAll('[data-i18n-aria-label]');
    for (var k = 0; k < ariaNodes.length; k++) {
      var aKey = ariaNodes[k].getAttribute('data-i18n-aria-label');
      var aValue = getNested(dict, aKey);
      if (aValue !== null) ariaNodes[k].setAttribute('aria-label', aValue);
    }

    var langButtons = document.querySelectorAll('.lang-switch button[data-lang]');
    for (var b = 0; b < langButtons.length; b++) {
      var isActive = langButtons[b].getAttribute('data-lang') === lang;
      langButtons[b].classList.toggle('active', isActive);
    }
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage blocked */ }
    applyTranslations(lang);
    document.dispatchEvent(new CustomEvent('rlw:langchange', { detail: { lang: lang } }));
  }

  function getLang() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) { /* storage blocked */ }
    return DEFAULT_LANG;
  }

  function translate(key, lang) {
    var dict = translations[lang || getLang()] || translations[DEFAULT_LANG];
    return getNested(dict, key) || key;
  }

  function init() {
    var initialLang = detectInitialLang();
    applyTranslations(initialLang);

    var langButtons = document.querySelectorAll('.lang-switch button[data-lang]');
    for (var i = 0; i < langButtons.length; i++) {
      langButtons[i].addEventListener('click', function (evt) {
        setLang(evt.currentTarget.getAttribute('data-lang'));
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exposed for js/main.js (e.g. to translate dynamic form-feedback messages)
  window.RLW_I18N = {
    setLang: setLang,
    getLang: getLang,
    translate: translate
  };
})();
