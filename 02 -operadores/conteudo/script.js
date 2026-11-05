// OPERADOR DE MATEMATICA (ARITMETICOS)
let a = 10
let b = 30

// soma 
let soma = a + b
// divisao
let divisao = a / b 
// multiplicacao
let multiplicacao = a * b 
// subtracao
let subtracao = a - b
//modulo (resto da divisao)
let restoDivisao = a % b 

//SAIDA
console.log("A soma é " + soma)
console.log("A divisao é " + divisao)
console.log("A let subtracao é " + subtracao)
console.log("A multiplicacao é " + multiplicacao)
console.log("A restoDivisao é " + restoDivisao)

//DESAFIO - media de tres notas 
let nota1 = 9;
let nota2 = 4;
let nota3 = 5;

let somaNotas = nota1 + nota2 + nota3;
let media = somaNotas / 3;
console.log("A media foi de " + media);  // ou usar: console.log(`A média foi de ${(nota1 + nota2 + nota3) / 3}`);

// Desafio IMC

let altura = 180; 
let peso = 62;   
let imc = (peso)/(altura * altura)

console.log ("O IMC foi de " + imc)