let numeros =[1,2,3,4,5,6,7,8,9];
console.log(numeros);

const x = numeros[0];
console.log(x);

const y = numeros[numeros.length-1];
console.log(y);

const n = 2;

function resultado(x, y, n){
    respuesta = [];
    for(i = x; i<= y; i++){
        if (i % n === 0){
            respuesta.push(i);
        }
    }
    return respuesta;
}
console.log(respuesta)




