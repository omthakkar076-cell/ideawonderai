(()=>{const css='/brand/brand-consistency.css';if(!document.querySelector('link[data-iw-brand]')){const l=document.createElement('link');l.rel='stylesheet';l.href=css;l.dataset.iwBrand='1';document.head.appendChild(l)}
const old=document.querySelector('#nav')||document.querySelector('body>nav');if(old)old.remove();
const header=document.createElement('header');header.id='iw-site-header';header.innerHTML=`
<div class="iw-nav-inner">
<a class="iw-logo" href="/" aria-label="IdeaWonder AI home"><img src="/brand/ideawonder-logo-horizontal.png" alt="IdeaWonder AI"></a>
<button class="iw-burger" type="button" aria-label="Toggle navigation" aria-expanded="false">☰</button>
<ul class="iw-links">
<li class="iw-service"><button class="iw-service-toggle" type="button" aria-expanded="false">Services⌄</button><div class="iw-dropdown">
<a href="/services/seo-ai-search">SEO / AI Search</a><a href="/services/social-media-marketing">Social Media Marketing</a><a href="/services/performance-marketing">Performance Marketing</a><a href="/services/lead-generation">Lead Generation</a><a href="/services/business-automation">Business Automation</a></div></li>
<li><a href="/case-study">Case Study</a></li><li><a href="/blogs">Blog</a></li><li><a href="/contact">Contact Us</a></li></ul>
<a class="iw-cta" href="/contact">Build Your Growth Strategy</a></div>`;
document.body.prepend(header);
const path=location.pathname.replace(/\/$/,'');header.querySelectorAll('.iw-links a').forEach(a=>{const p=a.getAttribute('href');if(p===path)a.setAttribute('aria-current','page')});
const burger=header.querySelector('.iw-burger');burger.addEventListener('click',()=>{const open=header.classList.toggle('iw-open');burger.setAttribute('aria-expanded',String(open));burger.textContent=open?'×':'☰'});
const toggle=header.querySelector('.iw-service-toggle');toggle.addEventListener('click',()=>{const li=toggle.closest('.iw-service');const open=li.classList.toggle('iw-expanded');toggle.setAttribute('aria-expanded',String(open))});
})();