export class orange {

    recuirement_tab = ".oxd-main-menu-item-wrapper >a"
    recuirement_Title = ".oxd-topbar-header-breadcrumb >h6"

    clickOnRecuirementTab() {

        cy.get(this.recuirement_tab).contains('Recruitment').click()
    }

    verifyRecuirementTitle() {
        cy.get(this.recuirement_Title).contains('Recruitment')
    }
}