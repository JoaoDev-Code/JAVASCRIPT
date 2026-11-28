//Crie uma função que receba um array de numeros e somes eles.

const prompt = require("prompt-sync") ();

function somaArray(arr) {

    let soma = 0

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    
    }

    return soma;
}

let numeros = [10, 25, 30, 45, 50];

console.log("A soma dos numeros é: ", somaArray(numeros))
