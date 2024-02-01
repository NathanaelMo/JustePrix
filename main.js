async function chargerEtChoisirObjet() {
    try {
        // Chargement du fichier JSON
        const reponse = await fetch('./liste_objet.json');
        const data = await reponse.json();

        // Sélection aléatoire d'un objet
        const objetAleatoire = data[Math.floor(Math.random() * data.length)];

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