describe('Orange HRM Tests', () => {
  it.only('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('[data-v-7b563373=""]').contains('Dashboard')
  })  
  
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.get('[data-v-7b563373=""]').contains('Invalid credentials')
  })
})



// .only representa que ele vai rodar somente esse teste e vai ignorar todos os outros.