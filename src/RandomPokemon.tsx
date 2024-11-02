import "./RandomPokemon.css";

interface Pokemon {
  name: string;
  url: string;
  ability: string;
}

export default function RandomPokemon({ name, url, ability }: Pokemon) {

  return (
    <div className="RandomPokemon">
      <div className="pokemon-content">
        <h1>{name}</h1>
        <img src={url} alt="Pokemon" />
        <div className="pokemon-ability">
          <p>{ability}</p>
        </div>
      </div>
    </div>
  );
}
