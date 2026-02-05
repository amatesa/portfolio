document.addEventListener("DOMContentLoaded", () => {
  /* ---------- TRANSLATIONS ---------- */

  const translations = {
    es: {
      heroEyebrow: "Portfolio · Data, Operaciones y Proyectos Digitales",
      heroTitle: "Alejandro Matesa",
      heroSubtitle:
        "Analista de Operaciones y Datos con experiencia en fintech, reporting ejecutivo y desarrollo de proyectos web y digitales.",
      heroPrimaryCta: "Ver proyectos",
      heroSecondaryCta: "Hablemos",
      heroPill:
        "Enfoque: trabajo remoto, soluciones prácticas y activos digitales reutilizables.",

      navProjects: "Proyectos",
      navProducts: "Recursos",
      navAbout: "Sobre mí",
      navContact: "Contacto",

      projectsTitle: "Proyectos seleccionados",
      projectsIntro:
        "Una combinación de trabajo real con clientes, experiencia fintech y proyectos académicos orientados a datos y operaciones.",

      filterAll: "Todos",
      filterWeb: "Web",
      filterData: "Data",
      filterTemplates: "Templates",

      proj1Title: "Sistema de Gestión de Inventario",
      proj1Tag: "Python · SQLite · CLI",
      proj1Desc:
        "Proyecto académico: herramienta de consola para gestionar inventario con operaciones CRUD y reporte de bajo stock.",

      proj2Title: "Sitio Corporativo MedComp",
      proj2Tag: "HTML · CSS · JS · PHP",
      proj2Desc:
        "Proyecto real para una empresa de consultoría médica. Sitio corporativo multipágina, orientado a claridad y confianza.",

      proj3Title: "Northbridge – Landing de Executive Coaching",
      proj3Tag: "Landing page · HTML · CSS · JS",
      proj3Desc:
        "Template de landing profesional para coaches y consultores senior, con foco en mensaje claro y llamadas a la acción fuertes.",

      projDemoText: "Ver demo",
      projRepoText: "Ver repositorio",

      projPlaceholderWebTitle: "Nuevo proyecto web",
      projPlaceholderWebTag: "Template · En progreso",
      projPlaceholderWebDesc:
        "Espacio reservado para futuros sitios o templates web orientados a data, consultoría y productos digitales.",
      projPlaceholderWip: "En desarrollo",

      productsTitle: "Recursos y productos digitales",
      productsIntro:
        "Ebooks, guías y recursos descargables enfocados en análisis de datos, automatización ligera y proyectos digitales.",

      ebook1Title: "Ebook #1 – En preparación",
      ebook1Tag: "Recurso digital",
      ebook1Desc:
        "Primer recurso digital orientado a data y proyectos web. Aún en diseño; este bloque funciona como placeholder.",
      ebook1Cta: "Próximamente",

      aboutTitle: "Sobre mí",
      aboutLead:
        "Trabajo en la intersección de datos, operaciones y proyectos digitales. Vengo del mundo fintech y administrativo, y hoy combino análisis, reporting y desarrollo web ligero.",
      aboutLocation: "Ubicación: Argentina · Trabajo 100% remoto.",
      aboutAvailability:
        "Busco roles en análisis de datos / operaciones y proyectos freelance web/digital.",

      aboutDataTitle: "Data & Operations",
      aboutDataText:
        "Experiencia real en fintech (Klarna / Transcom): dashboards en Looker, seguimiento de KPIs, análisis de CSAT/DSAT y reporting ejecutivo orientado a decisiones.",

      aboutWebTitle: "Web & Productos Digitales",
      aboutWebText:
        "Desarrollo de sitios web con HTML, CSS, JS y WordPress, más maquetación de ebooks y recursos digitales pensados para ser reutilizables y escalables.",

      aboutLearningTitle: "Aprendizaje continuo",
      aboutLearningText:
        "Formación en Diseño de Videojuegos (UTN), Data Analysis (Talento Tech BA) y certificaciones de IBM en análisis de datos e IA generativa.",

      contactTitle: "Contacto",
      contactIntro:
        "Si estás buscando a alguien que conecte datos, operaciones y producto digital con foco en claridad y ejecución, podemos hablar.",
      contactWorkTitle: "Trabajo y colaboraciones",
      contactWorkText:
        "Disponible para roles remotos en análisis de datos / operaciones y proyectos freelance de sitios web, dashboards o productos digitales.",
      contactEmailCta: "Escribirme por email",
      contactLinkedinCta: "Ver perfil en LinkedIn",

      contactCollabTitle: "Ver más antes de escribir",
      contactCollabText:
        "Si preferís explorar primero, podés recorrer los proyectos y recursos del portfolio.",
      contactProjectsCta: "Ver proyectos del portfolio",

      footerText:
        "Portfolio creado por Alejandro Matesa. Data & Operations · Web & Digital Projects."
    },

    en: {
      heroEyebrow: "Portfolio · Data, Operations & Digital Projects",
      heroTitle: "Alejandro Matesa",
      heroSubtitle:
        "Data & Operations Analyst with experience in fintech, executive reporting and lightweight web/digital projects.",
      heroPrimaryCta: "View projects",
      heroSecondaryCta: "Get in touch",
      heroPill:
        "Focus: remote work, practical solutions and reusable digital assets.",

      navProjects: "Projects",
      navProducts: "Resources",
      navAbout: "About",
      navContact: "Contact",

      projectsTitle: "Selected projects",
      projectsIntro:
        "A mix of real client work, fintech experience and academic projects focused on data, operations and web delivery.",

      filterAll: "All",
      filterWeb: "Web",
      filterData: "Data",
      filterTemplates: "Templates",

      proj1Title: "Inventory Management System",
      proj1Tag: "Python · SQLite · CLI",
      proj1Desc:
        "Academic project: a console-based inventory management tool with CRUD operations and low-stock alerts.",

      proj2Title: "MedComp Corporate Website",
      proj2Tag: "HTML · CSS · JS · PHP",
      proj2Desc:
        "Real client project for a medical consulting company. Multipage corporate website focused on clarity and trust.",

      proj3Title: "Northbridge – Executive Coaching Landing",
      proj3Tag: "Landing page · HTML · CSS · JS",
      proj3Desc:
        "Professional landing page template for senior coaches and consultants, with a clear message and strong calls to action.",

      projDemoText: "View live demo",
      projRepoText: "View repository",

      projPlaceholderWebTitle: "New web project",
      projPlaceholderWebTag: "Template · In progress",
      projPlaceholderWebDesc:
        "Reserved space for upcoming web sites or templates focused on data, consulting and digital products.",
      projPlaceholderWip: "Work in progress",

      productsTitle: "Digital products & resources",
      productsIntro:
        "Ebooks, guides and downloadable resources focused on data analysis, light automation and digital projects.",

      ebook1Title: "Ebook #1 – In progress",
      ebook1Tag: "Digital resource",
      ebook1Desc:
        "First digital resource focused on data and web projects. Still in design; this block works as a placeholder.",
      ebook1Cta: "Coming soon",

      aboutTitle: "About",
      aboutLead:
        "I work at the intersection of data, operations and digital projects. I come from fintech and admin roles, and now combine analysis, reporting and lightweight web development.",
      aboutLocation: "Based in Argentina · Open to fully remote work.",
      aboutAvailability:
        "Looking for data/operations roles and freelance web/digital projects.",

      aboutDataTitle: "Data & Operations",
      aboutDataText:
        "Real experience in fintech (Klarna / Transcom): Looker dashboards, KPI monitoring, CSAT/DSAT analysis and executive reporting for decision-making.",

      aboutWebTitle: "Web & Digital Products",
      aboutWebText:
        "Development of websites using HTML, CSS, JS and WordPress, plus Kindle/ebook layout and reusable digital resources.",

      aboutLearningTitle: "Continuous learning",
      aboutLearningText:
        "Game Design studies (UTN), Data Analysis (Talento Tech BA) and IBM certifications in data analysis and generative AI.",

      contactTitle: "Contact",
      contactIntro:
        "If you need someone who can connect data, operations and digital product with a practical, honest approach, let's talk.",
      contactWorkTitle: "Work & collaborations",
      contactWorkText:
        "Available for remote data/operations roles and freelance projects involving websites, dashboards or digital products.",
      contactEmailCta: "Email me",
      contactLinkedinCta: "View LinkedIn profile",

      contactCollabTitle: "Explore first",
      contactCollabText:
        "If you prefer to explore first, you can browse the projects and resources in this portfolio.",
      contactProjectsCta: "View portfolio projects",

      footerText:
        "Portfolio built by Alejandro Matesa. Data & Operations · Web & Digital Projects."
    }
  };

  const langElements = document.querySelectorAll("[data-i18n]");
  const langButtons = document.querySelectorAll(".lang-btn");

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    langElements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);

    langButtons.forEach((btn) => {
      btn.classList.toggle(
        "lang-btn--active",
        btn.getAttribute("data-lang") === lang
      );
    });
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  const initialLang = localStorage.getItem("lang") || "en";
  setLanguage(initialLang);

  /* ---------- TEMA ---------- */

  const themeToggle = document.getElementById("themeToggle");

  function setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
      themeToggle.textContent = "☀ Light";
    } else {
      document.body.classList.remove("dark");
      themeToggle.textContent = "🌙 Dark";
    }
    localStorage.setItem("theme", theme);
  }

  const storedTheme = localStorage.getItem("theme") || "light";
  setTheme(storedTheme);

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });

  /* ---------- NAV MOBILE + HIDE/SHOW ON SCROLL ---------- */

  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav__toggle");
  const siteHeader = document.getElementById("siteHeader");

  if (nav && navToggle && siteHeader) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav--open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav--open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      const currentY = window.scrollY;

      if (currentY > 10) {
        siteHeader.classList.add("site-header--scrolled");
      } else {
        siteHeader.classList.remove("site-header--scrolled");
      }

      if (currentY > lastScrollY + 8 && currentY > 80) {
        // scrolling down
        siteHeader.classList.add("site-header--hidden");
      } else if (currentY < lastScrollY - 8) {
        // scrolling up
        siteHeader.classList.remove("site-header--hidden");
      }

      lastScrollY = currentY;
    });
  }

  /* ---------- FILTER PROYECTOS ---------- */

  const filterChips = document.querySelectorAll(".filter-chip");
  const projectCards = document.querySelectorAll(".project-card");

  function applyFilter(filter) {
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      const show = filter === "all" || category === filter;
      card.classList.toggle("is-hidden", !show);
    });
  }

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.getAttribute("data-filter");
      filterChips.forEach((c) =>
        c.classList.toggle("filter-chip--active", c === chip)
      );
      applyFilter(filter);
    });
  });

  /* ---------- AOS ---------- */

  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out"
    });
  }
});
