describe('회원가입', () => {
  it('이름, 이메일, 비밀번호 입력과 유형 선택 후 가입 버튼을 눌러 로그인 페이지로 이동', () => {
    cy.visit('/signup')

    cy.get('[data-cy="name-input"]').as('nameInput')
    cy.get('@nameInput').type('sutestname')
    cy.get('[data-cy="email-input"]').as('emailInput')
    cy.get('@emailInput').type('sutestid@test.com')
    cy.get('[data-cy="pwd-input"]').as('pwdInput')
    cy.get('@pwdInput').type('sutestpwd1234')
    cy.get('button[value="seller"]').as('sellerRadio')
    cy.get('@sellerRadio').click()


    cy.get('@nameInput').invoke('val').should('eq', 'sutestname')
    cy.get('@emailInput').invoke('val').should('eq', 'sutestid@test.com')
    cy.get('@pwdInput').invoke('val').should('eq', 'sutestpwd1234')
    cy.get('input[value="seller"]').should('be.checked')

    cy.get('button[type="submit"]').should('exist').click()
    cy.url().should('eq', 'http://localhost:5173/login')
  })
})