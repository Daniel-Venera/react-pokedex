import { DataTest } from "../../src/utils/data-test";
import { visitHome } from "../support/commands";

describe("search", () => {
  beforeEach(visitHome);
  it("get the right search pokemon", () => {
    cy.get(`[data-test="${DataTest.SEARCH_BAR}"]`).type("spea");
    cy.get(`[data-test='${DataTest.POKEMON_NAME}']`).contains("spearow");
  });
});
