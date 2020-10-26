//Comando criado para criar um novo usuario
Cypress.Commands.add('createNewUser', (
    id,
    username,
    firstName,
    lastName,
    email,
    password,
    phone,
    userStatus
)=>{  
    //Criando uma requisicao para criar um novo usuario
   cy.request({
       method: 'POST',
       url: '/user',
       body:{
            id: id,
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phone: phone,
            userStatus: userStatus
       }
   })
})