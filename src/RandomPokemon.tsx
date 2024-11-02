import "./RandomPokemon.css";
import { POKEMON_DESCRIPTIONS } from "./data/pokemonDescriptions";

interface RandomPokemonProps {
  id: number;
  url: string;
}

export default function RandomPokemon({ id, url }: RandomPokemonProps) {
  const description =
    POKEMON_DESCRIPTIONS[
      Math.floor(Math.random() * POKEMON_DESCRIPTIONS.length)
    ];

  return (
    <div className="RandomPokemon">
      <div className="pokemon-content">
        <h1>Pokemon #{id}</h1>
        <img src={url} alt="Pokemon" />
        <div className="pokemon-lore">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
