const quizForm = document.querySelector(".quiz-form");
const formSubmitBtn = document.querySelector(".form-submit-btn");
const output = document.querySelector(".output");
const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  output.innerText = `Your Score is : ${score}`;
}

formSubmitBtn.addEventListener("click", calculateScore);
