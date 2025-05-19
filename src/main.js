import { getImagesByQuery } from './js/pixabay-api.js'
import { createGallery } from './js/render-functions.js'
import { clearGallery } from './js/render-functions.js'
import { showLoader } from './js/render-functions.js'
import { hideLoader } from './js/render-functions.js'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


//
const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]')
const gallery = document.querySelector(".gallery");
//
form.addEventListener('submit', e => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please, try again!',
    });
    return;
    }
    
    
    showLoader();
    
    getImagesByQuery(query)
    .then(data => {
        hideLoader();
        const hits = data.hits;

      if (!hits.length) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please, try again!',
        });
        return;
      }

      createGallery(hits);

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
    })
    .catch(error => {
        hideLoader();
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
      });
    });
});