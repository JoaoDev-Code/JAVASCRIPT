// Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas. 
// O programa vai perguntar se o usuário quer ou não continuar. No final, mostre: 
// a) O nome da pessoa mais velha 
// b) O nome da mulher mais jovem 
// c) A média de idade do grupo 
// d) Quantos homens tem mais de 30 anos 
// e) Quantas mulheres tem menos de 18 anos 


const prompt = require('prompt-sync')()

let flag = true
let pessoas = []
let maiorIdade = 0
let nomesMaisVelhos = []
let menorIdadeMulher = Infinity
let nomesMulheresJovens = []
let somaIdades = 0
let quantidade = 0
let homensMais30 = 0
let mulheresMenos18 = 0

while (flag) {

    let cadastroConfirmado = false
    let nome
    let idade
    let sexo

    while (!cadastroConfirmado && flag) {

        let tentativas = 0

        while (tentativas < 3) {

            nome = prompt('Digite o nome: ').trim().replace(/\s+/g, ' ')

            if (/^[\p{L}\s]+$/u.test(nome) && nome != '') {
                break
            }

            tentativas++
            console.log(`Nome inválido! Tentativa ${tentativas}/3`)
        }

        if (tentativas == 3) {
            console.log('Limite de tentativas atingido!')
            flag = false
            break
        }

        tentativas = 0

        while (tentativas < 3) {

            let entradaIdade = prompt('Digite a idade: ').trim()
            let idadeConvertida = Number(entradaIdade)

            if (/^\d+$/.test(entradaIdade) &&
                idadeConvertida >= 1 &&
                idadeConvertida <= 120) {

                idade = idadeConvertida
                break
            }

            tentativas++
            console.log(`Idade inválida! Tentativa ${tentativas}/3`)
        }

        if (tentativas == 3) {
            console.log('Limite de tentativas atingido!')
            flag = false
            break
        }

        tentativas = 0

        while (tentativas < 3) {

            sexo = prompt('Digite o sexo (M/F): ').toUpperCase().trim()

            if (sexo == 'M' || sexo == 'F') {
                break
            }

            tentativas++
            console.log(`Sexo inválido! Tentativa ${tentativas}/3`)
        }

        if (tentativas == 3) {
            console.log('Limite de tentativas atingido!')
            flag = false
            break
        }

        console.log('\n===== CONFIRMAÇÃO DO CADASTRO =====')
        console.log(`Nome: ${nome}`)
        console.log(`Idade: ${idade}`)
        console.log(`Sexo: ${sexo}`)

        tentativas = 0

        while (tentativas < 3) {

            let confirmar = prompt('Os dados estão corretos? (S/N): ').toUpperCase().trim()

            if (confirmar == 'S') {
                cadastroConfirmado = true
                break
            } else if (confirmar == 'N') {
                console.log('Digite os dados novamente!')
                break
            }

            tentativas++
            console.log(`Resposta inválida! Tentativa ${tentativas}/3`)
        }

        if (tentativas == 3) {
            console.log('Limite de tentativas atingido!')
            flag = false
        }
    }

    if (cadastroConfirmado) {

        let pessoa = {
            nome: nome,
            idade: idade,
            sexo: sexo
        }

        pessoas.push(pessoa)

        if (quantidade == 0 || idade > maiorIdade) {

            maiorIdade = idade
            nomesMaisVelhos = [nome]

        } else if (idade == maiorIdade) {

            nomesMaisVelhos.push(nome)
        }

        if (sexo == 'F' && idade < menorIdadeMulher) {

            menorIdadeMulher = idade
            nomesMulheresJovens = [nome]

        } else if (sexo == 'F' && idade == menorIdadeMulher) {

            nomesMulheresJovens.push(nome)
        }

        somaIdades += idade
        quantidade++

        if (sexo == 'M' && idade > 30) {
            homensMais30++
        }

        if (sexo == 'F' && idade < 18) {
            mulheresMenos18++
        }

        let tentativas = 0

        while (tentativas < 3) {

            let continuar = prompt('Quer continuar? (S/N): ').toUpperCase().trim()

            if (continuar == 'S') {
                break
            } else if (continuar == 'N') {
                flag = false
                break
            }

            tentativas++
            console.log(`Resposta inválida! Tentativa ${tentativas}/3`)
        }

        if (tentativas == 3) {
            console.log('Limite de tentativas atingido!')
            flag = false
        }
    }
}

console.log('\n===== RESULTADOS =====')

if (quantidade > 0) {

    console.log(`Total de pessoas cadastradas: ${quantidade}`)

    console.log(`Pessoa(s) mais velha(s): ${nomesMaisVelhos.join(' e ')}`)

    if (nomesMulheresJovens.length > 0) {
        console.log(`Mulher(es) mais jovem(ns): ${nomesMulheresJovens.join(' e ')}`)
        console.log(`Idade da mulher mais jovem: ${menorIdadeMulher}`)
    } else {
        console.log('Nenhuma mulher foi cadastrada.')
    }

    console.log(`Média de idade: ${(somaIdades / quantidade).toFixed(2)}`)

    console.log(`Homens com mais de 30 anos: ${homensMais30}`)

    console.log(`Mulheres com menos de 18 anos: ${mulheresMenos18}`)

    console.log('\n===== PESSOAS CADASTRADAS =====')

    for (let pessoa of pessoas) {
        console.log(`Nome: ${pessoa.nome} | Idade: ${pessoa.idade} | Sexo: ${pessoa.sexo}`)
    }

} else {
    console.log('Nenhuma pessoa foi cadastrada.')
}