// crie uma função para calcular fatorial

const prompt = require("prompt-sync")();

    function fatorial(numero) {

        let fatorial = 1;

            for (let i = numero; i >= 1; i--) {
                          fatorial *= i;
    }

            return fatorial;
}

let numero = Number(prompt("Digite um numero: "));

console.log("O fatorial de " + numero + " é: " + fatorial(numero));