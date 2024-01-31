const fs = require('fs').promises;

async function chargerEtChoisirObjet() {
    try {
        // Chargement du fichier JSON
        const data = await fs.readFile('./liste_objet.json', 'utf-8');
        const parsedData = JSON.parse(data);

        // Sélection aléatoire d'un objet
        const objetAleatoire = parsedData[Math.floor(Math.random() * parsedData.length)];

        // Retourne l'objet et son prix
        return objetAleatoire;
    } catch (error) {
        console.error('Erreur lors du chargement ou du traitement du fichier JSON:', error);
        return null; // Retourne null en cas d'erreur
    }
}

// Votre fonction principale
async function main() {
    try {
        const objetChoisi = await chargerEtChoisirObjet();
        if (objetChoisi) {
            console.log("Objet choisi:", objetChoisi.nom, "Prix:", objetChoisi.prix);
            // Autres logiques en utilisant 'objetChoisi'
        }
    } catch (error) {
        console.error('Erreur dans main:', error);
    }
}
main();
