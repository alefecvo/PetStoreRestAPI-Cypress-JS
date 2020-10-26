/// <reference types="cypress"/>

//Declarando locators e imports
import '../../support/commandsUser'

describe('Should user test', () =>{
    
    //Cenário - Criar uma nova conta
    it('Should create an user',()=>{
        //Criando uma requisicao para criar um novo usuario
        cy.createNewUser(1,
             "alefeteste",
             "alefe",
             "silva",
             "alefeteste@teste.com",
             "123456",
             "31999999999",
             1
         ).as('response')

        //Validando resposta da requisicao, status code 200 e nome que foi criado
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(200)
        })
    })
})