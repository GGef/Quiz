// server.js
const express = require('express');
const fs = require('fs').promises; // Utilisez fs.promises pour des opérations asynchrones
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config();
const cors = require('cors');
const path = require('path');




const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

app.use(cors());


// Middleware pour servir les fichiers statiques du dossier 'public'
app.use(express.static('public'));

// Route pour soumettre les réponses du quiz
app.post('/submit-quiz', cors(), async (req, res) => {
    const { userFirstName , userLastName , userEmail , userDiscipline , userGroupe , userEnsemble,selectedQuiz,testDate ,quizResults } = req.body;


    // Lire et parser le fichier de réponses
    const answersData = await fs.readFile('./answers.json', 'utf-8');
    const correctAnswers = JSON.parse(answersData);


    // Logique de validation (exemplaire, à adapter)
    let score = 0;
   
    const responseDetails = quizResults.map((answer, index) => {
        // Supposons que correctAnswers est disponible et contient la bonne réponse pour chaque question
        const isCorrect = answer.value === correctAnswers[selectedQuiz][index];
        if (isCorrect) {
            score++;
        }
        return { ...answer, isCorrect };


     });

     res.json({ score, responses: responseDetails });

     const dataToSend = {
        "data": [{
            "Discipline": userDiscipline,
            "Groupe": userGroupe,
            "Ensemble": userEnsemble,
            "Nom & Prenom": userFirstName + userLastName,
            "Email": userEmail,
            "Note": score,
            "Date": testDate,
            "Quiz": selectedQuiz
        }]
    };

    // Exemple d'envoi des résultats à SheetDB
    const response = await fetch(process.env.SHEETDB_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend ),
    });

    if (response.ok) {
        res.json({ success: true, message: 'Quiz soumis avec succès!' });
    } else {
        res.status(500).json({ success: false, message: 'Erreur lors de la soumission du quiz.' });
    }
});

// Si vous souhaitez avoir une route fallback qui renvoie 'index.html' pour toutes les routes non gérées :
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
