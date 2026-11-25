const prompt = require("prompt-sync")();

let saldoInicial = 1000;

// Função para consultar saldo

function consultarSaldo(saldo) {

    console.log("===== Consultar Saldo =====");
    console.log("Seu saldo atual é: R$ " + saldo.toFixed(2));

}


// Função para realizar depósito

function realizarDeposito(saldo) {

    console.log("===== Deposito =====");

    let valor = Number(prompt("Digite o valor do depósito: "));

    if (valor > 0) {

        saldo = saldo + valor;

        console.log("Deposito realizado com sucesso!");

    } else {

        console.log("Valor invalido! Digite um valor maior que zero.");

    }

    return saldo;
}


// Função para realizar saque

function realizarSaque(saldo) {

    console.log("\n===== SAQUE =====");

    let valor = Number(prompt("Digite o valor do saque: "));

    if (valor > 0 && valor <= saldo) {

        saldo = saldo - valor;

        console.log("Saque realizado com sucesso!");

    } else {

        console.log("Valor inválido ou saldo insuficiente!");

    }

    return saldo;
}


// Menu principal

let opcao = 0;

while (opcao != 4) {

    console.log("\n===== Banco JAVASCRIPT =====");
    console.log("1 - Consultar saldo");
    console.log("2 - Depositar");
    console.log("3 - Sacar");
    console.log("4 - Sair");

    opcao = Number(prompt("Escolha uma opção: "));


    // Consultar saldo

    if (opcao == 1) {

        consultarSaldo(saldoInicial);

    }


    // Depositar

    else if (opcao == 2) {

        saldoInicial = realizarDeposito(saldoInicial);

        console.log("Saldo atualizado: R$ " + saldoInicial.toFixed(2));

    }

    
    // Sacar

    else if (opcao == 3) {

        saldoInicial = realizarSaque(saldoInicial);

        console.log("Saldo atualizado: R$ " + saldoInicial.toFixed(2));

    }


    // Sair

    else if (opcao == 4) {

        console.log("Obrigado por utilizar nosso banco!");

    }


    // Opção inválida

    else {

        console.log("Opção inválida! Escolha de 1 a 4.");

    }

}