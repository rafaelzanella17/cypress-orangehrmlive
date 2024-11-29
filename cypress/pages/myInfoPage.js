class MyInfoPage {  
  selectorsList() {
    const selectors = {
      firstName: '[name="firstName"]',
      middleNam: '[name="middleName"]',
      lastName: '[name="lastName"]',
      genericField: '.oxd-input--active',
      dataField: '[placeholder="yyyy-dd-mm"]',
      dateCloseButton: '.oxd-date-input-calendar',
      submitButton: '[type="submit"]',
      alertSuccess: '.oxd-text--toast-message',
      closeAlertSuccess: '.oxd-toast-close[data-v-31aeb1cf]',
      selectNationality: "div.oxd-select-text--after",
      dropdownNationality: '.oxd-select-dropdown',
      selectionOptionsdropdownNationality: '.oxd-select-dropdown > :nth-child(27)',
      selectionOptionsdropdownMaritalStatus: '.oxd-select-dropdown > :nth-child(3)'
    }
    return selectors
  }

  fillPersonalDetails(firstName, middleNam, lastName) {     
    cy.get(this.selectorsList().firstName).clear().type(firstName)
    cy.get(this.selectorsList().middleNam).clear().type(middleNam)
    cy.get(this.selectorsList().lastName).clear().type(lastName)
  }

  fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
    cy.get(this.selectorsList().dataField).first().clear().type(expiryDate)    
    cy.get(this.selectorsList().dateCloseButton).click()
  }

  fillStatus() {
    cy.get(this.selectorsList().selectNationality).eq(0).find('i').click()
    cy.get(this.selectorsList().dropdownNationality).should('be.visible')
    cy.get(this.selectorsList().selectionOptionsdropdownNationality).click()
    cy.get(this.selectorsList().selectNationality).eq(1).find('i').click()
    cy.get(this.selectorsList().dropdownNationality).should('be.visible')
    cy.get(this.selectorsList().selectionOptionsdropdownMaritalStatus).click()
  }

  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click()
    cy.get(this.selectorsList().alertSuccess).contains('Successfully Updated')
    cy.get(this.selectorsList().closeAlertSuccess).click()
  }
}

export default MyInfoPage