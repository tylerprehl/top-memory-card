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

  // maybe try to get it to render just 1 pokemon first, then worry about the list?

  // this useEffect should be dependent on one of the cards getting clicked
  useEffect(() => {

    async function fetchPokemonData() {

      let tempPokemonDataList = [];
      for (let i = 0; i < pokemonList.length; i++) {
        const pokemonData = await getPokemonInfo(pokemonList[i]);
        tempPokemonDataList.push(pokemonData);
      }
      setPokemonDataList(tempPokemonDataList);
    }

    shufflePokemon(pokemonList);
    console.log(pokemonList);
    fetchPokemonData();
  }, []);

  function shufflePokemon(pokemonArray) {
    for (let i = pokemonArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pokemonArray[i], pokemonArray[j]] = [pokemonArray[j], pokemonArray[i]];
    }
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