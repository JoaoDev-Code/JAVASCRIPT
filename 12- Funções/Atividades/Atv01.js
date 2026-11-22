// Perguntar se quer (+, -, / ou *)
// para cada operacao uma funcao
// cada funcao com dois parametros
// depois da escolha do usuarios perguntar dois valores
// valores que o usuarios perguntou passar como argumento

let alunos = []

let quantidade = Number(prompt("Quantos alunos deseja cadastrar?"))

for (let i = 0; i < quantidade; i++) {
    let nome = prompt("Digite o nome do aluno: ")

    alunos.push(nome);

}

console.log("Alunos cadastrados: ", alunos)

for (let i = 0; i < alunos.length; i++) {
    conosole.log("Aluno: ", alunos[i])
}
