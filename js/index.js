// funcionamento do carrossel de posts recentes

const carouselLeftBtn = document.querySelector('.fa-arrow-left');
const carouselRightBtn = document.querySelector('.fa-arrow-right');
let idx = 0;

const carouselPosts = document.querySelectorAll('.recent-post');
const qntCarouselPosts = carouselPosts.length;

function translatePost(pixels) {
    carouselPosts.forEach(post => post.style.transform = `translateX(${pixels}px)`); 
}

// fazendo o carrossel começar pelo primeiro item, apesar do justify-content
// cada item do carrossel tem 300px de largura + 15px de gap entre eles
let position = (qntCarouselPosts - 1) / 2 * 315;
translatePost(position);

carouselLeftBtn.addEventListener('click', (e) => {
    if (idx !== 0) {
        position += 315;
        idx -= 1;
        translatePost(position);
    }
});
carouselRightBtn.addEventListener('click', (e) => {
    if (idx !== qntCarouselPosts-1) {
        position -= 315;
        idx += 1;
        translatePost(position);
    }
});

