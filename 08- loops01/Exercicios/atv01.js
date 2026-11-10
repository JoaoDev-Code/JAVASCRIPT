// 1 - Pergunte quantas viagens serão registradas
// 2 - Utilize for para repetir a solicitação dos dados
// 3 - Em cada viagem, solicite a quantidade de km percorridos
// 4 - Solicite a quantidade de litros de combustivel consumidos 
// 5 - Calcule o consumo de cada viagem (km dividos pelos litros)
// 6 - Acumule os consumos para calcular a media 
// 7 - Apresente o consumo medio final

// Exemplo
// Quantas viagens deseja registrar? 3

// Quilometros percorridos na viagem: 100
//  Litros consumidos na viagem: 10
//  console.log(=========================)


// const prompt = require('prompt-sync')()

// let viagens = Number(prompt("Quantas viagens deseja registrar? "))

// let somaConsumo = 0

// for (let i = 1; i <= viagens; i++) {

//     console.log(`Viagem ${i}`)

//     let km = Number(prompt("Km percorridos: "))
//     let litros = Number(prompt("Litros consumidos na viagem: "))

//     let consumo = km / litros

//     console.log(`Consumo da viagem: ${consumo.toFixed(2)} km/l`)

//     somaConsumo += consumo

//     console.log("=========================")
// }

// let media = somaConsumo / viagens

// console.log(`Média de consumo: ${media.toFixed(2)} km/l`) 

const prompt = require('prompt-sync')()

let viagens = Number(prompt('Quantas viagens deseja registrar? '))
let somaTotal = 0

for (let i = 1; i <= viagens; i++) {
    // perguntar km percorridos
    let kmPercorridos = Number(prompt("Km percorridos: "))

    // perguntar litros consumidos
    let litrosConsumidos = Number(prompt("Litros consumidos na viagem: "))

    // calculo
    let calculo = kmPercorridos / litrosConsumidos

    somaTotal += calculo
}

let consumoMedio = somaTotal / viagens

console.log(`Consumo medio foi de ${consumoMedio} km/L`)