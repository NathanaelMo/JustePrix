const express = require('express');
const config = require('./config.js');
const { chargerEtChoisirObjet } = require('./obtenirObjetAleatoire.js');

const base = config.base;
const port_http = config.port_http;

const app = express();

// Ajoutez cette ligne après la création de l'application Express
app.use(express.static('Front')); // Remplacez 'public' par le chemin vers votre dossier contenant index.html

app.get('/getRandomObject', async (req, res) => {
    try {
        const objetChoisi = await chargerEtChoisirObjet();
        if (objetChoisi) {
            console.log("Objet choisi:", objetChoisi.nom, "Prix:", objetChoisi.prix);
            res.json(objetChoisi);
        } else {
            res.status(500).json({ error: 'Erreur lors du chargement ou du traitement du fichier JSON' });
        }
    } catch (error) {
        console.error('Erreur dans la route getRandomObject:', error);
        res.status(500).json({ error: 'Erreur lors du traitement' });
    }
});

const server = app.listen(port_http, () => {
    console.log('Express server listening on port ' + port_http);
});
