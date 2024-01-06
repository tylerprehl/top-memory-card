async function apiTest() {
  console.log(`This is the test`);

  const pokemon = ['ditto', 'abra', 'oddish', 'charizard'];

  async function getPokemon(pokemonName) {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      { mode: 'cors' },
    );
    const pokemonJson = await pokemonResponse.json();
    const pokemonImgUrl = pokemonJson.sprites.front_default;

    return { name: pokemonName, imgUrl: pokemonImgUrl } 
  }
  
  function addGiphyToPage(name, imgUrl) {
    const rootDiv = document.querySelector('div#root');
    const imageEl = document.createElement('img');
    imageEl.src = imgUrl;
    imageEl.width = '200';
    imageEl.alt = name;
    rootDiv.appendChild(imageEl);
  }

  for (let i = 0; i<pokemon.length; i++) {
    console.log(pokemon[i]);
    const pokemonInfo = await getPokemon(pokemon[i]);
    addGiphyToPage(pokemonInfo.name, pokemonInfo.imgUrl);
  }
}



export { apiTest };
