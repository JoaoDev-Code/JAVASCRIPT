
const prompt = require("prompt-sync")();

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

// Mostrando as opções
console.log("=== OPÇÕES ===");

console.log("1 - +");
console.log("2 - -");
console.log("3 - *");
console.log("4 - /");

// Escolhendo a operação
let opcao = prompt("Escolha uma opção: ");

// Perguntando os valores
let numero1 = Number(prompt("Digite o primeiro valor: "));
let numero2 = Number(prompt("Digite o segundo valor: "));

// Executando a operação
switch (opcao) {
    case "+":
        let somar = soma(numero1, numero2);
        console.log("A soma dos valores é " + somar);
        break;

    case "-":
        let subtrair = subtracao(numero1, numero2);
        console.log("A subtração dos valores é " + subtrair);
        break;

    case "*":
        let multiplicar = multiplicacao(numero1, numero2);
        console.log("A multiplicação dos valores é " + multiplicar);
        break;

    case "/":
        if (numero2 === 0) {
            console.log("Não é possível dividir por zero!");
        } else {
            let dividir = divisao(numero1, numero2);
            console.log("A divisão dos valores é " + dividir);
        }
        break;

    default:
        console.log("Opção inválida.");
        break;
}

