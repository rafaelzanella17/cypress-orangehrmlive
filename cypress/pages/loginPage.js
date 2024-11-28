class LoginPage {
  selectorsList() {
    const selectors = {
      usernameFiels: "[name='username']",
      passwordFiels: "[name='password']",
      loginButton: "[type='submit']",
      paragrafoInvalidCredenciais: ".oxd-alert-content-text",
    }
    return selectors
  }

  accessLoginPage() {
    cy.visit('/auth/login')
  }

  loginWithAnyUser(username, password) {
    cy.get(this.selectorsList().usernameFiels).type(username)
    cy.get(this.selectorsList().passwordFiels).type(password)
    cy.get(this.selectorsList().loginButton).click()
  }
}

export default LoginPage