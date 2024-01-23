import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { orange } from "../../PageObjectModel/orange"

const orangew = new orange

When('user click on Recuirement tab', () => {

    orangew.clickOnRecuirementTab()
})

Then('user should be on Recuirement Page', () => {
    orangew.verifyRecuirementTitle()

})