//=====================================================================================
//                       Exercices Lundi 12 OCTOBRE 2026
//=====================================================================================

const resultat = {
    results: [
        { name: "Avatar" },
        { name: "Titanic" },
        { name: "Gladiator" }
    ]
};

for(let i = 0; i < resultat.results.length; i++){
    const titreSeries = resultat.results[i].name;

    console.log(titreSeries)
}
    
 //===================================================================================   
 //   <div class="Series"> Exercice "afficher les titres directement sur une page HTML"
//====================================================================================

const resultat = {
    results: [
        { name: "Avatar" },
        { name: "Titanic" },
        { name: "Gladiator" }
    ]
};

const conteneurSeries = document.querySelector(".Series");

for(let i = 0; i < resultat.results.length; i++) {

    const titreSeries = document.createElement("h2");
    
    conteneurSeries.appenChild(titreSeries);
    titreSeries.textContent = resultat.results[i].name
}

//===================================================================================   
//à partir du tableau genres, retrouver le nom du genre qui possède l'identifiant 28, puis l'afficher dans la console.   
//====================================================================================

const genres = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comédie" },
    { id: 27, name: "Horreur" }
];

const Series = {
    name: "Mon Series",
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

const Series = {
    name: "Mon Series",
    genre_ids: [28, 878]
};

// i : parcours les id de l'objet Series

for (let i = 0 ; i  < Series.genre_ids.length ; i++) {

       console.log(Series.genre_ids[i])

// j : parcours le tableau genres et récupère leur nom
       for (let j = 0 ; j < genres.length ; j++) {

        if(Series.genre_ids[i] === genres[j].id) {
            console.log(genres[j].name)
        }
       }
}

//=====================================================================================
// Trier les Series et les séries distinguer les Series des séries récupérés dans une réponse d'API.
//=====================================================================================

const tendances = [
    { name: "Avatar", media_type: "movie" },
    { name: "Breaking Bad", media_type: "tv" },
    { name: "Gladiator", media_type: "movie" },
    { name: "The Last of Us", media_type: "tv" },
    { name: "Titanic", media_type: "movie" }
];

// Etape 1 Écris un programme JavaScript qui parcourt le tableau tendances et affiche 
// uniquement les Series dans la console.

for (let i = 0 ; i < tendances.length ; i++) {

        if (tendances[i].media_type === "movie")
            console.log(tendances[i].name)
        
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
// 2. Sépare les Series et les séries grâce à media_type.
// 3. Ajoute les titres des Series dans Series et ceux des séries dans series, grâce à push().
// 4. Affiche les deux tableaux dans la console.
//
// Résultat attendu
//  
// Series : ["Avatar", "Gladiator", "Titanic"]
//
// série : ["Breaking Bad", "The Last of Us"]
//====================================================================================


const resultats = [
    { name: "Avatar", media_type: "movie", vote_average: 7.8 },
    { name: "Breaking Bad", media_type: "tv", vote_average: 9.5 },
    { name: "Gladiator", media_type: "movie", vote_average: 8.4 },
    { name: "The Last of Us", media_type: "tv", vote_average: 8.7 },
    { name: "Titanic", media_type: "movie", vote_average: 7.9 }
];

const Series = [];
const series = [];

for( let i = 0 ; i < resultats.length ; i++) {

    if (resultats[i].media_type === "movie")
        Series.push(resultats[i].name)
    
    else if (resultats[i].media_type === "tv")
        series.push(resultats[i].name)
}

console.log(Series);
console.log(series);








  }      


  } catch (erreur) {
    console.error(erreur.message);
  }
}

chargerSeriesAccueil()





















