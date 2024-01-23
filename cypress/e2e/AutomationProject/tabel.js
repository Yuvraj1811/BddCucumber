import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { formfill } from "../../PageObjectModel/formFill";

const formfillPage = new formfill

When('user click on tabel',()=>{

    formfillPage.handelingTabelData()

})