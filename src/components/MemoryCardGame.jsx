import { useState } from 'react';
import Header from './Header.jsx'
import Instructions from './Instructions.jsx'
import Cards from './Cards.jsx'

import '../App.css';

function MemoryCardGame() {
  const [chosenPokemon, setChosenPokemon] = useState(new Set());
  const [highScore, setHighScore] = useState(0);


  function handleCardChoice(e) {
    if (chosenPokemon.has(e.currentTarget.id)) {
      if (chosenPokemon.size > highScore) {
        setHighScore(chosenPokemon.size);
      }
      setChosenPokemon(new Set().add(e.currentTarget.id));
    }
    else {
      setChosenPokemon(new Set(chosenPokemon).add(e.currentTarget.id));
    }
  }

  return (
    <div>
      <Header currentScore={chosenPokemon.size} highScore={highScore}/>
      <Instructions />
      <Cards chosenPokemon={chosenPokemon} handleCardChoice={handleCardChoice} />
    </div>
  )
}



export default MemoryCardGame;