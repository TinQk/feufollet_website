// 1. Liste des projets (une seule source de vérité)
const PROJECTS = [
  {
    id: "projet-1",
    title: "Enquête en Kit",
    date: "2025-01-16", // sert à trier les plus récents
    image: "/assets/img/project_card/kit-enquete.jpg",
    imageAlt: "", // s'affiche si l'image ne parvient pas a charger
    excerpt: "Accompagner des enseignants en IUT à intégrer les enjeux de justice sociale et environnementale dans leurs cours par le biais des RSE-O :  pédagogies actives, sorties nature et enquêtes  … >>",
    url: "/projets/projet-1.html" // page projet
  },
    {
        id: "projet-2",
        title: "Scientifiction",
        date: "2025-01-15", // sert à trier les plus récents
        image: "/assets/img/project_card/scientifiction.jpg",
        imageAlt: "", // s'affiche si l'image ne parvient pas a charger
        excerpt: "Scientifiction, un atelier de design fiction qui mêle création et débat, pour penser le partage de savoirs scientifique de demain",
        url: "/projets/projet-1.html" // page projet
    },
    {
        id: "projet-3",
        title: "Lille 2055 : Incertitude Radicale Extrême",
        date: "2025-01-14", // sert à trier les plus récents
        image: "/assets/img/project_card/lille-2055.jpg",
        imageAlt: "", // s'affiche si l'image ne parvient pas a charger
        excerpt: "Imaginer en une semaine un futur possible pour les Hauts-de-France en 2055 : scientifiques, auteur.ices de science-fiction et dessinateurs de BD explorent le scénario 8.5 du GIEC.",
        url: "/projets/projet-1.html" // page projet
    },
    {
        id: "projet-4",
        title: "Tête-en-l’air",
        date: "2025-01-14", // sert à trier les plus récents
        image: "/assets/img/project_card/tete-en-lair.jpg",
        imageAlt: "", // s'affiche si l'image ne parvient pas a charger
        excerpt: "Lancé de cerfs-volants artisanaux et porteur de paroles dans l’espace public pour réfléchir collectivement à notre manière d’habiter le dehors. Une résidence autogérée à Toulouse, avec la designer Eléonore Le Nezet.",
        url: "/projets/projet-1.html" // page projet
    },
    {
        id: "projet-5",
        title: "Des Noeuds et des Liens",
        date: "2025-01-14", // sert à trier les plus récents
        image: "/assets/img/project_card/des-noeuds.jpg",
        imageAlt: "", // s'affiche si l'image ne parvient pas a charger
        excerpt: "Explorer les tensions écologiques et sociales à travers le thème de l’agriculture : un atelier pour analyser des médias et mettre en scène des personnages aux opinions contrastées…",
        url: "/projets/projet-1.html" // page projet
    },
    {
        id: "Plan Climat Air Energie",
        title: "Des Noeuds et des Liens",
        date: "2025-01-14", // sert à trier les plus récents
        image: "/assets/img/project_card/pcaet.jpg",
        imageAlt: "", // s'affiche si l'image ne parvient pas a charger
        excerpt: "Conception et animation d’une session de concertation territoriale sur la mise en œuvre d’un PCAET, avec la communauté de communes de Comtal-Lot et Truyère, Aveyron, 2025.",
        url: "/projets/projet-1.html" // page projet
    },
  // ... ajoute ici tes autres projets
];

// 2. Template d’une vignette projet
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

// 3a. Remplir la page "Nos projets" (tous les projets)
function renderAllProjects() {
  const container = document.getElementById("all-projects");
  if (!container) return; // on n'est pas sur la page projets

  // On peut trier du plus récent au plus ancien
  const sorted = [...PROJECTS].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  sorted.forEach(project => {
    container.insertAdjacentHTML("beforeend", createProjectCardHTML(project));
  });
}

// 3b. Remplir la page d'accueil (X derniers projets)
function renderLatestProjects(limit = 3) {
  const container = document.getElementById("latest-projects");
  if (!container) return; // on n'est pas sur la home

  const sorted = [...PROJECTS].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latest = sorted.slice(0, limit);

  latest.forEach(project => {
    container.insertAdjacentHTML("beforeend", createProjectCardHTML(project));
  });
}

// 4. Lancer tout ça quand le DOM est prêt
document.addEventListener("DOMContentLoaded", () => {
  renderAllProjects();
  renderLatestProjects(3); // par ex. 3 derniers projets
});
