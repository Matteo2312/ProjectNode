const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Rootroot1*',
    database: 'revision',
    insecureAuth: true,
    authSwitchHandler: (data, callback) => {
        if (data.pluginName === 'root') {
            const password = 'Rootroot1*';
            const buffer = Buffer.from(password + '\0');
            callback(null, buffer);
        }
    }
});

function executeQuery(sqlQuery, callback) {
    connection.connect((err) => {
        if (err) {
            console.error('Erreur de connexion à la base de données : ' + err.stack);
            return callback(err, null);
        }

        console.log('Connecté à la base de données avec l\'ID ' + connection.threadId);

        connection.query(sqlQuery, (error, results, fields) => {
            connection.end();

            if (error) {
                console.error('Erreur lors de l\'exécution de la requête : ' + error);
                return callback(error, null);
            }

            callback(null, results);
        });
    });
}


const sqlQuery_all  = "SELECT * FROM revision.sujets_corrections ;";

const sqlQuery_math = "SELECT * FROM revision.sujets_corrections WHERE matiere LIKE '%math%';";
const sqlQuery_philosophie = "SELECT * FROM revision.sujets_corrections WHERE matiere LIKE '%philosophie%';";
const sqlQuery_physique = "SELECT * FROM revision.sujets_corrections WHERE matiere LIKE '%physique%';";
const sqlQuery_francais = "SELECT * FROM revision.sujets_corrections WHERE matiere LIKE '%francais%';";
const sqlQuery_histoire = "SELECT * FROM revision.sujets_corrections WHERE matiere LIKE '%histoire%';";

const sqlQuery_2022 = "SELECT * FROM revision.sujets_corrections WHERE annee = 2022;";
const sqlQuery_2020 = "SELECT * FROM revision.sujets_corrections WHERE annee = 2020;";
const sqlQuery_2021 = "SELECT * FROM revision.sujets_corrections WHERE annee = 2021;";
const sqlQuery_2023 = "SELECT * FROM revision.sujets_corrections WHERE annee = 2023;";

minDifficulte = 2;
maxDifficulte = 4;
const sqlQuery_difficulty = "SELECT * FROM revision.sujets_corrections WHERE difficulte BETWEEN ${minDifficulte} AND ${maxDifficulte};";


sujetId = 6;
const sqlQuery_id = "SELECT * FROM revision.sujets_corrections WHERE id = ${sujetId};";

const sqlQuery_France = "SELECT * FROM revision.sujets_corrections WHERE centreExamen LIKE '%France%';";
const sqlQuery_Polynesie = "SELECT * FROM revision.sujets_corrections WHERE centreExamen LIKE '%Polynesie%';";
const sqlQuery_Asie = "SELECT * FROM revision.sujets_corrections WHERE centreExamen LIKE '%Asie%';"
const sqlQuery_Antille = "SELECT * FROM revision.sujets_corrections WHERE centreExamen LIKE '%Antille%';";



sqlQuery = sqlQuery_all

app.get('/results', (req, res) => {
    const sqlQuery_all = "SELECT * FROM revision.sujets_corrections ;";
    const sqlQuery = sqlQuery_all;

    executeQuery(sqlQuery, (error, results) => {
        if (error) {
            console.error('Erreur : ' + error);
            return res.status(500).json({ error: 'Erreur lors de l\'exécution de la requête.' });
        }

        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});