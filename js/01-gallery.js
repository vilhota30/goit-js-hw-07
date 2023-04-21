import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// const galleryListEl = document.querySelector('.gallery');
// console.log(galleryListEl);

// console.log(createElemOfListMarkup(galleryItems));

// const listElemMarkup = createElemOfListMarkup(galleryItems);
// galleryListEl.insertAdjacentHTML("beforeend", listElemMarkup);

// function createElemOfListMarkup(galleryItems) {
//      return galleryItems.map(({ preview, original, description }) => {
//         return `
//         <li class="gallery__item">
//           <a class="gallery__link" href="${original}">
//          <img
//              class="gallery__image"
//              src="${preview}"
//              data-source="${original}"
//              alt="${description}"
//           />
//         </a>
//         </li>
//         `;
//     })
//         .join('');
    
// }
const galleryList = document.querySelector('.gallery');
const createCalleryItem = ({ preview, original, description }) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}" data-original-img=${original}>
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
`;
galleryList.innerHTML = galleryItems.map(createCalleryItem).join("");


const instances = [];

galleryList.addEventListener("click", event => {
    event.preventDefault();
    const original = event.target
        .closest(".gallery__link")
        .getAttribute("data-original-img");
    const instance = basicLightbox.create(`<img src=>"${original}" width="800" height="600">`);
    instances.push(instance);
    instance.show();
    document.addEventListener("keydown", (event) => onEscPress(event, instance));
});

const onEscPress = (event, instance) => {
    const ESC_KEYCODE = "Escape";
    if (event.code === ESC_KEYCODE) {
        instance.close();
        instances.splice(instances.indexOf(instance), 1);
        document.removeEventListener("keydown", (event) => onEscPress(event, instance)
        );
    }
};
