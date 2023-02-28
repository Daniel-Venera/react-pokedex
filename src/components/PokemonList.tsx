import { NamedAPIResource } from "pokenode-ts";
import { FunctionComponent } from "react";
import PokemonCard from "./PokemonCard";

type Props = {
  pokemons: NamedAPIResource[];
};

const PokemonList: FunctionComponent<Props> = ({ pokemons }) => {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
