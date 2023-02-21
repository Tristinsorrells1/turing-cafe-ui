describe('Reservation App', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('Should Show Users all Reservations', () => {
    cy.intercept("POST", `http://localhost:3001/add`, {
      statusCode: 500,
    });



  })
})