# Calculatrice Console 

Une calculatrice console en Node.js qui permet d'effectuer les quatre opérations mathématiques de base.

## Fonctionnalités

- **Opérations de base** : Addition (+), Soustraction (-), Multiplication (*), Division (/)
- **Gestion d'erreurs** pour les entrées non numériques
- **Boucle interactive** permettant d'effectuer plusieurs calculs consécutifs
- **Interface utilisateur** avec validation en temps réel

## Installation et utilisation

### Prérequis
- Node.js

### Lancement
```bash
node calculatrice.js
```

## Guide d'utilisation

1. **Lancez la calculatrice**
2. **Entrez les nombres**
3. **Choisissez l'opération** : `+`, `-`, `*` ou `/`
4. **Consultez le résultat**
5. **Choisissez de continuer** (`o`/`oui`) ou **quitter** (`n`/`non`)

### Exemple d'utilisation
```
Entrez le premier nombre : 15.5
Entrez le deuxième nombre : 7.3
Entrez une opération (+, -, *, /) : +
Résultat : 15.5 + 7.3 = 22.8

Voulez-vous faire un autre calcul ? (o/n) : o

Entrez le premier nombre : 10
Entrez le deuxième nombre : 0
Entrez une opération (+, -, *, /) : /
Résultat : 10 / 0 = Erreur : On ne peut pas diviser par 0

Voulez-vous faire un autre calcul ? (o/n) : n

## Contraintes respectées 
```

- Une fonction par opération
- Utilisation de fonctions 
- Gestion complète des erreurs
- Boucle pour recommencer 