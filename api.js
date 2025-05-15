// api.js

function obtenerPokemonesAPI(callback) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20') // llamamos a la API
        .then(response => response.json()) // Cuando tiene la respuesta, llamamos al. JSON
        .then(data => { //los resultados quedan en data
            const listaPokemones = data.results;
            listaPokemones.forEach(pokemonInfo => { // mostramos los pokemones recorriendo un foreach
                fetch(pokemonInfo.url)
                    .then(response => response.json())
                    .then(pokemon => {
                        callback(pokemon.name, pokemon.height, pokemon.weight, pokemon.types.map(t => t.type.name).join(', '))
                    })
            })
        })
        .catch(error => console.error('Error al obtener los Pokémon:', error)) // si la API no responde, tiramos este error.
}
