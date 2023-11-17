let activeQuestion=1;
const userResponse={};


function storeAnswer() {
    const options = document.getElementsByName(`q${activeQuestion}`);
    for (const option of options) {
        if (option.checked) {
            userAnswers[`q${activeQuestion}`] = option.value;
            break;
        }
    }
}

function getAnswer() {
    const chooseAnswer = userAnswers[`q${activeQuestion}`];
    if (chooseAnswer) {
        const options = document.getElementsByName(`q${activeQuestion}`);
        for (const option of options) {
            option.checked = option.value === chooseAnswer;
        }
    }
}

//Code for next Question
function nextQuestion(){
    storeAnswer();
    let activeQuestionElement = document.getElementById(`question${activeQuestion}`);
    activeQuestionElement.classList.remove('active'); //stop the active question to load for the next step
    activeQuestion++;
    if (activeQuestion > 5) {
        currentQuestion = 5; // Prevent going beyond the last question
    }
    let nextQuestionElement = document.getElementById(`question${activeQuestion}`); //add the next question
    nextQuestionElement.classList.add('active');
    getAnswer();
}
// code for previous question
function previousQuestion() {
    storeAnswer();
    const activeQuestionElement = document.getElementById(`question${activeQuestion}`);
    activeQuestionElement.classList.remove('active');

    activeQuestion--;
    if (activeQuestion < 1) {
        activeQuestion = 1; // Prevent going before the first question
    }

    const previousQuestionElement = document.getElementById(`question${activeQuestion}`);
    previousQuestionElement.classList.add('active');
    getAnswer();
}

function calculateResults() {
    storeAnswer();

    const correctAnswers = {
        ques1: 'West-Indies',
        ques2: '10',
        ques3: 'Newzeland',
        ques4: 'India',
            ques5: 'Uruguay',
    };

    let score = 0;
    for (const question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }
    const feedBack = `You scored ${score} out of 5`;
    document.getElementById('feedback').textContent = feedBack;
    // Hide questions and display results
    document.querySelectorAll('.question').forEach(question => {
        question.style.display = 'none';
    });
    document.getElementById('results').style.display = 'block';
}

// Show the first question initially
document.getElementById('question1').classList.add('active');