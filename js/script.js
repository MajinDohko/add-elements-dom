 // Aquí tu código
let lista = promt('agrega un elemento a la lista');
const agregar = document.getElementById('agregar');
let agregarElemento = document.createElement('li')


agregarElemento.appendChild(agregarElemento);

agregar.addEventListener('click', function(){
    agregarElemento.innerHTML = agregarElemento + lista;
    
})