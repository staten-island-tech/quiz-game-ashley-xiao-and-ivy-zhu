const DOMselectors = {
    startButton: document.querySelector("#start-btn"),
    questionElement: document.querySelector("#question"),
    answerContainer: document.querySelector("#answer-choices"),
    answerChoices: document.getElementsByClassName('answer'),
    nextButton: document.querySelector("#next-btn"),
    submitButton: document.querySelector("#submit"),
    endResults: document.querySelector("#results"),
    retakeButton: document.querySelector("#retake"),
    scoreResult: document.querySelector("#iq-result"),
    resultComment: document.querySelector("#result-comment"),
};

export { DOMselectors };