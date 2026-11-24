// Perguntar se quer (+, -, / ou *)
// para cada operacao uma funcao
// cada funcao com dois parametros
// depois da escolha do usuarios perguntar dois valores
// valores que o usuarios perguntou passar como argumento

                                                        


const prompt = require("prompt-sync")();

console.log("=== OPÇÕES ===");

console.log("1 - +");
console.log("2 - -");
console.log("3 - *");
console.log("4 - /");

// Criando as funções
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

// Escolhendo a operação
let opcao = Number(prompt("Escolha uma opção: "));

// Perguntando os valores
let numero1 = Number(prompt("Digite o primeiro valor: "));
let numero2 = Number(prompt("Digite o segundo valor: "));

// Verificando a opção escolhida
switch (opcao) {
    case 1:
        console.log("Resultado:", soma(numero1, numero2));
        break;

    case 2:
        console.log("Resultado:", subtracao(numero1, numero2));
        break;

    case 3:
        console.log("Resultado:", multiplicacao(numero1, numero2));
        break;

    case 4:
        console.log("Resultado:", divisao(numero1, numero2));
        break;

    default:
        console.log("Opção inválida!");
        break;
}
