const categoriesEl = document.querySelectorAll(".item")
console.log(`Number of categories :`, categoriesEl.length)


categoriesEl.forEach((el) => {
     console.log(`Category:`, el.firstElementChild.textContent);
  console.log(`Elements:`, el.lastElementChild.children.length);
})









