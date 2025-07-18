const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function addition(a,b) {
    return a + b
}
function soustraction(a,b) {
    return a - b
}
function multiplication(a,b) {
    return a * b
}
function division(a,b) {
    if (b == 0) {
        return 'Erreur : On ne peut pas diviser par 0'
    }
    return a / b
}

function operation() {
   if (operation == addition) {
    return nombre1 + nombre2
   }
    else if (operation == soustraction) {
    return nombre1 - nombre2
   }
    else if (operation == multiplication) {
    return nombre1 * nombre2
   }
    else if (operation == division) {
    return nombre1 / nombre2
   }
}

const nombre1 = rl.question('Entrez un nombre : ', (nombre) => {
    console.log(`Vous avez entré : ${nombre}`)
    rl.close()
})
const nombre2 = rl.question('Entrez un nombre : ', (nombre) => {
    console.log(`Vous avez entré : ${nombre}`)
    rl.close()
})

const operation = rl.question('Entrez une opération : ', (operation) => {
    console.log(`Vous avez entré : ${operation}`)
    rl.close()
})







