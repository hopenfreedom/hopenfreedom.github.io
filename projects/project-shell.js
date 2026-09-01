document.querySelector('[data-page]').innerHTML=`<a class="skip-link" href="#project-main">Skip to main content</a>
<header class="site-header"><div class="utility-bar"><div class="shell utility-inner"><a href="https://wa.me/923097040468" target="_blank" rel="noopener noreferrer" class="utility-item"><span class="utility-icon">◉</span><small>CONTACT US VIA<br>WHATSAPP</small></a><a href="../index.html#contact" class="utility-item volunteer"><span class="utility-icon">♥</span><small>BECOME A VOLUNTEER</small></a></div></div><nav class="main-nav shell" aria-label="Main navigation"><a class="brand" href="../index.html"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M51 13c-8 3-15 9-19 18C26 23 19 18 10 16c4 9 11 15 20 18-6-1-12 0-18 4 8 4 15 5 22 2-2 6-6 11-12 15 13-2 22-9 24-20 2-9 3-16 5-22Z"/><path d="M31 13c0 9 3 16 9 21"/></svg><span>HOPE FREEDOM<small>FOUNDATION</small></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="project-nav-links"><span></span><span></span><span></span><b class="sr-only">Menu</b></button><div class="nav-links" id="project-nav-links"><a href="../index.html">Home</a><a href="../index.html#about">About Us</a><a class="active" href="../index.html#projects">Our Projects</a><a href="../index.html#stories">Stories</a><a href="../index.html#contact">Contact</a><a class="nav-donate-primary" href="https://gofund.me/7a47f985d" target="_blank" rel="noopener noreferrer">Donate ♥</a></div></nav></header>
<main id="project-main"><section class="project-hero"><div class="shell project-hero-content"><span class="project-number" data-number></span><h1 data-title></h1><p data-tagline></p></div></section><section class="project-body"><div class="shell content-grid"><article class="project-copy"><span class="section-label">OUR WORK</span><h2>Creating practical change with dignity.</h2><p data-intro></p><p data-body></p><blockquote data-quote></blockquote></article><aside class="focus-card"><h2>Programme focus</h2><ul data-focus></ul><a class="donate-link" href="https://gofund.me/7a47f985d" target="_blank" rel="noopener noreferrer">Support this work →</a></aside></div></section><section class="other-projects"><div class="shell"><h2>Explore our other programmes</h2><a href="../index.html#projects">View all eight projects →</a></div></section></main>
<footer class="project-footer"><div class="shell"><span>© 2026 Hope Freedom Foundation</span><a href="https://wa.me/923097040468" target="_blank" rel="noopener noreferrer">WhatsApp: +92 309 7040468</a></div></footer>`;
const menu=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menu.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const siteHeader=document.querySelector('.site-header');
function updateHeader(){siteHeader.classList.toggle('utility-hidden',window.scrollY>36)}
window.addEventListener('scroll',updateHeader,{passive:true});
updateHeader();

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems=[...document.querySelectorAll('.project-hero-content,.project-copy,.focus-card,.other-projects .shell')];
revealItems.forEach((element,index)=>{element.classList.add('reveal');element.style.setProperty('--reveal-delay',`${index*80}ms`)});
if(reduceMotion){revealItems.forEach(element=>element.classList.add('is-visible'))}else{
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}),{threshold:.14,rootMargin:'0px 0px -30px'});
  revealItems.forEach(element=>revealObserver.observe(element));
}
