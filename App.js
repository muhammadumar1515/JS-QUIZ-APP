// Sample questions for the JavaScript quiz
const quizQuestions = [
    {
        question: "What is the output of `typeof null` in JavaScript?",
        options: ["object", "null", "undefined", "NaN"],
        correct: 0
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "==", "===", "=>"],
        correct: 0
    },
    {
        question: "What does `JSON.stringify()` do?",
        options: [
            "Parses a string into JSON",
            "Converts JSON into a string",
            "Converts a string into a function",
            "None of the above"
        ],
        correct: 1
    },
    {
        question: "Which method can be used to join two or more arrays in JavaScript?",
        options: ["join()", "concat()", "merge()", "append()"],
        correct: 1
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function myFunction() {}",
            "function:myFunction() {}",
            "def myFunction() {}",
            "create function myFunction() {}"
        ],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("Next-btn");
const scoreContainer = document.getElementById("score-container");
const retryButton = document.getElementById("retry-btn");
const quizBox = document.getElementById("quiz-box");

function loadQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const question = quizQuestions[currentQuestionIndex];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.classList.add('option');
            optionButton.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(optionButton);
        });
    } else {
        showScore();
    }
}

function checkAnswer(selectedIndex) {
    const correctAnswerIndex = quizQuestions[currentQuestionIndex].correct;
    if (selectedIndex === correctAnswerIndex) {
        score++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

function showScore() {
    quizBox.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    document.getElementById("score").textContent = score;
}

nextButton.onclick = loadQuestion;

retryButton.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add('hidden');
    quizBox.classList.remove('hidden');
    loadQuestion();
};

// Initial call to load the first question
loadQuestion();
