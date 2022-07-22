// const categoriesEl = document.querySelectorAll(".item")
// console.log(`Number of categories :`, categoriesEl.length)


// categoriesEl.forEach((el) => {
//      console.log(`Category:`, el.firstElementChild.textContent);
//   console.log(`Elements:`, el.lastElementChild.children.length);
// })



const categoriesNumber = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesNumber.length);

categoriesNumber.forEach((item) => {
  const categoryTitle = item.querySelector('h2');
  console.log('Category: ', categoryTitle.textContent);
  const listsNumber = item.querySelectorAll('ul > li');
  console.log('Elements: ', listsNumber.length);
});







