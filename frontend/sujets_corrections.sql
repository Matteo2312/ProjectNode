CREATE TABLE sujets_corrections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lien VARCHAR(255) NOT NULL,
    annee YEAR NOT NULL,
    estCorrection BOOLEAN NOT NULL,
    matiere VARCHAR(50) NOT NULL,
    centreExamen VARCHAR(50) NOT NULL,
    difficulte INT NOT NULL
);
