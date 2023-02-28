import loadable from "@loadable/component";
import { createTheme, ThemeProvider } from "@mui/material";
import { Container, StyledEngineProvider } from "@mui/system";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/global.scss";
import Header from "./components/layout/Header";
import Loader from "./components/Loader";
import Snackbar from "./components/Snackbar";
import "./index.css";
import NotFound from "./pages/NotFound";

export const fallBackLoader = {
  fallback: <Loader />,
};

const Pokemons = loadable(() => import("./pages/Pokemons"), fallBackLoader);
const PokemonDetails = loadable(
  () => import("./pages/PokemonDetails"),
  fallBackLoader
);

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1rem",
    },
  },
});

const App: FunctionComponent = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Container maxWidth='sm' className='pt-12'>
            <Routes>
              <Route path='/' element={<Pokemons />} />
              <Route path='/:name' element={<PokemonDetails />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Container>
          <Snackbar />
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
