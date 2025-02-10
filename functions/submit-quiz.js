const fs = require('fs').promises;
const fetch = require('node-fetch');
require('dotenv').config();

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { userFirstName, userLastName, userEmail, userDiscipline, userGroupe, userEnsemble, selectedQuiz, testDate, quizResults } = JSON.parse(event.body);

    // Read answers file
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

    const FinalScore = score + '/' + correctAnswers[selectedQuiz].length;

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

    const responseSheetDB = await fetch(process.env.SHEETDB_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    if (!responseSheetDB.ok) {
      throw new Error('Failed to submit to SheetDB');
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        success: true,
        message: 'Quiz soumis avec succès!',
        score,
        responses: responseDetails
      })
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        success: false,
        message: 'Erreur lors de la soumission du quiz.'
      })
    };
  }
};