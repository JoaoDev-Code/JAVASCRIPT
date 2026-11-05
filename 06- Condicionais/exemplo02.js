
//  // Condição Composta

// let idade = 18;

// if (idade >= 18) {
//     console.log("Você pode dirigir");
// } else {
//     console.log("Não pode dirigir");
// }

// console.log("===========================");

// let clienteVip = true;
// let valorCompra = 195;

// if (clienteVip === true || valorCompra > 190) {
//     console.log("Você possui desconto");
// } else {
//     console.log("Você não possui desconto");
// }

// console.log("===========================");

// let compra = 180;

// if (compra >= 200) {
//     console.log("Frete grátis");
// } else if (compra >= 100) {
//     console.log("Frete com desconto");
// } else if (compra >= 50) {
//     console.log("Frete normal");
// } else {
//     console.log("O valor mínimo não foi atingido");
// }

let nota1 = 7
let nota2 = 5
let nota3 = 4
let media = (nota1 + nota2 + nota3)/3 

if(media >= 6) {
    console.log("sua media foi de " + media + "- APROVADO")
} else if (media >= 5 && media <= 5.9) {
    console.log("sua media foi de " + media + "- RECUPERAÇÃO")
} else { 
    console.log("sua media foi de " + media + "- REPROVADO")
}