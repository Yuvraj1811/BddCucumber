import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { formfill } from "../../PageObjectModel/formFill"

const formfillPage = new formfill


Then('the user fills out the form with the following details:', (datatabel) => {
    const { Name, Email, PhoneNo, Address } = datatabel.hashes()[0]
    formfillPage.formFillDetails(Name, Email, PhoneNo, Address)

})