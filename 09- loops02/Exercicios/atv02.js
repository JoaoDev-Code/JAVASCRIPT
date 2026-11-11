// Crie um programa que leia vários números pelo teclado e mostre no final o somatório entre eles. Obs: O programa será interrompido quando o número 1111 for digitado 

const prompt = require('prompt-sync') ()

let soma = 0 
let numero
let flag = true

while (flag) {
    numero = Number(prompt("Digite um número (1111 para parar)"))
   
    if ( numero === 1111){
        flag = false
    } else {
        soma += numero 
    }
} 

console.log(`A somatoria dos números é: ${soma}`)

