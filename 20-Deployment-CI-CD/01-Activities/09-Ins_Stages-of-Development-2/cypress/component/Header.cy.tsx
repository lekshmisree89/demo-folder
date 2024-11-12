import React from "react";
 import Header  from "../../client/src/components/Header";

 describe("Header", () => {
    it("renders", () => {
      cy.mount(<Header />);
    });
    it ('has the right title', () => {
        cy.mount
      cy.findByText('My App').should('exist');

    });

    });
