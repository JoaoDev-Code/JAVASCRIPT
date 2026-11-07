const prompt = require('prompt-sync')()

let Opção = prompt("Digite a opção abaixo: ")

console.log("1- contar ate 10")
console.log("2- contar ate 20")
console.log("3- contar ate 30")

switch(Opção) {
    case "1":
        for (let i = 0; i <= 10; i++) {
            console.log(i)
        }
        break
     case "2":
        for (let i = 0; i <= 20; i++) {
            console.log(i)
        }
        break
     case "3":
        for (let i = 0; i <= 30; i++) {
            console.log(i)
        }
        break
    default:
        console.log("Valor invalido")
}