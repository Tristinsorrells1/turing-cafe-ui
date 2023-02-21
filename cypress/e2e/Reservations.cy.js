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
    cy.get('div[class="container"] > :nth-child(1) > h3 ').should("contain","Christie");

    cy.get('div[class="container"] > :nth-child(1) > p:nth-of-type(1) ').should("contain","12/29");

    cy.get('div[class="container"] > :nth-child(1) > p:nth-of-type(2) ').should("contain","7:00");

    cy.get('div[class="container"] > :nth-child(1) > p:nth-of-type(3) ').should("contain","Number of guests: 12");

    cy.get('div[class="container"] > :nth-child(2) > h3 ').should("contain","Leta");

    cy.get('div[class="container"] > :nth-child(2) > p:nth-of-type(1) ').should("contain","4/5");

    cy.get('div[class="container"] > :nth-child(2) > p:nth-of-type(2) ').should("contain","7:00");

    cy.get('div[class="container"] > :nth-child(2) > p:nth-of-type(3) ').should("contain","Number of guests: 2");
  });

  it("Should show the user what they type into an input", () => {
    cy.get("input[name='name']").type("Tristin").should("have.value", "Tristin");
    cy.get("input[name='date']").type("5/5").should("have.value", "5/5");
    cy.get("input[name='time']").type("2:30").should("have.value", "2:30");
    cy.get("input[name='guests']").type("4").should("have.value", "4");
  });

  it("Should let a user create a new reservation and display it on the page", () => {
    cy.get("input[name='name']").type("Tristin").should("have.value", "Tristin");
    cy.get("input[name='date']").type("5/5").should("have.value", "5/5");
    cy.get("input[name='time']").type("2:30").should("have.value", "2:30");
    cy.get("input[name='guests']").type("4").should("have.value", "4");
    cy.get("button[class='submit']").click();

    cy.get('div[class="container"] > :nth-child(3) > h3 ').should("contain","Tristin");

    cy.get('div[class="container"] > :nth-child(3) > p:nth-of-type(1) ').should("contain","5/5");

    cy.get('div[class="container"] > :nth-child(3) > p:nth-of-type(2) ').should("contain","2:30");

    cy.get('div[class="container"] > :nth-child(3) > p:nth-of-type(3) ').should("contain","Number of guests: 4");
  });
});
