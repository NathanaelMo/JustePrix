const path = require('path');
const fs = require('fs').promises;

const filePath = path.resolve(__dirname, 'liste_objet.json');

async function chargerEtChoisirObjet() {
    try {
        // Chargement du fichier JSON
        const dataBuffer = await fs.readFile(filePath);
        const dataString = dataBuffer.toString('utf-8');
        const parsedData = JSON.parse(dataString);

        // Sélection aléatoire d'un objet
        const objetAleatoire = parsedData.objets[Math.floor(Math.random() * parsedData.objets.length)];

        // Retourne l'objet et son prix
        return objetAleatoire;
    } catch (error) {
        console.error('Erreur lors du chargement ou du traitement du fichier JSON:', error);
        return null; // Retourne null en cas d'erreur
    }
}

module.exports = { chargerEtChoisirObjet };
