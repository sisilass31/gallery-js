// création de la barre de navigation avec le mode clair/sombre
const navbarHTML = `
  <header>
    <nav class="navbar">
        <div class="mode">
            <a href="javascript:void(0);" class="darkmode-button" onclick="toggleDarkMode()">
                <i class='bx bx-moon'></i>
            </a>
        </div>
    </nav>
  </header>
`;

// la barre de navigation dans le body
/* Avec afterbegin le contenu est inséré juste après l'ouverture de la balise <body>*/
document.body.insertAdjacentHTML('afterbegin', navbarHTML);

// fonction darkmode
function toggleDarkMode() {
    // on récupère le body
    var body = document.body;

    // on récupère le button
    var darkModeIcon = document.querySelector('.darkmode-button i');

    // bascule entre les classes dark-mode 
    body.classList.toggle('dark-mode');

    // mise à jour de la classe sur la navbar
    // on récupère la navbar
    var navbar = document.querySelector('.navbar');

    // cette méthode vérifie si l'élément body contient déjà la classe dark-mode.
    navbar.classList.toggle('dark-mode', body.classList.contains('dark-mode'));

    // mise à jour des articles en darkmode
    var articles = document.querySelectorAll('.article');
    articles.forEach((article) => {
        article.classList.remove('dark-mode');
    });

    // changement de l'icône en fonction du mode
    if (body.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
    }
}

// création des boutons de filtre
const filterButtonsHTML = `
    <main>
        <!-- Filtres -->
        <div class="filters">
            <button onclick="filterArticles('All')">Tous</button>
            <button onclick="filterArticles('Web Design')">Web Design</button>
            <button onclick="filterArticles('Programmation')">Programmation</button>
        </div>
        <div class="gallery">
            <!-- Les articles -->
        </div>
    </main>
`;

// ajouter les boutons de filtre et le conteneur pour la galerie sous la navbar
document.body.insertAdjacentHTML('beforeend', filterButtonsHTML);

// création les articles (le titre, l'image, la description, la catégorie et la duree)
const articles = [
    {
        titre: "Les bases de HTML",
        image: "../assets/images/html.jpg",
        description: "Apprenez les bases du langage HTML.",
        categorie: "Web Design",
        duree: "8 min",
    },
    {
        titre: "Introduction au CSS",
        image: "../assets/images/css.jpg",
        description: "Comprenez comment styliser vos pages web avec CSS.",
        categorie: "Web Design",
        duree: "12 min",
    },
    {
        titre: "JavaScript pour les débutants",
        image: "../assets/images/JS.jpg",
        description: "Découvrez les concepts fondamentaux de JavaScript.",
        categorie: "Programmation",
        duree: "15 min",
    },
    {
        titre: "Responsive Design avec Flexbox",
        image: "../assets/images/responsive.png",
        description: "Apprenez à créer des mises en page avec Flexbox.",
        categorie: "Web Design",
        duree: "10 min",
    },
    {
        titre: "Manipulation du DOM avec JavaScript",
        image: "../assets/images/dom.jpeg",
        description: "Découvrez comment interagir avec le DOM en JS.",
        categorie: "Programmation",
        duree: "20 min",
    },
    {
        titre: "Manipulation du DOM avec React",
        image: "../assets/images/react.png",
        description: "Apprenez à manipuler le DOM avec React.",
        categorie: "Programmation",
        duree: "30 min",
    }
    
];

// on récupère la div gallery
const gallery = document.querySelector('.gallery');

// pour chaque articles, on ajoute la (l'image, le titre, la description, la duree et la catégorie)
//  data-categorie="${article.categorie}" pour le filtrage
articles.forEach((article) => {
    const html = `
      <div class="article" data-categorie="${article.categorie}">
        <img src="${article.image}" alt="${article.titre}">
        <h2>${article.titre}</h2>
        <p>${article.description}</p>
        <div class="categorie">${article.categorie}</div>
        <div class="duree">${article.duree}</div>
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
            article.style.display = "block";
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
