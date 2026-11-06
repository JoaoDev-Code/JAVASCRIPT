// chamo a funçãopara perguntar
const prompt = require('prompt-sync')()

// Perguntar ao usuario
let ate = Number(prompt('Digite o valor: '))


// Decremento - 10 indo ate 1
console.log("Contagem decrescente de 50 até " + ate)

for (let i = 50; i>= ate; i--) {
    console.log(i)
}