/* 

El uso de listas puede sar un poco mas complejo y los ciclos nos ayudan a recorrerlos de una manera mas amigable.

Intentemos algo un poco mas complicado, pero si necesitas ayuda no dudes el pedirla.

Lee las instrucciones debajo y los comentarios atentamente, solo escribe tu codigo en la sección indicada.


HAZ TU MEJOR ESFUERZO!! SI NO ENTIENDES ALGO, PREGUNTA EN EL GRUPO, ESTAMOS PARA AYUDARTE :D

Mejora tu programa tanto como el tiempo te lo permita (que lo muestre uno por uno, que lo muestre contatenado con una indicacion, etc).
Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado

*/

// Aqui tienes un array donde hay datos de muchas personas, de hecho, Hay arrays dentro de otros arrays!!

let personas = [
  /*
  No te asustes, te explicaré que está pasando.

  dentro de este array "personas", tenemos otros arrays y todos tienen la misma estructura, es decir en su posicion uno tienen un mismo tipo de dato, igual en la 2, etc.
  Ejemplo:

  [Codigo, Nommbre, Genero Masculino o Femenino, Año de nacimiento, Año de defuncion]

  Todos cumplen con esta estructura.
  usualmente para ubicar la posicion en un array usamos algo como personas[0] y con ello accedemos al primer dato de un array, pero si ese dato es un array? podemos acceder de la misma manera.

  Por ejemplo si queremos ubicar el primer dato de personas, usamos personas[0] y si queremos acceder al nombre de este array, tendriamos que acceder a su posicion 1
  segun el ejemplo de arriba. entonces primero accedemos a la posicion cero de personas.

  personas[0]

  y luego para acceder al nombre Lola Park:

  personas[0][1]

  de esta forma primero accedimos al array en la posicion 0, y luego al string que contiene el nombre que está en la posición 1 de ese array.

  */

  ["P143","Lola Park", "F", 1663, 1706],
  ["P338","Savanna Foster", "F", 1674, 1723],
  ["P201","Tiffany Hughes", "F", 1689, 1747],
  ["P203","Ignacio Torres", "M", 1693, 1758],
  ["P128","Yasmin Li", "F", 1701, 1716],
  ["P342","Trent Ross", "M", 1705, 1757],
  ["P202","Samyukta Nguyen", "M", 1717, 1774],
  ["P132","Joel Johnson", "M", 1724, 1800],
  ["P445","Whitney Nelson", "F", 1757, 1823],
  ["P318","Khalid Ali", "M", 1759, 1814],
  ["P317","Davina Patel", "F", 1775, 1860],
  ["P313","Enzo Ruiz", "M", 1782, 1782],
  ["P475","Lauren Smith", "F", 1800, 1802],
  ["P455","Lucas Ross", "M", 1800, 1853],
  ["P435","Jamal Gray", "M", 1810, 1831],
  ["P204","Fatima Soares", "F", 1812, 1898],
  ["P206","Ephraim Foster", "M", 1831, 1885],
  ["P500","Peter Price", "M", 1832, 1878],
  ["P207","Rosalina Jimenez", "F", 1875, 1956],
  ["P425","Rachel Johnson", "F", 1876, 1940],
  ["P121","Vanessa Bennet", "F", 1880, 1960],
  ["P152","Jose Castillo", "M", 1884, 1931],
  ["P205","Liam Myers", "M", 1902, 1950],
  ["P465","Isabella Lopez", "F", 1907, 1959],
  ["P168","Megan Anderson", "F", 1909, 1945]
]


/* 
Tu trabajo comieza aqui:

Esto es un trabajo de historia familiar, así que debes crear un programa que permita al usuario escribir el codigo de su familiar fallecido y tu le retornes su: nombre, genero, 
año de nacimiento y año de defuncion.

Tienes que usar almenos uno de los bucles que aprendiste hoy (FOR IN o FOR OF) y el array donde se encuentra su informacion, es el array de arriba : personas.


Mejora tu programa tanto como el tiempo te lo permita.
Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado
*/

const codigo: 0;
const nombre: 1;
const genero: 2;
const nacimiento: 3;
const defuncion: 4;

let buscar = prompt("Escribe el código de tu familiar");

for (let buscar = 0 const codigo of personas){
  codigo = personas[0];
  console.log(personas([1]));
}

