import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);


function createImageCardsMarkup(images) {
  return images.map(({ preview, original, description }) => {
    return `
 <li>
 <a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>
</li>
`;
  }).join('');
};

function onGalleryContainerClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
  return;
  }
  event.preventDefault();
  const srcOriginal = event.target.dataset.source;
  new SimpleLightbox('.gallery a', { /* options */ }); 
  };
