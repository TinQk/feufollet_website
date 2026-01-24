// 1. Load projects and news data from JSON
let PROJECTS = [];
let NEWS = [];

async function loadData() {
  try {
    const projectsResponse = await fetch("/assets/data/projects.json");
    const newsResponse = await fetch("/assets/data/news.json");

    if (!projectsResponse.ok) throw new Error("Failed to load projects data");
    if (!newsResponse.ok) throw new Error("Failed to load news data");

    PROJECTS = await projectsResponse.json();
    NEWS = await newsResponse.json();

    // Render content after data is loaded
    renderAllProjects();
    renderLatestProjects(3);
    renderLatestNews(3);
    renderAllNews();
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// 2a. Template d’une vignette projet
function createProjectCardHTML(project) {
  return `
    <article class="project-card">
      <a href="${project.url}">
        <figure class="project-card-image">
          <img src="${project.image}" alt="${project.imageAlt}">
        </figure>

        <div class="project-card-textzone">
            <h3 class="type-subtitle">${project.title}</h3>
            <p class="type-body project-card-excerpt">
            ${project.excerpt}
            </p>
        </div>

      </a>
    </article>
  `;
}

// 2b. Template d’une vignette actu
// (on peut réutiliser la même que pour les projets mais on ajoute un bouton dont le contenu est boutonText)
function createNewsCardHTML(actu) {
  return `
    <article class="project-card">
      <a href="${actu.url}" target="_blank" rel="noopener noreferrer">
        <figure class="project-card-image">
          <img src="${actu.image}" alt="${actu.imageAlt}">
        </figure>

        <div class="project-card-textzone">
            <h3 class="type-subtitle">${actu.title}</h3>
            <p class="type-body project-card-excerpt">
            ${actu.excerpt}
            </p>
        </div>
        <div class="btn btn-small btn-secondary">
          ${actu.boutonText || "En savoir plus"}
        </div>

      </a>
    </article>
  `;
}

// 3a. Remplir la page "Nos projets" (tous les projets)
function renderAllProjects() {
  const container = document.getElementById("all-projects");
  if (!container) return; // on n'est pas sur la page projets

  // Trier par ordre
  const sorted = [...PROJECTS].sort((a, b) => b.order - a.order);

  sorted.forEach((project) => {
    container.insertAdjacentHTML("beforeend", createProjectCardHTML(project));
  });
}

// 3b. Remplir la page d'accueil (X derniers projets)
function renderLatestProjects(limit = 3) {
  const container = document.getElementById("latest-projects");
  if (!container) return; // on n'est pas sur la home

  const sorted = [...PROJECTS].sort((a, b) => b.order - a.order);
  const latest = sorted.slice(0, limit);

  latest.forEach((project) => {
    container.insertAdjacentHTML("beforeend", createProjectCardHTML(project));
  });
}

// 3c. Remplir la page d'accueil (X derniers actus)
function renderLatestNews(limit = 3) {
  const container = document.getElementById("latest-news");
  if (!container) return; // on n'est pas sur la home
  const sorted = [...NEWS].sort((a, b) => b.order - a.order);
  const latest = sorted.slice(0, limit);

  latest.forEach((actu) => {
    container.insertAdjacentHTML("beforeend", createNewsCardHTML(actu));
  });
}

// 3d. Remplir la page "Nos actus" (toutes les actus)
function renderAllNews() {
  const container = document.getElementById("all-news");
  if (!container) return; // on n'est pas sur la page actus

  // Trier par ordre
  const sorted = [...NEWS].sort((a, b) => b.order - a.order);

  sorted.forEach((actu) => {
    container.insertAdjacentHTML("beforeend", createNewsCardHTML(actu));
  });
}

// 4. Lancer tout ça quand le DOM est prêt
document.addEventListener("DOMContentLoaded", () => {
  loadData();
});
