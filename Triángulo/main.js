let lado1 = parseInt(prompt("Ingresa el tamaño del lado 1: "));
let lado2 = parseInt(prompt("Ingresa el tamaño del lado 2: "));
let lado3 = parseInt(prompt("Ingresa el tamaño del lado 3: "));

if( lado1 == lado2 && lado2 == lado3)
console.log ("Los lados corresponden a un triángulo equilatero");


else if( lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
console.log ("Los lados corresponden a un triángulo isoseles");

else
console.log ("los lados corresponden a un triángulo escaleno");

