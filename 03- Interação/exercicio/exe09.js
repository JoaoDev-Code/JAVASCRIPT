
let km = Number(prompt("Quantos Km foram percorridos?"));
let dias = Number(prompt("Quantos dias o carro foi alugado?"));

let preco = (dias * 90) + (km * 0.20);
console.log("O total a ser pago e de R$" + preco.toFixed(2));