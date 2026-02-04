document.addEventListener("DOMContentLoaded", () => {
  // Traducciones ES / EN
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
        "Proyecto académico: herramienta de consola para gestionar inventario, con operaciones CRUD y reporte de productos con poco stock.",
      proj1LinkText: "Ver en GitHub",
    
      proj2Title: "Sitio Corporativo MedComp",
      proj2Tag: "HTML · CSS · JS · PHP",
      proj2Desc:
        "Proyecto real para un cliente (2019): sitio corporativo multipágina para una empresa de consultoría médica.",
      proj2LinkText: "Ver repositorio",
    
      proj3Title: "Northbridge – Executive Coaching Landing",
      proj3Tag: "Landing page · HTML · CSS · JS",
      proj3Desc:
        "Template de landing premium para coaches ejecutivos: hero con fotografía, logos de confianza, servicios, proceso y CTA final.",
      proj3LinkText: "Ver landing / código",

    
      // 📌 NUEVO: sección productos digitales
      productsTitle: "Productos digitales y recursos",
      productsIntro:
        "Espacio para ebooks, guías y recursos descargables orientados a datos, productividad y proyectos digitales. Algunos serán gratuitos y otros de pago.",
    
      ebook1Title: "Ebook #1 – En desarrollo",
      ebook1Tag: "Ebook · PDF",
      ebook1Desc:
        "Placeholder para el primer ebook. Cuando esté listo, este bloque mostrará la temática, a quién ayuda y qué incluye.",
      ebook1LinkText: "Más información próximamente",
    
      aboutTitle: "Sobre mí",
      aboutBody:
        "Trabajo en la intersección entre datos, operaciones y proyectos digitales. Me interesa conectar análisis, automatización y diseño de experiencias sencillas, tanto en entornos fintech como en proyectos freelance y educativos.",
    
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
        "Academic project: a console-based inventory management tool with CRUD operations and low-stock reporting.",
      proj1LinkText: "View on GitHub",
    
      proj2Title: "MedComp Corporate Website",
      proj2Tag: "HTML · CSS · JS · PHP",
      proj2Desc:
        "Real-world client project (2019): multi-page corporate website for a medical consulting company.",
      proj2LinkText: "View repository",
    
      proj3Title: "Northbridge – Executive Coaching Landing",
      proj3Tag: "Landing page · HTML · CSS · JS",
      proj3Desc:
        "Premium landing template for executive coaching: photo hero, trusted-by logos, services, process and final CTA.",
      proj3LinkText: "View landing / code",

    
      // 📌 NEW: digital products section
      productsTitle: "Digital products & resources",
      productsIntro:
        "A space for ebooks, guides and downloadable resources focused on data, productivity and digital projects. Some will be free and others paid.",
    
      ebook1Title: "Ebook #1 – In progress",
      ebook1Tag: "Ebook · PDF",
      ebook1Desc:
        "Placeholder for the first ebook. Once it is ready, this block will explain the topic, who it helps and what it includes.",
      ebook1LinkText: "More details coming soon",
    
      aboutTitle: "About",
      aboutBody:
        "I work at the intersection of data, operations and digital projects. I enjoy connecting analysis, automation and simple user experiences, both in fintech environments and freelance/educational projects.",
    
      contactTitle: "Contact"
    }

  };

  let currentLang = "en";

  function setLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.getElementById("lang-es").classList.toggle("active", lang === "es");
    document.getElementById("lang-en").classList.toggle("active", lang === "en");
  }

  // Idioma inicial
  setLanguage(currentLang);

  // Eventos idioma
  document.getElementById("lang-es").addEventListener("click", () => {
    setLanguage("es");
  });

  document.getElementById("lang-en").addEventListener("click", () => {
    setLanguage("en");
  });

  // Tema claro / oscuro
  const themeBtn = document.getElementById("theme-toggle");
  let isDark = false;

  themeBtn.addEventListener("click", () => {
    isDark = !isDark;
    document.body.classList.toggle("dark", isDark);
    themeBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
  });
  
  AOS.init({
  duration: 800,
  easing: "ease-out-cubic",
  once: true
  });
});
