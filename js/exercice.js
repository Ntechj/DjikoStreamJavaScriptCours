//=====================================================================================
//                       Exercices Lundi 12 OCTOBRE 2026
//=====================================================================================

const resultat = {
    results: [
        { title: "Avatar" },
        { title: "Titanic" },
        { title: "Gladiator" }
    ]
};

for(let i = 0; i < resultat.results.length; i++){
    const titreFilm = resultat.results[i].title;

    console.log(titreFilm)
}
    
 //===================================================================================   
 //   <div class="films"> Exercice "afficher les titres directement sur une page HTML"
//====================================================================================

const resultat = {
    results: [
        { title: "Avatar" },
        { title: "Titanic" },
        { title: "Gladiator" }
    ]
};

const conteneurFilms = document.querySelector(".films");

for(let i = 0; i < resultat.results.length; i++) {

    const titreFilm = document.createElement("h2");
    
    conteneurFilms.appenChild(titreFilm);
    titreFilm.textContent = resultat.results[i].title
}

//===================================================================================   
//à partir du tableau genres, retrouver le nom du genre qui possède l'identifiant 28, puis l'afficher dans la console.   
//====================================================================================

const genres = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comédie" },
    { id: 27, name: "Horreur" }
];

const film = {
    title: "Mon film",
    genre_ids: [28, 27]
};

for (let i = 0; i < genres.length ; i++) {
    
    const categories = genres[i].name;
//===================================================================================   
//        FAUX la condition est à corrigé
//====================================================================================
    if (genres[i].id === genres[i].name) {
        console.log(genres)
    }

    
}

//===================================================================================   
//Travail de compréhenssion parcourir le tableau pour retrouver le nom correspondant à l'id 35
//====================================================================================

const genres = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comédie" },
    { id: 27, name: "Horreur" }
];

for (let i = 0; i < genres.length; i++) {

    if (genres[i].id === 35)
        console.log(genres[i].name)
}

//====================================================================================
// Je traduisais mal jusque la et grâce aux petits exercices de chatGPT j'améliore
// la compréhension et la traduction de mon code. il est tard je reprends demain
//====================================================================================


//=====================================================================================
//                       Exercices Mardi 13 OCTOBRE 2026
//=====================================================================================


//=====================================================================================
// Notre objectif final sera d'afficher : Action et Science-fiction avec id 878 et id 28
//=====================================================================================

const genres = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comédie" },
    { id: 27, name: "Horreur" },
    { id: 878, name: "Science-fiction" }
];

const film = {
    title: "Mon film",
    genre_ids: [28, 878]
};

// i : parcours les id de l'objet film

for (let i = 0 ; i  < film.genre_ids.length ; i++) {

       console.log(film.genre_ids[i])

// j : parcours le tableau genres et récupère leur nom
       for (let j = 0 ; j < genres.length ; j++) {

        if(film.genre_ids[i] === genres[j].id) {
            console.log(genres[j].name)
        }
       }
}

//=====================================================================================
// Trier les films et les séries distinguer les films des séries récupérés dans une réponse d'API.
//=====================================================================================

const tendances = [
    { title: "Avatar", media_type: "movie" },
    { title: "Breaking Bad", media_type: "tv" },
    { title: "Gladiator", media_type: "movie" },
    { title: "The Last of Us", media_type: "tv" },
    { title: "Titanic", media_type: "movie" }
];

// Etape 1 Écris un programme JavaScript qui parcourt le tableau tendances et affiche 
// uniquement les films dans la console.

for (let i = 0 ; i < tendances.length ; i++) {

        if (tendances[i].media_type === "movie")
            console.log(tendances[i].title)
        
}

//====================================================================================
//   Exercice avec Thibault
//====================================================================================

const genres = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comédie" },
    { id: 27, name: "Horreur" }
];

for (let i = 0; i < genres.length; i++) {

    if (genres[i].name === "Action")
        console.log(genres[i].id)

    console.log(genres[2])

    if (genres[i].id > "30")
        console.log(genres[i].id)
}

//====================================================================================
// Tu dois écrire un programme qui :
// 1. Parcourt le tableau resultats avec une boucle for.
// 2. Sépare les films et les séries grâce à media_type.
// 3. Ajoute les titres des films dans films et ceux des séries dans series, grâce à push().
// 4. Affiche les deux tableaux dans la console.
//
// Résultat attendu
//  
// film : ["Avatar", "Gladiator", "Titanic"]
//
// série : ["Breaking Bad", "The Last of Us"]
//====================================================================================


const resultats = [
    { title: "Avatar", media_type: "movie", vote_average: 7.8 },
    { title: "Breaking Bad", media_type: "tv", vote_average: 9.5 },
    { title: "Gladiator", media_type: "movie", vote_average: 8.4 },
    { title: "The Last of Us", media_type: "tv", vote_average: 8.7 },
    { title: "Titanic", media_type: "movie", vote_average: 7.9 }
];

const films = [];
const series = [];

for( let i = 0 ; i < resultats.length ; i++) {

    if (resultats[i].media_type === "movie")
        films.push(resultats[i].title)
    
    else if (resultats[i].media_type === "tv")
        series.push(resultats[i].title)
}

console.log(films);
console.log(series);