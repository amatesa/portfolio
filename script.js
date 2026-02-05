document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      // Nav
      navProjects: "Projects",
      navResources: "Resources",
      navAbout: "About",
      navContact: "Contact",

      // Theme labels
      themeLabelDark: "Dark",
      themeLabelLight: "Light",

      // Hero
      heroKicker: "Data & Operations · Web & Digital Projects",
      heroSubtitle:
        "Operations and data analyst with experience in fintech, dashboards and web projects. I combine metrics, processes and digital products to help teams make better decisions.",
      heroCtaProjects: "See selected projects",
      heroCtaContact: "Work together",
      heroFocus:
        "Focus: remote-friendly roles, digital products and practical solutions using data.",

      // Projects section
      projectsTitle: "Selected projects",
      projectsIntro:
        "A mix of academic work, freelance projects and templates that show how I design, build and ship digital products.",

      // Filters
      filterAll: "All",
      filterWeb: "Web & landing pages",
      filterDev: "Development",
      filterData: "Data & dashboards",
      filterTemplates: "Templates & e-books",

      // Project 1 – TFI
      proj1Title: "TFI · Inventory Management System",
      proj1Tag: "UNIVERSITY · PYTHON & DATA",
      proj1Desc:
        "Academic project for an inventory management system. Focused on a clean data model, useful reports and practical features for small businesses.",
      proj1RepoLabel: "View repository",

      // Project 2 – MedComp
      proj2Title: "MedComp · Healthcare landing",
      proj2Tag: "CLIENT · WORDPRESS & UI",
      proj2Desc:
        "Responsive landing page for a healthcare company. Structure, copy and layout focused on services, trust and simple contact flows.",
      proj2DemoLabel: "View live site",
      proj2RepoLabel: "View repository",

      // Project 3 – Northbridge
      proj3Title: "Northbridge · Executive coaching landing",
      proj3Tag: "TEMPLATE · LANDING PAGE",
      proj3Desc:
        "Clean, reusable landing page template for consulting and professional services. Optimized for a clear value proposition and simple lead capture.",
      proj3DemoLabel: "View live site",
      proj3RepoLabel: "View repository",

      // Products
      productsTitle: "Digital products",
      productsIntro:
        "E-books and templates in progress, focused on workflows, dashboards and practical guides for remote work.",
      ebook1Title: "Kindle layout experiments",
      ebook1Tag: "LAB · FORMATTING & TESTS",
      ebook1Desc:
        "Internal experiments with HTML/CSS for Kindle, working on clean typography, highlights and navigation before publishing paid content.",
      ebook1LinkText: "See working draft",

      // Resources
      resourcesTitle: "Tools & learning",
      resourcesIntro:
        "Some of the resources I use and recommend while working on data, operations and web projects.",
      resource1Title: "GitHub · amatesa",
      resource1Tag: "CODE · PROJECTS",
      resource1Desc:
        "Personal GitHub with academic projects, experiments and templates around Python, web and data.",
      resource1LinkText: "Open GitHub profile",
      resource2Title: "LinkedIn · Alejandro Matesa",
      resource2Tag: "NETWORK · EXPERIENCE",
      resource2Desc:
        "Professional profile with experience in fintech operations, data analysis and web projects.",
      resource2LinkText: "Open LinkedIn profile",

      // About
      aboutTitle: "About",
      aboutIntro:
        "Hybrid profile oriented to fintech operations, data analysis and digital projects, with real experience in international environments and continuous technical learning.",
      aboutHighlight:
        "I like to close the loop between operations, data and product: understand the process, measure it, and build something concrete that improves it.",
      aboutCol1Title: "Operations & fintech",
      aboutCol1Text:
        "Experience in Klarna projects through Transcom: support for merchants, payment flows, KPIs and operational processes. Used dashboards and data to detect issues and improve CSAT/DSAT.",
      aboutCol2Title: "Data & analytics",
      aboutCol2Text:
        "Comfortable working with Looker Studio, Google Sheets and basic Python/SQL. I build practical dashboards, reports and small automations that help teams see what matters.",
      aboutCol3Title: "Web & digital",
      aboutCol3Text:
        "Freelance experience with WordPress, landing pages and online stores. Currently exploring reusable templates, Kindle formatting and ways to turn this into digital products.",

      // Contact
      contactTitle: "Contact",
      contactIntro:
        "If you’re working on something related to fintech, data, operations or digital products, I’d be happy to hear from you.",
      contactWorkTitle: "Let’s work together",
      contactWorkText:
        "Open to remote roles and freelance collaborations in operations, data analysis and digital projects.",
      contactWorkEmail: "Email me",
      contactWorkLinkedIn: "Message on LinkedIn",
      contactExploreTitle: "Just exploring?",
      contactExploreText:
        "You can start by browsing the projects and seeing how I approach structure, copy and delivery.",
      contactExploreProjects: "View projects",

      // Footer
      footerText:
        "Portfolio in progress – last updated 2026. Built with HTML, CSS and a little vanilla JS."
    },

    es: {
      // Nav
      navProjects: "Proyectos",
      navResources: "Recursos",
      navAbout: "Sobre mí",
      navContact: "Contacto",

      // Theme labels
      themeLabelDark: "Oscuro",
      themeLabelLight: "Claro",

      // Hero
      heroKicker: "Operaciones & Datos · Proyectos Web y Digitales",
      heroSubtitle:
        "Analista de operaciones y datos con experiencia en fintech, dashboards y proyectos web. Uno métricas, procesos y productos digitales para ayudar a los equipos a decidir mejor.",
      heroCtaProjects: "Ver proyectos",
      heroCtaContact: "Hablemos",
      heroFocus:
        "Foco: trabajo remoto, productos digitales y soluciones prácticas apoyadas en datos.",

      // Projects section
      projectsTitle: "Proyectos seleccionados",
      projectsIntro:
        "Mezcla de trabajos académicos, proyectos freelance y plantillas que muestran cómo diseño, construyo y entrego productos digitales.",

      // Filters
      filterAll: "Todos",
      filterWeb: "Web & landings",
      filterDev: "Desarrollo",
      filterData: "Datos & dashboards",
      filterTemplates: "Plantillas & e-books",

      // Project 1 – TFI
      proj1Title: "TFI · Sistema de gestión de inventario",
      proj1Tag: "UNIVERSIDAD · PYTHON & DATOS",
      proj1Desc:
        "Proyecto académico de sistema de gestión de inventario. Enfoque en modelo de datos claro, reportes útiles y funciones prácticas para pequeños negocios.",
      proj1RepoLabel: "Ver repositorio",

      // Project 2 – MedComp
      proj2Title: "MedComp · Landing de salud",
      proj2Tag: "CLIENTE · WORDPRESS & UI",
      proj2Desc:
        "Landing responsive para una empresa del sector salud. Estructura, copy y diseño orientados a servicios, confianza y flujos de contacto simples.",
      proj2DemoLabel: "Ver sitio en vivo",
      proj2RepoLabel: "Ver repositorio",

      // Project 3 – Northbridge
      proj3Title: "Northbridge · Landing de coaching ejecutivo",
      proj3Tag: "PLANTILLA · LANDING PAGE",
      proj3Desc:
        "Plantilla limpia y reutilizable para consultorías y servicios profesionales. Optimizada para una propuesta de valor clara y captura de leads sencilla.",
      proj3DemoLabel: "Ver sitio en vivo",
      proj3RepoLabel: "Ver repositorio",

      // Products
      productsTitle: "Productos digitales",
      productsIntro:
        "E-books y plantillas en progreso, centrados en flujos de trabajo, dashboards y guías prácticas para trabajo remoto.",
      ebook1Title: "Experimentos de maquetación para Kindle",
      ebook1Tag: "LAB · FORMATO & PRUEBAS",
      ebook1Desc:
        "Pruebas internas con HTML/CSS para Kindle, trabajando tipografía, destacados y navegación antes de publicar contenido de pago.",
      ebook1LinkText: "Ver borrador de trabajo",

      // Resources
      resourcesTitle: "Herramientas & aprendizaje",
      resourcesIntro:
        "Algunos de los recursos que uso y recomiendo cuando trabajo en datos, operaciones y proyectos web.",
      resource1Title: "GitHub · amatesa",
      resource1Tag: "CÓDIGO · PROYECTOS",
      resource1Desc:
        "GitHub personal con proyectos académicos, experimentos y plantillas en Python, web y datos.",
      resource1LinkText: "Abrir perfil de GitHub",
      resource2Title: "LinkedIn · Alejandro Matesa",
      resource2Tag: "NETWORK · EXPERIENCIA",
      resource2Desc:
        "Perfil profesional con experiencia en operaciones fintech, análisis de datos y proyectos digitales.",
      resource2LinkText: "Abrir perfil de LinkedIn",

      // About
      aboutTitle: "Sobre mí",
      aboutIntro:
        "Perfil híbrido orientado a operaciones fintech, análisis de datos y proyectos digitales, con experiencia real en entornos internacionales y formación técnica continua.",
      aboutHighlight:
        "Me gusta cerrar el ciclo entre operaciones, datos y producto: entender el proceso, medirlo y construir algo concreto que lo mejore.",
      aboutCol1Title: "Operaciones & fintech",
      aboutCol1Text:
        "Experiencia en proyectos Klarna a través de Transcom: soporte a comercios, flujos de pago, KPIs y procesos operativos. Uso de dashboards y datos para detectar problemas y mejorar CSAT/DSAT.",
      aboutCol2Title: "Datos & analítica",
      aboutCol2Text:
        "Cómodo trabajando con Looker Studio, Google Sheets y Python/SQL básicos. Creo dashboards, reportes y pequeñas automatizaciones que ayudan a los equipos a ver lo importante.",
      aboutCol3Title: "Web & digital",
      aboutCol3Text:
        "Experiencia freelance con WordPress, landings y tiendas online. Actualmente explorando plantillas reutilizables, maquetación para Kindle y formas de convertir esto en productos digitales.",

      // Contact
      contactTitle: "Contacto",
      contactIntro:
        "Si estás trabajando en algo relacionado con fintech, datos, operaciones o productos digitales, me interesa escucharte.",
      contactWorkTitle: "Trabajemos juntos",
      contactWorkText:
        "Abierto a roles remotos y colaboraciones freelance en operaciones, análisis de datos y proyectos digitales.",
      contactWorkEmail: "Escribirme por mail",
      contactWorkLinkedIn: "Escribirme por LinkedIn",
      contactExploreTitle: "¿Solo curioseando?",
      contactExploreText:
        "Podés empezar mirando los proyectos y viendo cómo planteo estructura, copy y entregables.",
      contactExploreProjects: "Ver proyectos",

      // Footer
      footerText:
        "Portafolio en construcción – última actualización 2026. Hecho con HTML, CSS y un poco de JS vanilla."
    }
  };

  const htmlEl = document.documentElement;
  const langButtons = document.querySelectorAll(".lang-btn");
  const i18nElements = document.querySelectorAll("[data-i18n]");
  const themeToggleBtn = document.getElementById("themeToggle");
  const themeLabel = themeToggleBtn?.querySelector(".theme-toggle-label");
  const themeIcon = themeToggleBtn?.querySelector(".theme-toggle-icon");
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNavLinks = document.querySelectorAll(".nav-mobile-panel a");
  const filterButtons = document.querySelectorAll(".projects-filter .pill");
  const projectCards = document.querySelectorAll(".project-card");

  // =========
  // Language
  // =========

  let currentLang = localStorage.getItem("lang") || "en";

  function applyTranslations() {
    i18nElements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const text =
        translations[currentLang] && translations[currentLang][key]
          ? translations[currentLang][key]
          : "";
      el.textContent = text;
    });
  }

  function updateThemeLabel() {
    if (!themeLabel) return;
    const isDark = htmlEl.dataset.theme === "dark";
    const key = isDark ? "themeLabelLight" : "themeLabelDark";
    const text =
      translations[currentLang] && translations[currentLang][key]
        ? translations[currentLang][key]
        : isDark
        ? "Light"
        : "Dark";
    themeLabel.textContent = text;
    if (themeIcon) {
      themeIcon.textContent = isDark ? "☀️" : "🌙";
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);
    htmlEl.lang = lang;

    langButtons.forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      btn.classList.toggle("is-active", btnLang === lang);
    });

    applyTranslations();
    updateThemeLabel();
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });

  // =========
  // Theme
  // =========

  function getPreferredTheme() {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    if (window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  }

  function applyTheme(theme) {
    htmlEl.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    updateThemeLabel();
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = htmlEl.dataset.theme || "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  // =========
  // Mobile nav
  // =========

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("mobile-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!header || !navToggle) return;
      header.classList.remove("mobile-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // =========
  // Hide header on scroll & elevation
  // =========

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (!header) return;
    const current = window.scrollY;
    const goingDown = current > lastScrollY;

    if (current > 120 && goingDown) {
      header.classList.add("site-header--hidden");
    } else {
      header.classList.remove("site-header--hidden");
    }

    header.classList.toggle("elevated", current > 12);
    lastScrollY = current;
  });

  // =========
  // Project filters
  // =========

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter") || "all";

      filterButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      projectCards.forEach((card) => {
        const raw = card.getAttribute("data-category") || "";
        const categories = raw
          .split(" ")
          .map((c) => c.trim())
          .filter(Boolean);

        if (filter === "all" || categories.includes(filter)) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });

  // =========
  // Initial load
  // =========

  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);
  setLanguage(currentLang);
});
