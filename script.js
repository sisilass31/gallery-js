// création de la barre de navigation avec le mode clair/sombre
const navbarHTML = `
  <header>
    <nav class="navbar">
        <div class="navbar-content">
            <div class="filters">
                <button onclick="filterArticles('All')">Tous</button>
                <button onclick="filterArticles('Web Design')">Web Design</button>
                <button onclick="filterArticles('Programmation')">Programmation</button>
            </div>
        </div>
    </nav>
  </header>
`;

// la barre de navigation dans le body
/* Avec afterbegin le contenu est inséré juste après l'ouverture de la balise <body>*/
document.body.insertAdjacentHTML('afterbegin', navbarHTML);

// création des boutons de filtre
const filterButtonsHTML = `
    <main>
        <!-- Filtres -->
        <div class="gallery">
            <!-- Les articles -->
        </div>
    </main>
`;

// ajouter les boutons de filtre et le conteneur pour la galerie sous la navbar
document.body.insertAdjacentHTML('beforeend', filterButtonsHTML);

// création les articles (le titre, la description, la catégorie et la duree)
const articles = [
    {
        titre: "Les bases de HTML",
        description: "Apprenez les bases du langage HTML.",
        categorie: "Web Design",
        duree: "8 min",
    },
    {
        titre: "Introduction au CSS",
        description: "Comprenez comment styliser vos pages web avec CSS.",
        categorie: "Web Design",
        duree: "12 min",
    },
    {
        titre: "Responsive Design avec Flexbox",
        description: "Apprenez à créer des mises en page avec Flexbox.",
        categorie: "Web Design",
        duree: "10 min",
    },
    {
        titre: "Animations CSS avancées",
        description: "Créez des animations modernes avec CSS.",
        categorie: "Web Design",
        duree: "15 min",
    },
    {
        titre: "Design avec Grid Layout",
        description: "Maîtrisez la mise en page CSS Grid pour vos sites.",
        categorie: "Web Design",
        duree: "18 min",
    },
    {
        titre: "Optimisation SEO d'un site web",
        description: "Apprenez les bases du référencement pour améliorer la visibilité de vos sites.",
        categorie: "Web Design",
        duree: "12 min",
    },
    {
        titre: "JavaScript pour les débutants",
        description: "Découvrez les concepts fondamentaux de JavaScript.",
        categorie: "Programmation",
        duree: "15 min",
    },
    {
        titre: "Le DOM avec JavaScript",
        description: "Découvrez comment interagir avec le DOM en JS.",
        categorie: "Programmation",
        duree: "20 min",
    },
    {
        titre: "Manipulation du DOM",
        description: "Apprenez à manipuler le DOM avec React.",
        categorie: "Programmation",
        duree: "30 min",
    },
    {
        titre: "Introduction à Node.js",
        description: "Apprenez les bases du développement côté serveur avec Node.js.",
        categorie: "Programmation",
        duree: "25 min",
    },
    {
        titre: "ES6 et JavaScript moderne",
        description: "Découvrez les nouvelles fonctionnalités de JavaScript ES6+.",
        categorie: "Programmation",
        duree: "22 min",
    },
    {
        titre: "Programmation asynchrone",
        description: "Apprenez à gérer les promesses et async/await en JS.",
        categorie: "Programmation",
        duree: "28 min",
    }
];

// on récupère la div gallery
const gallery = document.querySelector('.gallery');

// pour chaque articles, on ajoute la (l'image, le titre, la description, la duree et la catégorie)
//  data-categorie="${article.categorie}" pour le filtrage
articles.forEach((article) => {
    const html = `
      <div class="article" data-categorie="${article.categorie}">
        <div class="titre">
            <h2>${article.titre}</h2>
            <p>${article.description}</p>
        </div>
        <div class="infos-container">
            <div class="infos">${article.categorie}</div>
            <div class="infos">${article.duree}</div>
        </div>
      </div>
    `;
    // on insère le code HTML (c'est à dire l'article) dans la div gallery
    gallery.insertAdjacentHTML('beforeend', html);
});

// fonction filtres
function filterArticles(categorie) {
    // on récupère tous les articles
    const articles = document.querySelectorAll(".article");

    // parcourt chaque article pour filtrer l'affichage
    articles.forEach((article) => {
        // si la catégorie est All ou  si la catégorie de l'article correspond à la catégorie sélectionnée
        if (
            categorie === "All" ||
            article.getAttribute("data-categorie") === categorie
        ) {
            // affiche l'article si la condition est vraie
            article.style.display = "flex";
        } else {
            // cache l'article si la condition est fausse
            article.style.display = "none";
        }
    });

    // gérer les boutons actifs
    // on récupère tous les bouttons filters
    const buttons = document.querySelectorAll(".filters button");

    // parcourt chaque bouton pour mettre à jour l'état actif
    buttons.forEach((button) => {
        // si le texte du bouton correspond à la catégorie sélectionnée ou si "All" est sélectionné et le texte du bouton est "Tous"
        if (
            button.textContent === categorie ||
            (categorie === "All" && button.textContent === "Tous")
        ) {
            // ajoute la classe 'active' au bouton pour indiquer qu'il est sélectionné
            button.classList.add("active");
        } else {
            // retire la classe 'active' du bouton s'il n'est pas sélectionné
            button.classList.remove("active");
        }
    });
}
