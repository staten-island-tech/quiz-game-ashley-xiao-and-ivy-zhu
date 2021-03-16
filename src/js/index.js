const quizQuestions = [
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
        question: "Johnny had 15 apples and ate 12. What is Johnny's name?",
        answers: [
            { option: "Three", correct: false},
            { option: "Apple", correct: false},
            { option: "Hungry", correct: false},
            { option: "Johnny", correct: true},
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

const answerChoices = document.getElementsByClassName('answer')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const answerElement = document.getElementsByClassName('answer')

Array.from(answerChoices).forEach(function(answers){
    answers.addEventListener('click', nextAppear)
});

const answersOne = quizQuestions[0].answers

Array.from(answerElement).forEach(function(choice){
    choice.innerText = answersOne.option
});

questionElement.innerText = quizQuestions[0].question

function nextAppear () {
    nextButton.classList.remove('hidden')
}

nextButton.addEventListener('click', nextQuestion)

function nextQuestion() {
    
}

function showQuestion(question){
    
}

function previousQuestion() {

}

function results() {

}

// nextButton.addEventListener('click', nextQuestion);
// backButton.addEventListener('click', previousQuestion);
// submitButton.addEventListener('click', results);