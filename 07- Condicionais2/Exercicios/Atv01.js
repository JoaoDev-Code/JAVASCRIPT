// Atv01
// Crie variaveis com dois valores 
// de acordo com a escolha 
// some/multiplicação/subtr/divis
// OBS: Opção tem que receber string


let Number1 = 10
let Number2 = 5
let opcao = "somar"

switch (opcao) {
    case "somar":
        console.log(Number1 + Number2)
        break

    case "multiplicar":
        console.log(Number1 * Number2)
        break

    case "subtrair":
        console.log(Number1 - Number2)
        break

    case "dividir":
        console.log(Number1 / Number2)
        break

    default:
        console.log("Operação inválida")
}
