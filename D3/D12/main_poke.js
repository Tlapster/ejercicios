const URL = `https://pokeapi.co/api/v2/generation/1`;
const list = document.getElementById("list");
const pokemon = document.getElementById("pokemon");

fetch(URL)
.then(response => response.json())
.then(response => {
    response.pokemon_species.forEach( especie => list.appendChild(newinfo(especie)));
        
    });

const cardPokemon = (pokemon) => {
    let newCard = document.createElement('div');
    

    newCard.innerHTML = `
    <h1 class="nombrepoke">${pokemon.name}</h1>
    
    <img id="imgFrente" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <img id="imgBack" src="${pokemon.sprites.back_default}" alt="${pokemon.name}">
    <p>Base Experience:${pokemon.base_experience}</p>
    <p>Height: ${pokemon.height}</p> 
    <p>Weight: ${pokemon.weight}</p>
    <h4 class="nombrepoke">${pokemon.name} Shiny Form</h4>
    <img id="imgShiFrente" src="${pokemon.sprites.front_shiny}" alt="${pokemon.name}">
    <img id="imgShiBack" src="${pokemon.sprites.back_shiny}" alt="${pokemon.name}">
    
    `;
    return newCard
};

const showPokemon = (name) => {
    pokemon.innerHTML = "";

    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetch(URL)
    .then(response => response.json())
    .then(response => {
        let card = cardPokemon(response);
        pokemon.appendChild(card);
    })
};

const newinfo = (obj) => {
    let newli = document.createElement("li");
    let newButton = document.createElement("button");
    newButton.className= "btn btn-outline-dark";
    newButton.textContent = "I choose you!";
    newli.className = "list__item";
    newli.innerHTML = `<span class="nombrepoke">${obj.name}</span>`

    newButton.addEventListener("click", () =>{
        showPokemon(obj.name);
    })
    newli.appendChild(newButton);

    return newli;
};


