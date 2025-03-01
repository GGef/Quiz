

let userFirstName = ''; // Pour stocker le prénom de l'utilisateur
let userLastName = ''; // Pour stocker le nom de l'utilisateur
let userEmail = ''; // Pour stocker l'email de l'utilisateur
let userDiscipline = '';
let userGroupe = '';
let userEnsemble = '';
let selectedQuiz = ''; // Déclaration globale pour que cela soit accessible partout




const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.createElement('div');
quizContainer.parentNode.insertBefore(resultContainer, quizContainer.nextSibling);
quizContainer.style.display = 'none';
submitBtn.style.display = 'none';
const quizselectorform = document.getElementById('quiz-selection-form');
quizselectorform.style.display = 'none';








function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // Ajoute un zéro devant et ne garde que les deux derniers chiffres
    const day = ('0' + today.getDate()).slice(-2); // Ajoute un zéro devant et ne garde que les deux derniers chiffres
    const hours = ('0' + today.getHours()).slice(-2); // Récupère les heures et ajoute un zéro devant si nécessaire
    const minutes = ('0' + today.getMinutes()).slice(-2); // Récupère les minutes et ajoute un zéro devant si nécessaire

    // Format: AAAA-MM-JJ HH:MM
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}




async function submitQuiz() {
    const quizResults = [...document.querySelectorAll('input[type="radio"]:checked')].map(input => {
        return { name: input.name, value: input.value };
    });
    const testDate = getFormattedDate();

    // Appel à votre API serveur pour soumettre les résultats
    const response = await fetch('/.netlify/functions/submit-quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userFirstName, userLastName, userEmail, userDiscipline, userGroupe, userEnsemble, selectedQuiz, testDate, quizResults }),
    }).then(response => response.json())
        .then(data => {
            const { score, responses } = data;
            responses.forEach(result => {
                const questionInput = document.querySelector(`input[name="${result.name}"][value="${result.value}"]`);
                const label = questionInput.closest('label');
                label.style.border = result.isCorrect ? '2px solid green' : '2px solid red';

            });

            resultContainer.innerHTML = `<p>Votre score est de ${score} sur ${quizzes[selectedQuiz].length}.</p>`;
            resultContainer.style.color = score > (quizzes[selectedQuiz].length / 2) ? 'green' : 'red';
            resultContainer.style.fontWeight = 'bold';

            // Affichez le score ou d'autres messages si nécessaire
            console.log(`Votre score est de ${score}.`);
        })
        .catch(error => console.error('Error:', error));
}


function loadQuiz(selectedQuiz) {
    const questions = quizzes[selectedQuiz]; // Assurez-vous que c'est correctement référencé

    if (!questions) {
        console.error('Aucune question trouvée pour le quiz sélectionné:', selectedQuiz);
        return; // Sortie précoce si aucune question n'est trouvée
    }

    let quizHtml = '';

    questions.forEach((q, index) => {
        quizHtml += `<div class="mb-4 question" data-question-index="${index}">
                        <p class="mb-2 font-semibold">${index + 1}. ${q.question}</p>
                        <div class="flex flex-col">`;

        // Itérer sur les propriétés de l'objet question pour générer les options
        ['a', 'b', 'c', 'd', 'e', 'f'].forEach(option => {
            if (q[option]) { // Vérifier si l'option existe
                quizHtml += `<label class="inline-flex items-start">
                                <input type="radio" name="question${index}" value="${option}" class="mr-2">${q[option]}
                              </label>`;
            }
        });

        quizHtml += `    </div>
                      </div>`;
    });

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = quizHtml;
    document.getElementById('submit-btn').style.display = 'block'; // Affiche le bouton de soumission une fois le quiz chargé
}

function startQuiz() {
    const quizSelector = document.getElementById('quiz-selector');

    if (quizSelector.value) {
        document.getElementById('quiz-selection-form').style.display = 'none';

        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('submit-btn').style.display = 'block';
    } else {
        alert("Veuillez sélectionner un quiz.");
    }

    selectedQuiz = document.getElementById('quiz-selector').value;
    // Si toutes les validations sont passées, cacher le formulaire d'email et afficher le quiz

    
    // Charger le quiz sélectionné
    loadQuiz(selectedQuiz);
}

document.addEventListener('DOMContentLoaded', () => {
    setupInputValidation(); // Configure la validation dès que le DOM est chargé
});

function validateInput(input) {
    input.style.borderColor = ''; // Réinitialise la couleur de bordure
    const errorMessageElement = document.getElementById('error-message');

    if (input === document.getElementById('email-input')) {
        if (!input.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
            input.style.borderColor = 'red'; // Bordure rouge pour les emails invalides
            errorMessageElement.textContent = "Veuillez entrer une adresse e-mail valide.";
            errorMessageElement.classList.remove('hidden');
            return false;
        }
    } else if (!input.value.trim()) {
        input.style.borderColor = 'red'; // Bordure rouge pour les champs vides
        errorMessageElement.textContent = "Veuillez remplir tous les champs.";
        errorMessageElement.classList.remove('hidden');
        return false;
    }
    return true; // Le champ est valide
}

function setupInputValidation() {
    const inputs = [
        document.getElementById('first-name-input'),
        document.getElementById('last-name-input'),
        document.getElementById('email-input'),
        document.getElementById('discipline-selector'),
        document.getElementById('sub-discipline-selector'),
        document.getElementById('category-selector')
    ];

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input); // Valide chaque champ lors de sa modification
        });
    });
}


function showQuizForm() {
    let isFormValid = true;

    const inputs = [
        document.getElementById('first-name-input'),
        document.getElementById('last-name-input'),
        document.getElementById('email-input'),
        document.getElementById('discipline-selector'),
        document.getElementById('sub-discipline-selector'),
        document.getElementById('category-selector')
    ];

    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.classList.add('hidden'); // Cache par défaut le message d'erreur

    // Applique la validation initiale pour chaque champ
    inputs.forEach(input => {
        const isValid = validateInput(input);
        if (!isValid) isFormValid = false; // Si un champ n'est pas valide, le formulaire ne l'est pas non plus
    });

    if (!isFormValid) {
        console.log("Veuillez remplir tous les champs requis."); // Log optionnel
        errorMessageElement.classList.remove('hidden'); // Affiche le message d'erreur si le formulaire n'est pas valide
        return; // Arrête l'exécution si le formulaire n'est pas valide
    }

    // Si le formulaire est valide
    document.getElementById('quiz-selection-form').style.display = 'block';
    document.getElementById('email-form').style.display = 'none';

    userFirstName = document.getElementById('first-name-input').value;
    userLastName = document.getElementById('last-name-input').value;
    userEmail = document.getElementById('email-input').value;
    userDiscipline = document.getElementById('discipline-selector').value;
    userGroupe = document.getElementById('sub-discipline-selector').value;
    userGroupe = userGroupe.slice(-8);
    userEnsemble = document.getElementById('category-selector').value;
}


