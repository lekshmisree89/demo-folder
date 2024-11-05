//import React from 'react';
import Countdown from '../../client/src/components/Countdown';

describe('<Countdown />', () => {
  it('should initially render with a maximum of 9 guesses', () => {
    // Mount the component with 9 guesses
    cy.mount(<Countdown guesses={9} isCorrect={false} />);
    cy.get('[data-cy="countdown"]').should('exist').and('have.text', 'Guesses Remaining: 9');
  });

  it('should render with a different number of guesses', () => {
    // Mount the component with 5 guesses
    cy.mount(<Countdown guesses={5} isCorrect={false} />);
    cy.get('[data-cy="countdown"]').should('exist').and('have.text', 'Guesses Remaining: 5');
  });

  it('should render an incorrect guess message', () => {
    // Mount the component with isCorrect set to false
    cy.mount(<Countdown guesses={5} isCorrect={false} />);
    cy.get('[data-cy="toast"]').should('exist').and('contain.text', 'Incorrect!');
  });

  it('should not render an incorrect guess message if the guess is correct', () => {
    // Mount the component with isCorrect set to true
    cy.mount(<Countdown guesses={5} isCorrect={true} />);
    cy.get('[data-cy="toast"]').should('not.exist'); // Ensure the toast does not exist
  });
});
