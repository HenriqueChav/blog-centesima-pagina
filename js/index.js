/* =============== CARROSSEL DE POSTS RECENTES =============== */

const leftButton = document.querySelector('.fa-arrow-left');
const rightButton = document.querySelector('.fa-arrow-right');

const recentPosts = document.querySelectorAll('.recent-post');
const qntRecentPosts = recentPosts.length;

/**
 * Os cards de posts recentes no carrossel possuem:
 * -> 300px de largura;
 * -> 15px de gap entre eles.
 */

let position = (qntRecentPosts - 1) / 2 * 315;
translatePosts(position);

let currentPost = 0;

leftButton.addEventListener('click', (event) => {
    if (currentPost === 0) return;

    position += 315;
    translatePosts(position);
    
    currentPost -= 1;
});

rightButton.addEventListener('click', (event) => {
    if (currentPost === qntRecentPosts - 1) return;
    
    position -= 315;
    translatePosts(position);
    
    currentPost += 1;
});

// Funções auxiliares

function translatePosts(pixels) {
    recentPosts.forEach( post => post.style.transform = `translateX(${pixels}px)` ); 
}
