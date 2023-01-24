import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);


function createImageCardsMarkup(images) {
  return images.map(({ preview, original, description }) => {
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
  }).join('');
};

function onGalleryContainerClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();
  const srcOriginal = event.target.dataset.source;
  basicLightbox.create(`
    <img src="${srcOriginal}" width="1280px">
  `).show()  
};
// const swatchEl = event.target;
  // const parentImageCard = swatchEl.closest('gallery-item');
  // parentImageCard
// enableKeyboard