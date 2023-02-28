import { Card, CircularProgress, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { usePokemonQuery } from "../services/api";
import { DataTest } from "../utils/data-test";
import PokemonImage from "./PokemonImage";

type Props = {
  name: string;
};
const PokemonCard: FunctionComponent<Props> = ({ name }) => {
  const { pokemon, isError, isLoading } = usePokemonQuery(name);

  return (
    <Link to={`/${pokemon?.name}`} data-test={`${pokemon?.name}`}>
      <Card sx={{ height: "9rem", width: "7rem" }} className='text-center'>
        {isError && <span>N/A</span>}
        {isLoading && <CircularProgress />}
        {pokemon && (
          <>
            <PokemonImage pokemon={pokemon} />
            <Typography
              variant='h3'
              className='pokemon-card__title'
              data-test={DataTest.POKEMON_NAME}
            >
              {pokemon?.name}
            </Typography>
          </>
        )}
      </Card>
    </Link>
  );
};

export default PokemonCard;
