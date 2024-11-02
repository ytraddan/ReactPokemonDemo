import "./RandomPokemon.css";

interface RandomPokemonProps {
  id: number;
  url: string;
}

// Add Pokemon descriptions
const POKEMON_LORE: { [key: number]: string } = {
  1: "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
  2: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
  3: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
  // Add more as needed, or generate randomly
};

const RANDOM_DESCRIPTIONS = [
  "Loves eating berries and taking naps in sunny spots.",
  "Said to appear only to trainers with pure hearts.",
  "Mysterious powers emerge during full moons.",
  "Known for its playful nature and friendly demeanor.",
  "Legends say it brings good fortune to its trainer.",
  "Often seen in ancient cave paintings.",
  "Has a special bond with electric-type Pokemon.",
  "Trainers report hearing it sing on quiet nights.",
  "Said to have existed since ancient times.",
  "Appears differently to each person who sees it."
];

export default function RandomPokemon({ id, url }: RandomPokemonProps) {
  // Get preset lore or random description
  const description = POKEMON_LORE[id] || 
    RANDOM_DESCRIPTIONS[Math.floor(Math.random() * RANDOM_DESCRIPTIONS.length)];

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