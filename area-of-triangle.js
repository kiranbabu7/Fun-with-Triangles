const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calcAreaBtn = document.querySelector("#calc-area");
const output = document.querySelector(".output");

function areaOfTriangle() {
  if (base.value && height.value) {
    area = Number(base.value) * Number(height.value) * 0.5;
    console.log(area);
    output.innerText = `Area Of Triangle is ${area}`;
  } else {
    output.innerText = `Enter Base and Height of Triangle`;
  }
  return area;
}
calcAreaBtn.addEventListener("click", areaOfTriangle);
