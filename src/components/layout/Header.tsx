import { AppBar, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6'>Pokedex</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
