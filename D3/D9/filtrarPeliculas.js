import peliculas from "./peliculas.js";

const pelis = document.getElementById("pelis");
const form = document.forms.moviesFilter;

form.addEventListener("submit", searchMovie);

form.name.addEventListener("keyup",searchMovie);

function searchMovie(event) {
    event.preventDefault();
    
    let peliculasFiltradas =filterMovies(form.name.value);
    renderPeliculas(peliculasFiltradas);
}

function filterMovies(keyword) {
   return peliculas.filter( pelicula => pelicula.name.toLowerCase().indexOf(keyword.toLowerCase())> -1);

}
//function filterMoviesGenero(keyword){
   // return peliculas.filter( pelicula => pelicula.genero.toLowerCase().indexOf(keyword.toLowerCase())> -1 );
//}

function renderPeliculas(peliculas) {

    let peliculasTexto = peliculas.map( pelicula => newCard(pelicula));

    if(peliculasTexto.length > 0) {
        pelis.innerHTML = peliculasTexto.join("");
    } else{
        pelis.innerHTML = "<div class='no-movies'> No pudimos encontrar tu película :(</div>"
    }
    
};

function newCard(obj) {

    return `
    <div id="card" class="card" style="width: 14rem;">
        <div class="card-body">
            <h5 id="nombre" class="card-title">${obj.name}</h5>
            <h6 id="anio" class="card-subtitle mb-2 text-muted">Estreno en: ${obj.anio}</h6>
            <p id="genero" class="card-text">Género: ${obj.genero}</p>
            <p id="calificacion" class="card-text">Calificación: ${obj.calificacion}</p>
             <p id="recaudacion" class="card-text">Recaundó: ${obj.recaudacion}</p>
            <p id="nominaciones" class="card-text">Nominaciones: ${obj.nominaciones}</p>
         </div>  
    </div>  `
};

renderPeliculas(peliculas);

//document.getElementById("nombre").innerHTML = ("nombre");

console.log(peliculas);
