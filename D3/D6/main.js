const heroes = [
    ['Superman', 'Clark Kent'],
    ['Wonder Woman', 'Diana Prince'],
    ['Batman', 'Bruce Wayne'],
    ['Flash', 'Barry Allen'],
];

const startGame =document.getElementById("start-game");


const game = function(arr) {
    let aciertos = 0;

    if (!Array.isArray(arr)){
        console.log(arr)
        return console.log("Esto nos es un Array")
    };

    for (const heroe of arr){
        let pregunta = prompt(`Cual es el nombre verdadero de ${heroe[0]}`);
        if(pregunta == heroe[1]){
            aciertos++
            alert('correcto!')
        } else{
            alert('Incorrecto!')
        }
    };
    alert(`Acertaste ${aciertos} nombres de heroes`); 
}
startGame.addEventListener("click",() => game(heroes))