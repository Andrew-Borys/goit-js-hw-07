import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMurkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryMurkup);
galleryRef.addEventListener("click", onImageToCreateModal);

// const itemRef = document.querySelector(".gallery__link");

// console.log(itemRef);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
  `;
    })
    .join("");
}

function onImageToCreateModal(e) {
  e.preventDefault();

  const selectedImage = e.target.dataset.source;
  console.log(selectedImage);

  const modal = basicLightbox.create(`
      <img src="${selectedImage}" width="800" height="600">
  `);

  modal.show();

  document.addEventListener("keydown", closeModal);
  function closeModal(e) {
    if (e.key === "Escape") {
      modal.close();
    }
  }
}
