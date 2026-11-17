// Atividade 02
// 01- cadastre 10 idades
// 02- pegue a maior idade 
// 03- pegue a menor idade
// 04- media das idades


const prompt = require('prompt-sync')();

let idades = [];
let maiorIdade = 0;
let menorIdade = Infinity;
let soma = 0;
let i = 1;

while (i <= 10) {
    let idade = Number(prompt(`Digite a ${i}ª idade: `));

    idades.push(idade);
    soma += idade;

    if (idade > maiorIdade) {
        maiorIdade = idade;
    }

    if (idade < menorIdade) {
        menorIdade = idade;
    }

    i++;
}

let media = soma / idades.length;

console.log('===== RESULTADOS =====');
console.log(`Maior idade: ${maiorIdade}`);
console.log(`Menor idade: ${menorIdade}`);
console.log(`Média das idades: ${media}`);
