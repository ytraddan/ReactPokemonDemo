import "./App.css";
import RandomPokemon from "./RandomPokemon";
import { useState, useEffect } from "react";

const POKEMON_COUNT = 3;

interface Pokemon {
  name: string;
  url: string;
  ability: string;
}

const fetchPokemon = async (): Promise<Pokemon> => {
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
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon[]>(() =>
    Array.from({ length: POKEMON_COUNT }, () => ({
      name: "",
      url: "",
      ability: "",
    }))
  );

  const generatePokemon = async () => {
    setLoading(true);
    const pokemonPromises = Array.from(
      { length: POKEMON_COUNT },
      fetchPokemon
    );
    const pokemonData = await Promise.all(pokemonPromises);
    setPokemon(pokemonData);
    setLoading(false);
  };

  useEffect(() => {
    generatePokemon();
  }, []);

  const handleClick = () => {
    generatePokemon();
  };

  return (
    <div className="App">
      {loading && <div className="spinner"></div>}
      <div className={loading ? 'pokemon-container loading' : 'pokemon-container'}>
        {pokemon.map((pokemon, i) => (
          <RandomPokemon
            key={i}
            name={pokemon.name}
            url={pokemon.url}
            ability={pokemon.ability}
          />
        ))}
      </div>
      <button onClick={handleClick} disabled={loading}>Refresh</button>
    </div>
  );
}
