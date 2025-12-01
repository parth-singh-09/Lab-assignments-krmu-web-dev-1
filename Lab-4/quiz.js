// Quiz Questions
var quizQuestions = [
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which language is used for styling web pages?", answer: "css" },
    { question: "What does CSS  stand for?", answer: "cascading style sheets" },
    { question: "Which tag is used for the largest heading in HTML?", answer: "h1" },
    { question: "What does RAM stand for?", answer: "random access memory" }
];

// Quiz Function
function runQuiz() {
    var score = 0;

    for (var i = 0; i < quizQuestions.length; i++) {
        var userAns = prompt(quizQuestions[i].question);
        
        if (!userAns) {
            alert("No answer entered.");
            continue;
        }

        var cleanAns = userAns.toLowerCase().trim();

        if (cleanAns === quizQuestions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Wrong! Correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Finished! Your Score: " + score + " / " + quizQuestions.length);
}

// Run the quiz
runQuiz();