const carousel = document.querySelector('.testimonials__carousel');
const carouselItem = carousel.querySelector('.carousel__feedback-list');
const prevButton = carousel.querySelector('.button--left');
const nextButton = carousel.querySelector('.button--right');
const carouselItems = carouselItem.querySelectorAll('.carousel__feedback-card');

let currentIndex = 0;
let pageSize = calculatePageSize();

function calculatePageSize() {
    if (window.innerWidth >= 1024) {
        return 3;
    } else if (window.innerWidth >= 768) {
        return 2;
    } else {
        return 1;
    }
};

function updateCarousel() {
    carouselItem.style.transform = `translateX(-${currentIndex * (100 / pageSize)}%)`;
    updateDots();
};

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - pageSize + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + pageSize) % carouselItems.length;
    updateCarousel();
});

carouselItem.addEventListener('transitionend', () => {
    if (currentIndex === carouselItems.length - pageSize) {
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

updateCarousel();
