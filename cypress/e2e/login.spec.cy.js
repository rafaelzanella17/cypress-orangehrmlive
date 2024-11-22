describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameFiels: '[name="username"]',
    passwordFiels: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    paragrafoInvalidCredenciais: '.oxd-alert-content-text',
  }

  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiels).type('Admin')
    cy.get(selectorsList.passwordFiels).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })  
  
  it.only('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiels).type('Admin')
    cy.get(selectorsList.passwordFiels).type('admin1')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.paragrafoInvalidCredenciais)
  })
})



// .only representa que ele vai rodar somente esse teste e vai ignorar todos os outros.