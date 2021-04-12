import { quizQuestions } from "./questions"
import { DOMselectors } from "./Dom"

let currentQuestion
let score

DOMselectors.startButton.addEventListener('click', startGame)

DOMselectors.nextButton.addEventListener('click', () => {
    currentQuestion++ //adds 1 to the current index when next button is clicked (changes the question)
    nextQuestion()
})

DOMselectors.submitButton.addEventListener('click', showResults)

DOMselectors.retakeButton.addEventListener('click', retakeQuiz)

function startGame() { //what happens when you press the start button or restart button (sets the first question)
    DOMselectors.startButton.classList.add('hidden')
    DOMselectors.questionElement.classList.remove('hidden')
    Array.from(DOMselectors.answerChoices).forEach(function(answers){
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
    DOMselectors.questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('div') //adding answer choices for the question
        button.innerText = answer.option //text in the buttons created as the answer choices
        button.classList.add('answer')
        button.addEventListener('click', showButton)
        DOMselectors.answerContainer.appendChild(button) //adds child to the end of a parent element

        button.addEventListener('click', scores)
        function scores() {
            if (answer.correct === true) {
             score = score + 1
            } else {
             score = score - 1 
            }
        } 
    });
}

function changeQuestion() { //goes to next question after pressing next button
    DOMselectors.nextButton.classList.add('hidden')
    while (DOMselectors.answerContainer.firstChild) {
        DOMselectors.answerContainer.removeChild(DOMselectors.answerContainer.firstChild) //removes previous quesion (first child) so that only the new question stays
    }
    
}

function showButton() { //shows either submit button or next button
    if (currentQuestion === quizQuestions.length -1) {
        DOMselectors.submitButton.classList.remove('hidden')
    } else {
        DOMselectors.nextButton.classList.remove('hidden')
    }
}

function showResults() {
    DOMselectors.questionElement.classList.add('hidden')
    while (DOMselectors.answerContainer.firstChild) {
        DOMselectors.answerContainer.removeChild(DOMselectors.answerContainer.firstChild)
    }
    DOMselectors.endResults.classList.remove('hidden')
    DOMselectors.submitButton.classList.add('hidden')

    if (score > 6) {
        DOMselectors.scoreResult.innerText = 170 + score
        DOMselectors.resultComment.innerText = "Wow! You're smarter than Einstein."
    } else if (score === 0){
        DOMselectors.scoreResult.innerText = 65
        DOMselectors.resultComment.innerText = "Pretty good for such a hard test."
    } else if (score < 0) {
        DOMselectors.scoreResult.innerText = 60 + score
        DOMselectors.resultComment.innerText = "Don't worry, my IQ is lower."
    } else {
        DOMselectors.scoreResult.innerText = 100 + score
        DOMselectors.resultComment.innerText = "Wow, how did you even solve those questions?"
    } 
}

function retakeQuiz() {
    results.classList.add('hidden')
    DOMselectors.questionElement.classList.remove('hidden')
    Array.from(DOMselectors.answerChoices).forEach(function(answers){
        answers.classList.remove('hidden')
    }); 
    currentQuestion = 0 
    score = 0
    nextQuestion() 
}

