

/* 
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
*/

const PUNTOS = [
  ["AEIOULNRST", 1],
  ["DG", 2],
  ["BCMP", 3],
  ["FHVWY", 4],
  ["K", 5],
  ["JX", 8],
  ["QZ", 10]
]
const puntos_user = document.getElementById("puntos_user");
const palabra = document.getElementById("palabra");

function sumarPuntos(palabra) {

  let letras = palabra.split(""); // ["h", "o", "l", "a"]
  let puntos = 0;

  letras.forEach( letra => {
    let punto = PUNTOS.filter( arr => arr[0].indexOf(letra.toUpperCase()) > -1);

    // [["DG", 2]]
    // []

    puntos += punto[0] == undefined ? 0 : punto[0][1];
  })
  
  alert(`El total de Puntos por tu palabra es: ${puntos}`);

  return puntos;//cantidad de puntos;
  
}
puntos_user.addEventListener("click",() => sumarPuntos(PUNTOS))




