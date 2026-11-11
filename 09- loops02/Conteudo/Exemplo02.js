const prompt = require('prompt-sync')()

let inicio = Number(prompt("Digite o inicio da contagem: "))
let final = Number(prompt("Digite o final da contagem: "))

if(inicio > final) {
    console.log("O inicio não pode ser maior que o final")
} else {
       while (inicio <= final) {
             console.log(inicio)
             inicio++
        }
}
    
