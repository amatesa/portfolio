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
        "Operations and data analyst with experience in fintech, dashboards and web projects. I combine metrics, processes and digital products so teams can decide with clarity.",
      heroFocus:
        "Focus: remote-friendly roles, digital products and practical solutions using data.",

      heroPillRole: "Current focus",
      heroPillMeta: "Data & Operations · Web & digital projects",

      heroPill1Label: "Remote & async work",
      heroPill1Value: "Available for fully remote teams in multiple time zones.",

      heroPill2Label: "Projects",
      heroPill2Value:
        "Dashboards, web templates, game dev experiments and Kindle layouts.",

      heroCtaProjects: "View projects",
      heroCtaContact: "Let's work together",

      // Projects section
      projectsKicker: "Selected work",
      projectsTitle: "Projects",
      projectsIntro:
        "Blend of academic work, freelance projects and experiments that show how I design, build and ship digital products around data and operations.",

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
        "Interactive dashboard built in Google Sheets and Looker Studio for a Business Intelligence track. From raw CSVs to KPIs, filters and a clear story for non-technical stakeholders.",
      proj1Meta:
        "Tools: Google Sheets, Looker Studio, data cleaning, validation and visualization.",
      proj1DemoLabel: "View dashboard (soon)",
      proj1RepoLabel: "View process notes (soon)",

      // Project 2 – MedComp
      proj2Tag: "WEB DESIGN · LANDING",
      proj2Title: "MedComp · Digital health web",
      proj2Desc:
        "Responsive landing page for a digital health concept, focused on trust, clarity and lead generation. Built as a modular layout that can grow into a full design system.",
      proj2Meta:
        "HTML, modern CSS and vanilla JS. Reusable sections and component-based thinking.",
      proj2DemoLabel: "View live site (soon)",
      proj2RepoLabel: "View repository (soon)",

      // Project 3 – Northbridge
      proj3Tag: "TEMPLATE · LANDING PAGE",
      proj3Title: "Northbridge · Executive coaching landing",
      proj3Desc:
        "Clean landing template for consulting and coaching businesses. Strong hero, focused copy and simple contact flow ready to reuse for different niches.",
      proj3Meta: "Built from scratch using semantic HTML, CSS and JS.",
      proj3DemoLabel: "View live site",
      proj3RepoLabel: "View repository",

      // Project 4 – Game dev
      proj4Tag: "GAME DEV · CONCEPT",
      proj4Title: "Echoes of the Library · Game prototype",
      proj4Desc:
        "Top-down puzzle game concept created in my Game Design studies. Focus on exploration, atmosphere and puzzle loops, with GDD, lenses, UI sketches and an early Unity prototype.",
      proj4Meta:
        "Unity 2D, C#, game design principles, MDA and iteration through playtesting.",
      proj4DemoLabel: "View demo (soon)",
      proj4RepoLabel: "View GDD & assets (soon)",

      // Project 5 – Web project (TFI)
      proj5Tag: "WEB APP · DASHBOARD UI",
      proj5Title: "TFI Medical Dashboard · Patient follow-up",
      proj5Desc:
        "Concept for a medical dashboard that helps professionals track patient follow-ups, tasks and key indicators. Mixes BI mindset with UX flows for real workflows.",
      proj5Meta:
        "Wireframes, information architecture, metric design and UI explorations.",
      proj5DemoLabel: "View mockups (soon)",
      proj5RepoLabel: "View repository (soon)",

      // Project 6 – Templates
      proj6Tag: "TEMPLATES · LAB",
      proj6Title: "Portfolio templates & workflow tools",
      proj6Desc:
        "Living lab of templates: CVs, project portfolios, dashboards, Notion systems and Kindle layouts for remote professionals and creators.",
      proj6Meta:
        "Focus on reusable structures, documentation and low-friction onboarding.",
      proj6DemoLabel: "View catalog (soon)",
      proj6RepoLabel: "View repository (soon)",

      // Resources
      resourcesKicker: "Resources & learning",
      resourcesTitle: "How I work and learn",
      resourcesIntro:
        "I learn by building: dashboards for real datasets, game prototypes, web templates and documentation that others can actually use.",

      resource1Title: "Business Intelligence & analytics",
      resource1Desc:
        "From messy exports to dashboards that answer real questions for stakeholders.",
      resource1Item1: "Data cleaning, validation and structure in Google Sheets",
      resource1Item2: "KPIs, charts and storytelling in Looker Studio",
      resource1Item3: "Documentation of assumptions, decisions and limitations",

      resource2Title: "Web & digital products",
      resource2Desc:
        "Landing pages, templates and UI experiments that connect design and development.",
      resource2Item1: "Responsive layouts with semantic HTML & modern CSS",
      resource2Item2: "Reusable sections prepared to become shareable templates",
      resource2Item3: "Focus on clarity, hierarchy, performance and maintainability",

      resource3Title: "Games & interactive media",
      resource3Desc:
        "Game projects as a lab for systems, feedback loops and player experience.",
      resource3Item1: "Game design documents, lenses and design exercises",
      resource3Item2: "Unity 2D prototypes using C# and clean scripts",
      resource3Item3: "Narrative structure, pacing and user feedback loops",

      // Products
      productsKicker: "Digital products",
      productsTitle: "E-books & templates (in progress)",
      productsIntro:
        "Work in progress: e-books, templates and small tools focused on data workflows, dashboards and remote work habits.",

      ebook1Title: "Kindle layout experiments",
      ebook1Tag: "LAB · FORMATTING & TESTS",
      ebook1Desc:
        "Experiments with Kindle formatting using HTML and CSS: better reading experience, reusable components and clean internal navigation.",
      ebook1Meta:
        "Built by testing with fiction, design books and technical material.",

      template1Title: "Portfolio & workflow templates",
      template1Tag: "COMING SOON",
      template1Desc:
        "Templates for CVs, project portfolios, dashboards and Notion systems focused on data and creative roles.",
      template1Meta:
        "First versions oriented to analysts, game dev students and remote professionals.",

      // About
      aboutKicker: "About",
      aboutTitle: "Who I am and how I work",
      aboutIntro:
        "I work at the intersection of operations, data and digital products. I like to understand systems, reduce friction and leave behind assets that others can reuse.",

      aboutCol1Title: "Profile",
      aboutCol1Text1:
        "Operations and data analyst with more than five years in fintech and customer experience, mainly working with Klarna through Transcom in Zagreb, Croatia.",
      aboutCol1Text2:
        "I moved from customer support to quality and data analysis, building trackers, small dashboards and documentation to help teams improve processes.",
      aboutCol1Text3:
        "Today I combine that experience with formal studies in Business Intelligence and Game Design, plus web and Kindle projects built on my own.",

      aboutCol2Title: "What I bring",
      aboutCol2Item1:
        "Data cleaning, validation and basic statistics that actually match the business questions",
      aboutCol2Item2:
        "Dashboard design and BI storytelling adapted to non-technical stakeholders",
      aboutCol2Item3:
        "Web templates and UI for data-heavy content, with attention to structure and copy",
      aboutCol2Item4:
        "Game dev mindset: iteration, feedback, documentation and small experiments",

      aboutCol3Title: "Tools & stack",
      aboutCol3Item1:
        "Google Sheets, Looker Studio, SQL basics and data storytelling",
      aboutCol3Item2:
        "HTML, CSS and vanilla JavaScript for landings and prototypes",
      aboutCol3Item3:
        "Unity 2D, C#, Notion, Calibre & Kindle tools for interactive and editorial work",
      aboutCol3Item4:
        "GitHub, remote collaboration, async workflows and structured notes",

      // Contact
      contactKicker: "Work together",
      contactTitle: "Let's work together",
      contactIntro:
        "If you need dashboards, digital products or someone who can own a problem from messy context to documented solution, let's talk.",

      contactSubTitle: "How I prefer to work",
      contactText1:
        "I like roles with clear goals, space to propose improvements and realistic expectations about experiments and iteration.",
      contactText2:
        "I am especially interested in remote roles where operations, data and digital products converge.",

      contactEmailLabel: "Email",
      contactGithubLabel: "GitHub",
      contactLinkedinLabel: "LinkedIn (soon)",
      contactNote:
        "Open to remote roles (full-time or freelance) and collaborations on dashboards, templates, web projects or game-related experiments.",

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
        "Analista de operaciones y datos con experiencia en fintech, dashboards y proyectos web. Combino métricas, procesos y productos digitales para que los equipos decidan con claridad.",
      heroFocus:
        "Foco: trabajo remoto, productos digitales y soluciones prácticas apoyadas en datos.",

      heroPillRole: "Foco actual",
      heroPillMeta: "Data & Operations · Web & proyectos digitales",

      heroPill1Label: "Trabajo remoto & async",
      heroPill1Value:
        "Disponible para equipos 100% remotos en distintos husos horarios.",

      heroPill2Label: "Proyectos",
      heroPill2Value:
        "Dashboards, plantillas web, experimentos de game dev y maquetación Kindle.",

      heroCtaProjects: "Ver proyectos",
      heroCtaContact: "Hablemos",

      // Projects section
      projectsKicker: "Trabajo seleccionado",
      projectsTitle: "Proyectos",
      projectsIntro:
        "Mezcla de trabajos académicos, proyectos freelance y experimentos que muestran cómo diseño, construyo y entrego productos digitales alrededor de datos y operaciones.",

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
        "Dashboard interactivo construido en Google Sheets y Looker Studio para una especialización en Business Intelligence. Desde CSVs sin procesar hasta KPIs, filtros y una historia clara para perfiles no técnicos.",
      proj1Meta:
        "Herramientas: Google Sheets, Looker Studio, limpieza, validación y visualización de datos.",
      proj1DemoLabel: "Ver dashboard (próximamente)",
      proj1RepoLabel: "Ver notas de proceso (próximamente)",

      // Project 2 – MedComp
      proj2Tag: "DISEÑO WEB · LANDING",
      proj2Title: "MedComp · Web de salud digital",
      proj2Desc:
        "Landing page responsive para un concepto de salud digital, enfocada en confianza, claridad y generación de leads. Construida como layout modular listo para escalar a design system.",
      proj2Meta:
        "HTML, CSS moderno y vanilla JS. Secciones reutilizables y enfoque en componentes.",
      proj2DemoLabel: "Ver sitio (próximamente)",
      proj2RepoLabel: "Ver repositorio (próximamente)",

      // Project 3 – Northbridge
      proj3Tag: "TEMPLATE · LANDING PAGE",
      proj3Title: "Northbridge · Landing para coaching ejecutivo",
      proj3Desc:
        "Template limpio de landing para negocios de consultoría y coaching. Hero fuerte, copy enfocado y flujo de contacto simple, listo para reutilizar en distintos nichos.",
      proj3Meta: "Construido desde cero usando HTML semántico, CSS y JS.",
      proj3DemoLabel: "Ver sitio",
      proj3RepoLabel: "Ver repositorio",

      // Project 4 – Game dev
      proj4Tag: "GAME DEV · CONCEPTO",
      proj4Title: "Echoes of the Library · Prototipo",
      proj4Desc:
        "Concepto de juego de puzzles top-down creado en la Tecnicatura en Diseño de Videojuegos. Foco en exploración, atmósfera y loops de puzzles, con GDD, lentes, bocetos de UI y prototipo inicial en Unity.",
      proj4Meta:
        "Unity 2D, C#, principios de game design, MDA y iteración a través de playtesting.",
      proj4DemoLabel: "Ver demo (próximamente)",
      proj4RepoLabel: "Ver GDD & assets (próximamente)",

      // Project 5 – Web project (TFI)
      proj5Tag: "WEB APP · UI TIPO DASHBOARD",
      proj5Title: "TFI Medical Dashboard · Seguimiento de pacientes",
      proj5Desc:
        "Concepto de dashboard médico que ayuda a profesionales a seguir seguimientos, tareas e indicadores clave de pacientes. Mezcla mentalidad de BI con UX para flujos reales.",
      proj5Meta:
        "Wireframes, arquitectura de información, diseño de métricas y exploraciones de UI.",
      proj5DemoLabel: "Ver mockups (próximamente)",
      proj5RepoLabel: "Ver repositorio (próximamente)",

      // Project 6 – Templates
      proj6Tag: "TEMPLATES · LAB",
      proj6Title: "Templates de portfolio & flujos de trabajo",
      proj6Desc:
        "Laboratorio vivo de plantillas: CVs, portfolios de proyectos, dashboards, sistemas en Notion y maquetación Kindle para profesionales remotos y perfiles creativos.",
      proj6Meta:
        "Foco en estructuras reutilizables, documentación y onboarding sin fricciones.",
      proj6DemoLabel: "Ver catálogo (próximamente)",
      proj6RepoLabel: "Ver repositorio (próximamente)",

      // Resources
      resourcesKicker: "Recursos & aprendizaje",
      resourcesTitle: "Cómo trabajo y aprendo",
      resourcesIntro:
        "Aprendo construyendo: dashboards con datos reales, prototipos de juego, plantillas web y documentación que otras personas pueden usar de verdad.",

      resource1Title: "Business Intelligence & analytics",
      resource1Desc:
        "Desde exportaciones desordenadas hasta dashboards que responden preguntas concretas de stakeholders.",
      resource1Item1:
        "Limpieza, validación y estructura de datos en Google Sheets",
      resource1Item2:
        "KPIs, gráficos y storytelling en Looker Studio",
      resource1Item3:
        "Documentación de supuestos, decisiones y limitaciones",

      resource2Title: "Web & productos digitales",
      resource2Desc:
        "Landing pages, plantillas y experimentos de UI que conectan diseño y desarrollo.",
      resource2Item1:
        "Layouts responsive con HTML semántico y CSS moderno",
      resource2Item2:
        "Secciones reutilizables listas para convertirse en templates",
      resource2Item3:
        "Foco en claridad, jerarquía, performance y mantenibilidad",

      resource3Title: "Juegos & medios interactivos",
      resource3Desc:
        "Proyectos de juego como laboratorio de sistemas, loops de feedback y experiencia de usuario.",
      resource3Item1:
        "Game design documents, lenses y ejercicios de diseño",
      resource3Item2:
        "Prototipos en Unity 2D usando C# y scripts limpios",
      resource3Item3:
        "Estructura narrativa, ritmo y loops de feedback",

      // Products
      productsKicker: "Productos digitales",
      productsTitle: "E-books & templates (en progreso)",
      productsIntro:
        "En desarrollo: e-books, templates y herramientas pequeñas orientadas a flujos de trabajo con datos, dashboards y hábitos de trabajo remoto.",

      ebook1Title: "Experimentos de maquetación Kindle",
      ebook1Tag: "LAB · FORMATO & TESTS",
      ebook1Desc:
        "Pruebas con maquetación para Kindle usando HTML y CSS: mejor experiencia de lectura, componentes reutilizables y navegación interna limpia.",
      ebook1Meta:
        "Construido testeando con ficción, libros de diseño y material técnico.",

      template1Title: "Templates de portfolio & workflows",
      template1Tag: "PRÓXIMAMENTE",
      template1Desc:
        "Plantillas para CVs, portfolios de proyectos, dashboards y sistemas en Notion, enfocadas en roles de datos y perfiles creativos.",
      template1Meta:
        "Primeras versiones orientadas a analistas, estudiantes de game dev y profesionales remotos.",

      // About
      aboutKicker: "Sobre mí",
      aboutTitle: "Quién soy y cómo trabajo",
      aboutIntro:
        "Trabajo en la intersección entre operaciones, datos y productos digitales. Me interesa entender sistemas, reducir fricción y dejar activos reutilizables para otros equipos.",

      aboutCol1Title: "Perfil",
      aboutCol1Text1:
        "Analista de operaciones y datos con más de cinco años en fintech y experiencia de cliente, principalmente trabajando con Klarna a través de Transcom en Zagreb, Croacia.",
      aboutCol1Text2:// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking a link on mobile
  const navLinks = navMenu.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 720) {
        navMenu.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}
