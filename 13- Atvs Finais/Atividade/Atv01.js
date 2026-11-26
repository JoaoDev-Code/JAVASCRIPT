// Atividade criar uma função que receba uma palavra, caso a palavra seja um palindromo retorne true, retorne falso.

const prompt = require("prompt-sync")();

function palindromo(palavra) {

    let nomeArr = palavra.split("");
    let reverse = nomeArr.reverse();
    let juntar = reverse.join('');

    if ( palavra === juntar ) {
        return true; 
    } else {
        return false;
    }

}

let palavra = prompt("Digite a palavra: ");

    if (palindromo(palavra)) {
          console.log("É um palíndromo!");
    } else {
          console.log("Não é um palíndromo!");
    }
