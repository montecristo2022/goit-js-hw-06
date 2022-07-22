
//вариант 1

// const textInput = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
    
//     if (textInput.textContent = "") {
//         output.textContent = Anonymous
//     }
// });



//вариант 2

// const textInput = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// textInput.addEventListener("input", () => {
//     output.textContent = textInput.value;
    
//     if (textInput.textContent = "") {
//         output.textContent === "Anonymous"
//     }
// });




const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  nameOutput.textContent = event.currentTarget.value;

  if (nameOutput.textContent === '') {
    nameOutput.textContent = 'Anonymous';
  }
});