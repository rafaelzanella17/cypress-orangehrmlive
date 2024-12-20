class DashboardPage {  
  selectorsList() {
    const selectors = {
      sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module'   
    }
    return selectors
  }
  checkDashboardPage() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(this.selectorsList().sectionTitleTopBar).should('be.visible')
    // cy.get(this.selectorsList().myInfoButton).contains('Dashboard')
  }
}

export default DashboardPage