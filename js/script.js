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
 console.log(resultat);

const movies = document.querySelectorAll("#movies-grid .media-card");
const series = document.querySelectorAll("#series-grid .media-card");

console.log(movies.length)
console.log(series.length)

let moviesIndex = 0;
let seriesIndex = 0;

for(let i = 0; i < resultat.results.length; i++){ 

        if (resultat.results[i].media_type === "movie" && moviesIndex < movies.length) {
        const titleMovie = movies[moviesIndex].querySelector("h3");
        const moviesImg = movies[moviesIndex].querySelector(".media-poster");

        titleMovie.textContent = resultat.results[i].title;

        const recupImg = resultat.results[i].poster_path;

        moviesImg.src = "https://image.tmdb.org/t/p/w500" + recupImg;

        moviesIndex++;  
      }  
        
        else if (resultat.results[i].media_type === "tv" && seriesIndex < series.length) {
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

function changeText(card, value) {

  const titre = card.querySelector("h3")
  titre.textContent = value;
  console.log(card, value)
}        
    

    


 
  
         
        
        
    
            
            
        

        

   
  