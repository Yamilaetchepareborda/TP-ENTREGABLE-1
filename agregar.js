// agregar.js

document.getElementById('formAgregar').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const tipo = document.getElementById('tipo').value;

    const nuevoPokemon = { nombre, altura, peso, tipo };

    const pokemonesUsuario = obtenerPokemonesUsuario();
    pokemonesUsuario.push(nuevoPokemon);
    guardarPokemonesUsuario(pokemonesUsuario);

    window.location.href = 'listado.html';
});
