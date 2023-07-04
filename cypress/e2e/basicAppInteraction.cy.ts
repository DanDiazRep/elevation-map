/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

describe('Elevation Finder general behaviour Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should initialize the map container', () => {
    cy.get('.leaflet-container').should('be.visible');
  });

  it('should zoom and pan the map', () => {
    cy.get('.leaflet-container')
      .trigger('wheel', { deltaY: -100 })
      .trigger('mousedown', { clientX: 100, clientY: 100 })
      .trigger('mousemove', { clientX: 200, clientY: 200 })
      .trigger('mouseup');

  });

  it('should add markers and display popups', () => {

    cy.get('.leaflet-marker-icon').should('be.visible');
    cy.get('.leaflet-marker-icon').click();
    cy.get('.leaflet-popup').should('be.visible');
    cy.get('.leaflet-popup-content')
      .should('contain', 'Latitude: 0.0000° & Longitude: 0.0000°');
  });

  it('should validate api response and data in the panel', () => {
    cy.intercept('POST', '/api/elevation', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          results: [
            {
              dataset: 'srtm90m',
              elevation: 255,
              location: {
                lat: 41.09591205639546,
                lng: -89.64843750000001,
              },
            },
          ],
          status: 'OK',
        },
      });
    }).as('elevationRequest');

    cy.get('.leaflet-container').click(100, 100);
    cy.get('#latitude').should('have.text', '41.096°');
    cy.get('#longitude').should('have.text', '-89.648°');

    cy.wait('@elevationRequest').then((interception) => {
      expect(interception.response?.statusCode).to.equal(200);
      const responseBody = interception.response?.body;
      expect(responseBody.status).to.equal('OK');
      expect(responseBody.results[0].dataset).to.equal('srtm90m');
      expect(responseBody.results[0].elevation).to.equal(255);
      expect(responseBody.results[0].location.lat).to.equal(41.09591205639546);
      expect(responseBody.results[0].location.lng).to.equal(-89.64843750000001);
    });
  });



});
