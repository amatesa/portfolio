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
      heroFocus:
        "Focus: remote-friendly roles, digital products and practical solutions using data.",

      heroPillRole: "Current focus",
      heroPillMeta: "Data & Operations · Web & digital projects",

      heroPill1Label: "Remote & async work",
      heroPill1Value: "Available for fully remote teams.",

      heroPill2Label: "Projects",
      heroPill2Value: "Dashboards, web templates and game dev experiments.",

      heroCtaProjects: "View projects",
      heroCtaContact: "Let's work together",

      // Projects section
      projectsKicker: "Selected work",
      projectsTitle: "Projects",
      projectsIntro:
        "Mix of academic work, freelance projects and experiments that show how I design, build and ship digital products.",

      // Filters
      filterAll: "All",
      filterWeb: "Web & landings",
      filterDev: "Development",
      filterData: "Data & dashboards",
      filterTemplates: "Templates",

      // Project 1 – Data dashboards
      proj1Tag: "DATA & DASHBOARDS",
      proj1Title: "Sales analysis dashboard",
      proj1Desc:
        "Interactive dashboard built in Google Sheets and Looker Studio as part of a Business Intelligence track. Includes KPIs, filters and storytelling for non-technical stakeholders.",
      proj1Meta:
        "Tools: Google Sheets, Looker Studio, data cleaning and visualization.",
      proj1DemoLabel: "View dashboard (soon)",
      proj1RepoLabel: "View process notes (soon)",

      // Project 2 – MedComp
      proj2Tag: "WEB DESIGN · LANDING",
      proj2Title: "MedComp · Digital health web",
      proj2Desc:
        "Responsive landing page for a healthcare company, focused on clear value proposition, trust and lead generation. Includes reusable sections and component-based structure.",
      proj2Meta:
        "HTML, CSS and vanilla JS with a layout ready to evolve into a design system.",
      proj2DemoLabel: "View live site (soon)",
      proj2RepoLabel: "View repository (soon)",

      // Project 3 – Northbridge
      proj3Tag: "TEMPLATE · LANDING PAGE",
      proj3Title: "Northbridge · Executive coaching landing",
      proj3Desc:
        "Clean, reusable landing page template for consulting and coaching businesses. Optimized for a clear value proposition and simple lead capture.",
      proj3Meta: "Built from scratch using semantic HTML, CSS and JS.",
      proj3DemoLabel: "View live site",
      proj3RepoLabel: "View repository",

      // Project 4 – Game dev
      proj4Tag: "GAME DEV · CONCEPT",
      proj4Title: "Echoes of the Library · Game prototype",
      proj4Desc:
        "Top-down puzzle game concept created for a game design course, with focus on exploration, atmosphere and repeatable puzzle loops. Includes GDD, UI sketches and early Unity prototype.",
      proj4Meta: "Unity, C#, game design principles and puzzle-based loops.",
      proj4DemoLabel: "View demo (soon)",
      proj4RepoLabel: "View GDD & assets (soon)",

      // Project 5 – Web project (TFI)
      proj5Tag: "WEB APP · DASHBOARD UI",
      proj5Title: "TFI Medical Dashboard · Patient follow-up",
      proj5Desc:
        "Concept for a web dashboard that helps professionals track patient follow-ups, metrics and tasks. Mixes BI thinking with UX for health workflows.",
      proj5Meta: "Wireframes, UI, metrics and flows oriented to real use cases.",
      proj5DemoLabel: "View mockups (soon)",
      proj5RepoLabel: "View repository (soon)",

      // Project 6 – Templates
      proj6Tag: "TEMPLATES · LAB",
      proj6Title: "Portfolio templates & workflow tools",
      proj6Desc:
        "Collection of experiments and future digital products: CV templates, dashboards, Notion systems and Kindle layouts.",
      proj6Meta:
        "Work in progress focused on reusable assets for remote professionals.",
      proj6DemoLabel: "View catalog (soon)",
      proj6RepoLabel: "View repository (soon)",

      // Resources
      resourcesKicker: "Resources & learning",
      resourcesTitle: "How I work and learn",
      resourcesIntro:
        "I use real projects to learn and update my skills: dashboards, game design, web templates and documentation.",

      resource1Title: "Business Intelligence & analytics",
      resource1Desc:
        "From cleaning data to building dashboards, with a focus on practical questions and stakeholders.",
      resource1Item1: "Data cleaning and validation in Google Sheets",
      resource1Item2: "KPIs, charts and storytelling in Looker Studio",
      resource1Item3: "Documentation of process and decisions",

      resource2Title: "Web & digital products",
      resource2Desc:
        "Landing pages, templates and UI experiments that connect design and development.",
      resource2Item1: "Responsive layouts with semantic HTML & modern CSS",
      resource2Item2: "Reusable sections ready to turn into templates",
      resource2Item3: "Focus on clarity, hierarchy and performance",

      resource3Title: "Games & interactive media",
      resource3Desc:
        "Games are a lab to combine systems, user experience and storytelling.",
      resource3Item1: "Game design documents and lenses",
      resource3Item2: "Unity 2D experiments and prototypes",
      resource3Item3: "Narrative structure and feedback loops",

      // Products
      productsKicker: "Digital products",
      productsTitle: "E-books & templates (in progress)",
      productsIntro:
        "E-books and templates in progress, focused on workflows, dashboards and practical guides for remote work.",
      ebook1Title: "Kindle layout experiments",
      ebook1Tag: "LAB · FORMATTING & TESTS",
      ebook1Desc:
        "Tests with Kindle formatting, CSS and HTML to prepare future e-books and guides. Focused on good reading experience and reusable components.",
      ebook1Meta: "Mix of fiction, design books and technical material.",
      template1Title: "Portfolio & workflow templates",
      template1Tag: "COMING SOON",
      template1Desc:
        "Templates for CVs, project portfolios, dashboards and Notion systems, aimed at remote professionals and creators.",
      template1Meta: "First versions focused on data roles and creative profiles.",

      // About
      aboutKicker: "About",
      aboutTitle: "Who I am and how I work",
      aboutIntro:
        "I work at the intersection of operations, data and digital products. I like to understand systems, document processes and create assets that can be reused.",

      aboutCol1Title: "Profile",
      aboutCol1Text1:
        "Operations and data analyst with experience in fintech and customer support. I enjoy turning messy information into clear dashboards and flows.",
      aboutCol1Text2:
        "I am comfortable switching between technical work (SQL, spreadsheets, dashboards) and communication with teams.",
      aboutCol1Text3:
        "I like working in remote, async environments where documentation and transparency matter.",

      aboutCol2Title: "What I bring",
      aboutCol2Item1: "Data cleaning, validation and basic statistics",
      aboutCol2Item2: "Dashboard design and BI storytelling",
      aboutCol2Item3: "Web templates and UI for data-heavy content",
      aboutCol2Item4: "Game dev mindset: iteration, feedback and playtesting",

      aboutCol3Title: "Tools & stack",
      aboutCol3Item1: "Google Sheets, Looker Studio, SQL basics",
      aboutCol3Item2: "HTML, CSS and vanilla JavaScript",
      aboutCol3Item3: "Unity 2D, C#, Notion, Calibre & Kindle tools",
      aboutCol3Item4: "GitHub, remote collaboration and documentation",

      // Contact
      contactKicker: "Work together",
      contactTitle: "Let's work together",
      contactIntro:
        "If you need dashboards, digital products or someone who can own a problem and document the process, let's talk.",

      contactSubTitle: "How I prefer to work",
      contactText1:
        "I like roles with clear goals, autonomy and space to propose improvements based on data.",
      contactText2:
        "I am especially interested in remote roles where operations, data and digital products converge.",

      contactEmailLabel: "Email",
      contactGithubLabel: "GitHub",
      contactLinkedinLabel: "LinkedIn (soon)",
      contactNote:
        "I am open to remote positions (full-time or freelance) and collaborations on dashboards, templates or game-related projects.",

      // Footer
      footerText: "Portfolio by Alejandro Matesa · Built with HTML, CSS and vanilla JS.",
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
      heroKicker: "Data & Operations · Web & Proyectos Digitales",
      heroSubtitle:
        "Analista de operaciones y datos con experiencia en fintech, dashboards y proyectos web. Combino métricas, procesos y productos digitales para ayudar a los equipos a tomar mejores decisiones.",
      heroFocus:
        "Foco: trabajo remoto, productos digitales y soluciones prácticas apoyadas en datos.",

      heroPillRole: "Foco actual",
      heroPillMeta: "Data & Operations · Web & proyectos digitales",

      heroPill1Label: "Trabajo remoto & async",
      heroPill1Value: "Disponible para equipos 100% remotos.",

      heroPill2Label: "Proyectos",
      heroPill2Value:
        "Dashboards, plantillas web y experimentos de game dev.",

      heroCtaProjects: "Ver proyectos",
      heroCtaContact: "Hablemos",

      // Projects section
      projectsKicker: "Trabajo seleccionado",
      projectsTitle: "Proyectos",
      projectsIntro:
        "Mezcla de trabajos académicos, proyectos freelance y experimentos que muestran cómo diseño, construyo y entrego productos digitales.",

      // Filters
      filterAll: "Todos",
      filterWeb: "Web & landings",
      filterDev: "Desarrollo",
      filterData: "Datos & dashboards",
      filterTemplates: "Templates",

      // Project 1 – Data dashboards
      proj1Tag: "DATA & DASHBOARDS",
      proj1Title: "Dashboard de ventas",
      proj1Desc:
        "Dashboard interactivo construido en Google Sheets y Looker Studio como parte de una especialización en Business Intelligence. Incluye KPIs, filtros y storytelling para perfiles no técnicos.",
      proj1Meta:
        "Herramientas: Google Sheets, Looker Studio, limpieza y visualización de datos.",
      proj1DemoLabel: "Ver dashboard (próximamente)",
      proj1RepoLabel: "Ver notas de proceso (próximamente)",

      // Project 2 – MedComp
      proj2Tag: "DISEÑO WEB · LANDING",
      proj2Title: "MedComp · Web de salud digital",
      proj2Desc:
        "Landing page responsive para una empresa del sector salud, enfocada en una propuesta de valor clara, confianza y generación de leads. Incluye secciones reutilizables y estructura orientada a componentes.",
      proj2Meta:
        "HTML, CSS y vanilla JS con una base lista para evolucionar a design system.",
      proj2DemoLabel: "Ver sitio (próximamente)",
      proj2RepoLabel: "Ver repositorio (próximamente)",

      // Project 3 – Northbridge
      proj3Tag: "TEMPLATE · LANDING PAGE",
      proj3Title: "Northbridge · Landing para coaching ejecutivo",
      proj3Desc:
        "Template reutilizable de landing para negocios de consultoría y coaching. Optimizado para una propuesta de valor clara y captura simple de leads.",
      proj3Meta: "Construido desde cero usando HTML semántico, CSS y JS.",
      proj3DemoLabel: "Ver sitio",
      proj3RepoLabel: "Ver repositorio",

      // Project 4 – Game dev
      proj4Tag: "GAME DEV · CONCEPTO",
      proj4Title: "Echoes of the Library · Prototipo",
      proj4Desc:
        "Concepto de juego de puzzles top-down creado para una materia de game design, con foco en exploración, atmósfera y loops de puzzles repetibles. Incluye GDD, bocetos de UI y prototipo inicial en Unity.",
      proj4Meta: "Unity, C#, principios de game design y loops de puzzles.",
      proj4DemoLabel: "Ver demo (próximamente)",
      proj4RepoLabel: "Ver GDD & assets (próximamente)",

      // Project 5 – Web project (TFI)
      proj5Tag: "WEB APP · UI TIPO DASHBOARD",
      proj5Title: "TFI Medical Dashboard · Seguimiento de pacientes",
      proj5Desc:
        "Concepto de dashboard web que ayuda a profesionales a seguir métricas, turnos y tareas de pacientes. Mezcla pensamiento de BI con UX para flujos de trabajo en salud.",
      proj5Meta:
        "Wireframes, UI, métricas y flujos orientados a casos de uso reales.",
      proj5DemoLabel: "Ver mockups (próximamente)",
      proj5RepoLabel: "Ver repositorio (próximamente)",

      // Project 6 – Templates
      proj6Tag: "TEMPLATES · LAB",
      proj6Title: "Templates de portfolio & flujos de trabajo",
      proj6Desc:
        "Colección de experimentos y futuros productos digitales: plantillas de CV, portfolios, dashboards, sistemas en Notion y maquetación para Kindle.",
      proj6Meta:
        "Work in progress enfocado en activos reutilizables para profesionales remotos.",
      proj6DemoLabel: "Ver catálogo (próximamente)",
      proj6RepoLabel: "Ver repositorio (próximamente)",

      // Resources
      resourcesKicker: "Recursos & aprendizaje",
      resourcesTitle: "Cómo trabajo y aprendo",
      resourcesIntro:
        "Uso proyectos reales para aprender y actualizar skills: dashboards, game design, templates web y documentación.",

      resource1Title: "Business Intelligence & analytics",
      resource1Desc:
        "Desde limpiar datos hasta construir dashboards, con foco en preguntas concretas y stakeholders.",
      resource1Item1: "Limpieza y validación de datos en Google Sheets",
      resource1Item2: "KPIs, gráficos y storytelling en Looker Studio",
      resource1Item3: "Documentación de proceso y decisiones",

      resource2Title: "Web & productos digitales",
      resource2Desc:
        "Landing pages, plantillas y experimentos de UI que conectan diseño y desarrollo.",
      resource2Item1: "Layouts responsive con HTML semántico y CSS moderno",
      resource2Item2: "Secciones reutilizables listas para ser templates",
      resource2Item3: "Foco en claridad, jerarquía y performance",

      resource3Title: "Juegos & medios interactivos",
      resource3Desc:
        "Los juegos son un laboratorio para combinar sistemas, UX y narrativa.",
      resource3Item1: "Game design documents y lentes",
      resource3Item2: "Experimentos y prototipos en Unity 2D",
      resource3Item3: "Estructura narrativa y loops de feedback",

      // Products
      productsKicker: "Productos digitales",
      productsTitle: "E-books & templates (en progreso)",
      productsIntro:
        "E-books y templates en desarrollo, enfocados en flujos de trabajo, dashboards y guías prácticas para trabajo remoto.",
      ebook1Title: "Experimentos de maquetación Kindle",
      ebook1Tag: "LAB · FORMATO & TESTS",
      ebook1Desc:
        "Pruebas con maquetación para Kindle, CSS y HTML para preparar futuros e-books y guías. Enfocado en buena experiencia de lectura y componentes reutilizables.",
      ebook1Meta:
        "Mezcla de ficción, libros de diseño y material técnico.",
      template1Title: "Templates de portfolio & workflows",
      template1Tag: "PRÓXIMAMENTE",
      template1Desc:
        "Plantillas para CVs, portfolios de proyectos, dashboards y sistemas en Notion, orientadas a profesionales remotos y perfiles creativos.",
      template1Meta:
        "Primeras versiones enfocadas en roles de datos y perfiles creativos.",

      // About
      aboutKicker: "Sobre mí",
      aboutTitle: "Quién soy y cómo trabajo",
      aboutIntro:
        "Trabajo en la intersección entre operaciones, datos y productos digitales. Me interesa entender sistemas, documentar procesos y crear activos reutilizables.",

      aboutCol1Title: "Perfil",
      aboutCol1Text1:
        "Analista de operaciones y datos con experiencia en fintech y soporte al cliente. Disfruto convertir información desordenada en dashboards y flujos claros.",
      aboutCol1Text2:
        "Me siento cómodo alternando entre trabajo técnico (SQL, planillas, dashboards) y comunicación con equipos.",
      aboutCol1Text3:
        "Prefiero entornos remotos y async, donde la documentación y la transparencia son importantes.",

      aboutCol2Title: "Qué aporto",
      aboutCol2Item1:
        "Limpieza de datos, validación y estadística básica",
      aboutCol2Item2: "Diseño de dashboards y BI storytelling",
      aboutCol2Item3:
        "Templates web y UI para contenido intensivo en datos",
      aboutCol2Item4:
        "Mentalidad de game dev: iteración, feedback y playtesting",

      aboutCol3Title: "Herramientas & stack",
      aboutCol3Item1:
        "Google Sheets, Looker Studio, fundamentos de SQL",
      aboutCol3Item2: "HTML, CSS y JavaScript (vanilla)",
      aboutCol3Item3:
        "Unity 2D, C#, Notion, Calibre & herramientas para Kindle",
      aboutCol3Item4:
        "GitHub, trabajo remoto y documentación",

      // Contact
      contactKicker: "Colaboremos",
      contactTitle: "Trabajemos juntos",
      contactIntro:
        "Si necesitás dashboards, productos digitales o alguien que pueda hacerse cargo de un problema y documentar el proceso, hablemos.",

      contactSubTitle: "Cómo prefiero trabajar",
      contactText1:
        "Me gustan los roles con objetivos claros, autonomía y espacio para proponer mejoras basadas en datos.",
      contactText2:
        "Me interesan especialmente roles remotos donde se crucen operaciones, datos y productos digitales.",

      contactEmailLabel: "Email",
      contactGithubLabel: "GitHub",
      contactLinkedinLabel: "LinkedIn (próximamente)",
      contactNote:
        "Estoy abierto a posiciones remotas (full-time o freelance) y colaboraciones en dashboards, templates o proyectos relacionados con juegos.",

      // Footer
      footerText:
        "Portfolio de Alejandro Matesa · Construido con HTML, CSS y vanilla JS.",
    },
  };

  const langButtons = document.querySelectorAll(".lang-btn");
  const themeToggleBtn = document.getElementById("themeToggle");
  const themeLabel = themeToggleBtn?.querySelector(".theme-toggle-label");
  const themeIcon = themeToggleBtn?.querySelector(".theme-toggle-icon");
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNavLinks = document.querySelectorAll(".nav-mobile-panel a");
  const filterButtons = document.querySelectorAll(".projects-filter .pill");
  const projectCards = document.querySelectorAll(".project-card");

  // =========
  // Translation
  // =========

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key || !(key in dict)) return;
      el.textContent = dict[key];
    });

    // Theme label
    if (themeLabel) {
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";
      themeLabel.textContent =
        currentTheme === "dark" ? dict.themeLabelDark : dict.themeLabelLight;
    }
  }

  function setLanguage(lang) {
    localStorage.setItem("portfolioLang", lang);
    applyTranslations(lang);
    langButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
  }

  const storedLang = localStorage.getItem("portfolioLang");
  const initialLang =
    storedLang === "es" || storedLang === "en" ? storedLang : "en";
  setLanguage(initialLang);

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      if (!selected) return;
      setLanguage(selected);
    });
  });

  // =========
  // Theme toggle
  // =========

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolioTheme", theme);

    const currentLang = localStorage.getItem("portfolioLang") || initialLang;
    const dict = translations[currentLang] || translations.en;

    if (themeLabel) {
      themeLabel.textContent =
        theme === "dark" ? dict.themeLabelDark : dict.themeLabelLight;
    }

    if (themeIcon) {
      themeIcon.setAttribute("aria-label", theme);
    }
  }

  const storedTheme = localStorage.getItem("portfolioTheme");
  const initialTheme =
    storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";
  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current =
        document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      setTheme(next);
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

    const isScrollDown = current > lastScrollY && current > 80;
    header.classList.toggle("is-hidden", isScrollDown);

    const isElevated = current > 16;
    header.classList.toggle("is-elevated", isElevated);

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
          .map((c) => c.trim().toLowerCase())
          .filter(Boolean);

        const shouldShow =
          filter === "all" || categories.includes(filter.toLowerCase());

        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
});
