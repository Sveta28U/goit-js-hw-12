import{a as b,S as L,i as a}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const w="22356210-f5a6fb995cd777b2b01184cc9",S="https://pixabay.com/api/",s={page:1,per_page:15,query:null};async function u(){try{return await b.get(`${S}`,{params:{key:w,q:s.query,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s.page,per_page:s.per_page}})}catch(r){console.log(r)}}function f(r){return r.map(e=>`<li class='photo-card'>
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
  `).join("")}const q=document.querySelector(".search-form"),n=document.querySelector(".gallery"),p=document.querySelector(".loader"),c=document.querySelector(".load-more ");q.addEventListener("submit",v);c.addEventListener("click",P);const g=new L(".gallery a",{captionsData:"alt",captionDelay:250});async function v(r){r.preventDefault(),s.page=1,n.innerHTML="",h(),y(),s.query=r.currentTarget.elements.searchQuery.value.trim();try{const{data:e}=await u();e.hits.length===0&&a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=f(e.hits),g.refresh(),e.totalHits>s.per_page&&E()}catch{a.error({title:"Error",message:"Sorry, an error occurred while fetching the images. Please try again later."})}finally{m(),r.target.reset()}}async function P(){s.page+=1,h();try{const{data:r}=await u();n.insertAdjacentHTML("beforeend",f(r.hits)),g.refresh();const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),Math.ceil(r.totalHits/s.per_page)===s.page&&(y(),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({title:"Error",message:"Sorry, an error occurred while fetching the images. Please try again later."})}finally{m()}}function h(){p.classList.remove("is-hidden")}function m(){p.classList.add("is-hidden")}function E(){c.classList.remove("is-hidden")}function y(){c.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
