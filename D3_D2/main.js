const blog = document.getElementById('blog');
const insertar = document.getElementById('insertar');
const resultado = document.getElementById('resultado');
const borrar = document.getElementById('borrar');

insertar.addEventListener('click',insertarTexto);

function insertarTexto() {
    resultado.innerHTML = blog.value;
}
borrar.addEventListener('click', borrarTexto);

function borrarTexto() {
    resultado.innerHTML = "";
    blog.value = "";
}