// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPhotos, userOptions } from './js/pixabay-api';
import { creatMarkup } from './js/render-functions';
const form = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more ');
form.addEventListener('submit', onSubmit);

loadMoreBtn.addEventListener('click', onClick);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
async function onSubmit(event) {
  event.preventDefault();
  userOptions.page = 1;
  galleryList.innerHTML = '';
  showLoader();
  hideBtn();
  userOptions.query = event.currentTarget.elements.searchQuery.value.trim();
  try {
    const { data } = await getPhotos();
    if (data.hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }

    galleryList.innerHTML = creatMarkup(data.hits);
    lightbox.refresh();
    if (data.totalHits > userOptions.per_page) {
      showBtn();
    }
  } catch (error) {
    console.error(`Error`, error);
  } finally {
    hideLoader();
    event.target.reset();
  }
}
async function onClick() {
  userOptions.page += 1;
  showLoader();
  try {
    const { data } = await getPhotos();
    galleryList.insertAdjacentHTML('beforeend', creatMarkup(data.hits));
    lightbox.refresh();

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    const lastPage = Math.ceil(data.totalHits / userOptions.per_page);
    if (lastPage === userOptions.page) {
      hideBtn();
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.error(`Error`, error);
  } finally {
    hideLoader();
  }
}
function showLoader() {
  loader.classList.remove('is-hidden');
}
function hideLoader() {
  loader.classList.add('is-hidden');
}

function showBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}
function hideBtn() {
  loadMoreBtn.classList.add('is-hidden');
}
