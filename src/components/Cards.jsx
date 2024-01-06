import { useState, useEffect } from 'react'
import getPokemonInfo from '../getPokemonInfo';
import './Cards.css';


// should I create a 20-30 long list and then only 10 random (non-duplicates) get shown?
// doesn't resolve the duplicate issue that's happening from 1st one being rendered twice
let pokemonList = [
  'dewott',
  'blastoise',
  'froakie',
  'pikachu',
  'charizard',
  'raboot',
  'litten',
  'braixen',
  'torterra',
  'grookey',
  'bulbasaur',
  'servine',
];

function Cards() {
  const [pokemonDataList, setPokemonDataList] = useState([]); // list of pokemon (w/ data) in random order

  // this useEffect should be dependent on one of the cards getting clicked
  useEffect(() => {
    async function sortAndFetchPokemon() {
      await shufflePokemon(pokemonList);
      setPokemonDataList(await fetchPokemonData());
    }
    sortAndFetchPokemon();
  }, []);

  async function shufflePokemon() {
    pokemonList.sort(() => Math.random() - 0.5)
    console.log(pokemonList);
  }

  async function fetchPokemonData() {
    let tempPokemonDataList = [];
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemonData = await getPokemonInfo(pokemonList[i]);
      tempPokemonDataList.push(pokemonData);
    }
    return tempPokemonDataList;
  }

  return (
    <div className="card-grid">
      {pokemonDataList.map((pokemonData) => {
        return (
          <div className="card" key={pokemonData.name}>
            <img
              src={pokemonData.url}
              alt={pokemonData.name}
            ></img>
            <div>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</div>
          </div>
        );
      })}
    </div>
  )
}

export default Cards;