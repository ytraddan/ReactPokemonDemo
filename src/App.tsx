import "./App.css";
import RandomPokemon from "./RandomPokemon";
import { useState, useEffect } from "react";

const generatePokemon = async () => {
  const id = Math.floor(Math.random() * 151) + 1;
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const ability = await fetch(`https://pokeapi.co/api/v2/ability/${id}/`);
  const pokemonData = await pokemon.json();
  const abilityData = await ability.json();
  return {
    name: pokemonData.name,
    url: pokemonData.sprites.front_default,
    ability: abilityData.effect_entries[1].short_effect,
  };
};

export default function App() {
  const [pokemon, setPokemon] = useState(() =>
    Array.from({ length: 3 }, () => ({
      name: "",
      url: "",
      ability: "",
    }))
  );

  const fetchNewPokemon = async () => {
    const pokemonPromises = Array.from({ length: 3 }, generatePokemon);
    const pokemonData = await Promise.all(pokemonPromises);
    setPokemon(pokemonData);
  };

  useEffect(() => {
    fetchNewPokemon();
  }, []);

  const handleClick = () => {
    fetchNewPokemon();
  };

  return (
    <div className="App">
      {pokemon.map((pokemon, i) => (
        <RandomPokemon
          key={i}
          name={pokemon.name}
          url={pokemon.url}
          ability={pokemon.ability}
        />
      ))}
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
}
