



const plus = document.querySelector('[data-action="increment"]')
const minus = document.querySelector('[data-action="decrement"]')
const counterValue = document.querySelector("#value")
counterValue.value = 0;
 
plus.addEventListener("click", () => {
    counterValue.value += 1;
    counterValue.textContent = counterValue.value;
})



minus.addEventListener("click", () => {
    counterValue.value -= 1;
    counterValue.textContent = counterValue.value;
})






