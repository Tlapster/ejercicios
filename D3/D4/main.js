// Funcion de nombre: ContadorDeTrue

/*
  Recibe un array y cuenta cuentos true tiene, y retorna 
  el numero de true que hay dentro.

  Example:

  ContadorDeTrue([true, false, true]); // 2
  ContadorDeTrue()
  ContadorDeTrue([]); // 0

*/
const datos=[true, false,true,false,true,true,true,false];
const t= true;

console.log(datos.length);


function contador(a){
  let contador = 0;
  for (const valor of a){
    if (valor == true){
      contador++;
    }
  }
  return contador;
}
console.log(contador(datos, t));