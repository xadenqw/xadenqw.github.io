// Small enhancement: add a shadow to the sticky navigation after scrolling.
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 10px 35px rgba(0,0,0,.22)' : 'none';
});
