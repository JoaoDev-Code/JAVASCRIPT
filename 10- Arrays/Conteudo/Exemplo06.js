const prompt = require('prompt-sync')()

let usuarios = []

// Cadastrar usuários
for (let i = 1; i <= 5; i++) {
    let usuario = prompt("Digite o nome do usuario: ")
    usuarios.push(usuario)
}

// Ler usuários
console.log('==== USUARIOS CADASTRADOS ====')

for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i])
}
