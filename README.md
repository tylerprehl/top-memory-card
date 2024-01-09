# The Odin Project - Memory Card
This project's goal is to demonstrate and reinforce knowledge of React fundamentals, inlcuding use of React properties, state (useState), and side effects (useEffect).

### To Run the Game:
- clone the repo
- navigate your CLI to the repo folder
- ??? (will include as soon as I know the answer)

### To Do: 
- implement card click handling
- implement score tracking
- classic Pokemon font could be really cool

### Main Takeaways
- Be careful with async and modifying 'global' variables inside of useEffect!
  - I was using a global 

### Other Interesting Things Learned
- Using async functions (in this case, for an API call) in useEffect
- Be careful with async and modifying 'global' variables inside of useEffect!
  - I was using a global <strong>pokemonList</strong> variable that I re-sorted inside the useEffect, and something about how it's modified under the hood resulted in the double-render of StrictMode rendering a 13th pokemon card (where the first card was from the first render and the next 12 were from the second)