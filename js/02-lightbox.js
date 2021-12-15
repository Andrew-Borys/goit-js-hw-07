import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMurkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    })
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", galleryMurkup);

const galleryMagic = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
