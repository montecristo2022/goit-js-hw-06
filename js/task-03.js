const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];





// const imagesListEl = document.querySelector(".gallery")


// const makeImages = ({url, alt} = {}) => {
//   const imageLiEl = document.createElement("li");
//   const galleryImgEl = document.createElement("img");

// imageLiEl.append(galleryImgEl)

//   galleryImgEl.src = url;
//   galleryImgEl.alt = alt;
//   // console.log(imageLiEl)
//   galleryImgEl.width = 400;
 
//   return imageLiEl
// }


// const imagesArr = images.map((el, index, arr) => {
// return makeImages(el)
// })



// imagesListEl.append(...imagesArr)









const imagesListEl = document.querySelector(".gallery")

const makeImagesCard = ({ url, alt } = {}) => {
  return `
   <li class="gallery">
        <img
        src="${url}"
         alt="${alt}"
         width = "400"
       />
   </li>
   `;
};

imagesListEl.style.display = "flex"


const imagesCardsArr = images.map((el, index, arr) => {

return makeImagesCard(el)
})

imagesListEl.insertAdjacentHTML("afterbegin", imagesCardsArr.join("")) 



// imagesListEl.innerHTML = imagesCardsArr.join("")


// const imagesCard = makeImagesCard(images[0])


// imagesListEl.innerHTML = imagesCard
// console.log(imagesCard)