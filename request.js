const mysql = require('mysql');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'projet_final',
    insecureAuth: true,
    authSwitchHandler: (data, callback) => {
        if (data.pluginName === 'root') {
            const password = 'root';
            const buffer = Buffer.from(password + '\0');
            callback(null, buffer);
        }
    }
});

// Fonction pour exécuter une requête SQL
function executeQuery(sqlQuery, callback) {
    connection.connect((err) => {
        if (err) {
            console.error('Erreur de connexion à la base de données : ' + err.stack);
            return callback(err, null);
        }

        console.log('Connecté à la base de données avec l\'ID ' + connection.threadId);

        // Exécutez la requête SQL
        connection.query(sqlQuery, (error, results, fields) => {
            // Fermez la connexion à la base de données, même en cas d'erreur
            connection.end();

            if (error) {
                console.error('Erreur lors de l\'exécution de la requête : ' + error);
                return callback(error, null);
            }

            // Renvoie les résultats via le callback
            callback(null, results);
        });
    });
}
//get all :
const sqlQuery_all  = "SELECT * FROM projet_final.new_table ;";


//get by subject :
const sqlQuery_math = "SELECT * FROM projet_final.new_table WHERE matiere LIKE '%math%';";
const sqlQuery_philosophie = "SELECT * FROM projet_final.new_table WHERE matiere LIKE '%philosophie%';";
const sqlQuery_physique = "SELECT * FROM projet_final.new_table WHERE matiere LIKE '%physique%';";
const sqlQuery_francais = "SELECT * FROM projet_final.new_table WHERE matiere LIKE '%francais%';";
const sqlQuery_histoire = "SELECT * FROM projet_final.new_table WHERE matiere LIKE '%histoire%';";

//By year :
const sqlQuery_2022 = `SELECT * FROM projet_final.new_table WHERE annee = 2022;`;
const sqlQuery_2020 = `SELECT * FROM projet_final.new_table WHERE annee = 2020;`;
const sqlQuery_2021 = `SELECT * FROM projet_final.new_table WHERE annee = 2021;`;
const sqlQuery_2023 = `SELECT * FROM projet_final.new_table WHERE annee = 2023;`;

//By dificulty :
minDifficulte = 2;
maxDifficulte = 4; //to be changed
const sqlQuery_difficulty = `SELECT * FROM projet_final.new_table WHERE difficulte BETWEEN ${minDifficulte} AND ${maxDifficulte};`;


//By ID
sujetId = 6; //To be changed
const sqlQuery_id = `SELECT * FROM projet_final.new_table WHERE id = ${sujetId};`;

//By exa center :
const sqlQuery_France = "SELECT * FROM projet_final.new_table WHERE centreExamen LIKE '%France%';";
const sqlQuery_Polynesie = "SELECT * FROM projet_final.new_table WHERE centreExamen LIKE '%Polynesie%';";
const sqlQuery_Asie = "SELECT * FROM projet_final.new_table WHERE centreExamen LIKE '%Asie%';"
const sqlQuery_Antille = "SELECT * FROM projet_final.new_table WHERE centreExamen LIKE '%Antille%';";



sqlQuery = sqlQuery_all //Change of the query : test

executeQuery(sqlQuery, (error, results) => {
    if (error) {
        console.error('Erreur : ' + error);
        return;
    }

    // Utilisez les résultats comme nécessaire
    console.log('Résultats de la requête :', results);
});

