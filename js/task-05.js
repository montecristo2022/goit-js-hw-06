
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

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
    output.textContent = textInput.value;
    
    if (textInput.textContent = "") {
        output.textContent = Anonymous
    }
});