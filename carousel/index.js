let index = 0;
const width = 600;
const count = 4;

const $carouselGallery = document.querySelector('.carousel__gallery');
window.setInterval(() => {
    index = index + 1;
    index = index % count;
    let offset = - (index * width)
    $carouselGallery.style.left = offset + 'px';
}, 3000);
