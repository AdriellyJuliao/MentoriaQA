
import loginPage from "../pages/loginPage"

const LoginPage = new loginPage();

describe('Testes de Login no site SauceDemo', () => {

// Antes de cada teste, acessar a página de login
beforeEach(() => {
  // Acessa a página de login do SauceDemo
  cy.visit('/')
})

it('Verificando se é possível fazer login com credenciais válidas', () => {
  //  Dado - Preenche usuário válido
  LoginPage.DadoQueOUsuarioPreenchaOsCampos('standard_user', 'secret_sauce')
  // Quando - Clica no botão de login
  LoginPage.QuandoClicarNoBotao()
  // Então - Valida se foi redirecionado para a página de inventário
  LoginPage.EntaoValidaLoginComSucesso()
})

it('Verificando se o sistema exibe erro ao usar senha inválida', () => {
  //  Dado - Preenche usuário válido
  LoginPage.DadoQueOUsuarioPreenchaOsCampos('standard_user', 'secretsauce')
  // Quando - Clica no botão de login
  LoginPage.QuandoClicarNoBotao()
  // Valida se a mensagem de erro é exibida
  LoginPage.EntaoVerificaMensagem('Epic sadface: Username and password do not match any user in this service')
})

it('Verificando se o sistema exibe erro ao usar usuário inválido', () => {
  // Dado que o usuário preenche um usuário inválido
  LoginPage.DadoQueOUsuarioPreenchaOsCampos('usuario_invalido', 'secret_sauce')
  // Quando ele clica no botão de login
  LoginPage.QuandoClicarNoBotao()
  // Então uma mensagem de erro deve ser exibida
  LoginPage.EntaoVerificaMensagem('Epic sadface: Username and password do not match any user in this service');
})

it('Verificando se o sistema exibe erro ao tentar logar com campos em branco', () => {
  // Dado que o usuário não preenche nenhum campo
  // Quando ele clica no botão de login
  LoginPage.QuandoClicarNoBotao()
  // Então uma mensagem de erro sobre campo obrigatório deve ser exibida
  LoginPage.EntaoVerificaMensagem('Epic sadface: Username is required')
})


it('Verificando se o sistema bloqueia login para usuário bloqueado', () => {
  // Dado que o usuário preenche as credenciais de um usuário bloqueado
  LoginPage.DadoQueOUsuarioPreenchaOsCampos('locked_out_user', 'secret_sauce')
  // Quando ele clica no botão de login
  LoginPage.QuandoClicarNoBotao();
  // Então uma mensagem de erro sobre usuário bloqueado deve ser exibida
  LoginPage.EntaoVerificaMensagem('Epic sadface: Sorry, this user has been locked out.')
})

})