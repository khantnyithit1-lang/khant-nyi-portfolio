/* Khant Nyi Thit — Motion V2.0. Framework-free; no impact on links/forms/portfolio data. */
(() => {
  'use strict';
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = s => document.querySelector(s);

  if (!reduced && 'IntersectionObserver' in window) {
    const groups = [
      '.section .section-top', '.section .service-grid > *',
      '.section .feature-projects > *', '.section .portfolio-grid > .work-card',
      '.section .project-grid > *', '.section .detail-service',
      '.section .pricing-grid > *', '.section .ad-pricing > *',
      '.section .skill-sections > *', '.section .process > *',
      '.section .faq-list > *', '.section .contact-layout > *',
      '.section .about-portrait', '.section .cta-band',
      '.section .tech-note', '.section .callout', '.section .contact-method',
      '.section .soft-panel', '.section .about-grid > *'
    ];
    const list = Array.from(new Set(document.querySelectorAll(groups.join(','))));
    try {
      // The observer is installed before any element is hidden. Elements already
      // in the viewport are animated IN rather than instantly made visible.
      const ob = new IntersectionObserver((entries, observer) => {
        for (const e of entries) if(e.isIntersecting) {
          e.target.classList.add('knv2-shown'); observer.unobserve(e.target);
        }
      }, { threshold:0.08,rootMargin:'0px 0px -30px 0px' });
      list.forEach((el, i)=>{
        el.setAttribute('data-knv2-reveal','');
        el.style.setProperty('--knv2-delay',`${(i%4)*105}ms`);
        ob.observe(el);
      });
      document.documentElement.classList.add('knv2-enabled');
      // Always recover content if the page was restored or scrolled rapidly.
      window.addEventListener('pageshow',()=>{
        list.forEach(el=>{
          const r=el.getBoundingClientRect();
          if(r.bottom>0 && r.top<innerHeight) el.classList.add('knv2-shown');
        });
      });
    } catch (_) {document.documentElement.classList.remove('knv2-enabled');}

    const bar = document.createElement('div');
    bar.className='knv2-scroll-progress';bar.setAttribute('aria-hidden','true');
    document.body.appendChild(bar);
    let queued=false;
    const update=()=>{
      queued=false;
      const doc=document.documentElement;
      const max=Math.max(1,doc.scrollHeight-innerHeight);
      bar.style.transform=`scaleX(${Math.min(1,Math.max(0,scrollY/max))})`;
    };
    window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update);}}, {passive:true});
    window.addEventListener('resize',update,{passive:true});update();

    // Internal page transitions only. Do not hijack form submits, new tabs,
    // email/Telegram links, downloads, in-page anchors or modified clicks.
    document.addEventListener('click',e=>{
      const link=e.target.closest('a[href]');
      if(!link||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey) return;
      if(link.hasAttribute('download')||link.target&&link.target!=='_self')return;
      let dest;try{dest=new URL(link.href,location.href);}catch(_){return;}
      if(dest.origin!==location.origin||dest.hash||dest.protocol!=='http:'&&dest.protocol!=='https:')return;
      if(dest.href===location.href|| !/\.html$/i.test(dest.pathname))return;
      e.preventDefault(); document.body.classList.add('knv2-exiting');
      setTimeout(()=>{ location.href=dest.href; },180);
    });
  }

  // Existing gallery behavior remains the source of truth; watch only src changes
  // to animate between original images & multi-slide designs.
  const lightbox=$('#gallery-lightbox');
  if(lightbox){
    const img=lightbox.querySelector('[data-lightbox-image]');
    if(img&&!reduced&&'MutationObserver' in window){
      new MutationObserver(()=>{
        img.classList.remove('knv2-swapped');void img.offsetWidth;
        img.classList.add('knv2-swapped');
      }).observe(img,{attributes:true,attributeFilter:['src']});
    }
    const surface=lightbox.querySelector('.lb-visual');
    const next=lightbox.querySelector('[data-lightbox-next]');
    const prev=lightbox.querySelector('[data-lightbox-prev]');
    if(surface&&next&&prev){
      let x=0,y=0,when=0,tracking=false;
      surface.addEventListener('touchstart',event=>{
        if(event.touches.length!==1||!lightbox.classList.contains('open')){
          tracking=false;return;
        }
        const t=event.touches[0];x=t.clientX;y=t.clientY;when=Date.now();tracking=true;
      },{passive:true});
      surface.addEventListener('touchend',event=>{
        if(!tracking||!event.changedTouches.length)return;tracking=false;
        const t=event.changedTouches[0];const dx=t.clientX-x,dy=t.clientY-y;
        if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.35&&Date.now()-when<1350){
          (dx<0?next:prev).click();
        }
      },{passive:true});
      surface.addEventListener('touchcancel',()=>{tracking=false;},{passive:true});
    }
  }
  // Animate newly selected cards after existing filter handler has run.
  document.querySelectorAll('[data-gallery-filter]').forEach(button=>{
    button.addEventListener('click',()=>{
      if(reduced)return;
      document.querySelectorAll('[data-work-id]:not([hidden])').forEach((card,i)=>{
        card.classList.remove('knv2-filter-in');
        void card.offsetWidth;
        card.style.animationDelay=`${Math.min(i,8)*35}ms`;
        card.classList.add('knv2-filter-in');
      });
    });
  });
})();
