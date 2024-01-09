# The Odin Project - Memory Card
This project's goal is to demonstrate and reinforce knowledge of React fundamentals, inlcuding use of React properties, state (useState), and side effects (useEffect).

### To run the game locally:
- clone the repo
- navigate your CLI to the repo folder
- run ```npm init```
- run ```npm run dev```
<br>
You can also view this project at https://e82ec6a7.top-memory-card.pages.dev/

### To Do: 
- classic Pokemon font could be really cool

### Main Takeaways
- React is awesome

### Other Interesting Things Learned
- Used async functions (in this case, for an API call) in useEffect
- Must be careful with async and modifying 'global' variables inside of useEffect!
  - I was using a global <strong>pokemonList</strong> variable that I re-sorted inside the useEffect, and something about how it's modified under the hood resulted in the double-render of StrictMode rendering a 13th pokemon card (where the first card was from the first render and the next 12 were from the second)
- Used a media query for dark mode specifications
