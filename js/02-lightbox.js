import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

 const galleryListEl = document.querySelector('.gallery');
console.log(galleryListEl);

const listElemMarkup = createElemOfListMarkup(galleryItems);
galleryListEl.insertAdjacentHTML("beforeend", listElemMarkup);
 

function createElemOfListMarkup(galleryItems) {
      return galleryItems.map(({ preview, original, description }) => {
         return `
         <li class="gallery__item">
           <a class="gallery__link" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
           />
         </a>
         </li>
         `;
         })
          .join('');
     
}

const galleryLightBox = new SimpleLightbox(`.gallery__link`, {
    captionsData: "alt",
    captionDelay: 250,
});

console.log(galleryLightBox);
