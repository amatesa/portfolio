const LANGUAGE_STORAGE_KEY = "portfolio-language";
const MAX_GALLERY_IMAGES = 20;
const PROJECT_FOLDERS = {
  woods: "projects/whispering-woods",
  commerce: "projects/ecommerce-sales-analytics-dashboard",
  analytics: "projects/data-analytics-project",
  roll: "projects/roll-a-ball",
  silent: "projects/silent-escape"
};

function getStoredLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Ignore storage failures; manual language switching still works for the session.
  }
}

function getInitialLanguage() {
  const savedLanguage = getStoredLanguage();
  if (savedLanguage === "en" || savedLanguage === "es") return savedLanguage;

  const browserLanguage = navigator.language?.toLowerCase() || "";
  if (browserLanguage.startsWith("es")) return "es";
  if (browserLanguage.startsWith("en")) return "en";
  return "en";
}

const state = {
  language: getInitialLanguage(),
  project: "woods",
  galleryIndex: 0,
  menuOpen: false,
  reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
};

const content = {
  en: {
    ui: {
      skip: "Skip to content",
      context: "Argentina / Remote",
      navHero: "Start",
      navThinking: "Thinking",
      navMethod: "Method",
      navWork: "Work",
      navContact: "Contact",
      menuTitle: "Navigation",
      menuThinking: "How I think",
      menuWork: "Selected work",
      resume: "Resume",
      whatsapp: "WhatsApp",
      heroEyebrow: "Systems / Data / AI / Games",
      heroTitle: "Systems, made understandable.",
      heroLead: "I work across data, operations, automation and game systems. The common thread is simple: understand the real problem, reduce noise and build something useful enough to keep improving.",
      meta01Label: "Current focus",
      meta01Value: "Data Analysis, AI Systems and Game Design",
      meta02Label: "Background",
      meta02Value: "Operations, BI and process improvement",
      seeWork: "See selected work",
      thinkingEyebrow: "How I think",
      thinkingTitle: "The tool matters less than the clarity it creates.",
      thinkingOption1: "Understand before building",
      thinkingOption2: "Improve what repeats",
      thinkingOption3: "Connect different domains",
      methodEyebrow: "Method",
      methodTitle: "A practical loop for unfamiliar problems.",
      methodStep1: "Observe",
      methodStep2: "Structure",
      methodStep3: "Build",
      methodStep4: "Improve",
      methodHint1: "Map the real situation",
      methodHint2: "Make the hidden pattern visible",
      methodHint3: "Create the smallest useful artifact",
      methodHint4: "Iterate from evidence",
      workEyebrow: "Selected work",
      workTitle: "Projects as evidence of how I structure problems.",
      projectSearchLabel: "Search projects",
      projectSearchPlaceholder: "Search by project, tool or focus",
      filterAll: "All",
      filterGame: "Games",
      filterData: "Data",
      filterFeatured: "Featured",
      contactEyebrow: "Contact",
      contactTitle: "Let’s talk about systems, products, data or games.",
      contactText: "I am interested in opportunities where curiosity, adaptability, analytical thinking and continuous improvement matter as much as technical skills."
    },
    thinking: {
      understand: "I slow down enough to understand how a system works: the people, constraints, data and hidden friction. Once the structure is clear, the solution usually becomes simpler.",
      improve: "Operations taught me to notice what repeats. Recurring questions, support friction and unclear handoffs often reveal where a system needs better structure.",
      connect: "I have worked across healthcare, fintech, customer operations, data analysis, digital products and game development. The domains change; the habit of making sense of complexity stays."
    },
    method: {
      observe: {
        title: "Observe the system before trying to fix it.",
        text: "I start by listening, mapping the workflow and looking for the points where information, people or decisions get stuck."
      },
      structure: {
        title: "Translate complexity into something visible.",
        text: "I organize the problem into causes, constraints, data points and decisions so the next step is based on understanding, not guesswork."
      },
      build: {
        title: "Choose the simplest useful artifact.",
        text: "Sometimes the answer is a dashboard. Sometimes it is documentation, automation, a prototype, a web interface or a small game system."
      },
      improve: {
        title: "Keep learning from the thing once it exists.",
        text: "A solution's value is proven in practice. I like improving based on evidence, feedback and the friction people actually experience."
      }
    },
    projectFacts: { role: "Role", focus: "Focus", tools: "Tools" },
    projects: {
      woods: {
        type: "Unity Game",
        category: "game",
        featured: true,
        keywords: "unity game csharp platformer gameplay systems narrative audio",
        title: "Whispering Woods",
        alt: "Whispering Woods game menu screenshot",
        text: "Academic Unity project developed as a complete playable experience to showcase modular architecture, gameplay programming, progression systems, AI, UI, interactive audio and narrative integration.",
        facts: ["Lead Developer", "Gameplay Architecture & Systems Design", "Unity 6, C#"
        ],
        links: [
          {label: "GitHub", href: "https://github.com/amatesa/G-Whispering_Woods", external: true},
          {label: "Project README", href: "https://github.com/amatesa/G-Whispering_Woods/blob/main/README.md", external: true},
          {label: "itch.io", href: "https://igramo.itch.io/whispering-woods", external: true}
        ]
      },
      commerce: {
        type: "Business Intelligence",
        category: "data",
        featured: true,
        keywords: "business intelligence dashboard ecommerce looker studio sheets kpi revenue",
        title: "E-commerce Sales Analytics Dashboard",
        alt: "E-commerce sales analytics dashboard overview",
        text: "Business Intelligence project focused on transforming commercial data into actionable insights through data preparation, KPI design, dashboard development and business analysis.",
        facts: ["Business Intelligence Analyst", "Business Intelligence & Data Visualization", "Google Sheets · Looker Studio"],
        links: [
          { label: "Looker Studio", href: "https://lookerstudio.google.com/reporting/bd828786-31f0-4be3-adac-1713c5c9f8e0", external: true },
          { label: "README", href: "https://github.com/amatesa/D-ecommerce-sales-analytics-dashboard", external: true }
        ]
      },
      analytics: {
        type: "Data Analytics",
        category: "data",
        featured: false,
        keywords: "data analytics python pandas plotly notebook exploratory analysis",
        title: "Data Analytics Case Study",
        alt: "Monthly sales chart from the data analytics case study",
        text: "End-to-end data analytics case study built in Python, covering data cleaning, exploratory analysis, statistical exploration and interactive visualization to generate business insights.",
        facts: ["Data Analyst", "Exploratory Data Analysis & Data Visualization", "Python, pandas, Plotly"],
        links: [
          { label: "Open case study", href: "https://amatesa.github.io/D-data-analytics-project/", external: true},
          { label: "Notebook", href: "phttps://colab.research.google.com/drive/1DJMsKAA0o6VCMi4UJGVq5q5zIccr_JZf", external: true},
          { label: "GitHub", href: "https://github.com/amatesa/D-data-analytics-project", external: true}
        ]
      },
      roll: {
        type: "Unity Prototype",
        category: "game",
        featured: false,
        keywords: "unity game csharp prototype architecture enemy systems oop",
        title: "Roll a Ball",
        alt: "Roll a Ball Unity prototype screenshot",
        text: "Prototype built on Unity's Roll a Ball tutorial and expanded into a modular project featuring reusable systems, enemy AI, gameplay events and scalable architecture to explore clean programming practices.",
        facts: ["Lead Developer", "Software Architecture & Gameplay Programming", "Unity, C#"],
        links: [
          {label: "GitHub", href: "https://github.com/amatesa/G-Roll-A-Ball", external: true},
          {label: "Project README", href: "https://github.com/amatesa/G-Roll-A-Ball/blob/main/README.md", external: true},
          {label: "itch.io", href: "https://igramo.itch.io/roll-a-ball", external: true}
        ]
      },
      silent: {
        type: "Unity Prototype",
        category: "game",
        featured: false,
        keywords: "unity game stealth horror ai perception navmesh audio",
        title: "Silent Escape",
        alt: "Silent Escape placeholder image",
        placeholder: "Replace with a 1600 x 900 gameplay screenshot or key art for Silent Escape.",
        text: "Stealth gameplay prototype focused on enemy AI, visual and auditory perception, navigation, reactive audio and gameplay state machines.",
        facts: ["Gameplay Programmer", "Gameplay AI & Perception Systems", "Unity 6, C#, NavMesh"],
        links: [
          {label: "GitHub", href: "https://github.com/amatesa/G-Silent_Escape", external: true},
          {label: "Project README", href: "https://github.com/amatesa/G-Silent_Escape/blob/main/README.md", external: true},
          {label: "itch.io", href: "https://igramo.itch.io/silent-escape", external: true}
        ]
      }
    }
  },
  es: {
    ui: {
      skip: "Saltar al contenido",
      context: "Argentina / Remoto",
      navHero: "Inicio",
      navThinking: "Mirada",
      navMethod: "Método",
      navWork: "Trabajo",
      navContact: "Contacto",
      menuTitle: "Navegación",
      menuThinking: "Cómo pienso",
      menuWork: "Trabajo seleccionado",
      resume: "CV",
      whatsapp: "WhatsApp",
      heroEyebrow: "Sistemas / Datos / IA / Juegos",
      heroTitle: "Hacer que los sistemas sean más fáciles de entender.",
      heroLead: "Trabajo en la intersección entre datos, operaciones, automatización y desarrollo de videojuegos. El hilo conductor es simple: entender el problema real, quitar complejidad innecesaria y construir algo útil que pueda seguir mejorando.",
      meta01Label: "Foco actual",
      meta01Value: "Análisis de Datos, Sistemas de IA y Diseño de Videojuegos",
      meta02Label: "Experiencia",
      meta02Value: "Operaciones, BI y mejora de procesos",
      seeWork: "Ver trabajo seleccionado",
      thinkingEyebrow: "Cómo pienso",
      thinkingTitle: "La herramienta importa menos que la claridad que aporta.",
      thinkingOption1: "Entender antes de construir",
      thinkingOption2: "Mejorar lo que se repite",
      thinkingOption3: "Conectar dominios distintos",
      methodEyebrow: "Método",
      methodTitle: "Un ciclo práctico para problemas desconocidos.",
      methodStep1: "Observar",
      methodStep2: "Estructurar",
      methodStep3: "Construir",
      methodStep4: "Mejorar",
      methodHint1: "Mapear la situación real",
      methodHint2: "Volver visible el patrón oculto",
      methodHint3: "Crear la solución útil más simple",
      methodHint4: "Iterar desde evidencia",
      workEyebrow: "Trabajo seleccionado",
      workTitle: "Proyectos que reflejan mi forma de resolver problemas.",
      projectSearchLabel: "Buscar proyectos",
      projectSearchPlaceholder: "Buscar por proyecto, herramienta o foco",
      filterAll: "Todo",
      filterGame: "Juegos",
      filterData: "Datos",
      filterFeatured: "Destacados",
      contactEyebrow: "Contacto",
      contactTitle: "Hablemos de sistemas, productos, datos o videojuegos.",
      contactText: "Busco proyectos y equipos donde la curiosidad, el pensamiento analítico y la mejora continua sean tan importantes como la capacidad técnica."
    },
    thinking: {
      understand: "Primero me tomo el tiempo para entender cómo funciona un sistema: las personas involucradas, las restricciones, los datos y los puntos de fricción. Cuando el problema se entiende con claridad, la solución suele ser mucho más simple.AA",
      improve: "Trabajar en operaciones me enseñó a detectar patrones. Problemas que aparecen una y otra vez, fricción en soporte y transiciones entre equipos suelen mostrar dónde un sistema necesita mejor estructura.",
      connect: "Trabajé en salud, fintech, operaciones de clientes, análisis de datos, productos digitales y desarrollo de videojuegos. Los proyectos cambian; el hábito de encontrar estructura dentro de la complejidad se mantiene."
    },
    method: {
      observe: {
        title: "Observar el sistema antes de intentar resolverlo",
        text: "Empiezo escuchando, mapeando el flujo y buscando los puntos donde la información, las personas o las decisiones generan fricción."
      },
      structure: {
        title: "Hacer visible lo complejo.",
        text: "Organizo el problema en causas, restricciones, datos y decisiones para que el siguiente paso se base en la comprensión del problema y no en suposiciones."
      },
      build: {
        title: "Elegir la solución más simple que realmente aporte valor.",
        text: "A veces la respuesta es un dashboard**; otras,** documentación, automatización, un prototipo, una interfaz web o un pequeño sistema de juego."
      },
      improve: {
        title: "Seguir aprendiendo de lo construido.",
        text: "Una solución solo demuestra su valor cuando empieza a usarse. Me gusta mejorar a partir de evidencia, feedback y la fricción que las personas realmente experimentan."
      }
    },
    projectFacts: { role: "Rol", focus: "Foco", tools: "Herramientas" },
    projects: {
      woods: {
        type: "Juego en Unity",
        category: "game",
        featured: true,
        keywords: "unity juego csharp platformer gameplay sistemas narrativa audio",
        title: "Whispering Woods",
        alt: "Captura del menú del juego Whispering Woods",
        text: "Proyecto académico desarrollado en Unity como una experiencia jugable completa. Diseñado para demostrar arquitectura modular, programación de sistemas de gameplay, progresión, IA, UI, audio interactivo y narrativa integrada dentro de un mismo proyecto.",
        facts: ["Desarrollador principal", "Arquitectura de gameplay y diseño de sistemas", "Unity 6, C#"],
        links: [
          {label: "GitHub", href: "https://github.com/amatesa/G-Whispering_Woods", external: true},
          {label: "Project README", href: "https://github.com/amatesa/G-Whispering_Woods/blob/main/README.md", external: true},
          {label: "itch.io", href: "https://igramo.itch.io/whispering-woods", external: true}
        ]
      },
      commerce: {
        type: "Business Intelligence",
        category: "data",
        featured: true,
        keywords: "business intelligence dashboard ecommerce looker studio sheets kpi revenue",
        title: "E-commerce Sales Analytics Dashboard",
        alt: "Vista general del dashboard de ventas e-commerce",
        text: "Proyecto de Business Intelligence que transforma datos comerciales en indicadores accionables mediante procesos de limpieza, definición de KPIs, visualización y análisis para apoyar la toma de decisiones.",
        facts: ["Analista de Business Intelligence", "Visualización de datos e inteligencia de negocio", "Google Sheets · Looker Studio"],
        links: [
          { label: "Looker Studio", href: "https://lookerstudio.google.com/reporting/bd828786-31f0-4be3-adac-1713c5c9f8e0", external: true },
          { label: "README", href: "https://github.com/amatesa/D-ecommerce-sales-analytics-dashboard", external: true }
        ]
      },
      analytics: {
        type: "Data Analytics",
        category: "data",
        featured: false,
        keywords: "data analytics python pandas plotly notebook análisis exploratorio",
        title: "Data Analytics Case Study",
        alt: "Gráfico de ventas mensuales del caso de data analytics",
        text: "Caso de análisis de datos desarrollado en Python que recorre el proceso completo de limpieza, exploración, análisis estadístico y visualización para extraer información útil a partir de datos comerciales.",
        facts: ["Analista de Datos", "Análisis exploratorio y visualización de datos", "Python, pandas, Plotly"],
        links: [
          { label: "Open case study", href: "https://amatesa.github.io/D-data-analytics-project/", external: true},
          { label: "Notebook", href: "phttps://colab.research.google.com/drive/1DJMsKAA0o6VCMi4UJGVq5q5zIccr_JZf", external: true},
          { label: "GitHub", href: "https://github.com/amatesa/D-data-analytics-project", external: true}
        ]
      },
      roll: {
        type: "Prototipo Unity",
        category: "game",
        featured: false,
        keywords: "unity juego csharp prototipo arquitectura enemigos sistemas oop",
        title: "Roll a Ball",
        alt: "Captura del prototipo Roll a Ball en Unity",
        text: "Prototipo desarrollado sobre la base de Roll a Ball de Unity, ampliado con una arquitectura escalable, sistemas reutilizables, IA de enemigos, eventos de juego y componentes desacoplados para explorar buenas prácticas de programación.",
        facts: ["Desarrollador principal", "Arquitectura de software y programación de gameplay", "Unity, C#"],
        links: [
          {label: "GitHub", href: "https://github.com/amatesa/G-Roll-A-Ball", external: true},
          {label: "Project README", href: "https://github.com/amatesa/G-Roll-A-Ball/blob/main/README.md", external: true},
          {label: "itch.io", href: "https://igramo.itch.io/roll-a-ball", external: true}
        ]
      },
      silent: {
        type: "Prototipo Unity",
        category: "game",
        featured: false,
        keywords: "unity juego stealth horror ia percepción navmesh audio",
        title: "Silent Escape",
        alt: "Placeholder de imagen para Silent Escape",
        placeholder: "Reemplazar por una captura o key art de Silent Escape en 1600 x 900.",
        text: "Prototipo de infiltración desarrollado para experimentar con IA de enemigos, percepción visual y sonora, navegación, audio reactivo y máquinas de estado aplicadas al gameplay.",
        facts: ["Programador de gameplay", "IA para Gameplay y Sistemas de Percepción", "Unity 6, C#, NavMesh"],
        links: [
          {label: "GitHub", href: "https://github.com/amatesa/G-Silent_Escape", external: true},
          {label: "Project README", href: "https://github.com/amatesa/G-Silent_Escape/blob/main/README.md", external: true},
          {label: "itch.io", href: "https://igramo.itch.io/silent-escape", external: true}
        ]
      }
    }
  }
};

const dom = {
  menu: document.querySelector("[data-menu]"),
  menuToggle: document.querySelector("[data-menu-toggle]"),
  menuLinks: document.querySelectorAll("[data-menu-link]"),
  languageButtons: document.querySelectorAll("[data-language]"),
  i18nNodes: document.querySelectorAll("[data-i18n]"),
  sections: document.querySelectorAll("[data-section]"),
  progressLinks: document.querySelectorAll("[data-progress-link]"),
  reveals: document.querySelectorAll("[data-reveal]"),
  hero: document.querySelector("[data-hero]"),
  portrait: document.querySelector("[data-portrait]"),
  thinkingButtons: document.querySelectorAll("[data-thinking]"),
  thinkingPanel: document.querySelector("[data-thinking-panel] p"),
  methodButtons: document.querySelectorAll("[data-method]"),
  methodPanel: document.querySelector("[data-method-panel]"),
  projectTabs: document.querySelectorAll("[data-project]"),
  projectSearch: document.querySelector("[data-project-search]"),
  projectFilters: document.querySelectorAll("[data-filter]"),
  projectMedia: document.querySelector("[data-project-media]"),
  projectType: document.querySelector("[data-project-type]"),
  projectTitle: document.querySelector("[data-project-title]"),
  projectText: document.querySelector("[data-project-text]"),
  projectFacts: document.querySelector("[data-project-facts]"),
  projectLinks: document.querySelector("[data-project-links]")
};

const getCopy = () => content[state.language];

function setLanguage(language, options = {}) {
  state.language = language;
  document.documentElement.lang = language;
  if (options.persist) {
    storeLanguage(language);
  }

  dom.i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (getCopy().ui[key]) node.textContent = getCopy().ui[key];
  });

  dom.languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (dom.projectSearch) {
    dom.projectSearch.placeholder = getCopy().ui.projectSearchPlaceholder;
  }

  const activeThinking = document.querySelector(".text-option.is-active")?.dataset.thinking || "understand";
  const activeMethod = document.querySelector(".method-card.is-active")?.dataset.method || "observe";
  setThinking(activeThinking);
  setMethod(activeMethod);
  applyProjectFilters();
  setProject(state.project);
}

function setMenu(open) {
  state.menuOpen = open;
  dom.menu.hidden = !open;
  dom.menuToggle.classList.toggle("is-open", open);
  dom.menuToggle.setAttribute("aria-expanded", String(open));
  dom.menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.classList.toggle("is-menu-open", open);

  if (open) {
    dom.menu.classList.add("is-opening");
    requestAnimationFrame(() => dom.menu.classList.remove("is-opening"));
  }
}

function setThinking(key) {
  dom.thinkingButtons.forEach((button) => {
    const active = button.dataset.thinking === key;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  dom.thinkingPanel.textContent = getCopy().thinking[key];
}

function setMethod(key) {
  const method = getCopy().method[key];
  dom.methodButtons.forEach((button) => {
    const active = button.dataset.method === key;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  dom.methodPanel.querySelector("h3").textContent = method.title;
  dom.methodPanel.querySelector("p").textContent = method.text;
}

function setProject(key) {
  const project = { ...getCopy().projects[key], folder: PROJECT_FOLDERS[key] };
  const labels = getCopy().projectFacts;
  state.project = key;
  state.galleryIndex = 0;

  dom.projectTabs.forEach((tab) => {
    const active = tab.dataset.project === key;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  renderProjectGallery(project);

  dom.projectType.textContent = project.type;
  dom.projectTitle.textContent = project.title;
  dom.projectText.textContent = project.text;
  dom.projectFacts.innerHTML = `
    <div><dt>${labels.role}</dt><dd>${project.facts[0]}</dd></div>
    <div><dt>${labels.focus}</dt><dd>${project.facts[1]}</dd></div>
    <div><dt>${labels.tools}</dt><dd>${project.facts[2]}</dd></div>
  `;
  dom.projectLinks.innerHTML = project.links
    .map((link) => `<a href="${link.href}" ${link.disabled ? 'aria-disabled="true"' : ""}>${link.label}</a>`)
    .join("");
}

function buildGalleryCandidates(project) {
  const galleryImages = Array.from({ length: MAX_GALLERY_IMAGES }, (_, index) => (
    `${project.folder}/gallery-${String(index + 1).padStart(2, "0")}.png`
  ));

  return [`${project.folder}/cover.png`, ...galleryImages];
}

function imageExists(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

async function resolveProjectImages(project) {
  const [cover, ...galleryCandidates] = buildGalleryCandidates(project);
  const images = [];

  if (await imageExists(cover)) {
    images.push(cover);
  }

  for (const src of galleryCandidates) {
    if (!(await imageExists(src))) break;
    images.push(src);
  }

  return images;
}

async function renderProjectGallery(project) {
  const renderId = (state.galleryRenderId || 0) + 1;
  state.galleryRenderId = renderId;
  dom.projectMedia.innerHTML = `<div class="project-gallery project-gallery--loading" aria-hidden="true"></div>`;

  const images = await resolveProjectImages(project);
  if (renderId !== state.galleryRenderId) return;

  const galleryProject = { ...project, images };

  if (!galleryProject.images.length) {
    dom.projectMedia.innerHTML = `<div class="image-placeholder">${project.placeholder}</div>`;
    return;
  }

  const imageNodes = galleryProject.images
    .map((src, index) => (
      `<img class="project-gallery__image${index === state.galleryIndex ? " is-active" : ""}" src="${src}" alt="${galleryProject.alt}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async" draggable="false" aria-hidden="${index === state.galleryIndex ? "false" : "true"}">`
    ))
    .join("");

  dom.projectMedia.innerHTML = `
    <div class="project-gallery" tabindex="0" role="region" aria-roledescription="gallery" aria-label="${galleryProject.title} image gallery" data-gallery>
      <div class="project-gallery__stage" data-gallery-stage>
        ${imageNodes}
      </div>
      <div class="project-gallery__indicator" aria-live="polite" data-gallery-indicator>${formatGalleryIndicator(galleryProject)}</div>
    </div>
  `;

  bindGallery(galleryProject);
}

function formatGalleryIndicator(project) {
  return `${String(state.galleryIndex + 1).padStart(2, "0")} / ${String(project.images.length).padStart(2, "0")}`;
}

function setGalleryIndex(project, index) {
  const total = project.images.length;
  if (!total) return;

  state.galleryIndex = (index + total) % total;

  const images = dom.projectMedia.querySelectorAll(".project-gallery__image");
  const indicator = dom.projectMedia.querySelector("[data-gallery-indicator]");

  images.forEach((image, imageIndex) => {
    const active = imageIndex === state.galleryIndex;
    image.classList.toggle("is-active", active);
    image.setAttribute("aria-hidden", String(!active));
  });

  if (indicator) indicator.textContent = formatGalleryIndicator(project);
}

function bindGallery(project) {
  if (!project.images?.length) return;

  const gallery = dom.projectMedia.querySelector("[data-gallery]");
  const hasMultipleImages = project.images.length > 1;
  let startX = 0;
  let startY = 0;
  let dragging = false;
  let suppressClick = false;
  let wheelLocked = false;

  const goToRelativeImage = (direction) => {
    setGalleryIndex(project, state.galleryIndex + direction);
  };

  gallery?.addEventListener("keydown", (event) => {
    if (!hasMultipleImages) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToRelativeImage(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToRelativeImage(1);
    }
    if (event.key === " " || event.key === "Spacebar" || event.code === "Space" || event.key === "Enter") {
      event.preventDefault();
      goToRelativeImage(1);
    }
  });

  gallery?.addEventListener("pointerdown", (event) => {
    if (!hasMultipleImages || event.button > 0) return;
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;
    gallery.classList.add("is-dragging");
    if (event.pointerId != null) gallery.setPointerCapture(event.pointerId);
  });

  gallery?.addEventListener("pointerup", (event) => {
    if (!dragging) return;
    dragging = false;
    gallery.classList.remove("is-dragging");
    const delta = event.clientX - startX;
    const verticalDelta = event.clientY - startY;
    if (Math.abs(delta) > 44 && Math.abs(delta) > Math.abs(verticalDelta)) {
      suppressClick = true;
      goToRelativeImage(delta < 0 ? 1 : -1);
      window.setTimeout(() => {
        suppressClick = false;
      }, 120);
    }
    if (event.pointerId != null && gallery.hasPointerCapture(event.pointerId)) {
      gallery.releasePointerCapture(event.pointerId);
    }
  });

  gallery?.addEventListener("pointercancel", (event) => {
    dragging = false;
    gallery.classList.remove("is-dragging");
    if (event.pointerId != null && gallery.hasPointerCapture(event.pointerId)) {
      gallery.releasePointerCapture(event.pointerId);
    }
  });

  gallery?.addEventListener("wheel", (event) => {
    if (!hasMultipleImages || wheelLocked || Math.abs(event.deltaX) <= Math.abs(event.deltaY) || Math.abs(event.deltaX) < 12) return;
    event.preventDefault();
    wheelLocked = true;
    goToRelativeImage(event.deltaX > 0 ? 1 : -1);
    window.setTimeout(() => {
      wheelLocked = false;
    }, 420);
  }, { passive: false });

  gallery?.addEventListener("click", (event) => {
    if (!hasMultipleImages || suppressClick) return;
    const bounds = gallery.getBoundingClientRect();
    const direction = event.clientX < bounds.left + bounds.width / 2 ? -1 : 1;
    goToRelativeImage(direction);
  });
}

function applyProjectFilters() {
  const activeFilter = document.querySelector(".filter-chip.is-active")?.dataset.filter || "all";
  const query = (dom.projectSearch?.value || "").trim().toLowerCase();
  const projects = getCopy().projects;
  let firstVisible = null;

  dom.projectTabs.forEach((tab) => {
    const project = projects[tab.dataset.project];
    const searchable = `${project.title} ${project.type} ${project.text} ${project.keywords}`.toLowerCase();
    const matchesFilter =
      activeFilter === "all" ||
      project.category === activeFilter ||
      (activeFilter === "featured" && project.featured);
    const matchesSearch = !query || searchable.includes(query);
    const visible = matchesFilter && matchesSearch;

    tab.hidden = !visible;
    if (visible && !firstVisible) firstVisible = tab.dataset.project;
  });

  const currentTab = document.querySelector(`[data-project="${state.project}"]`);
  if (currentTab?.hidden && firstVisible) {
    setProject(firstVisible);
  }
}

function initProgressObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      dom.progressLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.progressLink === visible.target.id);
      });
    },
    { threshold: [0.35, 0.55, 0.75] }
  );

  dom.sections.forEach((section) => observer.observe(section));
}

function initRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  dom.reveals.forEach((node) => observer.observe(node));
}

function initHeroMotion() {
  if (state.reduceMotion || !dom.hero || !dom.portrait) return;
  if (window.matchMedia("(max-width: 900px)").matches) return;

  let scrollY = 0;
  let pointerX = 0;
  let pointerY = 0;
  let ticking = false;

  const update = () => {
    const scrollProgress = Math.min(scrollY / Math.max(window.innerHeight, 1), 1);
    dom.hero.style.setProperty("--mouse-x", `${pointerX * 16}px`);
    dom.hero.style.setProperty("--mouse-y", `${pointerY * 12}px`);
    dom.portrait.style.setProperty("--portrait-x", `${pointerX * -8}px`);
    dom.portrait.style.setProperty("--portrait-y", `${(pointerY * -8) + (scrollProgress * 28)}px`);
    dom.portrait.style.opacity = String(1 - scrollProgress * 0.18);
    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    requestUpdate();
  }, { passive: true });

  window.addEventListener("pointermove", (event) => {
    pointerX = (event.clientX / window.innerWidth - 0.5);
    pointerY = (event.clientY / window.innerHeight - 0.5);
    requestUpdate();
  }, { passive: true });
}

function bindEvents() {
  dom.menuToggle.addEventListener("click", () => setMenu(!state.menuOpen));
  dom.menu.addEventListener("click", (event) => {
    if (event.target === dom.menu) setMenu(false);
  });
  dom.menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  dom.languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language, { persist: true })));
  dom.thinkingButtons.forEach((button) => button.addEventListener("click", () => setThinking(button.dataset.thinking)));
  dom.methodButtons.forEach((button) => button.addEventListener("click", () => setMethod(button.dataset.method)));
  dom.projectTabs.forEach((tab) => tab.addEventListener("click", () => setProject(tab.dataset.project)));
  dom.projectSearch?.addEventListener("input", applyProjectFilters);
  dom.projectFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      dom.projectFilters.forEach((item) => item.classList.toggle("is-active", item === filter));
      applyProjectFilters();
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

function init() {
  bindEvents();
  setLanguage(state.language);
  initProgressObserver();
  initRevealObserver();
  initHeroMotion();
}

init();
