(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuButton && mobileNav) {
    const closeMenu = () => { mobileNav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰'; };
    menuButton.addEventListener('click', () => {
      const on = !mobileNav.classList.contains('open');
      mobileNav.classList.toggle('open', on);
      menuButton.setAttribute('aria-expanded', String(on));
      menuButton.textContent = on ? '×' : '☰';
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }
  const filters = document.querySelectorAll('[data-gallery-filter]');
  const works = document.querySelectorAll('[data-work-id]');
  const visibleCount = document.querySelector('[data-visible-count]');
  if(filters.length) {
    filters.forEach(button => button.addEventListener('click', () => {
      const selected = button.dataset.galleryFilter;
      filters.forEach(b => { b.classList.toggle('active', b===button); b.setAttribute('aria-pressed', String(b===button)); });
      let n=0;
      works.forEach(card => { const visible = selected==='All Designs'||card.dataset.cat===selected; card.hidden=!visible; if(visible)n++; });
      if(visibleCount)visibleCount.textContent=n + ' of ' + works.length + ' creative works';
    }));
  }

  const allWorks = window.PORTFOLIO_WORKS || [];
  const lightbox = document.querySelector('#gallery-lightbox');
  if(lightbox && allWorks.length) {
    const image = lightbox.querySelector('[data-lightbox-image]');
    const title = lightbox.querySelector('[data-lightbox-title]');
    const desc = lightbox.querySelector('[data-lightbox-description]');
    const category = lightbox.querySelector('[data-lightbox-category]');
    const count = lightbox.querySelector('[data-lightbox-count]');
    const close = lightbox.querySelector('[data-lightbox-close]');
    const previous = lightbox.querySelector('[data-lightbox-prev]');
    const next = lightbox.querySelector('[data-lightbox-next]');
    let current=0,slide=0,lastFocus=null;
    function slideSrc(work, i) {
      if(work.id!=='social-series'||i===0)return work.image;
      return 'assets/images/social-series-'+String(i+1).padStart(2,'0')+'.webp';
    }
    function render(){
      const item=allWorks[current];if(!item)return;
      image.src=slideSrc(item,slide);
      image.alt=item.title + (item.slides>1 ? ' — slide '+(slide+1)+' of '+item.slides : ' — original concept design');
      title.textContent=item.title;desc.textContent=item.description;
      category.textContent=item.category + ' · Concept Work';
      count.textContent=item.slides>1 ? `Slide ${slide+1} / ${item.slides} · Work ${current+1} / ${allWorks.length}` : `Work ${current+1} / ${allWorks.length}`;
    }
    function openAt(idx){
      lastFocus=document.activeElement;current=idx;slide=0;render();
      lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';close.focus();
    }
    function exit(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';if(lastFocus&&lastFocus.focus)lastFocus.focus();}
    function navigate(delta){
      const item=allWorks[current];
      if(delta>0){ if(slide<item.slides-1)slide++;else{current=(current+1)%allWorks.length;slide=0;} }
      else{ if(slide>0)slide--;else{current=(current-1+allWorks.length)%allWorks.length;slide=allWorks[current].slides-1;} }
      render();
    }
    document.addEventListener('click',event=>{
      const target=event.target.closest('[data-open-work]');
      if(target){const idx=allWorks.findIndex(w=>w.id===target.dataset.openWork);if(idx!==-1)openAt(idx);}
    });
    close.addEventListener('click',exit);
    previous.addEventListener('click',()=>navigate(-1));
    next.addEventListener('click',()=>navigate(1));
    lightbox.addEventListener('click',e=>{if(e.target===lightbox)exit();});
    document.addEventListener('keydown',e=>{
      if(!lightbox.classList.contains('open'))return;
      if(e.key==='Escape')exit();
      if(e.key==='ArrowLeft')navigate(-1);
      if(e.key==='ArrowRight')navigate(1);
      if(e.key==='Tab'){
        const focusable=[close,previous,next];const i=focusable.indexOf(document.activeElement);
        if(e.shiftKey&&i===0){e.preventDefault();next.focus();}
        else if(!e.shiftKey&&i===2){e.preventDefault();close.focus();}
      }
    });
  }
  const form = document.querySelector('form[name="project-inquiry"]');
  if(form){
    const params = new URLSearchParams(location.search);
    const service = params.get('service'), plan=params.get('package');
    if(service){const select=form.querySelector('[name="service"]');if(select&&Array.from(select.options).some(o=>o.value===service))select.value=service;}
    if(plan){const select=form.querySelector('[name="package"]');if(select&&Array.from(select.options).some(o=>o.value===plan))select.value=plan;}
  }
})();
