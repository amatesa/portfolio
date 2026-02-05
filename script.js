// ---------------------------
// Simple i18n
// ---------------------------
const translations = {
  es: {
    brandName: "Alejandro Matesa",
    navProjects: "Proyectos",
    navResources: "Recursos",
    navAbout: "Sobre mí",
    navContact: "Contacto",

    heroKicker: "Web · Data · Digital Products",
    heroTitle: "Hola, soy Alejandro",
    heroSubtitle:
      "Diseñador web junior, creador de contenido y perfil de datos en formación.",
    heroBody:
      "Combino diseño, análisis y aprendizaje continuo para crear experiencias digitales claras, medibles y fáciles de mantener. Me interesa especialmente el cruce entre desarrollo web, business intelligence y educación online.",
    heroCtaPrimary: "Ver proyectos",
    heroCtaSecondary: "Hablemos",
    heroMeta1: "Perfil orientado a remoto",
    heroMeta2: "Web · BI · Automatización",
    heroCaption:
      "Pasando de soporte y calidad a diseño web, datos y productos digitales.",

    aboutTitle: "Sobre mí",
    aboutKicker:
      "Un perfil junior que conecta aprendizaje serio con proyectos reales.",
    aboutBody1:
      "Actualmente estoy construyendo mi portfolio combinando desarrollo web (HTML, CSS, JavaScript y bases de React), análisis de datos y automatización de procesos. Vengo de roles de soporte, calidad y análisis operativo, donde aprendí a escuchar al usuario y a traducir problemas en soluciones concretas.",
    aboutBody2:
      "Me interesa trabajar con equipos que valoren la experimentación, la documentación y la mejora continua. No vendo humo: prefiero mostrar procesos, decisiones y cómo voy aprendiendo versión tras versión.",
    aboutNowTitle: "Qué estoy haciendo ahora",
    aboutNowBody:
      "Desarrollo sitios estáticos y pequeñas aplicaciones front-end, diseño dashboards básicos y creo recursos educativos digitales (guías, plantillas, pequeños cursos).",
    aboutHelpTitle: "Cómo puedo ayudar",
    aboutHelpBody:
      "Puedo ayudarte a aterrizar ideas en prototipos web claros, organizar datos en dashboards simples y documentar procesos para que otras personas del equipo puedan continuar el trabajo.",
    aboutLearningTitle: "En qué estoy aprendiendo",
    aboutLearningBody:
      "Profundizando en React, buenas prácticas de BI, automatización con Python y uso responsable de IA para acelerar pero sin perder control del resultado.",

    projectsTitle: "Mi Portfolio",
    projectsKicker:
      "Una selección de proyectos personales y académicos para practicar diseño web, datos y automatización.",
    filterAll: "Todos",
    filterWeb: "Web Design",
    filterData: "Data & BI",
    filterAutomation: "Automation & Tools",

    project1Body:
      "Dashboard de práctica para analizar métricas de un negocio digital ficticio: ingresos, tickets, retención y cohortes simples.",
    project2Body:
      "Landing page responsive para un estudio creativo, pensada como práctica de maquetación semántica, accesibilidad y performance básica.",
    project3Body:
      "Sistema sencillo para organizar ideas de contenido, tareas y recursos, conectando tablero, calendario y repositorios de forma práctica.",

    resourcesTitle: "Recursos Digitales",
    resourcesKicker:
      "Guías, plantillas y recursos prácticos para ayudarte a construir tu propio stack digital.",
    resourcePaidLabel: "Próximamente",
    resourceFreeLabel: "Gratis",
    resource1Title:
      "Guía práctica de análisis de datos para perfiles no técnicos",
    resource1Body:
      "Ebook orientado a personas que vienen de operaciones, soporte o contenidos y quieren empezar a medir mejor su trabajo usando datos.",
    resource1Cta: "Próximamente",
    resource2Title: "Starter kit de plantillas web y dashboards",
    resource2Body:
      "Pack de plantillas en HTML/CSS y Google Sheets para acelerar la creación de portfolios, dashboards básicos y documentación de proyectos.",
    resource2Cta: "Descargar desde GitHub",

    contactTitle: "Trabajemos juntos",
    contactKicker:
      "Si tenés un proyecto en mente o una idea en borrador, puedo ayudarte a darle forma.",
    contactCardTitle: "Información de contacto",
    contactCardBody:
      "Prefiero empezar con un mensaje corto donde me cuentes contexto, objetivos y plazos. A partir de ahí, podemos coordinar una call.",
    contactNote: "Tiempo de respuesta habitual: 24–48 h en días hábiles.",
    contactCtaTitle: "Cómo empezar",
    contactCtaBody:
      "Podés escribirme un mensaje directo por LinkedIn o enviarme un email con el tema, tipo de proyecto, alcance y plazos. Si ya tenés docs o repos, mejor todavía.",
    contactEmailCta: "Enviar email",
    contactLinkedinCta: "Escribir por LinkedIn",

    footerText: "Construyendo productos digitales, un proyecto a la vez.",
  },

  en: {
    brandName: "Alejandro Matesa",
    navProjects: "Projects",
    navResources: "Resources",
    navAbout: "About",
    navContact: "Contact",

    heroKicker: "Web · Data · Digital Products",
    heroTitle: "Hi, I'm Alejandro",
    heroSubtitle:
      "Junior web designer, content creator and data learner from an operations background.",
    heroBody:
      "I combine design, analysis and continuous learning to build clear and maintainable digital experiences. I’m especially interested in the intersection between web development, business intelligence and online education.",
    heroCtaPrimary: "View projects",
    heroCtaSecondary: "Let’s talk",
    heroMeta1: "Remote-friendly profile",
    heroMeta2: "Web · BI · Automation",
    heroCaption:
      "Transitioning from support and quality to web, data and digital products.",

    aboutTitle: "About me",
    aboutKicker: "A junior profile turning serious learning into real projects.",
    aboutBody1:
      "I’m currently building my portfolio by combining web development (HTML, CSS, JavaScript and basic React), data analysis and process automation. My background in support, quality and operations taught me to listen to users and turn problems into concrete solutions.",
    aboutBody2:
      "I like working with teams that value experimentation, documentation and continuous improvement. I don’t oversell: I prefer to show processes, decisions and how I iterate over time.",
    aboutNowTitle: "What I’m working on",
    aboutNowBody:
      "I build static sites and small front-end apps, design simple dashboards and create digital learning resources (guides, templates, small courses).",
    aboutHelpTitle: "How I can help",
    aboutHelpBody:
      "I can help you turn ideas into clear web prototypes, organize data into simple dashboards and document processes so other teammates can continue the work.",
    aboutLearningTitle: "What I’m learning",
    aboutLearningBody:
      "Going deeper into React, BI best practices, Python automation and responsible use of AI to speed things up without losing control.",

    projectsTitle: "My Portfolio",
    projectsKicker:
      "A selection of personal and academic projects to practice web design, data and automation.",
    filterAll: "All",
    filterWeb: "Web Design",
    filterData: "Data & BI",
    filterAutomation: "Automation & Tools",

    project1Body:
      "Practice dashboard to explore metrics of a fictional digital business: revenue, tickets, retention and simple cohorts.",
    project2Body:
      "Responsive landing page for a creative studio, focused on semantic markup, accessibility and basic performance.",
    project3Body:
      "Simple system to organize content ideas, tasks and resources, connecting board, calendar and repositories.",

    resourcesTitle: "Digital Resources",
    resourcesKicker:
      "Guides, templates and practical resources to help you build your own digital stack.",
    resourcePaidLabel: "Coming soon",
    resourceFreeLabel: "Free",
    resource1Title:
      "Practical data analysis guide for non-technical profiles",
    resource1Body:
      "An ebook aimed at people coming from operations, support or content who want to measure their work using data.",
    resource1Cta: "Coming soon",
    resource2Title: "Web & dashboard starter kit",
    resource2Body:
      "A pack of HTML/CSS and Google Sheets templates to speed up portfolio sites, basic dashboards and project documentation.",
    resource2Cta: "Download from GitHub",

    contactTitle: "Let’s work together",
    contactKicker:
      "If you have a project in mind or just a rough idea, I can help you give it shape.",
    contactCardTitle: "Contact info",
    contactCardBody:
      "I like to start with a short message including context, goals and timelines. From there we can schedule a call.",
    contactNote: "Usual reply time: 24–48 h on business days.",
    contactCtaTitle: "How to start",
    contactCtaBody:
      "You can send me a quick message on LinkedIn or an email with the project type, scope and deadlines. If you already have docs or repos, even better.",
    contactEmailCta: "Send email",
    contactLinkedinCta: "Message on LinkedIn",

    footerText: "Building digital products, one project at a time.",
  },
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = dict[key];
    if (!text) return;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  // update active state on buttons
  document.querySelectorAll(".lang-switch").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  localStorage.setItem("siteLang", lang);
}

// ---------------------------
// Theme toggle
// ---------------------------
function applyTheme(theme) {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const isDark = theme === "dark";

  body.classList.toggle("theme-dark", isDark);
  toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
  toggle.textContent = isDark ? "☾" : "☀";

  localStorage.setItem("siteTheme", isDark ? "dark" : "light");
}

// ---------------------------
// Nav burger + filters
// ---------------------------
function setupNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");
    navMenu.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("is-open");
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupFilters() {
  const buttons = document.querySelectorAll(".projects-filter .filter-button");
  const cards = document.querySelectorAll(".project-card");

  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter || "all";

      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      cards.forEach((card) => {
        const cat = card.dataset.category || "";
        const visible = filter === "all" || cat.includes(filter);
        card.style.display = visible ? "flex" : "none";
      });
    });
  });
}

// ---------------------------
// Init
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Language
  const savedLang = localStorage.getItem("siteLang") || "es";
  applyLanguage(savedLang);

  document.querySelectorAll(".lang-switch").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang || "es";
      applyLanguage(lang);
    });
  });

  // Theme
  const storedTheme = localStorage.getItem("siteTheme");
  let initialTheme = storedTheme;

  if (!initialTheme) {
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    initialTheme = prefersDark ? "dark" : "light";
  }

  applyTheme(initialTheme);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("theme-dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  // Nav & filters
  setupNav();
  setupFilters();

  // Footer year
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
