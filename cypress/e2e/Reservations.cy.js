import reservations from "../fixtures/reservations.json";

describe("Reservation App", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "http://localhost:3001/api/v1/reservations",
      },
      {
        statusCode: 200,
        body: reservations,
      }
    );

    cy.visit("http://localhost:3000");
  });

  it("Should Show Users all Reservations", () => {
    cy.get('div[class="container"] > :nth-child(1) > h3 ').should(
      "contain",
      "Christie"
    );

    cy.get('div[class="container"] > :nth-child(1) > p:nth-of-type(1) ').should(
      "contain",
      "12/29"
    );

    cy.get('div[class="container"] > :nth-child(1) > p:nth-of-type(2) ').should(
      "contain",
      "7:00"
    );

    cy.get('div[class="container"] > :nth-child(1) > p:nth-of-type(3) ').should(
      "contain",
      "Number of guests: 12"
    );

    cy.get('div[class="container"] > :nth-child(2) > h3 ').should(
      "contain",
      "Leta"
    );

    cy.get('div[class="container"] > :nth-child(2) > p:nth-of-type(1) ').should(
      "contain",
      "4/5"
    );

    cy.get('div[class="container"] > :nth-child(2) > p:nth-of-type(2) ').should(
      "contain",
      "7:00"
    );

    cy.get('div[class="container"] > :nth-child(2) > p:nth-of-type(3) ').should(
      "contain",
      "Number of guests: 2"
    );
  });
});
