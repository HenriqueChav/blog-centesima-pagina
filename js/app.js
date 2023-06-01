/* ==================== FAVICON ==================== */
// Fonte: https://stackoverflow.com/questions/59431371/use-emoji-as-favicon-in-websites

setFavicon('📕');

function setFavicon(emoji) {
    const canvas = document.createElement('canvas');
    canvas.height = 32;
    canvas.width = 32;
  
    const ctx = canvas.getContext('2d');
    ctx.font = '28px serif';
    ctx.fillText(emoji, -2, 24);
  
    const favicon = document.querySelector('link[rel=icon]');
    if (favicon) favicon.href = canvas.toDataURL();
}
  

/* ==================== ANO NO FOOTER ==================== */

const footerYear = document.querySelector('#footer-year');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

footerYear.textContent = currentYear;


/* ==================== ANIMAÇÃO DA NAVBAR ==================== */
// Fonte: https://stackoverflow.com/questions/44109314/javascript-calculate-with-viewport-width-height 

const pageHeader = document.querySelector('#page-header');
let windowHeight = getWindowHeight();

addEventListener('resize', (event) => windowHeight = getWindowHeight());

addEventListener('scroll', (event) => {
    if (window.scrollY >= 0.2 * windowHeight) {
        pageHeader.classList.add('scrolled');
    } else {
        pageHeader.classList.remove('scrolled');
    }
});

// Funções auxiliares

function getWindowHeight() {
    return Math.max( document.documentElement.clientHeight, window.innerHeight || 0 );
}
