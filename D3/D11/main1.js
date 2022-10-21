const URL = "https://pokeapi.co/api/v2/pokemon/";

fetch(URL)
.then(response => response.json())
.then(pokemon => console.log(pokemon))

const pokemon = document.getElementById("pokecards");

function newCard(pokemon) {

   return `
   <div id="card" class="card" style="width: 14rem;">
       <div class="card-body">
           <h5 id="nombre" class="card-title">${pokemon.name}</h5>
           <h6 id="anio" class="card-subtitle mb-2 text-muted">Estreno en: ${obj.anio}</h6>
           <p id="genero" class="card-text">Género: ${obj.genero}</p>
           <p id="calificacion" class="card-text">Calificación: ${obj.calificacion}</p>
            <p id="recaudacion" class="card-text">Recaundó: ${obj.recaudacion}</p>
           <p id="nominaciones" class="card-text">Nominaciones: ${obj.nominaciones}</p>
        </div>  
   </div>  `
};
console.log(Response);
