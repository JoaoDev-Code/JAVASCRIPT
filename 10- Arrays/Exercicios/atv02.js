const prompt = require('prompt-sync')()

let idade
let continuar
let quantidade = 0
let somaIdades = 0
let maiores21 = 0

do {
    idade = Number(prompt('Digite uma idade: '))

    quantidade++
    somaIdades += idade

    if (idade >= 21) {
        maiores21++
    }

    continuar = prompt('Deseja continuar? [S/N] ').toUpperCase()

} while (continuar == 'S')

let media = somaIdades / quantidade

console.log('===== RESULTADO =====')
console.log(`Idades digitadas: ${quantidade}`)
console.log(`Média das idades: ${media.toFixed(1)}`)
console.log(`Pessoas com 21 anos ou mais: ${maiores21}`)
