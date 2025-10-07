class loginPage {

campoUsername() {
  return cy.get('[data-test="username"]')
}

campoSenha(){
  return cy.get('[data-test="password"]')
}

botaoLogin(){
  return cy.get('#login-button')
}

mensagemErro(mensagem){
  return cy.contains(mensagem)
}

DadoQueOUsuarioPreenchaOsCampos(username, password){
  this.campoUsername().type(username)
  this.campoSenha().type(password)
}

QuandoClicarNoBotao(){
  this.botaoLogin().click()
}

EntaoVerificaMensagem(mensagem){
  this.mensagemErro(mensagem).should('contain', mensagem)
}

EntaoValidaLoginComSucesso(){
  cy.url().should('include', '/inventory.html')
}
}

export default loginPage