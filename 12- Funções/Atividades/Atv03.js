// 98) Crie um programa que tenha uma função SuperSomador(), que vai receber dois 
// números como parâmetro e depois vai retornar a soma de todos os valores no 
// intervalo entre os valores recebidos. 
// Ex:  
// SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21 
// SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85 

const prompt = require("prompt-sync") ();

// Criando a função
function SuperSomador(numero1, numero2) {
    let soma = 0;
    
    for (let i = numero1; i <= numero2; i++) {
        soma = soma + i;
    }
    
    return soma;
}

// Recebendo o numero
let numero1 = Number(prompt("Digite o 1ª numero: "));
let numero2 = Number(prompt("Digite o 2ª numero: "));

// Chamando a função
let resultado = SuperSomador(numero1, numero2);

// Monstrando o resultado
console.log("A soma de todos os valores é: " + resultado);