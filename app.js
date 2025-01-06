import { quiz } from "./data.js";
console.log(quiz.length);
const questionContainer = document.querySelector(".question");
const questionTitle = document.querySelector(".questionTitle");
const ul = document.querySelector(".ul");
let score = 0;
let questionAnswered = 0;
function runQuiz(quiz) {
  for (let i = 0; i < quiz.length; i++) {
    const element = quiz[i];
    console.log(element);

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("quiz-question");

    const questionTitleElement = document.createElement("h2");
    questionTitleElement.textContent = element.question;

    questionDiv.appendChild(questionTitleElement);

    const optionsList = document.createElement("ul");

    for (let j = 0; j < element.options.length; j++) {
      const option = element.options[j];
      const answer = document.createElement("li");
      answer.textContent = option;

      optionsList.appendChild(answer);

      answer.addEventListener("click", () => {
        disableOptions(optionsList);
        const ChosenAnswer = j;
        const correctAnswer = element.answer;
        checkAnswer(ChosenAnswer, correctAnswer);

        if (checkAnswer(ChosenAnswer, correctAnswer)) {
          console.log("Correct Answer");
          answer.classList.add("correct");
          score++;
          questionAnswered++;
          console.log(score);
        } else {
          console.log("Incorrect Answer");
          answer.classList.add("false");
          questionAnswered++;
        }
        console.log(questionAnswered);
        if (questionAnswered == quiz.length) {
          let result = (score / questionAnswered) * 100;
          if (result >= 70) {
            alert(`YOU WON!!! you answered ${result}% of the quiz correctly`);
          } else if (result <= 70) {
            alert(
              `Oh, no! you answered ${result}% of the quiz correctly, try again`
            );
          }
        }
      });
    }

    questionDiv.appendChild(optionsList);
    questionContainer.appendChild(questionDiv);
  }
}

const disableOptions = (optionsList) => {
  const allOptions = optionsList.querySelectorAll("li");
  allOptions.forEach((el) => {
    el.style.pointerEvents = "none";
  });
};

const checkAnswer = (ChosenAnswer, correctAnswer) => {
  return ChosenAnswer == correctAnswer;
};

runQuiz(quiz);
console.log(score);
