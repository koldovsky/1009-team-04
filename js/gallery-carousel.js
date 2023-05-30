const carousel = document.querySelector('.gallery__carousel');
const carouselItem = carousel.querySelector('.carousel__items');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
const carouselItems = carouselItem.querySelectorAll('.carousel__item');
const dotsContainer = carousel.querySelector('.carousel__dots');

let currentIndex = 0;

function createDots() {
    for (let i = 0; i < carouselItems.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel__dot');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = dotsContainer.querySelectorAll('.carousel__dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function updateCarousel() {
    carouselItem.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

window.addEventListener('resize', () => {
    updateCarousel();
});

createDots();
updateCarousel();
