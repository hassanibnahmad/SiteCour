// // Vous pouvez utiliser JavaScript pour ajouter dynamiquement des cours à votre site.

// // Exemple de données de cours (remplacez-les par votre logique de récupération des données depuis le backend).
// const cours = [
//   {
//     titre: "Cours 1",
//     description: "Description du cours 1",
//     fichier: (src = "pdfs/corr TP4.pdf"),
//   },
//   {
//     titre: "Cours 2",
//     description: "Description du cours 2",
//     fichier: "cours2.pdf",
//   },
//   // Ajoutez d'autres cours selon vos besoins.
// ];

// // Fonction pour afficher les cours dans le HTML.
// function afficherCours() {
//   const sectionCours = document.getElementById("cours");

//   cours.forEach((c) => {
//     const article = document.createElement("article");
//     article.innerHTML = `
//             <h2>${c.titre}</h2>
//             <p>${c.description}</p>
//             <a href="${c.fichier}" target="_blank">Voir le cours</a>
//             `;
//     sectionCours.appendChild(article);
//   });
// }

// // Appel de la fonction pour afficher les cours lors du chargement de la page.
// document.addEventListener("DOMContentLoaded", afficherCours);

// Exemple de tableau de cours (remplacez-le par votre logique de récupération des données depuis le backend).
const cours = [
  {
    titre: "CoursMath 1",
    description: "Description du cours 1",
    fichier: "cours1.pdf",
  },
  {
    titre: "Cours 2",
    description: "Description du cours 2",
    fichier: "cours2.pdf",
  },
  // Ajoutez d'autres cours selon vos besoins.
];

// Fonction pour afficher les cours dans le HTML.
function afficherCours() {
  const sectionCours = document.getElementById("cours");

  const tableauCours = document.createElement("table");
  tableauCours.innerHTML = `
          <thead>
              <tr>
                  <th>Titre</th>
                  <th>Description</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              ${cours
                .map(
                  (c) => `
                  <tr>
                      <td>${c.titre}</td>
                      <td>${c.description}</td>
                      <td><a href="${c.fichier}" target="_blank">Voir le cours</a></td>
                  </tr>
              `
                )
                .join("")}
          </tbody>
      `;

  sectionCours.appendChild(tableauCours);
}

// Appel de la fonction pour afficher les cours lors du chargement de la page.
document.addEventListener("DOMContentLoaded", afficherCours);
