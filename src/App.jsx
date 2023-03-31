import { useState } from "react";

import PokemonCard from "./components/PokemonCard";

import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemon = pokemonList[pokemonIndex];

  const pickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const pickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div className="App">
      <nav>
        {pokemonIndex > 0 && (
          <button type="button" onClick={pickPrevious}>
            Précédent
          </button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
          <button type="button" onClick={pickNext}>
            Suivant
          </button>
        )}
      </nav>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
