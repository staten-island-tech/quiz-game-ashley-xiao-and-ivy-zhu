import { DOMselectors } from "./DOMselectors"
const quizQuestions = [
    {
        question: "Johnny had 15 apples and ate 12. What is Johnny's name?",
        correctAnswer: "Johnny",
        answers: [
            { option: "Three", correct: false},
            { option: "Apple", correct: false},
            { option: "Hungry", correct: false},
            { option: "Johnny", correct: true},
        ],
    },
    {
        question: "What's 2+2?",
        answers: [
            { option: "22", correct: false},
            { option: "4", correct: true},
            { option: "1", correct: false},
            { option: "None of the above", correct: false},
        ]
    },
    {
        question: "The Sun weighs approximately 1.989 × 10^30 kg. Using this information, what planet do we live on?",
        answers: [
            { option: "The Sun", correct: false},
            { option: "Earth", correct: true},
            { option: "Saturn", correct: false},
            { option: "The Moon", correct: false},
        ]
    },
    {
        question: "'Привет', 'Bonjour', and 'Hola' means 'hello' in different languages. With this information, what is 'Bye' in English? ",
        answers: [
            { option: "Hello/Hi", correct: false},
            { option: "Adios", correct: false},
            { option: "Bye", correct: true},
            { option: "до свидания", correct: false},
        ]
    },
];

let currentQuestion 
let currentScore
let score

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestion++ //adds 1 to the current index when next button is clicked (changes the question)
    nextQuestion()
})
submitButton.addEventListener('click', showResults)
retakeButton.addEventListener('click', retakeQuiz)


function startGame() { //what happens when you press the start button or restart button (sets the first question)
    startButton.classList.add('hidden')
    questionElement.classList.remove('hidden')
    Array.from(answerChoices).forEach(function(answers){
        answers.classList.remove('hidden')
    }); //adding and removing hidden classes to different elements so the question appears
    currentQuestion = 0 //acts as the index to be used later
    score = 0
    nextQuestion() 
}

function nextQuestion() { //sets the question
    changeQuestion()
    showQuestion(quizQuestions[currentQuestion]) // the question list and the index of the first question (specified that index is 0 in startGame)
}

function showQuestion(question) { //changes the text on each element to match new question
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('div') //adding answer choices for the question
        button.innerText = answer.option //text in the buttons created as the answer choices
        button.classList.add('answer')
        button.addEventListener('click', chosenAnswer)
        answerContainer.appendChild(button) //adds child to the end of a parent element

        button.addEventListener('click', scores)
        function scores() {
        if (answer.correct === true) {
            score = score + 1
        } else {
            score = score - 1 
        }
        console.log(score)
    }
    });
}

function changeQuestion() { //goes to next question after pressing next button
    nextButton.classList.add('hidden')
    while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild) //removes previous quesion (first child) so that only the new question stays
    }
    
}

function chosenAnswer() {
    if (currentQuestion === quizQuestions.length -1) {
        submitButton.classList.remove('hidden')
    } else {
        nextButton.classList.remove('hidden')
    }
}

function showResults() {
    questionElement.classList.add('hidden')
    while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild)
    }
    endResults.classList.remove('hidden')
    submitButton.classList.add('hidden')
}

function retakeQuiz() {
    results.classList.add('hidden')
    questionElement.classList.remove('hidden')
    Array.from(answerChoices).forEach(function(answers){
        answers.classList.remove('hidden')
    }); 
    currentQuestion = 0 
    score = 0
    nextQuestion() 
}

