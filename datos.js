// datos.js

function obtenerPokemonesUsuario() {
    return JSON.parse(localStorage.getItem('pokemonesUsuario')) || [];
}

function guardarPokemonesUsuario(pokemones) {
    localStorage.setItem('pokemonesUsuario', JSON.stringify(pokemones));
}
