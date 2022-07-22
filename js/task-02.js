const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const htmlIngridientsEl = document.querySelector("#ingredients")


 const newArray =  ingredients.map((ingridient) => {
  const newEl = document.createElement("li");
  newEl.textContent = (ingridient)
  newEl.classList.add("item")

 return newEl
 })

 htmlIngridientsEl.append(...newArray)




