const prompt = require('prompt-sync')()

let maiorIdade = 0
let homens = 0
let somaIdadeHomens = 0
let mulherJovem = 0
let totalMulheres = 0

let flag = true

while (flag) {

    let idade = Number(prompt('Digite a idade: '))
    let sexo = prompt('Digite o sexo [M/F]: ').toUpperCase()

    // Maior idade
    if (idade > maiorIdade) {
        maiorIdade = idade
    }

    // Homens
    if (sexo == 'M') {
        homens++
        somaIdadeHomens += idade
    }

    // Mulheres
    if (sexo == 'F') {
        totalMulheres++

        if (totalMulheres == 1 || idade < mulherJovem) {
            mulherJovem = idade
        }
    }

    let continuar = prompt('Quer continuar? [S/N]: ').toUpperCase()

    if (continuar == 'N') {
        flag = false
    }
}

console.log('\n----- RESULTADO -----')

console.log(`Maior idade: ${maiorIdade}`)
console.log(`Homens cadastrados: ${homens}`)

if (totalMulheres > 0) {
    console.log(`Mulher mais jovem: ${mulherJovem}`)
} else {
    console.log('Nenhuma mulher cadastrada.')
}

if (homens > 0) {
    let media = somaIdadeHomens / homens
    console.log(`Média de idade dos homens: ${media.toFixed(1)}`)
} else {
    console.log('Nenhum homem cadastrado.')
}