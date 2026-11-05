// if e else
let dia = 6

if(dia === 1) {
    console.log('Domingo')
}else if (dia === 2) {
    console.log('Segunda-feira') 
}else if (dia === 3) {
    console.log('Terça-feira') 
}else if (dia === 4) {
    console.log('Quarta-feira') 
}else if (dia === 5) {
    console.log('Quinta-feira') 
}else if (dia === 6) {
    console.log('Sexta-feira') 
}else if (dia === 7) {
    console.log('Sabado') 
}else {
    console.log('Dia invalido') 
}

console.log("=== COM SWITCH ===")

switch (dia) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça--feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
        break 
    case 7:
        console.log("Sabado")
        break   
    default:
        console.log("Dia invalido")
}