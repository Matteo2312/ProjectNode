import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 3000;

app.use(cors()); 

const subjects = [
    {
      url: 'https://www.sujetdebac.fr/sujets-e3c-pdf/spe-mathematiques/e3c-spe-mathematiques-premiere-02614-sujet-officiel.pdf',
      year: 2021,
      estCorrection: 0,
      matiere: 'Math',
      centreExamen: 'France',
      difficulte: 3,
    },
    {
      url: 'https://www.sujetdebac.fr/sujets-e3c-pdf/spe-mathematiques/e3c-spe-mathematiques-premiere-02634-sujet-officiel.pdf',
      year: 2021,
      estCorrection: 0,
      matiere: 'Math',
      centreExamen: 'France',
      difficulte: 5,
    },
    {
      url: 'https://www.sujetdebac.fr/annales-pdf/2021/francais-premiere-2021-antilles-guyane-1-corrige-officiel.pdf',
      year: 2021,
      estCorrection: 1,
      matiere: 'Français',
      centreExamen: 'Antilles',
      difficulte: 2,
    },
    {
      url: 'https://www.sujetdebac.fr/annales-pdf/2021/francais-premiere-2021-metropole-1-corrige-officiel.pdf',
      year: 2021,
      estCorrection: 1,
      matiere: 'Français',
      centreExamen: 'France',
      difficulte: 1,
    },
    {
      url: 'https://www.sujetdebac.fr/annales-pdf/2022/philosophie-2022-asie-sujet-officiel.pdf',
      year: 2022,
      estCorrection: 0,
      matiere: 'Philo',
      centreExamen: 'Asie',
      difficulte: 4,
    },
    {
      url: 'https://www.sujetdebac.fr/annales-pdf/2023/philosophie-2023-polynesie-sujet-officiel.pdf',
      year: 2023,
      estCorrection: 0,
      matiere: 'Philo',
      centreExamen: 'Polynesie',
      difficulte: 3,
    },
    {
      url: 'https://www.sujetdebac.fr/sujets-e3c-pdf/histoire-geographie-general/e3c-histoire-geographie-general-terminale-05515-sujet-officiel.pdf',
      year: 2021,
      estCorrection: 0,
      matiere: 'Histoire',
      centreExamen: 'France',
      difficulte: 5,
    },
    {
      url: 'https://www.sujetdebac.fr/sujets-e3c-pdf/histoire-geographie-general/e3c-histoire-geographie-general-terminale-05511-sujet-officiel.pdf',
      year: 2021,
      estCorrection: 0,
      matiere: 'Histoire',
      centreExamen: 'France',
      difficulte: 2,
    },
    {
      url: 'https://www.sujetdebac.fr/sujets-e3c-pdf/spe-physique-chimie/e3c-spe-physique-chimie-premiere-zero-5-sujet-officiel.pdf',
      year: 2020,
      estCorrection: 0,
      matiere: 'Physique',
      centreExamen: 'France',
      difficulte: 4,
    },
    {
      url: 'https://www.sujetdebac.fr/sujets-e3c-pdf/spe-physique-chimie/e3c-spe-physique-chimie-premiere-zero-5-corrige-officiel.pdf',
      year: 2020,
      estCorrection: 1,
      matiere: 'Physique',
      centreExamen: 'France',
      difficulte: 4,
    },
  ];

// Define the /api/sujets endpoint
app.get('/api/sujets', (req, res) => {
  res.json(subjects);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
