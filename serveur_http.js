const express = require('express') // chargement du module express
const config = require("./config.js") // chargement de la configuration
const util = require('util')
const fs = require("fs")




const base = config.base
const port_http = config.port_http



var app = express();
app.use("/", express.static(base+"/html", { index: 'index.html' }))

var server = app.listen(port_http, function () {
console.log('Express server listening on port ' + port_http)
});

app.use(express.urlencoded({ extended: true }))

app.post("/enregistrer_livre", function (req, res) {
    console.log("POST enregistrer_livre")
    console.log("req = "+util.inspect(req)) // voir l'attribut body
    console.log("titre = "+req.body.titre)
    console.log("auteur = "+req.body.auteur)
    console.log("annee = "+req.body.annee)
    app.use(express.json({ limit: '50mb' }))
    app.use(express.urlencoded({ extended: true, limit: '50mb' }))

    let v = verifier_champs(req.body,livre_verif)

    console.log("verif = "+JSON.stringify(v))

    res.send(v)

    
    })
