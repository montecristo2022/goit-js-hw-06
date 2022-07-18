const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const htmlIngridientsEl = document.querySelector("#ingredients")


ingredients.map((ingridient) => {
  const newEl = document.createElement("li");
  newEl.textContent = (ingridient)
  newEl.classList.add("item")

  htmlIngridientsEl.append(newEl)
})
console.log(htmlIngridientsEl)

