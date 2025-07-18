const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function addition(nombre1,nombre2) {
    return nombre1 + nombre2
}
function soustraction(nombre1,nombre2) {
    return nombre1 - nombre2
}
function multiplication(nombre1,nombre2) {
    return nombre1 * nombre2
}
function division(nombre1,nombre2) {
    if (nombre2 == 0) {
        return 'Erreur : On ne peut pas diviser par 0'
    }
    return nombre1 / nombre2
}

function demanderNombre(message) {
    return new Promise((resolve) => {
        const poserQuestion = () => {
            rl.question(message, (input) => {
                const nombre = parseFloat(input.trim())
                
                // Vérifier si l'entrée est un nombre valide
                if (isNaN(nombre)) {
                    console.log("Erreur : Veuillez entrer un nombre valide.")
                    poserQuestion() // Redemander
                } else {
                    resolve(nombre)
                }
            })
        }
        poserQuestion()
    })
}

function demanderOperation(message) {
    return new Promise((resolve) => {
        const operationsValides = ['+', '-', '*', '/']
        
        const poserQuestion = () => {
            rl.question(message, (operation) => {
                const op = operation.trim()
                
                // Vérifier si l'opération est valide
                if (operationsValides.includes(op)) {
                    resolve(op)
                } else {
                    console.log(" Erreur : Opération non valide. Utilisez +, -, * ou /")
                    poserQuestion() // Redemander
                }
            })
        }
        poserQuestion()
    })
}

function demanderContinuer() {
    return new Promise((resolve) => {
        const poserQuestion = () => {
            rl.question('\nVoulez-vous faire un autre calcul ? (o/n) : ', (reponse) => {
                const rep = reponse.trim().toLowerCase()
                
                if (rep === 'o' || rep === 'oui') {
                    resolve(true)
                } else if (rep === 'n' || rep === 'non') {
                    resolve(false)
                } else {
                    console.log("Erreur : Veuillez répondre par 'o' (oui) ou 'n' (non)")
                    poserQuestion()
                }
            })
        }
        poserQuestion()
    })
}

async function effectuerCalcul() {
    try {
        const nombre1 = await demanderNombre('Entrez le premier nombre : ')
        const nombre2 = await demanderNombre('Entrez le deuxième nombre : ')
        const operation = await demanderOperation('Entrez une opération (+, -, *, /) : ')
        
        let resultat
        switch(operation) {
            case '+':
                resultat = addition(nombre1, nombre2)
                break
            case '-':
                resultat = soustraction(nombre1, nombre2)
                break
            case '*':
                resultat = multiplication(nombre1, nombre2)
                break
            case '/':
                resultat = division(nombre1, nombre2)
                break
            default:
                resultat = 'Opération non reconnue'
                return false
        }
        
        console.log(`Résultat : ${nombre1} ${operation} ${nombre2} = ${resultat}`)
        return true
    } catch (error) {
        console.error('Erreur :', error)
        return false
    }
}

async function calculatrice() {    
    let continuer = true
    
    while (continuer) {
        const calculReussi = await effectuerCalcul()
        
        if (calculReussi) {
            continuer = await demanderContinuer()
        } else {
            continuer = false
        }
    }
    rl.close()
}

// Lancer la calculatrice
calculatrice()







