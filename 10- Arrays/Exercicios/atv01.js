const prompt = require('prompt-sync')()

let alunos = []
let idades = []

let quantidade = Number(prompt("Quantos alunos deseja cadastrar? "))

for (let i = 0; i < quantidade; i++) {
    let nome = prompt(`Digite o nome do ${i + 1}º aluno: `)
    alunos.push(nome)

    let idade = Number(prompt(`Digite a idade do ${i + 1}º aluno: `))
    idades.push(idade)
}

console.log("==== ALUNOS CADASTRADOS ====")

for (let i = 0; i < alunos.length; i++) {
    console.log(`${i + 1}º - ${alunos[i]} | Idade: ${idades[i]}`)
}

let sorteado = Math.floor(Math.random() * alunos.length)

console.log("==== SORTEIO ====")
console.log(`Da lista, o aluno sorteado foi: ${alunos[sorteado]}`)
console.log(`Idade: ${idades[sorteado]} anos`)