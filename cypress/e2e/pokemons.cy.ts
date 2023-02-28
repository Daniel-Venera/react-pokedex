import { DataTest } from "../../src/utils/data-test";
import { visitHome } from "../support/commands";

describe("pokemons", () => {
  const POKEMON_NAME = "squirtle";

  beforeEach(visitHome);

  it("clicks on right pokemon", () => {
    cy.get(`[data-test='${POKEMON_NAME}']`).click();
    cy.get(`[data-test='${DataTest.POKEMON_NAME}']`).contains(
      `${POKEMON_NAME}`
    );
  });
});
