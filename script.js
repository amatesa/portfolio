// Traducciones ES / EN para los textos marcados con data-i18n
const translations = {
  es: {
    name: "Alejandro Matesa",
    heroSubtitle: "Analista de Datos y Operaciones · Proyectos Web y Digitales",
    viewProjects: "Ver proyectos",
    projectsTitle: "Proyectos seleccionados",
    projectsIntro:
      "Una combinación de trabajo real con clientes, proyectos académicos y templates diseñados para mostrar estructura, claridad y experiencia de usuario.",

    proj1Title: "Sistema de Gestión de Inventario",
    proj1Tag: "Python · SQLite · CLI",
    proj1Desc:
      "Proyecto académico: herramienta de consola para gestionar inventario, con operaciones CRUD y reporte de productos con poco stock, desarrollada para practicar fundamentos de Python e interacción con bases de datos.",
    proj1LinkText: "Ver en GitHub",

    proj2Title: "Sitio Corporativo MedComp",
    proj2Tag: "HTML · CSS · JS · PHP",
    proj2Desc:
      "Proyecto real para un cliente (2019): sitio corporativo multipágina para una empresa de consultoría médica, con secciones de servicios, cursos, novedades y formulario de contacto.",
    proj2LinkText: "Ver repositorio",

    proj3Title: "Template de Landing Profesional",
    proj3Tag: "HTML · CSS · JS · Diseño moderno",
    proj3Desc:
      "Próximamente: template moderno y responsive para profesionales independientes (coaches, trainers, consultores), centrado en propuesta de valor clara y llamadas a la acción.",
    proj3LinkText: "Demo en construcción",

    aboutTitle: "Sobre mí",
    aboutBody:
      "Trabajo en la intersección entre datos, operaciones y proyectos digitales, con experiencia en entornos de fintech, soporte al cliente y análisis. Me interesa diseñar soluciones claras que conecten métricas, procesos y experiencias de usuario.",

    contactTitle: "Contacto"
  },
  en: {
    name: "Alejandro Matesa",
    heroSubtitle: "Data & Operations Analyst · Web & Digital Projects",
    viewProjects: "View projects",
    projectsTitle: "Selected Projects",
    projectsIntro:
      "A mix of real client work, academic projects and templates designed to show structure, clarity and user experience.",

    proj1Title: "Inventory Management System",
    proj1Tag: "Python · SQLite · CLI",
    proj1Desc:
      "Academic project: a console-based inventory management tool with CRUD operations and low-stock reporting, built to practice Python fundamentals and database interaction.",
    proj1LinkText: "View on GitHub",

    proj2Title: "MedComp Corporate Website",
    proj2Tag: "HTML · CSS · JS · PHP",
    proj2Desc:
      "Real-world client project (2019): multi-page corporate website for a medical consulting company, including services, courses, news and a contact form.",
    proj2LinkText: "View repository",

    proj3Title: "Professional Landing Template",
    proj3Tag: "HTML · CSS · JS · Modern layout",
    proj3Desc:
      "Coming soon: a modern, responsive template for independent professionals (coaches, trainers, consultants), focused on a clear value proposition and calls to action.",
    proj3LinkText: "Live demo coming soon",

    aboutTitle: "About",
    aboutBody:
      "I work at the intersection of data, operations and digital projects, with experience in fintech, customer support and analytics. I like to design clear solutions that connect metrics, processes and user experience.",

    contactTitle: "Contact"
  }
};

let currentLang = "en";

// Aplica un idioma recorriendo todos los elementos con data-i18n
function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (text !== undefined) {
      el.textContent = text;
    }
  });

  // Actualiza estado visual de los botones
  document.getElementById("lang-es").classList.toggle("active", lang === "es");
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
}

// Eventos de idioma
document.getElementById("lang-es").addEventListener("click", () => {
  setLanguage("es");
});

document.getElementById("lang-en").addEventListener("click", () => {
  setLanguage("en");
});

// Idioma inicial
setLanguage(currentLang);

// Tema claro / oscuro
const themeBtn = document.getElementById("theme-toggle");
let isDark = false;

themeBtn.addEventListener("click", () => {
  isDark = !isDark;
  document.body.classList.toggle("dark", isDark);
  themeBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
});

// Placeholder para futuras animaciones / interacciones
// Aquí más adelante podemos enganchar AOS, GSAP u otras librerías si lo deseas.

