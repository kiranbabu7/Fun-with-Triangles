const angleInput = document.querySelectorAll(".angle-input");
const triangleCheck = document.querySelector("#Check-triangle");
const output = document.querySelector(".output");
let sum = 0;
function SumofAngle() {
  if (angleInput[0].value && angleInput[1].value && angleInput[2].value) {
    sum =
      Number(angleInput[0].value) +
      Number(angleInput[1].value) +
      Number(angleInput[2].value);
    if (sum === 180) {
      output.innerText = "The Above Angles Form a Triangle";
    } else {
      output.innerText = "The Above Angles Doesn't Form a Triangle";
    }
  } else {
    output.innerText = "Enter 3 Angles above to continue";
  }
  return sum;
}
triangleCheck.addEventListener("click", SumofAngle);
