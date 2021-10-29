
Given(/^usuario navega na pagina de login do central de interpretes$/, () => {
	cy.visit("http://200.137.197.197/index.php/Login");
    cy.wait(1000);
});

When(/^Usuario assiste ao video sinalizando o preenchimento do email$/, () => {
	cy.get('#username-video')
      .should('have.prop', 'paused', true)
      .and('have.prop', 'ended', false)
      .then(($video) => { $video[0].play()})
    cy.wait(4000);
});

When(/^preenche o campo com o email$/, () => {
	cy.get(':nth-child(6) > .input-field > label').type("liviafernanda@gmail.com");
    cy.wait(500);
});

When(/^assiste ao video sinalizando o preenchimento da senha$/, () => {
	cy.get("#password-video")
      .should('have.prop', 'paused', true)
      .and('have.prop', 'ended', false)
      .then(($video) => {$video[0].play()})

    cy.wait(4000);
});

When(/^preenche o campo com senha$/, () => {
	cy.get(':nth-child(9) > .input-field > label').type("livia");
    cy.wait(500);
});

When(/^clica no botao Entrar$/, () => {
	cy.get('#submitLogin').click();
    cy.wait(1000);

});

Then(/^sistema alerta um erro de login$/, () => {
    
    cy.on('window:alert', (textoAlert) => {expect(textoAlert).to.equal('Login e/ou senha incorretos')});
    cy.on('window:confirm', () => true);
    cy.url().should('eq', 'http://200.137.197.197/index.php/Login/logUser')
	
    
    
});
