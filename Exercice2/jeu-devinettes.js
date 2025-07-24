const readline = require('readline')
const fs = require('fs')
const path = require('path')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function obtenirMax(niveau) {
    let max;
    if (niveau === "facile") max = 50;
    else if (niveau === "moyen") max = 100;
    else max = 500;
    return max;
}

function genererNombreMystere(niveau) {
    const max = obtenirMax(niveau);
    return Math.floor(Math.random() * max) + 1;
}

function demanderNiveau() {
    return new Promise((resolve) => {
        const poserQuestion = () => {            
            rl.question('Choisissez votre niveau (facile, moyen, difficile) : ', (input) => {
                const niveau = input.trim().toLowerCase()
                
                if (niveau === 'facile' || niveau === 'moyen' || niveau === 'difficile') {
                    resolve(niveau)
                } else {
                    console.log('Erreur : Veuillez choisir facile, moyen ou difficile.')
                    poserQuestion()
                }
            })
        }
        poserQuestion()
    })
}


function demanderNombre(niveau) {
    return new Promise((resolve) => {
        const max = obtenirMax(niveau);
        
        const poserQuestion = () => {
            rl.question(`Devinez le nombre (entre 1 et ${max}) : `, (input) => {
                const nombre = parseInt(input.trim())
                
                if (isNaN(nombre)) {
                    console.log('Erreur : Veuillez entrer un nombre valide.')
                    poserQuestion()
                } else if (nombre < 1 || nombre > max) {
                    console.log(`Erreur : Le nombre doit être entre 1 et ${max}.`)
                    poserQuestion()
                } else {
                    resolve(nombre)
                }
            })
        }
        poserQuestion()
    })
}




function enregistrerPartie(tentatives, nombreMystere, niveau, gagne) {
    const maintenant = new Date()
    const dateHeure = maintenant.toLocaleString('fr-FR')
    
    const ligne = `${dateHeure} | Niveau: ${niveau} | Nombre: ${nombreMystere} | Tentatives: ${tentatives} | ${gagne ? 'GAGNÉ' : 'ABANDONNÉ'}\n`
    
    try {
        fs.writeFileSync('historique-parties.txt', ligne, { flag: 'a' })
        console.log('Le score a été sauvegardé !')
    } catch (error) {
        console.log('Erreur lors de l\'enregistrement :', error.message)
    }
}


async function jouerPartie() {
    try {
        const niveau = await demanderNiveau()
        
        console.log(`\nNiveau ${niveau} sélectionné !`)
        
        const nombreMystere = genererNombreMystere(niveau)
        const max = obtenirMax(niveau);
        
        console.log(`Je pense à un nombre entre 1 et ${max}...`)
        let tentatives = 0
        let gagne = false
        
        console.log('Essayez de le deviner !\n')
        
        while (!gagne) {
            const proposition = await demanderNombre(niveau)
            tentatives++
            
            if (proposition === nombreMystere) {
                gagne = true
                console.log(`\nBRAVO ! Vous avez trouvé le nombre ${nombreMystere} !`)
                console.log(`Vous avez réussi en ${tentatives} tentative${tentatives > 1 ? 's' : ''} !`)
            } else if (proposition < nombreMystere) {
                console.log('📈 Plus haut !')
            } else {
                console.log('📉 Plus bas !')
            }
        }
        
        enregistrerPartie(tentatives, nombreMystere, niveau, gagne)
        
        return true
    } catch (error) {
        console.error('Erreur pendant la partie :', error.message)
    return false
    }
}


function demanderRejouer() {
    return new Promise((resolve) => {
        const poserQuestion = () => {
            rl.question('\nVoulez-vous jouer une nouvelle partie ? (o/n) : ', (reponse) => {
                const rep = reponse.trim().toLowerCase()
                
                if (rep === 'o' || rep === 'oui') {
                    resolve(true)
                } else if (rep === 'n' || rep === 'non') {
                    resolve(false)
                } else {
                    console.log('Erreur : Veuillez répondre par \'o\' (oui) ou \'n\' (non)')
                    poserQuestion()
                }
            })
        }
        poserQuestion()
    })
}


async function demarrerJeu() {
    console.log('===== JEU DE DEVINETTES =====')
    console.log('Bienvenue dans le jeu de devinettes !')
    console.log('Le but est de deviner le nombre mystère en un minimum de tentatives.\n')
    

    const fichierHistorique = 'historique-parties.txt'
    if (!fs.existsSync(fichierHistorique)) {
        fs.writeFileSync(fichierHistorique, '=== HISTORIQUE DES PARTIES ===\n')
    }
    
    let continuerAJouer = true
    
    while (continuerAJouer) {
        const partieReussie = await jouerPartie()
        
        if (partieReussie) {
            continuerAJouer = await demanderRejouer()
        } else {
            console.log('Une erreur s\'est produite. Fin du jeu.')
            continuerAJouer = false
        }
    }
    
    console.log('\nMerci d\'avoir joué ! À bientôt !')
    rl.close()
}


demarrerJeu() 