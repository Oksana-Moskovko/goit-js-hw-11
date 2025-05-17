import { getImagesByQuery } from './js/pixabay-api.js'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


//
const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]')
//

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = input.value.trim();
    if (!query) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
    return;
    }
    
    getImagesByQuery(query);
});