import { quiz } from "./data.js";

const questionTitle = document.querySelector(".questionTitle");
const ul = document.querySelector(".ul");

function runQuiz(quiz) {
  for (let i = 0; i < quiz.length; i++) {
    const element = quiz[i];
    questionTitle.textContent = element.question;
    ul.innerHTML = "";

    for (let j = 0; j < element.options.length; j++) {
      const option = element.options[j];
      const answer = document.createElement("li");
      answer.textContent = option;
      ul.appendChild(answer);

      answer.addEventListener("click", () => {
        console.log("jjjj", j);
        const ChosenAnswer = j; // Use `j` directly for the index
        console.log(ChosenAnswer);
        const correctAnswer = element.answer;
        checkAnswer(ChosenAnswer, correctAnswer); // Pass correct answer too
        console.log(checkAnswer);
        if (checkAnswer(ChosenAnswer, correctAnswer)) {
          console.log("Correct Answer");
        } else console.log("incorrect Answer");
      });
    }
  }
}

const checkAnswer = (ChosenAnswer, correctAnswer) => {
  return ChosenAnswer == correctAnswer;
};
console.log(checkAnswer);

runQuiz(quiz);
