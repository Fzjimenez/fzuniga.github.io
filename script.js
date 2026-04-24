const translations = {
  es: {
    heroEyebrow: "Azure • Microsoft Security • SIEM • Hybrid Infrastructure",
    heroTitle: "Diseño infraestructura segura y convierto alertas técnicas en decisiones de negocio.",
    heroText: "Ingeniero Cloud & Cybersecurity con foco en Azure, Microsoft 365, Wazuh SIEM, infraestructura híbrida y automatización. Mi ventaja es conectar operación, seguridad y claridad ejecutiva sin vender humo técnico.",
    seeProjects: "Ver proyectos",
    contactMe: "Contactarme",
    metric1Title: "áreas dominadas",
    metric1Text: "Cloud, Security, Infraestructura y Automatización.",
    metric2Title: "visión operativa",
    metric2Text: "Capacidad técnica con lectura ejecutiva y de negocio.",
    metric3Title: "mentalidad SOC",
    metric3Text: "Detección, respuesta, documentación y mejora continua.",
    metric4Title: "humo técnico",
    metric4Text: "Arquitectura, evidencia y resultados. Lo demás es PowerPoint con esteroides.",
    proofTitle: "Lo que puedo demostrar, no solo decir",
    proofText: "Este portafolio está pensado para entrevistas, clientes y oportunidades remotas: problema, solución, tecnología e impacto.",
    assess: "Entender riesgo, arquitectura, operación y brechas reales.",
    design: "Diseñar una solución segura, medible y operable.",
    deploy: "Implementar con documentación, validación y control.",
    improve: "Monitorear, ajustar, reportar y mejorar continuamente.",
    projectsTitle: "Casos de proyecto",
    projectsText: "Casos presentados con enfoque consultivo: contexto, ejecución técnica y valor para el negocio.",
    timelineTitle: "Ruta profesional",
    timelineText: "Una línea clara: infraestructura sólida, cloud moderno, seguridad medible y automatización.",
    certsTitle: "Credenciales y foco técnico",
    certsText: "Certificaciones, tecnologías y áreas donde mi perfil tiene más valor comercial.",
    skillsTitle: "Stack técnico",
    skillsText: "Cloud, seguridad, infraestructura y automatización. Navaja suiza, pero sin oxidarse en Excel.",
    available: "Disponible para proyectos cloud, seguridad y modernización",
    contactTitle: "Construyamos algo seguro, escalable y defendible.",
    contactText: "Puedo apoyar en arquitectura Azure, hardening Microsoft 365, SIEM, SOC, backup, gobierno híbrido, automatización y assessments técnicos/ejecutivos.",
    printCV: "Imprimir / PDF"
  },
  en: {
    heroEyebrow: "Azure • Microsoft Security • SIEM • Hybrid Infrastructure",
    heroTitle: "I design secure infrastructure and turn technical alerts into business decisions.",
    heroText: "Cloud & Cybersecurity Engineer focused on Azure, Microsoft 365, Wazuh SIEM, hybrid infrastructure, and automation. My edge is connecting operations, security, and executive clarity without technical smoke and mirrors.",
    seeProjects: "View projects",
    contactMe: "Contact me",
    metric1Title: "core domains",
    metric1Text: "Cloud, Security, Infrastructure, and Automation.",
    metric2Title: "operational view",
    metric2Text: "Technical execution with executive and business clarity.",
    metric3Title: "SOC mindset",
    metric3Text: "Detection, response, documentation, and continuous improvement.",
    metric4Title: "technical smoke",
    metric4Text: "Architecture, evidence, and results. The rest is PowerPoint on steroids.",
    proofTitle: "What I can prove, not just claim",
    proofText: "This portfolio is built for interviews, clients, and remote opportunities: problem, solution, technology, and impact.",
    assess: "Understand risk, architecture, operations, and real gaps.",
    design: "Design a secure, measurable, and operational solution.",
    deploy: "Implement with documentation, validation, and control.",
    improve: "Monitor, tune, report, and improve continuously.",
    projectsTitle: "Project cases",
    projectsText: "Cases presented with a consulting mindset: context, technical execution, and business value.",
    timelineTitle: "Professional roadmap",
    timelineText: "A clear path: strong infrastructure, modern cloud, measurable security, and automation.",
    certsTitle: "Credentials and technical focus",
    certsText: "Certifications, technologies, and areas where my profile has the strongest commercial value.",
    skillsTitle: "Technical stack",
    skillsText: "Cloud, security, infrastructure, and automation. Swiss army knife energy, minus the rusty Excel dependency.",
    available: "Available for cloud, security, and modernization projects",
    contactTitle: "Let’s build something secure, scalable, and defensible.",
    contactText: "I can support Azure architecture, Microsoft 365 hardening, SIEM, SOC, backup, hybrid governance, automation, and technical/executive assessments.",
    printCV: "Print / PDF"
  }
};

let lang = localStorage.getItem("lang") || "es";
let activeFilter = "Todos";

const observer = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function setLanguage(nextLang) {
  lang = nextLang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.getElementById("langToggle").textContent = lang === "es" ? "EN" : "ES";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
}

document.getElementById("langToggle").addEventListener("click", () => {
  setLanguage(lang === "es" ? "en" : "es");
});

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = portfolioData.skills.map(skill => `<span>${skill}</span>`).join("");
}

function renderFilters() {
  const filters = ["Todos", ...new Set(portfolioData.projects.map(p => p.category))];
  const box = document.getElementById("filters");
  box.innerHTML = filters.map(filter => `
    <button class="${filter === activeFilter ? "active" : ""}" data-filter="${filter}">
      ${filter}
    </button>
  `).join("");

  box.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      renderFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const items = activeFilter === "Todos"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  grid.innerHTML = items.map(project => `
    <article class="project-card">
      <p class="tag">${project.category}</p>
      <h3>${project.title}</h3>
      <p><strong>Problema:</strong> ${project.problem}</p>
      <p><strong>Solución:</strong> ${project.solution}</p>
      <p><strong>Impacto:</strong> ${project.impact}</p>
      <div class="chips">
        ${project.tech.map(t => `<span>${t}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});

renderSkills();
renderFilters();
renderProjects();
setLanguage(lang);
