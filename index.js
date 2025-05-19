import{a as c,i as l,S as u}from"./assets/vendor-vwbIfzmB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function d(a){return c.get("https://pixabay.com/api/",{params:{key:"50343879-15e81ad9c5fd9246c97e6d2d5",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw console.error("API error:",r),r})}const p=document.querySelector(".gallery");function f(a){const r=a.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img 
            class="gallery-image" 
            src="${t.webformatURL}" 
            alt="${t.tags}" 
          />
        </a>
        <div class="information"> 
        <p><span class="bold-font">Likes:</span> ${t.likes}</p>
        <p><span class="bold-font">Views:</span> ${t.views}</p>
        <p><span class="bold-font">Comments:</span> ${t.comments}</p>
        <p><span class="bold-font">Downloads:</span> ${t.downloads}</p>
        </div>
        
      </li>
    `).join("");p.innerHTML=r}function m(){const a=document.querySelector(".loader");a.style.display="block"}function i(){const a=document.querySelector(".loader");a.style.display="none"}const y=document.querySelector(".form"),g=document.querySelector('input[name="search-text"]');document.querySelector(".gallery");y.addEventListener("submit",a=>{a.preventDefault();const r=g.value.trim();if(!r){l.error({message:"Sorry, there are no images matching your search query. Please, try again!"});return}m(),d(r).then(t=>{i();const s=t.hits;if(!s.length){l.error({message:"Sorry, there are no images matching your search query. Please, try again!"});return}f(s),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{i(),l.error({message:"Something went wrong. Please try again later."})})});
//# sourceMappingURL=index.js.map
