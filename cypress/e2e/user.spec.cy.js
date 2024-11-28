import userData from '../fixtures/users/user-data.json'


describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameFiels: '[name="username"]',
    passwordFiels: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    paragrafoInvalidCredenciais: '.oxd-alert-content-text',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstName: '[name="firstName"]',
    middleNam: '[name="middleName"]',
    lastName: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dataField: '[placeholder="yyyy-dd-mm"]',
    dateCloseButton: '.oxd-date-input-calendar',
    submitButton: "[type='submit']",
    alertSuccess: ".oxd-text--toast-message",
    closeAlertSuccess: ".oxd-toast-close[data-v-31aeb1cf]"
  }
  
  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameFiels).type(userData.userSucess.username)
    cy.get(selectorsList.passwordFiels).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstName).clear().type('Rafael')
    cy.get(selectorsList.middleNam).clear().type('Sartori')
    cy.get(selectorsList.lastName).clear().type('Zanella')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('Other Id')
    cy.get(selectorsList.genericField).eq(5).clear().type('License-Number')
    cy.get(selectorsList.dataField).first().clear().type('2024-29-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get(selectorsList.alertSuccess).contains('Successfully Updated')
    cy.get(selectorsList.closeAlertSuccess).click()
  })  
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameFiels).type(userData.userFail.username)
    cy.get(selectorsList.passwordFiels).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.paragrafoInvalidCredenciais)
  })
})



// .only representa que ele vai rodar somente esse teste e vai ignorar todos os outros.