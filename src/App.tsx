import "./App.css";
import RandomPokemon from "./RandomPokemon";
import { useState, useEffect } from "react";

const generatePokemon = () => {
  const id = Math.floor(Math.random() * 151) + 1;
  return {
    id,
    url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
  };
};

export default function App() {
  const [pokemon, setPokemon] = useState(() =>
    Array.from({ length: 3 }, () => ({
      id: 0,
      url: "",
    }))
  );

  useEffect(() => {
    setPokemon(() => Array.from({ length: 3 }, generatePokemon));
  }, []);

  const handleClick = () => {
    setPokemon(pokemon.map(() => generatePokemon()));
  };

  return (
    <div className="App">
      {pokemon.map((pokemon, i) => (
        <RandomPokemon key={i} id={pokemon.id} url={pokemon.url} />
      ))}
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
}
