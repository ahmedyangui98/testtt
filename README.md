# M.TEk

Bienvenue dans le Gestionnaire de Tâches M.TEK, un projet permettant de gérer efficacement vos tâches.

## Table des matières

- [Introduction](#introduction)
- [Fonctionnalités](#fonctionnalités)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
- [TEST (POSTMAN)](#TEST(POSTMAN))
- [Interface graphique](#Interfacegraphique)

## Introduction

 Ce projet est divisé en deux parties : le frontend et le backend. Le frontend est construit avec React, tandis que le backend utilise Express Generator pour simplifier la structure du serveur Node.js et MongoDB pour la persistance des données.


## Fonctionnalités

Back-end :

- **API RESTful :** Créez, lisez, mettez à jour et supprimez des tâches via une API RESTful.
- **Base de Données :** Utilisation de MongoDB avec Mongoose pour stocker les données des tâches.
- **Gestion des Cookies :** Intégration de cookie-parser pour la gestion des cookies.

Front-end :

- **Interface Utilisateur Réactive :** Construit avec ReactStrap pour une expérience utilisateur moderne.
- organisation des tâches par drag and drop :  une fonctionnalité permettant aux utilisateurs de réorganiser l'ordre des tâches affichées en utilisant une interaction de glisser-déposer **(drag and drop)**.


### Prérequis

 **Frontend:**

- React :
- ReactDOM  :
- Reactstrap :
- @fortawesome/react-fontawesome :
- axios :
- react-dnd : 
- react-dnd-html5-backend :
- react-router-dom :
**Backend:**

- cookie-parser : ~1.4.4
- debug : ~2.6.9
- express : ~4.16.1
- http-errors : ~1.6.3
- jade : ~1.11.0
- mongoose : ^8.1.1
- morgan : ~1.9.1
- jest : ^29.7.0 (devDependency)

### Installation

Clonez le dépôt , installez les dépendances et puis tapez sur le terminale **npm start** .

### TEST (POSTMAN)

cd Backend 
npm start

**Ajouter une tâche (POST /tasks)**

- Sélectionnez la méthode POST.
- Entrez l'URL : http://localhost:4000/tasks.
- Allez dans l'onglet "Body".
- Sélectionnez "raw" et choisissez le format JSON.
- Entrez les détails de votre tâche, par exemple :

{
  "title": "Nouvelle Tâche",
  "description": "Description de la nouvelle tâche",
  "due_date": "2024-02-10",
  "status": "To Do"
}

- Vous devriez recevoir une réponse avec le statut 201 et un message indiquant que la tâche a été ajoutée avec succès.

**Modifier une tâche (PUT /tasks/:taskId)**

- Sélectionnez la méthode PUT.
- Entrez l'URL : http://localhost:4000/tasks/{taskId}, où {taskId} est l'ID de la tâche que vous souhaitez mettre à jour.
- Allez dans l'onglet "Body".
- Sélectionnez "raw" et choisissez le format JSON.
- Entrez les détails mis à jour de votre tâche.
- Vous devriez recevoir une réponse avec le statut 200 et un message indiquant que la tâche a été mise à jour avec succès.

**Supprimer une tâche (DELETE /tasks/:taskId)**

- Sélectionnez la méthode DELETE.
- Entrez l'URL : http://localhost:4000/tasks/{taskId}, où {taskId} est l'ID de la tâche que vous - - souhaitez supprimer.
- Vous devriez recevoir une réponse avec le statut 200 et un message indiquant que la tâche a été supprimée avec succès.

**Obtenir la liste des tâches (GET /tasks)**

- Sélectionnez la méthode GET.
- Entrez l'URL : http://localhost:4000/tasks.
- Vous devriez recevoir une réponse avec le statut 200 et la liste des tâches actuelles.

### Interface graphique

![partie ajout des taches](C:\Users\ASUS\Downloads\PLUG\Capture d'écran 2024-02-06 045746.png)

![partie Gestion des taches ](C:\Users\ASUS\Downloads\PLUG\Capture d'écran 2024-02-06 045746.png)

[![Démo ajouter une tache](C:\Users\ASUS\Downloads\PLUG\add task.mp4)](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXl4cGczaWM3MG1kdmJiYnN0ejFhNHM0OG9xeHVnbGJxazM4NmFmdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oW0XnreZUrClJlnpro/giphy.gif)

[![Démo Drag and Drop et  filtre par status ou date  ](C:\Users\ASUS\Downloads\PLUG\giphy.mp4)](https://media.giphy.com/media/mycP1JsbluR0Pvceab/giphy.gif)



