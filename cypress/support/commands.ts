/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import { NUMBER_POKEMONS_FIRST_GENERATION } from "../../src/services/api";

export const PORT = "http://localhost:5173";
export const API = "https://pokeapi.co/api/v2/pokemon";

export const visitHome = () => {
  const LIST_POKEMONS = "listPokemons";
  cy.visit(PORT);
  cy.intercept(
    "GET",
    `${API}?offset=0&limit=${NUMBER_POKEMONS_FIRST_GENERATION}`
  ).as(LIST_POKEMONS);
  cy.wait(`@${LIST_POKEMONS}`);
};

export const interceptGetPokemon = (pokemonName: string) => {
  const GET_POKEMON = "getPokemon";
  cy.intercept("GET", `${API}/${pokemonName}`).as(GET_POKEMON);

  cy.wait(`@${GET_POKEMON}`);
};
