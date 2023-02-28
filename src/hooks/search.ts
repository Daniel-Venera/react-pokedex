import { NamedAPIResource, NamedAPIResourceList } from "pokenode-ts";
import { useCallback, useState } from "react";
import { usePokemonsQuery } from "../services/api";

export const useSearch = () => {
  const { pokemons } = usePokemonsQuery();

  const [pokemonSearched, setPokemonSearched] = useState<
    NamedAPIResourceList["results"]
  >([]);

  const setSearchQuery = useCallback(
    (query: string): void => {
      let setSearchValue: NamedAPIResource[] = [];

      const hasQuery = query.length > 2 && pokemons?.results;
      if (!!hasQuery) {
        setSearchValue = pokemons?.results.filter((result) =>
          result.name.toLowerCase().includes(query)
        );
      }

      setPokemonSearched(setSearchValue);
    },
    [pokemons]
  );

  return { pokemonSearched, setSearchQuery };
};
