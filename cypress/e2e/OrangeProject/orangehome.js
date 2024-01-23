import {Given} from "cypress-cucumber-preprocessor/steps"

Given('User is on orange home Page',()=>{
    cy.fixture('example').then((data)=>{
        globalThis.data = data
        cy.visit(Cypress.env('OrangeURL'))
        cy.get('input[name="username"]').type(data.name)
        cy.get('input[name="password"]').type(data.pass)
        cy.get('button[type="submit"]').click()
    })



})