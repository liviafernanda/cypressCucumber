Feature: Login no Central de Interpretes
Como usuario eu gostaria de acessar o Central de Interpretes
Para que eu possa requisitar um Interpretes

Scenario: Pagina de login do Central de Interpretes
 Given usuario navega na pagina de login do central de interpretes
  When Usuario assiste ao video sinalizando o preenchimento do email
  And preenche o campo com o email
  And assiste ao video sinalizando o preenchimento da senha
  And preenche o campo com senha
  And clica no botao Entrar
  Then sistema alerta um erro de login
 
 