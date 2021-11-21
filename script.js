const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
  {
    question: "Pregunta 1",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "a",
  },
  {
    question: "Pregunta 2",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "b",
  },
  {
    question: "Pregunta 3",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "c",
  },
  {
    question: "Pregunta 4",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "a",
  },
  {
    question: "Pregunta 5",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "b",
  },
  {
    question: "Pregunta 6",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "c",
  },
  {
    question: "Pregunta 7",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "a",
  },
  {
    question: "Pregunta 8",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "b",
  },
];
const randmonQuestions = myQuestions.sort(() => 0.5 - Math.random());
const displayQuestions = randmonQuestions.slice(0, 5);

function buildQuiz() {
  const output = [];

  displayQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}
buildQuiz();

submitButton.addEventListener("click", showResults);

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");

  let numCorrect = 0;

  displayQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;

      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }

    let objeto = {currentQuestion};
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${displayQuestions.length}`;
}
