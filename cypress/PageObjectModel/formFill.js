export class formfill {

nameField = "#name"
emailField = "#email"
phoneNoField = "#phone"
addressField = "#textarea"
maleCheckBox = "#male"
datepicker = "#datepicker"

formFillDetails(name, email, phoneNo, address){
    cy.get(this.nameField).type(name)
    cy.get(this.emailField).type(email)
    cy.get(this.phoneNoField).type(phoneNo)
    cy.get(this.addressField).type(address)
}

selectMaleCheckBox(){
    cy.get(this.maleCheckBox).check()
}

selectDate(){
    cy.get(this.datepicker).click()
}

dateUI(){

    cy.get("#ui-datepicker-div").each(($ele)=>{
        const text = $ele.text()
        cy.log(text);
   
})
}
selectDatepicker(){
    cy.get('td[data-handler="selectDay"] >a').contains('19').click()
}
handelingTabelData(){

    var tabelData = []
        let numb = 0
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('table[name="BookTable"] td').as('Tabel')
        cy.get('@Tabel').each(($ele,index)=>{

            const textData = $ele.text()
            cy.log(textData)
            tabelData[index] = textData
        }).then(()=>{
            var i
            for(i = 0; i < tabelData.length; i++){
                if(Number(tabelData[i])){
                    numb += Number(tabelData[i])
                }
            }
            cy.log("Total: " + numb)
        })
}
}