import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 const galleryListEl = document.querySelector('.gallery');
 console.log(galleryListEl);

 console.log(createElemOfListMarkup(galleryItems));

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

function blockingBrowserActioms(event) {
    event.preventDefault();
}

function onGalleryListClick(event) {
    blockingBrowserActioms(event);

    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}"/>
    `);

    instance.show();

    galleryListEl.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    })
}
