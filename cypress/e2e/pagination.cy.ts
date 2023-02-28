import { interceptGetPokemon, visitHome } from "../support/commands";

describe("pagination", () => {
  const POKEMON_NAME = "spearow";

  beforeEach(visitHome);

  it("shows the right pokemons on pagination", () => {
    cy.get(":nth-child(3) > .MuiButtonBase-root").click();
    interceptGetPokemon(POKEMON_NAME);
    cy.get(`[data-test='${POKEMON_NAME}']`).contains(POKEMON_NAME);
  });
});
