const a = document.querySelector("#a");
const b = document.querySelector("#b");
const calculateBtn = document.querySelector("#calc-hypotenuse");
const output = document.querySelector(".output");
function calculateHypotenuse() {
  const sum = sumOfSquares(Number(a.value), Number(b.value));
  const hypotenuse = Math.sqrt(sum);
  output.innerText = `The length of hypotenuse is ${hypotenuse}`;
}

function sumOfSquares(a, b) {
  const sum = a * a + b * b;
  return sum;
}
calculateBtn.addEventListener("click", calculateHypotenuse);
