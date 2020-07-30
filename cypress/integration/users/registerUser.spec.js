let fixture = {}

beforeEach(() => {
	// Set the viewport
	cy.viewport(1024, 768)
	// Start tests from home page
	cy.visit("/")
	cy.fixture("unregisteredUser.json").then(user => {
		fixture.newUser = user
	})
})

describe("Register user", () => {
	it("should route to /auth/register", () => {
		cy.get("[data-cy=signup]").click()
		cy.url().should("include", "/auth/register")
	})
	it("should register a user", () => {
		cy.get("[data-cy=signup]").click()
		cy.get("[data-cy=username]").type(fixture.newUser.username)
		cy.get("[data-cy=email]").type(fixture.newUser.email)
        cy.get("[data-cy=password]").type(fixture.newUser.password)
        cy.get("[data-cy=confirmpassword]").type(fixture.newUser.password)
		cy.get("[data-cy=signupButton]").click()
		cy.get('[data-cy=loginNav]').find("[data-cy=logout]")
	})
})