import reservations from '../fixtures/reservations.json'

describe('Reservation App', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "http://localhost:3001/api/v1/reservations",
      },
      {
        statusCode: 200,
        body: reservations
      }
    );
    
    cy.visit("http://localhost:3000");

  })

  it('Should Show Users all Reservations', () => {
    
    
    
  
    cy.get('div')





  })
})