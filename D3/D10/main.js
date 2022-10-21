const URL = "./json.json";

fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))

console.log("hola");