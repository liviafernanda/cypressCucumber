Feature: Testar pesquisa em ambiente nao acessivel para surdo
Como usuario eu gostaria de fazer uma pesquisa no Google
Para que eu possa encontrar um resultado desejado

Scenario: pagina de pesquisa do Google
 Given abrir o navegador na pagina do Google
  When digito o texto "teste de aceitação" para busca
  And pressiono a tecla enter
  Then acesso a pagina de resultados
 
 