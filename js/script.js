 // Aquí tu código
let lista = document.getElementById('lista');
const agregar = document.getElementById('agregar');




agregar.addEventListener('click', function(){
    let agregarElemento = prompt('agrega un elemento a la lista');
    const agregarLista = document.createElement('li');
    agregarLista.innerText = agregarElemento;
    lista.appendChild(agregarLista);
})