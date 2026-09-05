const menu=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const siteHeader=document.querySelector('.site-header');
function updateUtilityBar(){siteHeader.classList.toggle('utility-hidden',window.scrollY>36)}
window.addEventListener('scroll',updateUtilityBar,{passive:true});
updateUtilityBar();
const serviceWord=document.querySelector('#service-word');
if(serviceWord){
  const services=['Education','Food','Healthcare','Safe Homes','Emergency Relief'];
  let serviceIndex=0;
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){window.setInterval(()=>{serviceIndex=(serviceIndex+1)%services.length;serviceWord.textContent=services[serviceIndex]},2200)}
}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.querySelectorAll('[data-count]').forEach(el=>{const target=+el.dataset.count,start=performance.now();function tick(now){const p=Math.min((now-start)/1100,1),v=Math.floor(target*(1-Math.pow(1-p,3)));el.textContent=v.toLocaleString();if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)});observer.unobserve(entry.target)}),{threshold:.25});observer.observe(document.querySelector('.impact-grid'));
const newsletter=document.querySelector('#newsletter-form');
if(newsletter){newsletter.addEventListener('submit',event=>{event.preventDefault();const email=new FormData(newsletter).get('email');window.location.href=`mailto:hopenfreedomministry@gmail.com?subject=${encodeURIComponent('Newsletter updates')}&body=${encodeURIComponent(`Please add ${email} to Hope Freedom Ministry updates.`)}`})}

// Subtle, accessible entrance animations.
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealGroups=[
  ['.gofundme-card'],
  ['.about-goal','.about-story'],
  ['.section-intro'],
  ['.impact-card'],
  ['.impact-cta'],
  ['.story-heading','.story-summary'],
  ['.story-benefit'],
  ['.story-quote'],
  ['.involved-intro'],
  ['.involved-card'],
  ['.footer-profile','.footer-campaigns','.footer-contact']
];
const revealItems=revealGroups.flatMap(group=>group.flatMap(selector=>[...document.querySelectorAll(selector)]));
revealItems.forEach((element,index)=>{element.classList.add('reveal');element.style.setProperty('--reveal-delay',`${Math.min(index%4,3)*70}ms`)});
if(reduceMotion){revealItems.forEach(element=>element.classList.add('is-visible'))}else{
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}),{threshold:.12,rootMargin:'0px 0px -35px'});
  revealItems.forEach(element=>revealObserver.observe(element));
}
