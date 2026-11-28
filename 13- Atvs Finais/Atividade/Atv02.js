const prompt = require("prompt-sync")();

const array = [
    { nome: "Note", Preço: "R$ 3000" },
    { nome: "Cell", Preço: "R$ 2500" },
    { nome: "Teclado", Preço: "R$ 350" }
];

console.log("===== LOJA =====");
console.log("1 - Notebook");
console.log("2 - Celular");2
console.log("3 - Teclado");

let opcao = Number(prompt("Escolha um produto: "));

let produto = array[opcao - 1];

   

if (produto) {
    let preco = produto.Preço;

    preco = preco.replaceAll("R$", "");
    preco = Number(preco);

    console.log("--------------------");
    console.log("Produto:", produto.nome);
    console.log("Preço: ", preco.toFixed(2));
} else {
    console.log("Opção inválida!");
}