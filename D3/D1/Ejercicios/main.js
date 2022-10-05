let respuesta = prompt("Cual es el nombre de Superman?");
const resultado = document.getElementById("resultado");

if(respuesta.toLowerCase()==="clark kent"){
    resultado.innerHTML = "correcta!";
}   else{
    resultado.innerHTML= "<strong>Incorrecta! :(</strong>";
}