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

export { quizQuestions }