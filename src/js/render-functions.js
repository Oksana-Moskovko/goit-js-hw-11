// SimpleLightbox
const gallery = document.querySelector(".gallery");

export function createGallery(hits) {

  const markup = hits
    .map((img) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img 
            class="gallery-image" 
            src="${img.webformatURL}" 
            alt="${img.tags}" 
          />
        </a>
        <div class="information"> 
        <p><span class="bold-font">Likes:</span> ${img.likes}</p>
        <p><span class="bold-font">Views:</span> ${img.views}</p>
        <p><span class="bold-font">Comments:</span> ${img.comments}</p>
        <p><span class="bold-font">Downloads:</span> ${img.downloads}</p>
        </div>
        
      </li>
    `)
        .join("");
    
  gallery.innerHTML = markup;
}


export function clearGallery() {
    const galleryItem = document.querySelector(".gallery-item");
    gallery.removeAttribute(galleryItem);
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}
export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}