// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPhotos } from './js/pixabay-api';
import { creatMarkup } from './js/render-functions';
const form = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
form.addEventListener('submit', onSubmit);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
function onSubmit(event) {
  event.preventDefault();
  galleryList.innerHTML = '';
  showLoader();
  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();
  getPhotos(searchQuery)
    .then(res => {
      if (res.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      galleryList.innerHTML = creatMarkup(res.hits);
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}
function showLoader() {
  loader.classList.remove('is-hidden');
}
function hideLoader() {
  loader.classList.add('is-hidden');
}
