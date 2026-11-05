let dinheiro = Number(prompt("Quanto diheiro você tem na carteira? "))

let dolares = dinheiro / 5.06
console.log("Com R$" + dinheiro + ", você pode comprar US$" + dolares.toFixed(2));
