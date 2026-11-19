// cadastre 3 produtos: nome, preco, descricao
// somar os valores dos produtos 


const prompt = require("prompt-sync") ()

let produtos = []

for (let i = 1; i <= 3; i++) {
    let nome = prompt("Nome do produto: ")
    let preco = Number(prompt("Qual preco do produto: "))
    let descricao = prompt("Qual descrição do produto: ")

    // let produto = {
    //     nome: nome,
    //     preco: preco,
    //     descricao: descricao
    // }
    let produto = {nome,preco,descricao}
    produtos.push(produto)
    console.log("---------------------------")
}
let soma = 0
for(let i = 0; i < produtos.length; i++){
    console.log(produtos[i])
    soma += produtos[i].preco
}

console.log ("A soma total dos produtos: R$"+soma)