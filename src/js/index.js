const quizQuestions = [
    {
        number: 1,
        question: "Johnny had 15 apples and ate 12. What is Johnny's name?",
        answers: [
            { option: "Three", correct: false},
            { option: "Apple", correct: false},
            { option: "Hungry", correct: false},
            { option: "Johnny", correct: true},
        ]
    },
    {
        number: 2,
        question: "What's 2+2?",
        answers: [
            { option: "22", correct: false},
            { option: "4", correct: true},
            { option: "1", correct: false},
            { option: "None of the above", correct: false},
        ]
    },
    {
        number: 3,
        question: "The Sun weighs approximately 1.989 × 10^30 kg. Using this information, what planet do we live on?",
        answers: [
            { option: "The Sun", correct: false},
            { option: "Earth", correct: true},
            { option: "Saturn", correct: false},
            { option: "The Moon", correct: false},
        ]
    },
    {
        number: 4,
        question: "'Привет', 'Bonjour', and 'Hola' means 'hello' in different languages. With this information, what is 'Bye' in English? ",
        answers: [
            { option: "Hello/Hi", correct: false},
            { option: "Adios", correct: false},
            { option: "Bye", correct: true},
            { option: "до свидания", correct: false},
        ]
    },
];

const startButton = document.getElementById('start-btn')
const questionElement = document.getElementById('question')
const answerContainer = document.getElementById('answer-choices')
const answerChoices = document.getElementsByClassName('answer')
const nextButton = document.getElementById('next-btn')
let currentQuestion

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hidden')
    questionElement.classList.remove('hidden')
    Array.from(answerChoices).forEach(function(answers){
        answers.classList.remove('hidden')
    });
    currentQuestion = 0 //acts as the index to be used later
    nextQuestion()
}

function nextQuestion() {
    changeQuestion()
    showQuestion(quizQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
       const button = document.createElement('div') //adding answer choices for the question
       button.innerText = answer.option
       button.classList.add('answer')
       if (answer.correct) {
           button.dataset.correct = answer.correct //tells us when the answer selected is correct or not
       }
       button.addEventListener('click', chosenAnswer)
       answerContainer.appendChild(button) //adds child to the end of a parent element
    })
}

function changeQuestion() {
    nextButton.classList.add('hidden')
    while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild) //removes first child in the answer choices container (original question choices)
    }
}

function chosenAnswer() {}

function submitQuiz() {}

function retakeQuiz() {}

