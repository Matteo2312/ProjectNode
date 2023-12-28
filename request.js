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

// Exemple d'utilisation de la fonction avec une requête SQL
const sqlQueryExample = 'SELECT annee FROM projet_final.new_table;';
executeQuery(sqlQueryExample, (error, results) => {
    if (error) {
        console.error('Erreur : ' + error);
        return;
    }

    // Utilisez les résultats comme nécessaire
    console.log('Résultats de la requête :', results);
});
