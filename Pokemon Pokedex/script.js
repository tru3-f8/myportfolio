
const poke_container = document.getElementById('poke-container')
const backgroundOne = document.querySelectorAll('.type')
const pokemonButton = document.getElementById('getPokemonButton').addEventListener('click', fetchPokemon)
const removeButton = document.getElementById('removePokemonButton').addEventListener('click', removePokemon)
const pokemon_count = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}


const main_types = Object.keys(colors)


function fetchPokemon() {
  for (let i = 1; i <= pokemon_count; i++) 
  pokemonJson(i)
}

//// function pokemonJson(id) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((res) => res.json())
//     .then((data) => { () => {
//         data.map((post) => {
//           return post
//         })
//       }
//       createPokemonCard(data)
//       console.log(data)
//     })
// }


function pokemonJson(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => createPokemonCard(data))
}



function createPokemonCard(pokemon) {
  console.log(pokemon)
  const pokemonEl = document.createElement('div')

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
 
  const poke_types = pokemon.types.map((type) => type.type.name)

  const type = main_types.find((type) => poke_types.indexOf(type) > -1)

  const color = colors[type]
  
  pokemonEl.style.color = color

  const pokemonInnerHTML = 
    `<div class="img-container pokemon">
        <img src="https://img.pokemondb.net/artwork/vector/large/${pokemon.name}.png" alt="">
      </div>
        <div class="info">
            <h3 class="name">${name}</h3>
            <h4 class="type">Type: <span>${type}</span></h4>
        </div>
     </div>`

  
  pokemonEl.innerHTML = pokemonInnerHTML

  poke_container.appendChild(pokemonEl)

}

function removePokemon() {
  window.location.reload();
}

