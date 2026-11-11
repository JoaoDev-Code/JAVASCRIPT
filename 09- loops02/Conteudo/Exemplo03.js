// While com FLAG 
const prompt = require('prompt-sync') ()
let continuar = true

// Para entrar no while tem que ser true 
while (continuar) {
    let resposta = prompt('Deseja continuar? ')

    if (resposta === 'n' || resposta === 'N') {
        continuar = false
    }
}

console.log('Programa encerrado! ')