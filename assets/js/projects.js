// 1a. Liste des projets (une seule source de vérité)
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

// 1b. Liste des actus (une seule source de vérité)
const NEWS = [
  {
    id: "actu-1",
    title: "Ecriture d’un article pour la revue ERE",
    date: "2025-01-16", // sert à trier les plus récents
    image: "/assets/img/project_card/kit-enquete.jpg",
    imageAlt: "", // s'affiche si l'image ne parvient pas a charger
    excerpt: "05/12/2025 :  Regard sur un an de travail collaboratif avec Emilie Kohlmann et 15 enseignants en Info-Comm à l’IUT 2 de Grenoble. Un article à six mains sera soumis à la revue québécoise début 2026 !",
    url: ""
  },
  {
    id: "actu-2",
    title: "Scientifiction au Quai Des Savoirs",
    date: "2025-01-16", // sert à trier les plus récents
    image: "/assets/img/project_card/kit-enquete.jpg",
    imageAlt: "", // s'affiche si l'image ne parvient pas a charger
    excerpt: "05/11/2025 : On anime notre atelier Scientifiction au Quai des Savoirs à Toulouse lors du Forum des Futurs Désirables : collages, discussions collectives et exploration de nos avenirs communs.",
    url: ""
  },
  {
    id: "actu-3",
    title: "Enquête en Kit est sur l’ADEM",
    date: "2025-01-16", // sert à trier les plus récents
    image: "/assets/img/project_card/kit-enquete.jpg",
    imageAlt: "", // s'affiche si l'image ne parvient pas a charger
    excerpt: "La mallette pédagogique Enquête en Kit co-créé dans le cadre du projet RenfoRSE est visible et disponible sur le site de l’ADEM sous licence creative commons.",
    url: ""
  },
  {
    id: "actu-4",
    title: "Dessiner la ville et la campagne",
    date: "2025-01-16", // sert à trier les plus récents
    image: "/assets/img/project_card/kit-enquete.jpg",
    imageAlt: "", // s'affiche si l'image ne parvient pas a charger
    excerpt: "Dessiner la ville et la campagne : paysages, animaux et bâtiments… Feu Follet, ce sont deux designers et artistes qui musclent régulièrement leurs crayons en créant leur propre résidence de dessin à Dijon",
    url: ""
  },
  {
    id: "actu-5",
    title: "Socialter parle de nous",
    date: "2025-01-16", // sert à trier les plus récents
    image: "/assets/img/project_card/kit-enquete.jpg",
    imageAlt: "", // s'affiche si l'image ne parvient pas a charger
    excerpt: "30/08/2025 : Le magazine de critique radicale et alternative Socialter parle de Feu Follet dans son numéro 71: \"La science-fiction fait sa révolution\" !",
    url: ""
  },
    // ... ajoute ici tes autres actus
];


// 2. Template d’une vignette projet/actu
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

// 3c. Remplir la page d'accueil (X derniers actus)
function renderLatestNews(limit = 3) {
    const container = document.getElementById("latest-news");
    if (!container) return; // on n'est pas sur la home
    const sorted = [...NEWS].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
    const latest = sorted.slice(0, limit);

    latest.forEach(actu => {
        container.insertAdjacentHTML("beforeend", createProjectCardHTML(actu));
});
}

// 3d. Remplir la page "Nos actus" (toutes les actus)
function renderAllNews() {
    const container = document.getElementById("all-news");
    if (!container) return; // on n'est pas sur la page actus

    // On peut trier du plus récent au plus ancien
    const sorted = [...NEWS].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    sorted.forEach(actu => {
        container.insertAdjacentHTML("beforeend", createProjectCardHTML(actu));
    });
}

// 4. Lancer tout ça quand le DOM est prêt
document.addEventListener("DOMContentLoaded", () => {
  renderAllProjects();
  renderLatestProjects(3); // par ex. 3 derniers projets
  renderLatestNews(3); // par ex. 3 derniers actus
  renderAllNews();
});
