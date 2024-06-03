import{S as l,i as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f="22356210-f5a6fb995cd777b2b01184cc9",d="https://pixabay.com/api/";function m(s){const e=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}/?${e}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json("")})}function p(s){return s.map(e=>`<li class='photo-card'>
    <a href='${e.largeImageURL}'>
      <img src='${e.webformatURL}' alt='${e.tags}' loading='lazy' />
    </a>
    <div class='info'>
      <p class='info-item'>
        <b>Likes ${e.likes}</b>
      </p>
      <p class='info-item'>
        <b>Views ${e.views}</b>
      </p>
      <p class='info-item'>
        <b>Comments ${e.comments}</b>
      </p>
      <p class='info-item'>
        <b>Downloads ${e.downloads}</b>
      </p>
    </div>
  </li>
  `).join("")}const h=document.querySelector(".search-form"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");h.addEventListener("submit",y);const g=new l(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){s.preventDefault(),a.innerHTML="",b();const e=s.currentTarget.elements.searchQuery.value.trim();m(e).then(o=>{o.hits.length===0&&u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML=p(o.hits),g.refresh()}).catch(o=>{console.log(o)}).finally(()=>{L(),s.target.reset()})}function b(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
