import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { formfill } from "../../PageObjectModel/formFill";

const formfillpage = new formfill

When('user click on date',()=>{

formfillpage.selectDate()

})

Then('user is able to see calender',()=>{

    formfillpage.dateUI()

})

Then('user select date',()=>{

    formfillpage.selectDatepicker()
})




