const prompt = require("prompt-sync") ()
let clientes = []

for(let i = 1; i <= 3; i++) {
    let nome = prompt("Digite o nome: ")
    let email = prompt("Digite o email: ")
    let sobrenome = prompt("Digite o sobrenome: ")

    // criando um objeto
    let cliente = {
        nome: nome,
        email: email,
        sobrenome: sobrenome
    }
    // adcionando
    clientes.push(cliente)
    console.log("-----------------------------")
}
// mostrando os clientes
for(let i = 0; i < clientes.length; i++){
    console.log(clientes[i])
}