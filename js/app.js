// INSERÇÃO DO FAVICON
const setFavicon = (emoji) => {
    const canvas = document.createElement('canvas');
    canvas.height = 32;
    canvas.width = 32;
  
    const ctx = canvas.getContext('2d');
    ctx.font = '28px serif';
    ctx.fillText(emoji, -2, 24);
  
    const favicon = document.querySelector('link[rel=icon]');
    if (favicon) { favicon.href = canvas.toDataURL(); }
}
  
setFavicon('📕');

// INSERÇÃO DO ANO NO FOOTER
const footerYear = document.querySelector('#footer-year');
const currentDate = new Date();

footerYear.textContent = currentDate.getFullYear();

// ANIMAÇÃO DA NAVBAR
const pageHeader = document.querySelector('#page-header');

addEventListener('scroll', (e) => {
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // equivalente da altura calculada pelo css
    if (window.scrollY >= 0.2*height) {
        pageHeader.classList.add('scrolled');
    } else {
        pageHeader.classList.remove('scrolled');
    }
});
