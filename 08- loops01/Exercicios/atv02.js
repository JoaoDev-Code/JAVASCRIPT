//  Crie um algoritmo que leia a idade de 5 pessoas, mostrando no final
// a) Qual nome das 5 pessoas
// b) Qual a media de idade
// c) Quantas pessoas tem mais de 18 anos
// d) Quantas pessoas tem menos de cinco anos
// e) Qual a maior idade



const prompt = require('prompt-sync')()

let somaIdades = 0
let maiores18 = 0
let menores5 = 0
let maiorIdade = 0
let nomes = []

for (let i = 1; i <= 5; i++) {

    let nome
    let tentativasNome = 0

    // Validar nome (3 tentativas)
    while (tentativasNome < 3) {

        nome = prompt(`Digite o nome da ${i}ª pessoa: `)

        if (nome.trim() !== "" && isNaN(nome)) {
            break
        } else {
            tentativasNome++
            console.log(`Erro! Digite um nome válido. Tentativa ${tentativasNome}/3`)
        }
    }

    if (tentativasNome === 3) {
        console.log("Limite de tentativas excedido!")
        process.exit()
    }

    let idade
    let tentativasIdade = 0

    // Validar idade (3 tentativas)
    while (tentativasIdade < 3) {

        idade = Number(prompt(`Digite a idade de ${nome}: `))

        if (Number.isInteger(idade) && idade >= 0) {
            break
        } else {
            tentativasIdade++
            console.log(`Erro! Digite uma idade válida. Tentativa ${tentativasIdade}/3`)
        }
    }

    if (tentativasIdade === 3) {
        console.log("Limite de tentativas excedido!")
        process.exit()
    }

    nomes.push(nome)

    console.log(`Nome: ${nome} | Idade: ${idade}`)

    somaIdades += idade

    if (idade > 18) {
        maiores18++
    }

    if (idade < 5) {
        menores5++
    }

    if (idade > maiorIdade) {
        maiorIdade = idade
    }
}

let media = somaIdades / 5

// Saída

console.log("----------------- Resultado Final -----------------")
console.log(`Nomes: ${nomes.join(", ")}`)
console.log(`Média de idade: ${media}`)
console.log(`Pessoas com mais de 18 anos: ${maiores18}`)
console.log(`Pessoas com menos de 5 anos: ${menores5}`)
console.log(`Maior idade: ${maiorIdade}`)


// Versão primaria


// for (let i = 1; i <= 5; i++) {
//     let nome = prompt(`Digite o nome da ${i}ª pessoa: `)
//     let idade = Number(prompt(`Digite a idade de ${nome}: `))

//     console.log(`Nome: ${nome} | Idade: ${idade}`)

//     somaIdades += idade

//     if (idade > 18) {
//         maiores18++
//     }

//     if (idade < 5) {
//         menores5++
//     }

//     if (idade > maiorIdade) {
//         maiorIdade = idade
//     }
// }

// let media = somaIdades / 5