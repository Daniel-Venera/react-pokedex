import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { useNavigate } from "react-router-dom";
import i18n from "../i18n";
import { SnackBarParams, useSnackBarStore } from "../store/snackbar";

const api = new PokemonClient();

export const NUMBER_POKEMONS_FIRST_GENERATION = 151;
export const NUMBER_POKEMONS_TO_SHOW = 20;

export const usePokemonsQuery = () => {
  const {
    data: pokemons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: () => api.listPokemons(0, NUMBER_POKEMONS_FIRST_GENERATION),
  });

  return { pokemons, isLoading, isError };
};

export const usePokemonQuery = (name: string) => {
  const { t } = i18n;
  const navigate = useNavigate();
  const { openSnackBar } = useSnackBarStore();

  const {
    data: pokemon,
    isError,
    isLoading,
  } = useQuery([name], () => api.getPokemonByName(name), {
    onError: (e: AxiosError) => {
      let snackBarParams: SnackBarParams = [t("serverError"), "error"];
      if (e.request.status === 404) {
        snackBarParams[0] = t("pokemonNotFound");
        navigate("/");
      }
      openSnackBar(...snackBarParams);
    },
  });

  return { pokemon, isError, isLoading };
};

export const useEncountersQuery = (pokemon: Pokemon | undefined) => {
  const { t } = i18n;
  const { openSnackBar } = useSnackBarStore();

  const { data: pokemonEncounters, isLoading } = useQuery(
    [pokemon?.name, "location"],
    () =>
      pokemon?.id
        ? api.getPokemonLocationAreaById(pokemon?.id)
        : Promise.reject(new Error("Invalid id")),
    {
      enabled: !!pokemon?.id,
      onError: () => {
        openSnackBar(t("errorRetrievingAllInfos"), "error");
      },
    }
  );

  return { pokemonEncounters, isLoading };
};
