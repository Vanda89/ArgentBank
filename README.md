# Projet Bootcamp Argent Bank - Utilisez une API pour un compte utilisateur bancaire avec React 

## Scénario

Vous venez de commencer à travailler chez Remede Agency, une agence spécialisée dans le développement d'applications web. L’équipe est principalement composée de développeurs back-end et vient de commencer à recruter d'autres spécialistes front-end.


  <img src="/client/designs/img/bank-tree.jpeg" align="center" />


## Objectif du projet

Le projet concerne la création d'une application web pour **Argent Bank**, une nouvelle banque qui cherche à percer dans le secteur financier. Le projet se décompose en deux phases :

### Phase 1 : Authentification des utilisateurs

- **Créer une application web complète et responsive** permettant aux clients de se connecter et de gérer leurs comptes et profils.
- **Fonctionnalités requises :**
  - Visiter la page d'accueil.
  - Se connecter au système.
  - Se déconnecter du système.
  - Voir uniquement les informations relatives à son propre profil après une connexion réussie.
  - Modifier le profil et conserver les données dans la base de données.

### Phase 2 : Transactions

- Spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission.
- Les utilisateurs devront pouvoir :
  - Visualiser toutes leurs transactions pour le mois en cours, groupées par compte.
  - Visualiser les détails d'une transaction dans une autre vue.
  - Ajouter, modifier ou supprimer des informations sur une transaction.
- Fournir un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger.

## Technologies

- **Front-end :** React, Redux
- **Back-end :** API déjà développées par l’équipe back-end
- **Documentation :** Swagger pour la documentation des API

---

## Getting Started

### Prérequis

Argent Bank utilise la pile technologique suivante :

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Veuillez vous assurer que vous disposez des bonnes versions et téléchargez les deux paquets. Vous pouvez vérifier cela en utilisant les commandes suivantes dans votre terminal :

```bash
# Vérifier la version de Node.js
node --version

# Vérifier la version de MongoDB
mongo --version
```

### Instructions

- Forker le repository Argent Bank sur GitHub.
- Cloner le repo sur votre ordinateur.
- Ouvrir une fenêtre de terminal dans le projet cloné.
- Exécuter les commandes suivantes :

**Backend**
```bash
# Accéder au dossier api
cd api

# Installer les dépendances
npm install

# Démarrer le serveur de développement local
npm run dev:server

# Peupler la base de données avec deux utilisateurs
npm run populate-db
```
Votre serveur devrait maintenant être en cours d'exécution à l'adresse http://localhost:3001 et vous aurez deux utilisateurs dans votre base de données MongoDB !

**Frontend**
```bash
Copier le code
# Accéder au dossier client
cd client

# Installer les dépendances
npm install

# Démarrer le serveur de développement local
npm run dev
```
Votre serveur devrait maintenant être en cours d'exécution à l'adresse http://localhost:5173 et vous aurez maintenant la visualisation de l'application Argent Bank !

---

## Informations de connexion :
**Tony Stark**<br>
Prénom : Tony<br>
Nom : Stark<br>
Email : tony@stark.com<br>
Mot de passe : password123<br>
<br>
**Steve Rogers**<br>
Prénom : Steve<br>
Nom : Rogers<br>
Email : steve@rogers.com<br>
Mot de passe : password456<br>
<br>

## Actifs de conception : 
- Le HTML statique et le CSS ont été créés pour la plupart du site et se trouvent dans : [/designs](/client/designs).<br>
- Pour certaines des fonctionnalités dynamiques, comme le basculement de l'édition des utilisateurs, il y a un mock-up dans : [/designs/wireframes/edit-user-name.png](/client/designs/wireframes/edit-user-name.png).<br>
- Et pour le modèle d'API que vous proposerez pour les transactions, le wireframe peut être trouvé dans : [/designs/wireframes/transactions.png](/client/designs/wireframes/transactions.png).<br>
<br>

## Liens utiles

- **Phase 1 :** Application web complète permettant l'authentification des utilisateurs : [Vue de l'interface connectée](https://drive.google.com/drive/folders/1LqU2Z5zVkXRz_MQuPb8kn0DzY3W_XEnP?usp=drive_link)
- **Phase 2 :** Document de spécification des API pour les transactions, exporté au format YAML et suivant la syntaxe Swagger : [.yaml](https://drive.google.com/file/d/1ikD2JjaqTeeOwE24uMoyM8kfkh9w43AY/view?usp=drive_link)
