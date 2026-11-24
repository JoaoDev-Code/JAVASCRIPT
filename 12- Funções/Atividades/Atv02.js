// 96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de 
// um aluno e retornar a sua média para o programa principal.

const prompt = require("prompt-sync")();

// Criando a função
function media(Nota1, Nota2) {
    return (Nota1 + Nota2) / 2;
}

// Recebendo as notas
let Nota1 = Number(prompt("Digite a 1ª nota: "));
let Nota2 = Number(prompt("Digite a 2ª nota: "));

// Chamando a função
let Resultado = media(Nota1, Nota2);

// Mostrando o resultado
console.log("A média do aluno é: " + Resultado);
