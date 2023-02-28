import { interceptGetPokemon, PORT } from "../support/commands";

describe("pokemon details", () => {
  const POKEMON_NAME = "squirtle";

  beforeEach(() => {
    cy.visit(`${PORT}/${POKEMON_NAME}`);
    interceptGetPokemon(POKEMON_NAME);
  });

  it("reaches encounters", () => {
    cy.get('[data-test="location0"]').contains("vermilion-city-area");
  });
});
