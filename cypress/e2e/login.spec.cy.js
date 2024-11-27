import userData from '../fixtures/users/user-data.json'


describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameFiels: '[name="username"]',
    passwordFiels: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    paragrafoInvalidCredenciais: '.oxd-alert-content-text',
  }


  it.only('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameFiels).type(userData.userSucess.username)
    cy.get(selectorsList.passwordFiels).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
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