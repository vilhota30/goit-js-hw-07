import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 const galleryListEl = document.querySelector('.gallery');
 console.log(galleryListEl);

 const listElemMarkup = createElemOfListMarkup(galleryItems);
galleryListEl.insertAdjacentHTML("beforeend", listElemMarkup);
 
galleryListEl.addEventListener("click", onGalleryListClick);

 function createElemOfListMarkup(galleryItems) {
      return galleryItems.map(({ preview, original, description }) => {
         return `
         <li class="gallery__item">
           <a class="gallery__link" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
           />
         </a>
         </li>
         `;
         })
          .join('');
     
 }


function onGalleryListClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}"/>
    `);

    instance.show();

    galleryListEl.addEventListener("keydown", keybordCheck);
    
}

function keybordCheck(event) {
     if (event.code === "Escape") {
         instance.close();
         galleryListEl.removeEventListener("keydown", keybordCheck);

    }
}

