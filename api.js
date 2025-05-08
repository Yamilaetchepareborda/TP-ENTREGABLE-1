// api.js

function obtenerPokemonesAPI(callback) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(data => {
            const listaPokemones = data.results;
            listaPokemones.forEach(pokemonInfo => {
                fetch(pokemonInfo.url)
                    .then(response => response.json())
                    .then(pokemon => {
                        callback(pokemon.name, pokemon.height, pokemon.weight, pokemon.types.map(t => t.type.name).join(', '));
                    });
            });
        })
        .catch(error => console.error('Error al obtener los Pokémon:', error));
}
