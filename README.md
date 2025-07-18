# Calculatrice Console 🔢

Une calculatrice console interactive développée en Node.js qui permet d'effectuer les opérations mathématiques de base.

## Fonctionnalités ✨

- **Opérations de base** : Addition, Soustraction, Multiplication, Division
- **Interface utilisateur intuitive** avec menu interactif
- **Gestion d'erreurs robuste** pour les entrées non numériques
- **Validation de la division par zéro**
- **Boucle continue** permettant d'effectuer plusieurs calculs
- **Code modulaire** avec une fonction dédiée pour chaque opération

## Installation et utilisation 🚀

### Prérequis
- Node.js (version 12 ou supérieure)

### Lancement
```bash
# Méthode 1 : Exécution directe
node calculatrice.js

# Méthode 2 : Via npm
npm start
```

## Utilisation 📖

1. **Lancez la calculatrice** avec l'une des commandes ci-dessus
2. **Choisissez une opération** dans le menu (1-5)
3. **Entrez le premier nombre** lorsque demandé
4. **Entrez le second nombre** lorsque demandé
5. **Consultez le résultat** affiché
6. **Choisissez** de continuer ou quitter

### Exemple d'utilisation
```
=== CALCULATRICE ===
1. Addition (+)
2. Soustraction (-)
3. Multiplication (*)
4. Division (/)
5. Quitter
====================
Choisissez une opération (1-5) : 1
Entrez le premier nombre : 15.5
Entrez le second nombre : 7.3

✅ Résultat : 15.5 + 7.3 = 22.8

Voulez-vous effectuer un autre calcul ? (o/n) : o
```

## Structure du code 🏗️

- **Fonctions d'opération** : `addition()`, `soustraction()`, `multiplication()`, `division()`
- **Validation des entrées** : `estNombreValide()`, `demanderNombre()`
- **Interface utilisateur** : `afficherMenu()`, `demanderChoix()`
- **Logique principale** : `calculatrice()` avec boucle et gestion d'erreurs
- **Switch case** pour la sélection d'opération

## Gestion d'erreurs 🛡️

- ✅ Validation des entrées numériques
- ✅ Protection contre la division par zéro
- ✅ Validation des choix du menu (1-5)
- ✅ Gestion des réponses oui/non pour continuer

## Contraintes respectées ✅

- ✅ Fonction dédiée pour chaque opération
- ✅ Aucune répétition de code inutile
- ✅ Gestion complète des erreurs
- ✅ Menu interactif avec switch case
- ✅ Boucle pour recommencer
- ✅ Interface utilisateur claire 