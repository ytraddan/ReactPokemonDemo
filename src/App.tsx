import "./App.css";
import RandomPokemon from "./RandomPokemon";
import { useState, useEffect } from "react";

export default function App() {
  const [pokemon, setPokemon] = useState(() =>
    Array.from({ length: 3 }, (_, i) => ({
      id: i + 1,
      url: "",
    }))
  );

  useEffect(() => {
    setPokemon(
      pokemon.map(() => {
        const id = Math.floor(Math.random() * 151) + 1;
        return {
          id,
          url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      })
    );
  }, []);

  return (
    <div className="App">
      {pokemon.map((pokemon , i) => (
        <RandomPokemon key={i} id={pokemon.id} url={pokemon.url} />
      ))}
      <button onClick={() => setPokemon(pokemon.map(() => ({
        id: Math.floor(Math.random() * 151) + 1,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(Math.random() * 151) + 1}.png`,
      })))}>Refresh</button>
    </div>
  );
}
