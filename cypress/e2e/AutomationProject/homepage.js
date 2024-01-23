import { Given} from "cypress-cucumber-preprocessor/steps";

Given('User is on Home Page',()=>{

    cy.visit('/')
})