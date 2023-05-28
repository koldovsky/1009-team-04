const carousel = document.querySelector('.carousel');
const carouselItem = carousel.querySelector('.carousel__item');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
const carouselItems = carouselItem.querySelectorAll('.carousel__items');

let currentIndex = 0;

function updateCarousel() {
    carouselItem.style.transition = 'none'; 
    carouselItem.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

carouselItem.addEventListener('transitionend', () => {
    if (currentIndex === carouselItems.length - 1) {
        carouselItem.style.transition = 'none';
        updateCarousel();
    }
});


