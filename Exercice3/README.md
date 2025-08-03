# Gestionnaire de Tâches

Un gestionnaire de tâches en console développé en JavaScript/Node.js qui permet de gérer nos tâches dans un fichier JSON.

## Fonctionnalités

- Ajouter une tâche avec une description
- Voir la liste des tâches (toutes, faites, non faites)
- Marquer une tâche comme faite
- Supprimer une tâche
- Voir les tâches par statut
- Sauvegarde automatique dans un fichier JSON
- Rechargement automatique au démarrage

## Installation et utilisation

### Démarrage
```bash
cd Exercice3

node gestionnaire-taches.js
```

## Interface utilisateur

L'application affiche un menu interactif avec les options suivantes :

```
GESTIONNAIRE DE TÂCHES
==========================
1. Ajouter une tâche
2. Voir toutes les tâches
3. Voir les tâches faites
4. Voir les tâches non faites
5. Marquer une tâche comme faite
6. Supprimer une tâche
7. Quitter
==========================
```

## Sauvegarde

Les tâches sont automatiquement sauvegardées dans le fichier `taches.json` 

## Fonctions principales

Crée une nouvelle tâche avec la description fournie.

Ajoute une nouvelle tâche à la liste.

Affiche les tâches selon le filtre :
- Toutes les tâches
- Seulement les tâches terminées
- Seulement les tâches en cours

Marque une tâche comme faite en utilisant son ID.

Supprime une tâche de la liste.

Sauvegarde toutes les tâches dans le fichier JSON.

Recharge les tâches depuis le fichier JSON au démarrage.

## Exemple d'utilisation

1. Lancez l'application : `node .\gestionnaire-taches.js `
2. Choisissez l'option 1 pour ajouter une tâche
3. Entrez "Faire les courses"
4. Visualisez vos tâches avec l'option 2
5. Marquez la tâche comme faite avec l'option 5
6. Quittez avec l'option 7

Les tâches seront automatiquement sauvegardées et rechargées lors du prochain démarrage.

## Fichiers du projet

- `gestionnaire-taches.js` : Fichier principal de l'application
- `package.json` : Configuration du projet Node.js
- `taches.json` : Fichier de sauvegarde
- `README.md` : Documentation du projet

## Structure du code

Le code est organisé en fonctions :
- Fonctions de gestion des tâches
- Fonctions d'affichage 
- Fonctions de sauvegarde et de rechargement
- Interface utilisateur interactive avec menu
