import { useState } from 'react';
import Header from './Header.jsx'
import Instructions from './Instructions.jsx'
import Cards from './Cards.jsx'

import '../App.css';

function MemoryCardGame() {
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div>
      <Header />
      <Instructions />
      <Cards />
    </div>
  )
}

export default MemoryCardGame;