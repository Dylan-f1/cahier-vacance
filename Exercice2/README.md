# Jeu de Devinettes Console 

Un jeu de devinettes interactif en Node.js avec plusieurs niveaux de difficulté et enregistrement automatique des parties.

## Fonctionnalités

- **3 niveaux de difficulté** :
  - **Facile** : Nombres de 1 à 50
  - **Moyen** : Nombres de 1 à 100  
  - **Difficile** : Nombres de 1 à 500

- **Système d'indices** : "Plus haut" ou "Plus bas" pour vous guider
- **Compteur de tentatives** : Affichage du nombre d'essais à la fin de chaque partie
- **Boucle de jeu** : Possibilité de rejouer
- **Enregistrement automatique** : Toutes les parties sont sauvegardées dans `historique-parties.txt`
- **Gestion d'erreurs complète** : Protection contre les entrées invalides
- **Interface intuitive** : Messages clairs avec emojis

## Installation et Lancement

### Prérequis
- Node.js (version 12 ou supérieure)

### Démarrage rapide
Avec npm :
```bash
cd Exercice2
npm start
```

##  Guide d'utilisation

### 1. Choisir le niveau de difficulté
```
=== CHOIX DU NIVEAU DE DIFFICULTÉ ===
1. Facile (1-50)
2. Moyen (1-100)
3. Difficile (1-500)
Choisissez votre niveau (facile, moyen, difficile) : 
```

### 2. Deviner le nombre
```
 Niveau Moyen sélectionné !
Je pense à un nombre entre 1 et 100...
Essayez de le deviner ! 

Devinez le nombre (entre 1 et 100) : 50
📈 Plus haut !
Devinez le nombre (entre 1 et 100) : 75
📉 Plus bas !
Devinez le nombre (entre 1 et 100) : 62

BRAVO ! Vous avez trouvé le nombre 62 !
Vous avez réussi en 3 tentatives !
```

### 3. Rejouer ou quitter
```
Voulez-vous jouer une nouvelle partie ? (o/n) : o
```

## Historique des parties

Chaque partie est automatiquement enregistrée dans le fichier `historique-parties.txt` avec :
- Date et heure de la partie
- Niveau de difficulté choisi
- Nombre mystère à deviner
- Nombre de tentatives utilisées
- Statut (GAGNÉ/ABANDONNÉ)

### Exemple d'historique :
```
=== HISTORIQUE DES PARTIES ===
12/12/2024 14:30:25 | Niveau: moyen | Nombre: 62 | Tentatives: 3 | GAGNÉ
12/12/2024 14:35:10 | Niveau: difficile | Nombre: 347 | Tentatives: 8 | GAGNÉ
```

## Gestion des erreurs

## Structure du code

Le projet respecte les contraintes demandées avec :

### Fonctions principales :
- `demarrerJeu()` - Initialise et lance le jeu principal
- `jouerPartie()` - Gère une partie complète de A à Z
- `demanderRejouer()` - Propose de recommencer ou quitter
- `demanderNiveau()` - Sélection du niveau de difficulté
- `demanderNombre()` - Saisie sécurisée des propositions
- `genererNombreAleatoire()` - Génération du nombre mystère
- `enregistrerPartie()` - Enregistrer chaque partie

## Exemple de partie complète

```
===== JEU DE DEVINETTES =====
Biencenue dans le jeu de devinettes !
Le but est de deviner le nombre mystère en un minimun de tentatives.

Choisissez votre niveau (facile, moyen, difficile) : facile

Niveau facile sélectionné !
Je pense à un nombre entre 1 et 50 
Essayez de le deviner ! 

Devinez le nombre (entre 1 et 50) : 25
📈 Plus haut !
Devinez le nombre (entre 1 et 50) : 37
📉 Plus bas !
Devinez le nombre (entre 1 et 50) : 31
📈 Plus haut !
Devinez le nombre (entre 1 et 50) : 34

 BRAVO ! Vous avez trouvé le nombre 34 !
 Vous avez réussi en 4 tentatives !
 Le score a été sauvegardé !
 Voulez-vous jouer une nouvelle partie ? (o/n) : n

 Merci d'avoir joué ! À bientôt !
```

---

**Amusez-vous bien ! 🎉** 