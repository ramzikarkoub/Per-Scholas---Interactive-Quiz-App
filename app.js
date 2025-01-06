// Import quiz data from an external file
import { quiz } from "./data.js";
console.log(quiz.length); // Log the total number of quiz questions

// DOM element references
const questionContainer = document.querySelector(".question"); // Container for questions
const questionTitle = document.querySelector(".questionTitle"); // Title element for questions
const ul = document.querySelector(".ul"); // List element for options

// Variables to keep track of score and answered questions
let score = 0;
let questionAnswered = 0;

// Function to generate and run the quiz
function runQuiz(quiz) {
  // Loop through all questions in the quiz
  for (let i = 0; i < quiz.length; i++) {
    const element = quiz[i]; // Current question object
    console.log(element); // Log the current question object

    // Create a container for the question
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("quiz-question"); // Add a class for styling

    // Create an element for the question title
    const questionTitleElement = document.createElement("h2");
    questionTitleElement.textContent = element.question; // Set the question text

    // Append the question title to the question container
    questionDiv.appendChild(questionTitleElement);

    // Create a list element for the options
    const optionsList = document.createElement("ul");

    // Loop through all options for the current question
    for (let j = 0; j < element.options.length; j++) {
      const option = element.options[j]; // Current option text
      const answer = document.createElement("li"); // Create a list item for the option
      answer.textContent = option; // Set the option text

      // Append the option to the options list
      optionsList.appendChild(answer);

      // Add a click event listener to the option
      answer.addEventListener("click", () => {
        disableOptions(optionsList); // Disable all options after one is selected
        const ChosenAnswer = j; // Index of the selected answer
        const correctAnswer = element.answer; // Index of the correct answer
        checkAnswer(ChosenAnswer, correctAnswer); // Check if the answer is correct

        // If the answer is correct
        if (checkAnswer(ChosenAnswer, correctAnswer)) {
          console.log("Correct Answer");
          answer.classList.add("correct"); // Highlight the correct answer
          score++; // Increment the score
          questionAnswered++; // Increment the count of answered questions
          console.log(score); // Log the updated score
        } else {
          console.log("Incorrect Answer");
          answer.classList.add("false"); // Highlight the incorrect answer
          questionAnswered++; // Increment the count of answered questions
        }
        console.log(questionAnswered); // Log the number of questions answered

        // Check if all questions have been answered
        if (questionAnswered == quiz.length) {
          let result = (score / questionAnswered) * 100; // Calculate the percentage score
          // Display a message based on the score
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

    // Append the options list to the question container
    questionDiv.appendChild(optionsList);
    questionContainer.appendChild(questionDiv); // Add the question container to the DOM
  }
}

// Function to disable all options for a question
const disableOptions = (optionsList) => {
  const allOptions = optionsList.querySelectorAll("li"); // Select all options
  allOptions.forEach((el) => {
    el.style.pointerEvents = "none"; // Disable pointer events to make them unclickable
  });
};

// Function to check if the selected answer is correct
const checkAnswer = (ChosenAnswer, correctAnswer) => {
  return ChosenAnswer == correctAnswer; // Return true if the chosen answer matches the correct answer
};

// Run the quiz
runQuiz(quiz);
console.log(score); // Log the final score (initially 0)
