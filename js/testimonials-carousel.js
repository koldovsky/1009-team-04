const carousel = document.querySelector('.testimonials__carousel');
const carouselItem = carousel.querySelector('.carousel__feedback-list');
const prevButton = carousel.querySelector('.button--left');
const nextButton = carousel.querySelector('.button--right');
const carouselItems = carouselItem.querySelectorAll('.carousel__feedback-card');

let currentIndex = 0;

function updateCarousel() {
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
    } else if (currentIndex === 0) {
        carouselItem.style.transition = 'none';
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    const newPageSize = calculatePageSize();
    if (pageSize !== newPageSize) {
        pageSize = newPageSize;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);

updateCarousel();
