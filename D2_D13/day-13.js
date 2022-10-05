/* 
Hoy tienes el ultimo ejercicio de JavaScript de este nivel.

Veamos una nueva forma de usar las cosas que aprendiste.

Hoy la tarea será sobre unir dos arrays en uno.

INSTRUCCIONES

Dados 2 arrays, imprime en consola un tercer array que tenga los datos del primer array y del segundo. Puedes usar ciclos, metodos segun sea conveniente.

También puedes buscar en la documentación de W3Schools, si tienes dudas puedes preguntar al grupo de discord :D

Ejemplo:

array1 : ["Pedro", "Marcos", "Maria", "Ignacio"]
array2 : ["Carla", "Gonzalo", "Piero", "Mercedes"]

array3 : ["Pedro", "Marcos", "Maria", "Ignacio", "Carla", "Gonzalo", "Piero", "Mercedes"]


Mejora tu programa tanto como el tiempo te lo permita.
Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado

*/

let respuesta = prompt("Se sumarán los 2 array usando la funcion Concatenar, Está de acuerdo?");
const resultado = document.getElementById("resultado");

const a1 = ["Pedro", "Marcos", "Maria", "Ignacio"]
console.log(a1);

const a2 = ["Carla", "Gonzalo", "Piero", "Mercedes"]
console.log(a2)

const suma1_2 = a1.concat(a2);

if(respuesta.toLowerCase()==="si"){
    resultado.innerHTML = (suma1_2);
}   else{
    resultado.innerHTML= "<strong>ok pero no te molestes :(</strong>";
}