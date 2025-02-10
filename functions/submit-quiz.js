const fs = require('fs').promises;
const fetch = require('node-fetch');
require('dotenv').config();

// Embed answers directly in the code
const correctAnswers = {
    "quiz1": ["d", "b", "d", "a", "c", "b", "d", "d", "b", "a", "d", "b", "a", "b", "b", "c", "b", "a", "b", "a", "a", "c", "a", "a", "a", "b", "a", "a", "c", "a", "a", "d", "c", "a", "b", "a", "d", "b", "a", "c", "d"],
    "quiz2": ["d", "e", "b", "a", "b", "a", "a", "b", "a", "c", "b", "b", "b", "a", "a", "b"],
    "quiz3": ["c", "a", "c", "b", "d", "a", "a", "b", "b", "a", "c", "a", "c", "b", "b", "a", "a", "a", "c", "c", "b"],
    "quiz4": ["c", "c", "a", "a", "a", "c", "a", "a", "a", "a", "c", "d", "b", "b", "a", "a", "a", "b", "e", "f", "a", "b", "e", "d", "a", "a", "c", "a", "c"]
};

exports.handler = async (event, context) => {
    // Handle CORS preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' })
        };
    }

    try {
        const { userFirstName, userLastName, userEmail, userDiscipline, userGroupe, userEnsemble, selectedQuiz, testDate, quizResults } = JSON.parse(event.body);

        if (!correctAnswers[selectedQuiz]) {
            throw new Error(`Quiz "${selectedQuiz}" not found`);
        }

        let score = 0;
        const responseDetails = quizResults.map((answer, index) => {
            const isCorrect = answer.value === correctAnswers[selectedQuiz][index];
            if (isCorrect) {
                score++;
            }
            return { ...answer, isCorrect };
        });

        const FinalScore = `${score}/${correctAnswers[selectedQuiz].length}`;

        const dataToSend = {
            "data": [{
                "Discipline": userDiscipline,
                "Groupe": userGroupe,
                "Ensemble": userEnsemble,
                "Nom & Prenom": `${userFirstName} ${userLastName}`,
                "Email": userEmail,
                "Note": FinalScore,
                "Date": testDate,
                "Quiz": selectedQuiz
            }]
        };

        const responseSheetDB = await fetch(process.env.SHEETDB_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        if (!responseSheetDB.ok) {
            throw new Error('Failed to submit to SheetDB');
        }

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: true,
                message: 'Quiz soumis avec succès!',
                score,
                responses: responseDetails
            })
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: false,
                message: 'Erreur lors de la soumission du quiz.',
                error: error.message
            })
        };
    }
};