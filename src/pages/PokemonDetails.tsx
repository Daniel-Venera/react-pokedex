import { Button, Chip, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Link, useParams } from "react-router-dom";
import BaseError from "../components/BaseError";
import Loader from "../components/Loader";
import PokemonImage from "../components/PokemonImage";
import i18n from "../i18n";
import { useEncountersQuery, usePokemonQuery } from "../services/api";
import { DataTest } from "../utils/data-test";
import { typeColors } from "../utils/type-colors";

const PokemonDetails: FunctionComponent = () => {
  const { t } = i18n;
  let { name } = useParams();

  if (!name) return <BaseError />;

  const { pokemon, isError, isLoading } = usePokemonQuery(name);
  const { isLoading: isPokemonEncountersLoading, pokemonEncounters } =
    useEncountersQuery(pokemon);

  if (isError) return <BaseError />;
  if (isLoading) return <Loader />;

  return (
    <>
      <Button to='/' component={Link}>
        {t("backHome")}
      </Button>
      {pokemon && (
        <>
          <section className='text-center'>
            <PokemonImage pokemon={pokemon} />
            <Typography variant='h1' data-test={DataTest.POKEMON_NAME}>
              {pokemon?.name}
            </Typography>
          </section>

          <section>
            <Typography variant='h2' className='mb-0.5'>
              {t("pokemon.abilities")}
            </Typography>
            <ul>
              {pokemon?.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </section>

          <section className='flex flex-wrap mt-8 gap-2'>
            {pokemon?.types.map((type, i) => (
              <Chip
                key={i}
                className='text-white'
                sx={{
                  backgroundColor: typeColors[type.type.name],
                }}
                label={type.type.name}
              />
            ))}
          </section>

          {isPokemonEncountersLoading && <Loader />}
          {!!pokemonEncounters?.length && (
            <section className='mt-8'>
              <Typography variant='h2' className='mb-0.5'>
                {t("pokemon.encounters")}
              </Typography>
              <ul>
                {pokemonEncounters.map((location, i) => (
                  <li key={i} data-test={`location${i}`}>
                    {location.location_area.name}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default PokemonDetails;
