const key = "5c3408e486e9b838e449a36f421118e6";
const search = "characters";
const filter = "";
const heros = document.getElementById("heros");
const URL = `https://gateway.marvel.com/v1/public/${search}?apikey=${key}&${filter}`;

fetch(URL)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        let nodeList = response.data.results.map(hero => createCard(hero));

        nodeList.forEach(nodo => heros.appendChild(nodo));
    });


const createCard = (hero) => {
    let newDiv = document.createElement('div')
    newDiv.innerHTML= `
    <h2 >Nombre: ${hero.name}</h2>
    <h4 >ID: ${hero.id}</h2>
    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
    `
    return newDiv
}