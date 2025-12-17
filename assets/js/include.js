// assets/js/include.js
async function includeComponent(selector, file) {
  const container = document.querySelector(selector);
  if (!container) return;

  const content = await fetch(file).then((r) => r.text());
  container.innerHTML = content;
}

document.addEventListener("DOMContentLoaded", () => {
  includeComponent("header", "/components/header.html");
  includeComponent("footer", "/components/footer.html");

  // Gestion du menu mobile après insertion
  document.addEventListener("click", (e) => {
    const toggle = e.target.closest(".menu-toggle");
    // Si on a cliqué sur le bouton de menu
    if (toggle) {
      // Sélectionner le menu html et l'icône
      const menu = document.querySelector(".mobile-menu");
      const icon = toggle.querySelector("img");

      const isOpen = menu.classList.toggle("open"); // Toggle la classe 'open'

      if (isOpen) {
        icon.src = "/assets/img/icon/menu-fermer.png";
        toggle.setAttribute("aria-label", "Fermer le menu");
      } else {
        icon.src = "/assets/img/icon/menu-ouvrir.png";
        toggle.setAttribute("aria-label", "Ouvrir le menu");
      }
    }
  });
});
