// listado.js

// =================== FUNCIONES PARA LA TABLA ===================

function mostrarPokemonEnTabla(nombre, altura, peso, tipo) {
    const tabla = document.getElementById('tablaPokemones')
    const fila = document.createElement('tr')
    fila.innerHTML = `
        <td>${nombre.toUpperCase()}</td>
        <td>${altura}</td>
        <td>${peso}</td>
        <td>${tipo}</td>
    `
    tabla.appendChild(fila)
}

// =================== MOSTRAR POKEMON DEL USUARIO ===================

function mostrarPokemonesUsuario() {
    const pokemonesUsuario = obtenerPokemonesUsuario()
    pokemonesUsuario.forEach(p => {
        mostrarPokemonEnTabla(p.nombre, p.altura, p.peso, p.tipo)
    });
}

// =================== ELIMINAR ULTIMO POKEMON DEL USUARIO ===================

function eliminarUltimoPokemon() {
    let pokemonesUsuario = obtenerPokemonesUsuario()
    if (pokemonesUsuario.length > 0) {
        pokemonesUsuario.pop()
        guardarPokemonesUsuario(pokemonesUsuario)
        alert('Último Pokémon eliminado.')
        location.reload()
    } else {
        alert('No hay Pokémon del usuario para eliminar.')
    }
}

function agregarNuevoPokemonUsuario(event) {
    event.preventDefault(); // Prevenir que recargue la página

    const nombre = document.getElementById('nombre').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const tipo = document.getElementById('tipo').value

    const nuevoPokemon = { nombre, altura, peso, tipo }

    // Guardar en localStorage
    const pokemonesUsuario = obtenerPokemonesUsuario()
    pokemonesUsuario.push(nuevoPokemon)
    guardarPokemonesUsuario(pokemonesUsuario)

    // Mostrar en la tabla sin recargar
    mostrarPokemonEnTabla(nombre, altura, peso, tipo)

    // Limpiar el formulario
    document.getElementById('formAgregar').reset()
}

function modificarUltimoPokemon() {
    let pokemonesUsuario = obtenerPokemonesUsuario()
    if (pokemonesUsuario.length > 0) {
        const nombre = document.getElementById('nombre').value
        const altura = document.getElementById('altura').value
        const peso = document.getElementById('peso').value
        const tipo = document.getElementById('tipo').value

        if (nombre && altura && peso && tipo) {
            pokemonesUsuario[pokemonesUsuario.length - 1] = { nombre, altura, peso, tipo }
            guardarPokemonesUsuario(pokemonesUsuario)
            alert('Último Pokémon modificado.')
            location.reload()
        } else {
            alert('Por favor, completa todos los campos del formulario antes de modificar.')
        }
    } else {
        alert('No hay Pokémon del usuario para modificar.')
    }
}

// =================== ESCUCHAR FORMULARIO DE AGREGAR ===================

document.getElementById('formAgregar').addEventListener('submit', agregarNuevoPokemonUsuario)
/*
// =================== AL CARGAR LA PÁGINA ===================

obtenerPokemonesAPI(mostrarPokemonEnTabla);
mostrarPokemonesUsuario();
*/
obtenerPokemonesAPI(mostrarPokemonEnTabla)

// Esperar 500ms antes de mostrar los del usuario (da tiempo a que cargue la API)
setTimeout(() => {
    mostrarPokemonesUsuario()
}, 500)
