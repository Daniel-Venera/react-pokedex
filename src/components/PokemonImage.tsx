import { Box } from "@mui/material";
import { Pokemon } from "pokenode-ts";
import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  pokemon: Pokemon;
};
const PokemonImage: FunctionComponent<Props> = ({ pokemon }) => {
  return (
    <>
      {pokemon.sprites.front_default ? (
        <LazyLoadImage
          width={96}
          height={96}
          src={pokemon.sprites.front_default || ""}
          effect='blur'
          alt={pokemon?.name}
        />
      ) : (
        <Box
          width={96}
          height={96}
          className='flex items-center justify-center'
        >
          N/A
        </Box>
      )}
    </>
  );
};

export default PokemonImage;
