const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const btnSumar = document.getElementById('sumar');
const resultado = document.getElementById('resultado');

btnSumar.addEventListener('click', sumar);

function sumar(){
    resultado.innerHTML = parseFloat(number1.value) + parseFloat(number2.value);

};