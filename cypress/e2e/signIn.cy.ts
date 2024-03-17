describe('로그인', () => {
  it('이메일, 비밀번호 입력 후 로그인 버튼을 눌러 홈 페이지로 이동', () => {
    cy.visit('/login')

    cy.get('[data-cy="email-input"]').as('emailInput')
    cy.get('@emailInput').type('testid@test.com')
    cy.get('[data-cy="pwd-input"]').as('pwdInput')
    cy.get('@pwdInput').type('testpwd1234')

    cy.get('@emailInput').invoke('val').should('eq', 'testid@test.com')
    cy.get('@pwdInput').invoke('val').should('eq', 'testpwd1234')

    cy.get('[data-cy="submit"]').should('exist').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })
})