import{a as b,S as L,i as d}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const w="22356210-f5a6fb995cd777b2b01184cc9",q="https://pixabay.com/api/",s={page:1,per_page:15,query:null};async function u(){try{return await b.get(`${q}`,{params:{key:w,q:s.query,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s.page,per_page:s.per_page}})}catch(r){console.log(r)}}function p(r){return r.map(e=>`<li class='photo-card'>
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
  `).join("")}const v=document.querySelector(".search-form"),a=document.querySelector(".gallery"),f=document.querySelector(".loader"),n=document.querySelector(".load-more ");v.addEventListener("submit",S);n.addEventListener("click",P);const g=new L(".gallery a",{captionsData:"alt",captionDelay:250});async function S(r){r.preventDefault(),s.page=1,a.innerHTML="",h(),y(),s.query=r.currentTarget.elements.searchQuery.value.trim();try{const{data:e}=await u();e.hits.length===0&&d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML=p(e.hits),g.refresh(),e.totalHits>s.per_page&&E()}catch(e){console.error("Error",e)}finally{m(),r.target.reset()}}async function P(){s.page+=1,h();try{const{data:r}=await u();a.insertAdjacentHTML("beforeend",p(r.hits)),g.refresh();const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),Math.ceil(r.totalHits/s.per_page)===s.page&&(y(),d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(r){console.error("Error",r)}finally{m()}}function h(){f.classList.remove("is-hidden")}function m(){f.classList.add("is-hidden")}function E(){n.classList.remove("is-hidden")}function y(){n.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
