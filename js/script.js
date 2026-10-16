 formulaireRecherche.addEventListener("submit", function (evenementRecherche) {
 evenementRecherche.preventDefault();
 const rechercheUtilisateur = champRecherche.value;
 rechercherContenu(rechercheUtilisateur);
});

async function rechercherContenu(recherche) {
  const url = "https://api.themoviedb.org/3/search/multi?api_key=" 
  + API_KEY
  + "&query="
  + recherche;

  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
    throw new Error(`Statut de réponse : ${reponse.status}`);
  }

const resultat = await reponse.json();

const movies = document.querySelectorAll("#movies-grid .media-card");
const series = document.querySelectorAll("#series-grid .media-card");

movies.forEach(carte => carte.style.display = "none");
series.forEach(carte => carte.style.display = "none");

const grilleTendances = document.querySelector("#trending-grid");

  if (grilleTendances) {
    grilleTendances.closest("section").style.display = "none";
}

 console.log(resultat);

console.log(movies.length)
console.log(series.length)

let moviesIndex = 0;
let seriesIndex = 0;

for(let i = 0; i < resultat.results.length; i++){ 

        if (resultat.results[i].media_type === "movie" && moviesIndex < movies.length) {

          movies[moviesIndex].style.display = "";

        const titleMovie = movies[moviesIndex].querySelector("h3");
        const moviesImg = movies[moviesIndex].querySelector(".media-poster");

        titleMovie.textContent = resultat.results[i].title;

        const recupImg = resultat.results[i].poster_path;

        moviesImg.src = "https://image.tmdb.org/t/p/w500" + recupImg;

        moviesIndex++;  
      }  
        
        else if (resultat.results[i].media_type === "tv" && seriesIndex < series.length) {

        series[seriesIndex].style.display = "";    

        const titleTv = series[seriesIndex].querySelector("h3");
        const seriesImg = series[seriesIndex].querySelector(".media-poster");

        titleTv.textContent = resultat.results[i].name;

        const recupImg = resultat.results[i].poster_path;
        seriesImg.src = "https://image.tmdb.org/t/p/w500" + recupImg;

        seriesIndex++;
      }  
}

} catch (erreur) {
 console.error(erreur.message);
 }

}

const carteTendance = document.querySelectorAll("#trending-grid .media-card");
Boolean(carteTendance.length) && chargerTendance();

async function chargerTendance() {
  const urlIndexTendance = "https://api.themoviedb.org/3/trending/all/day?api_key=" + API_KEY;
  try {
    const response = await fetch(urlIndexTendance);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const resultatTendance = await response.json();
    console.log(resultatTendance);

    const urlGenresFilms = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY + "&language=fr-FR";

    const responseGenresFilms = await fetch(urlGenresFilms);

    const resultatGenresFilms = await responseGenresFilms.json();

    const urlGenresSeries = "https://api.themoviedb.org/3/genre/tv/list?api_key=" + API_KEY + "&language=fr-FR";

    const responseGenresSeries = await fetch(urlGenresSeries);

    const resultatGenresSeries = await responseGenresSeries.json();


console.log(resultatGenresFilms.genres);
console.log(resultatGenresSeries.genres);

    let compteurTendance = 0;

    for(let i = 0; i < resultatTendance.results.length; i++) {
      if (compteurTendance < carteTendance.length) {

        const typeTendance = resultatTendance.results[i].media_type; // permettre de savoir si tu travailles sur un film ou une série.

        let listeGenres;  // Le catalogue des genres TMDB, avec leurs identifiants et leurs noms

        if (typeTendance === "movie") {

          listeGenres = resultatGenresFilms.genres;
        
        } else if (typeTendance === "tv") {

          listeGenres = resultatGenresSeries.genres;

        }  else if (typeTendance === "person") {
            continue;
      }  

        const idsGenres = resultatTendance.results[i].genre_ids // récupérer les genre_ids

        const nomGenres = []; //pour y mettre les noms des id (action, comédie, horreur etc...)

        for (let j = 0 ; j < idsGenres.length ; j++) {

          for (let lg = 0 ; lg < listeGenres.length ; lg++) {

            if (idsGenres[j] === listeGenres[lg].id)

              nomGenres.push(listeGenres[lg].name);
              
          }
        }

        const titreTendance = carteTendance[compteurTendance].querySelector("h3");
        const imageTendance = carteTendance[compteurTendance].querySelector(".media-poster")

        const titre = resultatTendance.results[i].title;
        const recupImg = resultatTendance.results[i].poster_path;

        const genre = carteTendance[compteurTendance].querySelector(".media-meta")

        genre.textContent = nomGenres;

        if (typeTendance === "movie") {
          titreTendance.textContent = resultatTendance.results[i].title;

        } else if (typeTendance === "tv") {
          titreTendance.textContent = resultatTendance.results[i].name;
        }

        imageTendance.src = "https://image.tmdb.org/t/p/w500" + recupImg;

        compteurTendance++;
    }
  }

  } catch (error) {
    console.error(error.message);
  }
}

function changeText(card, value) {

  const titre = card.querySelector("h3")
  titre.textContent = value;
  console.log(card, value)
}

async function chargerFilmsAccueil() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=" + API_KEY + "&language=fr-FR";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const urlTendanceFilms = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY + "&language=fr-FR";

    const resultatFilmsAccueil = await reponse.json();
    console.log(resultatFilmsAccueil);

    const responseTendanceGenresFilms = await fetch(urlTendanceFilms);

    if (!responseTendanceGenresFilms.ok) {
      throw new Error(`Statut de réponse : ${responseTendanceGenresFilms.status}`);
    }

    const resultatGenresFilms = await responseTendanceGenresFilms.json(); 

      const conteneurFilms = document.querySelector("#movies-grid");

        conteneurFilms.replaceChildren();

//=========================================================================================================
//    Récupérer les titres des tendances Films 
//=========================================================================================================          
  
  for (let i = 0 ; i < resultatFilmsAccueil.results.length ; i++) {  
  
    const carteFilm = document.createElement("article");

    carteFilm.className = "media-card";

    const titreTendanceFilms = document.createElement("h3");

    titreTendanceFilms.textContent = resultatFilmsAccueil.results[i].title;

    carteFilm.appendChild(titreTendanceFilms);

    conteneurFilms.appendChild(carteFilm);

//=========================================================================================================
//    Récupérer les images des cartes Tendances Films
//=========================================================================================================    

    const imageFilm = document.createElement("img");

    imageFilm.src = "https://image.tmdb.org/t/p/w500" + resultatFilmsAccueil.results[i].poster_path

    imageFilm.alt = "Affiche du film " + resultatFilmsAccueil.results[i].title;

    imageFilm.className = "media-poster";

    carteFilm.appendChild(imageFilm);

    conteneurFilms.appendChild(carteFilm);

//=========================================================================================================
//    Récupérer les Genres des Films
//=========================================================================================================

    const idsGenres = resultatFilmsAccueil.results[i].genre_ids;

    let nameGenre = [];

    for (let j = 0 ; j < idsGenres.length ; j++) {

      for (let ng = 0 ; ng < resultatGenresFilms.genres.length ; ng++) {

        if (idsGenres[j] === resultatGenresFilms.genres[ng].id) {

          nameGenre.push(resultatGenresFilms.genres[ng].name);
        }
    
      }
    
    }
      const genreFilm = document.createElement("p");

      genreFilm.className = "media-meta";

      genreFilm.textContent = nameGenre;

      carteFilm.appendChild(genreFilm);

  }      


  } catch (erreur) {
    console.error(erreur.message);
  }
}

chargerFilmsAccueil()


async function chargerSeriesAccueil() {
  const url = "https://api.themoviedb.org/3/trending/tv/week?api_key=" + API_KEY + "&language=fr-FR";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const urlTendanceSeries = "https://api.themoviedb.org/3/genre/tv/list?api_key=" + API_KEY + "&language=fr-FR";

    const resultatSeriesAccueil = await reponse.json();
    console.log(resultatSeriesAccueil);

    const responseTendanceGenresSeries = await fetch(urlTendanceSeries);

    if (!responseTendanceGenresSeries.ok) {
      throw new Error(`Statut de réponse : ${responseTendanceGenresSeries.status}`);
    }

    const resultatGenresSeries = await responseTendanceGenresSeries.json(); 

      const conteneurSeries = document.querySelector("#series-grid");

        conteneurSeries.replaceChildren();

//=========================================================================================================
//    Récupérer les titres des tendances Series 
//=========================================================================================================          
  
  for (let i = 0 ; i < resultatSeriesAccueil.results.length ; i++) {  
  
    const carteSeries = document.createElement("article");

    carteSeries.className = "media-card";

    const titreTendanceSeries = document.createElement("h3");

    titreTendanceSeries.textContent = resultatSeriesAccueil.results[i].name;

    carteSeries.appendChild(titreTendanceSeries);

    conteneurSeries.appendChild(carteSeries);

//=========================================================================================================
//    Récupérer les images des cartes Tendances Series
//=========================================================================================================    

    const imageSeries = document.createElement("img");

    imageSeries.src = "https://image.tmdb.org/t/p/w500" + resultatSeriesAccueil.results[i].poster_path

    imageSeries.alt = "Affiche de la Series " + resultatSeriesAccueil.results[i].name;

    imageSeries.className = "media-poster";

    carteSeries.appendChild(imageSeries);

    conteneurSeries.appendChild(carteSeries);

//=========================================================================================================
//    Récupérer les Genres des Series
//=========================================================================================================

    const idsGenres = resultatSeriesAccueil.results[i].genre_ids;

    let nameGenre = [];

    for (let j = 0 ; j < idsGenres.length ; j++) {

      for (let ng = 0 ; ng < resultatGenresSeries.genres.length ; ng++) {

        if (idsGenres[j] === resultatGenresSeries.genres[ng].id) {

          nameGenre.push(resultatGenresSeries.genres[ng].name);
        }
    
      }
    
    }
      const genreSeries = document.createElement("p");

      genreSeries.className = "media-meta";

      genreSeries.textContent = nameGenre;

      carteSeries.appendChild(genreSeries);
  }    
    
  } catch (erreur) {
    console.error(erreur.message);
  }
}

chargerSeriesAccueil()



/* =============================================
   DIGICOSTREAM - FILTRES FILMS / SERIES / TENDANCES
============================================= */

const filtreGenre = document.querySelector("#filtre-genre");
const modeleCarte = document.querySelector("#modele-carte-media");
const pageActuelle = window.location.pathname.split("/").pop();

// Fonction commune pour récupérer les données TMDB
async function recupererTMDB(chemin) {
    const url = "https://api.themoviedb.org/3/" + chemin
        + (chemin.includes("?") ? "&" : "?")
        + "api_key=" + API_KEY + "&language=fr-FR";

    const reponse = await fetch(url);

    if (!reponse.ok) {
        throw new Error("Erreur TMDB : " + reponse.status);
    }

    return await reponse.json();
}

// Fonction commune pour afficher les cartes
function afficherCartesFiltrees(grille, resultats, genresFilms, genresSeries) {

    grille.replaceChildren();

    let nombreCartes = 0;

    for (const contenu of resultats) {

        if (!contenu.poster_path) {
            continue;
        }

        const carte = modeleCarte.content.firstElementChild.cloneNode(true);
        const estSerie = contenu.media_type === "tv";

        const titre = estSerie ? contenu.name : contenu.title;

        carte.querySelector("h3").textContent = titre;

        const image = carte.querySelector(".media-poster");
        image.src = "https://image.tmdb.org/t/p/w500" + contenu.poster_path;
        image.alt = "Affiche de " + titre;

        const catalogue = estSerie ? genresSeries : genresFilms;

        const nomsGenres = catalogue.filter(function (genre) {
            return contenu.genre_ids.includes(genre.id);
        }).map(function (genre) {
            return genre.name;
        });

        carte.querySelector(".media-meta").textContent = nomsGenres.join(", ");
        carte.querySelector(".media-badge").textContent = estSerie ? "Série" : "Film";

        grille.appendChild(carte);
        nombreCartes++;
    }

    if (nombreCartes === 0) {
        const message = document.createElement("p");
        message.textContent = "Aucun résultat trouvé pour ce genre.";
        grille.appendChild(message);
    }
}

// Adapter le menu aux genres des séries
if (filtreGenre && pageActuelle === "series.html") {

    const genresTV = [
        ["all", "Tous les genres"],
        ["10759", "Action et aventure"],
        ["16", "Animation"],
        ["35", "Comédie"],
        ["80", "Crime"],
        ["99", "Documentaire"],
        ["18", "Drame"],
        ["10751", "Famille"],
        ["9648", "Mystère"],
        ["10765", "Science-fiction et fantastique"],
        ["10768", "Guerre et politique"],
        ["37", "Western"]
    ];

    filtreGenre.replaceChildren();

    for (const genre of genresTV) {
        filtreGenre.add(new Option(genre[1], genre[0]));
    }
}

// Événement du filtre
if (filtreGenre && modeleCarte) {

    if (pageActuelle === "tendances.html") {
        filtreGenre.value = "all";
    }

    filtreGenre.addEventListener("change", async function () {

        const idGenre = filtreGenre.value;

        // Revenir aux tendances initiales
        if (idGenre === "all") {

            if (pageActuelle === "films.html") {
                chargerFilmsAccueil();
            } else if (pageActuelle === "series.html") {
                chargerSeriesAccueil();
            } else if (pageActuelle === "tendances.html") {
                window.location.reload();
            }

            return;
        }

        try {

            // PAGE FILMS
            if (pageActuelle === "films.html") {

                const films = await recupererTMDB(
                    "discover/movie?with_genres=" + idGenre
                    + "&sort_by=popularity.desc"
                );

                const genres = await recupererTMDB("genre/movie/list");

                afficherCartesFiltrees(
                    document.querySelector("#movies-grid"),
                    films.results,
                    genres.genres,
                    []
                );
            }

            // PAGE SERIES
            else if (pageActuelle === "series.html") {

                const series = await recupererTMDB(
                    "discover/tv?with_genres=" + idGenre
                    + "&sort_by=popularity.desc"
                );

                const genres = await recupererTMDB("genre/tv/list");

                const resultats = series.results.map(function (serie) {
                    return { ...serie, media_type: "tv" };
                });

                afficherCartesFiltrees(
                    document.querySelector("#series-grid"),
                    resultats,
                    [],
                    genres.genres
                );
            }

            // PAGE TENDANCES
            else if (pageActuelle === "tendances.html") {

                const tendances = await recupererTMDB("trending/all/day");
                const genresFilms = await recupererTMDB("genre/movie/list");
                const genresSeries = await recupererTMDB("genre/tv/list");

                // Correspondances entre genres Films et Séries
                const correspondancesTV = {
                    "28": [10759],
                    "12": [10759],
                    "35": [35],
                    "18": [18],
                    "14": [10765],
                    "27": [],
                    "878": [10765],
                    "53": []
                };

                const resultats = tendances.results.filter(function (contenu) {

                    const ids = contenu.genre_ids || [];

                    if (contenu.media_type === "movie") {
                        return ids.includes(Number(idGenre));
                    }

                    if (contenu.media_type === "tv") {
                        return (correspondancesTV[idGenre] || []).some(
                            function (idTV) {
                                return ids.includes(idTV);
                            }
                        );
                    }

                    return false;
                });

                const grille = document.querySelector("#trending-grid");

                // Masquer les autres sections pendant le filtrage
                const sectionFilms = document.querySelector("#movies-grid")?.closest("section");
                const sectionSeries = document.querySelector("#series-grid")?.closest("section");

                if (sectionFilms) sectionFilms.style.display = "none";
                if (sectionSeries) sectionSeries.style.display = "none";

                afficherCartesFiltrees(
                    grille,
                    resultats,
                    genresFilms.genres,
                    genresSeries.genres
                );
            }

        } catch (erreur) {
            console.error("Erreur de filtrage :", erreur.message);
        }

    });
}


 
  
         
        
        
    
            
            
        

        

   
  