import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

function createImageCardsMarkup(images) {
  return images
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
    .join('');
}

function onGalleryContainerClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();
  const srcOriginal = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${srcOriginal}" width="1280px" />
  `);

  const closeGalleryOnEscape = (event) => {
    event.preventDefault();
    if (event.code === 'Escape' && instance.visible()) {
      instance.close();
      document.removeEventListener('keydown', closeGalleryOnEscape);
    }
  };

  instance.show(() => {
    document.addEventListener('keydown', closeGalleryOnEscape);
  });
}

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);
