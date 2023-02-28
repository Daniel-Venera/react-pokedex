import loadable from "@loadable/component";
import { Pagination } from "@mui/material";
import { NamedAPIResource } from "pokenode-ts";
import { useMemo } from "react";
import { fallBackLoader } from "../App";
import BaseError from "../components/BaseError";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import { useSearch } from "../hooks/search";
import { NUMBER_POKEMONS_TO_SHOW, usePokemonsQuery } from "../services/api";
import { usePaginationStore } from "../store/pagination";

const PokemonList = loadable(
  () => import("../components/PokemonList"),
  fallBackLoader
);

const Pokemons = () => {
  const { pokemons, isError, isLoading } = usePokemonsQuery();
  const { pokemonSearched, setSearchQuery } = useSearch();
  const { currentPage, setCurrentPage } = usePaginationStore();

  const pagesCount: number | undefined = pokemons?.results
    ? Math.ceil(pokemons.results.length / NUMBER_POKEMONS_TO_SHOW)
    : undefined;

  const pokemonsToShow = useMemo<NamedAPIResource[]>(() => {
    if (pokemonSearched.length) return pokemonSearched;

    const firstPokemonToShow = currentPage * 20 - NUMBER_POKEMONS_TO_SHOW;
    const lastPokemonToShow = NUMBER_POKEMONS_TO_SHOW * currentPage;
    return pokemons?.results.length
      ? pokemons.results.slice(firstPokemonToShow, lastPokemonToShow)
      : [];
  }, [pokemons, pokemonSearched, currentPage]);

  if (isError) return <BaseError />;
  if (isLoading) return <Loader />;

  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} />
      {pokemonSearched.length ? (
        ""
      ) : (
        <Pagination
          className='mb-10'
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={pagesCount}
        />
      )}
      <PokemonList pokemons={pokemonsToShow} />
    </>
  );
};

export default Pokemons;
