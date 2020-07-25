let fixture = {}
beforeEach(() => {
cy.viewport(1024, 768)
cy.visit("/")
cy.fixture('registeredUser.json').then((user) => {
console.log("Data from fixture: ", user)
fixture.registeredUser = user
})
cy.fixture('invalidUser.json').then((user) => {
    // See what we get back from the fixture
    console.log('data from fixture:', user)
    fixture.invalidUser = user
})
})


describe('Test login', () => {
it('should go to /auth/login', () => {
//cy.visit('/')
//cy.contains('Login').click()
//cy.url().should('contains', '/auth/login')
cy.get('[data-cy="login"]').click()
cy.url().should('include', '/auth/login')
})


it('should succesfully login', () => {
cy.get("[data-cy=login]").click()
cy.get("[data-cy=username]").type(fixture.registeredUser.username)
cy.get("[data-cy=password]").type(fixture.registeredUser.password)
cy.get("[data-cy=loginButton]").click()
cy.url().should('include', '/')
})

})
describe('Test logout', () => {
it('should succesfully logout', () => {
const {username,password} = fixture.registeredUser
cy.get("[data-cy=login]").click()
cy.get("[data-cy=username]").type(fixture.registeredUser.username)
cy.get("[data-cy=password]").type(fixture.registeredUser.password)
cy.get("[data-cy=loginButton]").click()
cy.get("[data-cy=logout]").click()
})
})

describe('invalid username/password and shows error', () => {
it('should enter invalid details and prompt error', () => {
        cy.get("[data-cy=login]").click()
        cy.get('[data-cy=username]').type(fixture.invalidUser.username)
        cy.get('[data-cy=password]').type(fixture.invalidUser.password)
        cy.get('[data-cy=loginButton]').click()
        cy.get('[data-cy=errorMessage ]').should('be.visible')
    })
})
