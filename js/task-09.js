

const bodyEl = document.querySelector("body")
const buttonEl = document.querySelector(".change-color")
const colorValue = document.querySelector(".color")



buttonEl.addEventListener("click", () => {


const newColor = getRandomHexColor()


  colorValue.textContent = newColor;

  bodyEl.style.backgroundColor = newColor;
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



