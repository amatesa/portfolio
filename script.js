// ---------------------------
// Project & resource data
// ---------------------------

// IMPORTANTE: acá solo dejé estructura y rutas de imágenes.
// Las URLs de repos y demos están vacías para que no haya enlaces rotos.
// Cuando las tengas claras, solo completás "repoUrl" y "demoUrl".

const projects = [
  {
    id: "tfi",
    titleKey: "project1Title",
    bodyKey: "project1Body",
    tagKey: "project1Tag",
    image: "assets/images/projects/thumb-tfi.webp",
    imageAlt: "App de consola para administrar inventario (Python + SQLite)",
    tech: ["Python", "SQLite"],
    notes: [""],
    categories: ["dev"],
    repoUrl: "https://github.com/amatesa/TFI",
    demoUrl: "",
  },
  {
    id: "medcomp",
    titleKey: "project2Title",
    bodyKey: "project2Body",
    tagKey: "project2Tag",
    image: "assets/images/projects/thumb-medcomp.webp",
    imageAlt: "Sitio institucional del sector salud",
    tech: ["HTML", "CSS", "JS", "PHP"],
    notes: [""],
    categories: ["web"],
    repoUrl: "https://github.com/amatesa/medcomp",
    demoUrl: "https://amatesa.github.io/medcomp/",
  },
  {
    id: "northbridge",
    titleKey: "project3Title",
    bodyKey: "project3Body",
    tagKey: "project3Tag",
    image: "assets/images/projects/thumb-northbridge.webp",
    imageAlt: "Landing de servicios profesionales",
    tech: ["HTML", "CSS", "JS"],
    notes: [""],
    categories: ["web", "products"],
    repoUrl: "https://github.com/amatesa/landing-professional-template",
    demoUrl: "https://amatesa.github.io/landing-professional-template/",
  },
];

const resources = [
  // 1) Ebook en desarrollo (igual que ahora)
  {
    id: "ops-ebook",
    tagKey: "resource1Tag",
    titleKey: "resource1Title",
    bodyKey: "resource1Body",
    image: "assets/images/products/product-placeholder.webp",
    imageAlt: "Portada conceptual del ebook en desarrollo",
    badgeKey: "resourceBadgeSoon", // Muestra 'Próximamente'
    ctaKey: "resource1Cta",        // Texto del botón deshabilitado
    // Sin downloadUrl / purchaseUrl -> queda en "En desarrollo"
  },

  // 2) Plantilla gratis (ejemplo)
  {
    id: "kpi-template",
    tagKey: "resource2Tag",
    titleKey: "resource2Title",
    bodyKey: "resource2Body",
    image: "assets/images/products/product-placeholder.webp",
    imageAlt: "Mockup de plantilla para reportes diarios de KPIs",
    ctaKey: "resource2Cta",
    downloadUrl:
      "https://tu-enlace-de-descarga.com/kpi-template.zip", // cambia esto por tu URL real
  },

  // 3) Ebook de pago (ejemplo)
  {
    id: "ops-ebook-paid",
    tagKey: "resource3Tag",
    titleKey: "resource3Title",
    bodyKey: "resource3Body",
    image: "assets/images/products/product-placeholder.webp",
    imageAlt: "Portada de ebook sobre análisis de datos para operaciones",
    ctaKey: "resource3Cta",
    purchaseUrl:
      "https://plataforma-externa.com/tu-ebook", // Gumroad, Lemon, tu web, etc.
  },
];

// ---------------------------
// I18n content
// ---------------------------
const translations = {
  es: {
    // Nav & brand
    brandName: "Portfolio · Web · Data",
    navProjects: "Proyectos",
    navResources: "Recursos",
    navAbout: "Sobre mí",
    navContact: "Contacto",

    // Hero
    heroKicker: "Web · Data · Digital Products",
    heroTitle: "Hola, soy Alejandro",
    heroSubtitle:
      "Analista de operaciones y datos con background en desarrollo web.",
    heroBody:
      "Combino experiencia en operaciones, reporting y desarrollo web para crear soluciones digitales claras, medibles y fáciles de mantener. Me interesa especialmente el cruce entre operaciones, business intelligence y educación online.",
    heroPrimaryCta: "Ver proyectos",
    heroSecondaryCta: "Hablemos",
    heroTagRemote: "Perfil orientado a remoto",
    heroTagWebBI: "Web · BI · Automatización",
    heroTagLearning: "Aprendizaje continuo",

    heroBadgeRole: "Operaciones & Datos",
    heroBadgeFocus: "Web y productos digitales",
    heroMetaLocationLabel: "Ubicación",
    heroMetaLocationValue: "Argentina · Remoto",
    heroMetaFocusLabel: "Foco principal",
    heroMetaFocusValue: "Análisis de datos y sitios web",
    heroMetaModeLabel: "Modalidad",
    heroMetaModeValue: "Trabajo remoto · Freelance y full time",

    heroFloating1:
      "Dashboards, procesos y documentación pensados para equipos reales.",
    heroFloating2:
      "Sitios web y templates listos para adaptar a clientes y proyectos nuevos.",

    // Projects
    projectsKicker: "Proyectos seleccionados",
    projectsTitle: "Del análisis a los productos digitales",
    projectsSubtitle:
      "Una mezcla de operaciones, datos y desarrollo web. Cada proyecto está pensado para resolver problemas concretos, no solo para mostrar código.",

    projectsFilterAll: "Todos",
    projectsFilterWeb: "Web",
    projectsFilterData: "Datos",
    projectsFilterProducts: "Productos",
    projectsFilterOther: "Otros",

    project1Tag: "Dev & Ops",
    project1Title: "Sistema de gestión de inventario (CLI) · Python + SQLite",
    project1Body:
      "Sistema de gestión de inventario por consola desarrollado en Python. Orientado al control de stock y seguimiento de movimientos, utilizando SQLite como capa de datos.",

    project2Tag: "Corporate Website",
    project2Title: "Sitio institucional del sector salud",
    project2Body:
      "Diseño y estructura de un sitio corporativo para servicios médicos, con foco en claridad y contenido editable por el cliente.",

    project3Tag: "Landing Template",
    project3Title: "Landing profesional reutilizable",
    project3Body:
      "Landing pensada como template adaptable para coaches, consultores y freelancers, optimizada para mensajes claros y llamadas a la acción visibles.",

    projectViewCase: "Ver detalles",
    projectViewLive: "Ver demo",
    projectViewRepo: "Ver en GitHub",
    projectsMoreCta: "Ver más proyectos en GitHub",

    // Resources – ES
    resourcesKicker: "Ebooks y toolkits en construcción",
    resourcesTitle: "Ebooks y toolkits en construcción",
    resourcesSubtitle:
      "Estoy trabajando en guías y plantillas descargables para gente de operaciones que quiere empezar a medir mejor con datos y productos digitales.",

    resourceBadgeSoon: "Próximamente",

    // Recurso 1 – en desarrollo
    resource1Tag: "Ebook · Próximamente",
    resource1Title: "Guía práctica de análisis de datos para operaciones",
    resource1Body:
      "Un ebook pensado para perfiles no técnicos que trabajan con KPIs, tickets y reportes diarios, y necesitan un marco simple para tomar decisiones.",
    resource1Cta: "En desarrollo",

    // Recurso 2 – plantilla gratis
    resource2Tag: "Plantilla · Gratis",
    resource2Title: "Plantilla diaria de KPIs para equipos de soporte",
    resource2Body:
      "Hoja de cálculo lista para usar con métricas básicas, objetivos y comentarios diarios para equipos de soporte u operaciones.",
    resource2Cta: "Descargar plantilla",

    // Recurso 3 – ebook de pago
    resource3Tag: "Ebook · Pago",
    resource3Title: "Playbook de reporting para operaciones digitales",
    resource3Body:
      "Guía paso a paso para definir KPIs accionables, armar un sistema de reporting y evitar dashboards que nadie mira.",
    resource3Cta: "Ver detalle / Comprar",

    // About – ES
    aboutKicker: "ABOUT",
    aboutTitle: "Ops, Datos & IA con mentalidad de producto digital",
    aboutSubtitle:
      "Combino experiencia en operaciones, analítica y desarrollo web para convertir el caos del día a día en procesos, dashboards y productos simples que tu equipo puede usar de verdad.",

    aboutBody1:
      "Vengo de roles de customer support, calidad y operaciones en entornos internacionales. Trabajé todos los días con KPIs, reportes y feedback de clientes, aprendiendo a traducir problemas reales en mejoras concretas para el negocio.",

    aboutBody2:
      "Hoy combino esa experiencia con desarrollo web (HTML, CSS, WordPress), automatización con Python e IA aplicada —desde asistentes internos hasta prototipos de RAG— más formación continua en data analytics (UTN, Talento Tech BA, certificaciones IBM). Busco proyectos donde pueda ordenar datos, procesos e insights sin inflar mi seniority.",

    aboutListTitle: "Qué aporto a tus proyectos",
    aboutList1:
      "Dashboards accionables y reporting claro para equipos de operaciones y soporte.",
    aboutList2:
      "Landing pages y sitios orientados a conversión, fáciles de mantener por tu equipo.",
    aboutList3:
      "Documentación, plantillas y pequeños sistemas que ayudan a trabajar siempre igual, incluso cuando cambia el contexto.",
    aboutList4:
      "Flujos de trabajo con IA y automatizaciones ligeras que ahorran tiempo sin romper tus procesos.",

    // Contact
    contactKicker: "Contacto",
    contactTitle: "Trabajemos juntos",
    contactSubtitle:
      "Si tenés un proyecto en mente o una idea en borrador, puedo ayudarte a darle forma. Prefiero trabajar 100% remoto, con comunicación clara y entregables concretos.",

    contactEmailCta: "Enviar email",
    contactLinkedinCta: "Perfil en LinkedIn",
    contactGithubCta: "Ver GitHub",
    contactNote: "Suelo responder en 24–48 h hábiles.",

    // Footer
    footerSignature: "Diseñado y desarrollado por Alejandro Matesa",
  },

  en: {
    // Nav & brand
    brandName: "Portfolio · Web · Data",
    navProjects: "Projects",
    navResources: "Resources",
    navAbout: "About",
    navContact: "Contact",

    // Hero
    heroKicker: "Web · Data · Digital Products",
    heroTitle: "Hi, I'm Alejandro",
    heroSubtitle:
      "Operations and data analyst with a background in web development.",
    heroBody:
      "I combine experience in operations, reporting and web development to build digital solutions that are clear, measurable and easy to maintain. I'm especially interested in the intersection between operations, business intelligence and online education.",
    heroPrimaryCta: "View projects",
    heroSecondaryCta: "Let’s talk",
    heroTagRemote: "Remote-first profile",
    heroTagWebBI: "Web · BI · Automation",
    heroTagLearning: "Continuous learning",

    heroBadgeRole: "Operations & Data",
    heroBadgeFocus: "Web & digital products",
    heroMetaLocationLabel: "Location",
    heroMetaLocationValue: "Argentina · Remote",
    heroMetaFocusLabel: "Main focus",
    heroMetaFocusValue: "Data analysis and web projects",
    heroMetaModeLabel: "Mode",
    heroMetaModeValue: "Remote work · Freelance & full-time roles",

    heroFloating1:
      "Dashboards, processes and documentation designed for real teams.",
    heroFloating2:
      "Websites and templates ready to adapt to new clients and projects.",

    // Projects
    projectsKicker: "Selected work",
    projectsTitle: "From analysis to digital products",
    projectsSubtitle:
      "A mix of operations, data and web development. Each project aims to solve a concrete problem, not just look good in a repo.",

    projectsFilterAll: "All",
    projectsFilterWeb: "Web",
    projectsFilterData: "Data",
    projectsFilterProducts: "Products",
    projectsFilterOther: "Other",

    project1Tag: "Dev & Ops",
    project1Title: "Inventory Management System (CLI) · Python + SQLite",
    project1Body:
      "Console-based inventory management system developed in Python. Focused on stock control and movement tracking, using SQLite as the data layer.",

    project2Tag: "Corporate Website",
    project2Title: "Healthcare corporate website",
    project2Body:
      "Structure and design for a corporate website in the healthcare space, with clear content and client-editable sections.",

    project3Tag: "Landing Template",
    project3Title: "Reusable professional landing",
    project3Body:
      "Landing page designed as a reusable template for coaches, consultants and freelancers, optimized for clear messaging and visible calls to action.",

    projectViewCase: "View details",
    projectViewLive: "View live demo",
    projectViewRepo: "View on GitHub",
    projectsMoreCta: "See more projects on GitHub",

    
    // Resources – EN
    resourcesKicker: "Ebooks and toolkits in progress",
    resourcesTitle: "Ebooks and toolkits in progress",
    resourcesSubtitle:
      "I’m working on downloadable guides and templates for operations professionals who want to start measuring better with data and digital products.",

    resourceBadgeSoon: "Coming soon",

    // Resource 1 – in progress
    resource1Tag: "Ebook · Coming soon",
    resource1Title: "Practical guide to data analysis for operations",
    resource1Body:
      "An ebook designed for non-technical profiles working with KPIs, tickets, and daily reports, who need a simple framework to support decision-making.",
    resource1Cta: "In progress",

    // Resource 2 – free template
    resource2Tag: "Template · Free",
    resource2Title: "Daily KPI template for support teams",
    resource2Body:
      "Ready-to-use spreadsheet with core metrics, targets, and daily notes for support or operations teams.",
    resource2Cta: "Download template",

    // Resource 3 – paid ebook
    resource3Tag: "Ebook · Paid",
    resource3Title: "Reporting playbook for digital operations",
    resource3Body:
      "Step-by-step guide to defining actionable KPIs, building a reporting system, and avoiding dashboards nobody uses.",
    resource3Cta: "View details / Buy",
    // About – EN
    aboutKicker: "ABOUT",
    aboutTitle: "Ops, Data & AI with a digital-product mindset",
    aboutSubtitle:
      "I mix operations, analytics and web development to turn messy day-to-day work into simple dashboards, processes and digital products your team can actually use.",

    aboutBody1:
      "My background is in customer support, quality and operations roles in international environments. I worked daily with KPIs, reports and customer feedback, learning how to translate real-life problems into concrete business improvements.",

    aboutBody2:
      "Today I combine that experience with web development (HTML, CSS, WordPress), Python automation and applied AI —from internal assistants to small RAG prototypes— plus ongoing data-analytics training (UTN, Talento Tech BA, IBM certificates). I look for projects where I can bring structure, measurement and useful tools without overselling my seniority.",

    aboutListTitle: "What I bring to your project",
    aboutList1:
      "Actionable dashboards and reporting for operations and support teams.",
    aboutList2:
      "Conversion-oriented landing pages and websites that are easy to maintain.",
    aboutList3:
      "Reusable documentation, processes, templates and small tools that teams actually adopt.",
    aboutList4:
      "Applied AI workflows and lightweight automations that save time without breaking your operations.",

    // Contact
    contactKicker: "Contact",
    contactTitle: "Let’s work together",
    contactSubtitle:
      "If you have a project in mind or just a rough idea, I can help you shape it. I prefer fully remote collaboration with clear communication and concrete deliverables.",

    contactEmailCta: "Send email",
    contactLinkedinCta: "LinkedIn profile",
    contactGithubCta: "View GitHub",
    contactNote: "Typical response time: 24–48 business hours.",

    // Footer
    footerSignature: "Designed and built by Alejandro Matesa",
  },
};

// ---------------------------
// Language handling
// ---------------------------

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (!value) return;

    if ("placeholder" in el) {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    btn.classList.toggle("lang-btn--active", btnLang === lang);
    btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
  });

  localStorage.setItem("portfolio-lang", lang);

  // Re-render cards con los textos del idioma actual
  renderProjects(currentFilter, lang);
  renderResources(lang);
}

function setupLanguage() {
  const stored = localStorage.getItem("portfolio-lang");
  const initialLang = stored === "en" || stored === "es" ? stored : "es";
  applyLanguage(initialLang);

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyLanguage(lang);
    });
  });
}

// ---------------------------
// Theme handling
// ---------------------------

function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);

  const iconSpan = document.querySelector("#theme-toggle .icon-button-icon");
  if (iconSpan) {
    iconSpan.textContent = theme === "light" ? "☀" : "☾";
  }
}

function setupTheme() {
  const stored = localStorage.getItem("portfolio-theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme =
    stored === "dark" || stored === "light"
      ? stored
      : prefersDark
      ? "dark"
      : "light";

  applyTheme(initialTheme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current =
        document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }
}

// ---------------------------
// Nav handling
// ---------------------------

function setupNav() {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    const bars = toggle.querySelectorAll(".nav-toggle-bar");
    if (bars.length >= 2) {
      bars[0].style.transform = isOpen
        ? "translateY(3px) rotate(45deg)"
        : "";
      bars[1].style.transform = isOpen
        ? "translateY(-3px) rotate(-45deg)"
        : "";
    }
  });

  nav.addEventListener("click", (ev) => {
    if (ev.target.matches(".nav-link")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      const bars = toggle.querySelectorAll(".nav-toggle-bar");
      if (bars.length >= 2) {
        bars[0].style.transform = "";
        bars[1].style.transform = "";
      }
    }
  });
}

// ---------------------------
// Scroll reveal
// ---------------------------

function setupScrollReveal() {
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || revealEls.length === 0) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// ---------------------------
// Projects rendering + filters
// ---------------------------

let currentFilter = "all";

function renderProjects(filter, lang) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const dict = translations[lang] || translations.es;
  grid.innerHTML = "";

  const filtered = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "other") {
      return !p.categories.some((c) => ["web", "data", "products"].includes(c));
    }
    return p.categories.includes(filter);
  });

  filtered.forEach((project) => {
    const card = document.createElement("article");
    card.className = "card project-card";
    card.setAttribute("data-project-id", project.id);

    const media = document.createElement("div");
    media.className = "card-media";
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.imageAlt;
    img.loading = "lazy";
    media.appendChild(img);

    const body = document.createElement("div");
    body.className = "card-body";

    const pill = document.createElement("span");
    pill.className = "pill pill--outline";
    pill.textContent = dict[project.tagKey] || "";
    body.appendChild(pill);

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = dict[project.titleKey] || "";
    body.appendChild(title);

    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent = dict[project.bodyKey] || "";
    body.appendChild(text);

    const techRow = document.createElement("div");
    techRow.className = "card-tech-tags";

    project.tech.forEach((t) => {
      const tag = document.createElement("span");
      tag.className = "pill pill--xs card-tech-tag";
      tag.textContent = t;
      techRow.appendChild(tag);
    });
    body.appendChild(techRow);

    // Lista de notas / detalles adicionales (si hay)
    if (project.notes && project.notes.length) {
      const metaList = document.createElement("ul");
      metaList.className = "card-meta-list";

      project.notes.forEach((n) => {
        const li = document.createElement("li");
        li.textContent = n;
        metaList.appendChild(li);
      });

      body.appendChild(metaList);
    }

    const actions = document.createElement("div");
    actions.className = "card-actions";

    if (project.demoUrl) {
      const demoLink = document.createElement("a");
      demoLink.href = project.demoUrl;
      demoLink.target = "_blank";
      demoLink.rel = "noreferrer";
      demoLink.className = "btn btn--sm btn--ghost";
      demoLink.textContent = dict.projectViewLive;
      actions.appendChild(demoLink);
    }

    if (project.repoUrl) {
      const repoLink = document.createElement("a");
      repoLink.href = project.repoUrl;
      repoLink.target = "_blank";
      repoLink.rel = "noreferrer";
      repoLink.className = "btn btn--sm btn--link";
      repoLink.textContent = dict.projectViewRepo;
      actions.appendChild(repoLink);
    }

    body.appendChild(actions);

    card.appendChild(media);
    card.appendChild(body);
    grid.appendChild(card);
  });
  
}

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".projects-filter");
  if (!filterButtons.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter") || "all";
      currentFilter = filter;

      filterButtons.forEach((b) =>
        b.classList.toggle("projects-filter--active", b === btn)
      );

      const lang =
        document.documentElement.lang === "en" ? "en" : "es";
      renderProjects(filter, lang);
    });
  });
}

// ---------------------------
// Resources rendering
// ---------------------------

function renderResources(lang) {
  const grid = document.getElementById("resources-grid");
  if (!grid) return;

  const dict = translations[lang] || translations.es;
  grid.innerHTML = "";

  resources.forEach((res) => {
    const card = document.createElement("article");
    card.className = "card resource-card";

    // Media
    const media = document.createElement("div");
    media.className = "card-media card-media--product";

    const img = document.createElement("img");
    img.src = res.image;
    img.alt = res.imageAlt;
    img.loading = "lazy";
    media.appendChild(img);

    // Badge "Próximamente" (opcional)
    if (res.badgeKey) {
      const badge = document.createElement("span");
      badge.className = "badge badge--soon";
      badge.textContent = dict[res.badgeKey] || "";
      media.appendChild(badge);
    }

    // Body
    const body = document.createElement("div");
    body.className = "card-body";

    const tag = document.createElement("span");
    tag.className = "pill pill--soft";
    tag.textContent = dict[res.tagKey] || "";
    body.appendChild(tag);

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = dict[res.titleKey] || "";
    body.appendChild(title);

    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent = dict[res.bodyKey] || "";
    body.appendChild(text);

    // CTA
    const actions = document.createElement("div");
    actions.className = "card-actions";

    if (res.downloadUrl) {
      // Recurso gratuito -> botón de descarga
      const link = document.createElement("a");
      link.href = res.downloadUrl;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.className = "btn btn--sm btn--primary";
      link.textContent = dict[res.ctaKey] || "";
      actions.appendChild(link);
    } else if (res.purchaseUrl) {
      // Recurso de pago -> link a plataforma externa
      const link = document.createElement("a");
      link.href = res.purchaseUrl;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.className = "btn btn--sm btn--outline";
      link.textContent = dict[res.ctaKey] || "";
      actions.appendChild(link);
    } else {
      // Sin URLs -> recurso todavía no disponible
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn--sm btn--disabled";
      btn.disabled = true;
      btn.textContent = dict[res.ctaKey] || "";
      actions.appendChild(btn);
    }

    body.appendChild(actions);

    card.appendChild(media);
    card.appendChild(body);
    grid.appendChild(card);
  });
}

// ---------------------------
// Particles (background)
// ---------------------------

function setupParticles() {
  const canvas = document.getElementById("bg-particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const particles = [];
  const particleCount = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  function getAccentColor() {
    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue("--accent").trim();
    return accent || "#38bdf8";
  }

  const color = getAccentColor();

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.6,
    });
  }

  function step() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    ctx.globalAlpha = 0.7;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // simple connections
    ctx.globalAlpha = 0.18;
    ctx.strokeStyle = color;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// ---------------------------
// Init
// ---------------------------

document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupNav();
  setupScrollReveal();
  setupParticles();

  // Render inicial en ES
  renderProjects(currentFilter, "es");
  renderResources("es");
  setupProjectFilters();
  setupLanguage();

  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});