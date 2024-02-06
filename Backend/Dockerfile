# Utilisez une image de base Node.js
FROM node:14-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers nécessaires dans le conteneur
COPY package.json .
COPY package-lock.json .

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers
COPY . .

# Exposez le port sur lequel l'application écoute
EXPOSE 4000

# Commande pour démarrer l'application
CMD ["npm", "start"]
