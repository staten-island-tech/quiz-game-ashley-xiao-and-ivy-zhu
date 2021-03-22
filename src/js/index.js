import { quizQuestions } from "./questions"
import { startButton, questionElement, answerContainer, answerChoices, nextButton, submitButton, endResults, retakeButton, scoreResult, resultComment } from "./dom"

let currentQuestion
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
        button.addEventListener('click', showButton)
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

function showButton() { //shows either submit button or next button
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
    if (score > 6) {
        scoreResult.innerText = 170 + score
        resultComment.innerText = "Wow! You're as smart as Einstein."
    } else if (score < 3) {
        scoreResult.innerText = 80 + score
        resultComment.innerText = "Not bad! A little below average."
    } else {
        scoreResult.innerText = 100 + score
        resultComment.innerText = "Wow, how did you even solve those questions?"
    }
    if (score === 0){
        scoreResult.innerText = 65
        resultComment.innerText = "Pretty good for such a hard test."
    }
    if (score < 0) {
        scoreResult.innerText = 60 + score
        resultComment.innerText = "Don't worry, my IQ is lower."
    }
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

