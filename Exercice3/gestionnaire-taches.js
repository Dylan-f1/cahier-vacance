const fs = require('fs')
const readline = require('readline')

// Fichier de sauvegarde des tâches
const FICHIER_TACHES = './taches.json'

// Liste des tâches (structure inspirée de l'exemple)
let taches = []
let prochainId = 1

// Interface readline pour l'interaction console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Structure d'une tâche (exemple fourni)
const creerTache = (description) => {
    return {
        id: prochainId++,
        description: description,
        status: "à faire"
    }
}

// Fonction pour ajouter une tâche
function ajouterTache(description) {
    const nouvelleTache = creerTache(description)
    taches.push(nouvelleTache)
    console.log(`Tâche ajoutée : "${description}" (ID: ${nouvelleTache.id})`)
    sauvegarderTaches()
}

// Fonction pour voir la liste des tâches
function voirTaches(filtre = 'toutes') {
    let tachesFiltrees = []
    
    switch(filtre) {
        case 'faites':
            tachesFiltrees = taches.filter(t => t.status === "faite")
            break
        case 'non-faites':
            tachesFiltrees = taches.filter(t => t.status === "à faire")
            break
        default:
            tachesFiltrees = taches
    }

    if (tachesFiltrees.length === 0) {
        console.log(`Aucune tâche ${filtre === 'toutes' ? '' : filtre} trouvée.`);
        return
    }

    console.log(`\nListe des tâches ${filtre === 'toutes' ? '' : '(' + filtre + ')'} :`)
    console.log('=====================================')
    
    tachesFiltrees.forEach(tache => {
        const statut = tache.status === "faite" ? "✅" : "⏳"
        console.log(`${statut} [${tache.id}] ${tache.description} (${tache.status})`)
    })
    console.log('=====================================\n')
}

// Fonction pour marquer une tâche comme faite (inspirée de l'exemple)
function terminerTache(id) {
    const tache = taches.find(t => t.id === id)
    if (tache) {
        if (tache.status === "faite") {
            console.log(`La tâche "${tache.description}" est déjà marquée comme faite.`)
        } else {
            tache.status = "faite"
            console.log(`Tâche terminée : "${tache.description}"`)
            sauvegarderTaches()
        }
    } else {
        console.log(`Aucune tâche trouvée avec l'ID ${id}.`)
    }
}

// Fonction pour supprimer une tâche
function supprimerTache(id) {
    const index = taches.findIndex(t => t.id === id)
    if (index !== -1) {
        const tacheSupprimee = taches[index]
        taches.splice(index, 1)
        console.log(`Tâche supprimée : "${tacheSupprimee.description}"`)
        sauvegarderTaches()
    } else {
        console.log(`Aucune tâche trouvée avec l'ID ${id}.`)
    }
}

// Fonction pour sauvegarder les tâches dans un fichier JSON
function sauvegarderTaches() {
    try {
        const donneesJson = JSON.stringify(taches, null, 2)
        fs.writeFileSync(FICHIER_TACHES, donneesJson)
        console.log('Tâches sauvegardées.')
    } catch (erreur) {
        console.error('Erreur lors de la sauvegarde :', erreur.message)
    }
}

// Fonction pour recharger les tâches depuis le fichier JSON
function rechargerTaches() {
    try {
        if (fs.existsSync(FICHIER_TACHES)) {
            const donnees = fs.readFileSync(FICHIER_TACHES, 'utf8')
            taches = JSON.parse(donnees)
            
            // Mettre à jour le prochain ID
            if (taches.length > 0) {
                prochainId = Math.max(...taches.map(t => t.id)) + 1
            }
            
            console.log(`📂 ${taches.length} tâche(s) rechargée(s) depuis le fichier.`)
        } else {
            console.log('📁 Aucun fichier de sauvegarde trouvé. Démarrage avec une liste vide.')
        }
    } catch (erreur) {
        console.error('Erreur lors du rechargement :', erreur.message)
        taches = []
    }
}

// Fonction pour afficher le menu
function afficherMenu() {
    console.log('\nGESTIONNAIRE DE TÂCHES')
    console.log('==========================')
    console.log('1. Ajouter une tâche')
    console.log('2. Voir toutes les tâches')
    console.log('3. Voir les tâches faites')
    console.log('4. Voir les tâches non faites')
    console.log('5. Marquer une tâche comme faite')
    console.log('6. Supprimer une tâche')
    console.log('7. Quitter')
    console.log('==========================')
}

// Fonction pour traiter le choix de l'utilisateur
function traiterChoix(choix) {
    switch(choix) {
        case '1':
            rl.question('📝 Entrez la description de la tâche : ', (description) => {
                if (description.trim()) {
                    ajouterTache(description.trim())
                } else {
                    console.log('La description ne peut pas être vide.')
                }
                lancerMenu()
            })
            break;
            
        case '2':
            voirTaches('toutes')
            lancerMenu()
            break;
            
        case '3':
            voirTaches('faites')
            lancerMenu()
            break;
            
        case '4':
            voirTaches('non-faites')
            lancerMenu()
            break;
            
        case '5':
            rl.question('🎯 Entrez l\'ID de la tâche à marquer comme faite : ', (id) => {
                const idNum = parseInt(id)
                if (!isNaN(idNum)) {
                    terminerTache(idNum)
                } else {
                    console.log('Veuillez entrer un ID valide.')
                }
                lancerMenu()
            })
            break;
            
        case '6':
            rl.question('🗑️  Entrez l\'ID de la tâche à supprimer : ', (id) => {
            const idNum = parseInt(id)
                if (!isNaN(idNum)) {
                    supprimerTache(idNum)
                } else {
                    console.log('Veuillez entrer un ID valide.')
                }
                lancerMenu()
            })
            break;
            
        case '7':
            console.log('Au revoir !')
            rl.close()
            break;
            
        default:
            console.log('Choix invalide. Veuillez sélectionner une option entre 1 et 7.')
            lancerMenu()
    }
}

// Fonction pour lancer le menu interactif
function lancerMenu() {
    afficherMenu()
    rl.question('Votre choix : ', traiterChoix)
}

// Fonction principale
function main() {
    console.log('Démarrage du gestionnaire de tâches...\n')
    
    // Recharger les tâches automatiquement au démarrage
    rechargerTaches()
    
    // Lancer le menu interactif
    lancerMenu()
}

// Démarrer l'application
main(); 