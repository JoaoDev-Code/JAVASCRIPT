// array de objeto (comum)

const produtos = [
    { nome: "Notebook Acer", preco: 3900, garantia: "1 ano" },
    { nome: "Xiaomi", preco: 2500, garantia: "6 meses" },
    { nome: "Tv Philco, 43 polegadas", preco: 3900, garantia: "2 anos" },
]
let somaprecos = 0
// loop para percorrer o array
for (let i = 0; i < produtos.length; i++) {
    // pegando todos os precos
    let preco = produtos[i].preco
    somaprecos += preco
}

console.log("A soma total dos produtos: R$"+somaprecos)