import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Orange HRM Tests', () => {

  const selectorsList = {
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
  
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()

 
    // cy.get(selectorsList.firstName).clear().type('Rafael')
    // cy.get(selectorsList.middleNam).clear().type('Sartori')
    // cy.get(selectorsList.lastName).clear().type('Zanella')
    // cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    // cy.get(selectorsList.genericField).eq(4).clear().type('Other Id')
    // cy.get(selectorsList.genericField).eq(5).clear().type('License-Number')
    // cy.get(selectorsList.dataField).first().clear().type('2024-29-12')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.selectNationality).eq(0).find('i').click()
    // cy.get(selectorsList.dropdownNationality).should('be.visible')
    // cy.get(selectorsList.selectionOptionsdropdownNationality).click()
    // cy.get(selectorsList.selectNationality).eq(1).find('i').click()
    // cy.get(selectorsList.dropdownNationality).should('be.visible')
    // cy.get(selectorsList.selectionOptionsdropdownMaritalStatus).click({ force:true })
    // cy.get(selectorsList.submitButton).eq(0).click()
    // cy.get(selectorsList.alertSuccess).contains('Successfully Updated')
    // cy.get(selectorsList.closeAlertSuccess).click()
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