async function getPokemonInfo(pokemonName) {
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    { mode: 'cors' },
  );
  const pokemonJson = await pokemonResponse.json();
  const pokemonImgUrl = pokemonJson.sprites.front_default;

  return { name: pokemonName, url: pokemonImgUrl } 
}



export default getPokemonInfo;
