// server.js
const express = require('express');
const fs = require('fs').promises; // Utilisez fs.promises pour des opérations asynchrones
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config();
const cors = require('cors');
const path = require('path');


const allowedIPs = ['54.85.28.122']

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

app.use(cors());


// Middleware pour servir les fichiers statiques du dossier 'public'
app.use(express.static('public'));

// Route pour soumettre les réponses du quiz
app.post('/submit-quiz', cors(), async (req, res) => {
    // const sourceIP = req.ip;

    // if (!allowedIPs.includes(sourceIP)) {
    //     return res.status(403).json({ message: "Accès non autorisé" });
    // }
    const { userFirstName, userLastName, userEmail, userDiscipline, userGroupe, userEnsemble, selectedQuiz, testDate, quizResults } = req.body;

    // Lire et parser le fichier de réponses
    const answersData = await fs.readFile('./answers.json', 'utf-8');
    const correctAnswers = JSON.parse(answersData);

    let score = 0;

    const responseDetails = quizResults.map((answer, index) => {
        const isCorrect = answer.value === correctAnswers[selectedQuiz][index];
        if (isCorrect) {
            score++;
        }
        return { ...answer, isCorrect };
    });

    const FinalScore = score + '/' + correctAnswers[selectedQuiz].length

    const dataToSend = {
        "data": [{
            "Discipline": userDiscipline,
            "Groupe": userGroupe,
            "Ensemble": userEnsemble,
            "Nom & Prenom": userFirstName + " " + userLastName,
            "Email": userEmail,
            "Note": FinalScore,
            "Date": testDate,
            "Quiz": selectedQuiz
        }]
    };

    // Exemple d'envoi des résultats à SheetDB
    try {
        const responseSheetDB = await fetch(process.env.SHEETDB_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });

        if (responseSheetDB.ok) {
            // Réponse au client après succès de l'enregistrement à SheetDB
            res.json({ success: true, message: 'Quiz soumis avec succès!', score, responses: responseDetails });
        } else {
            throw new Error('Failed to submit to SheetDB');
        }
    } catch (error) {
        console.error(error);
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
