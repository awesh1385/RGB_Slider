const result = document.querySelector(".result input");
const copyBtn = document.getElementById("copy-btn");
const sliders = document.querySelectorAll(".wrapper input[type='range']");
const redColor = document.getElementById("red");
const blueColor = document.getElementById("blue");
const greenColor = document.getElementById("green");

let generateColor = () => {
  let redColorValue = redColor.value;
  let blueColorValue = blueColor.value;
  let greenColorValue = greenColor.value;
  let finalColor = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`;

  result.value = finalColor;
  document.body.style.backgroundColor = finalColor;
};
let copyColorCode = () => {
  result.select();
  document.execCommand("copy");
  copyBtn.innerText = "Copied!";
  setTimeout(() => {
    copyBtn.innerHTML = "Copy code";
  }, 1000);
};

sliders.forEach((inp) => {
  inp.addEventListener("input", generateColor);
});

window.addEventListener("load", generateColor);
copyBtn.addEventListener("click", copyColorCode);
