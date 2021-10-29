
Given(/^abrir o navegador na pagina do Google$/, () => {
    console.log("abro o navegador no google");
    cy.visit("https://www.google.com");
	
});


When(/^digito o texto "([^"]*)" para busca$/, (pesquisaDesejada) => {
    cy.get('input[name="q"]').as("campoBusca")
	//console.log(args1);
    cy.get("@campoBusca").type(pesquisaDesejada);
	
});


And(/^pressiono a tecla enter$/, () => {
    cy.get('input[name="q"]').type('{enter}');
});

Then(/^acesso a pagina de resultados$/, () => {
    cy.get('body').contains("Conceito: Teste de Aceitação - CIn UFPE");
});
