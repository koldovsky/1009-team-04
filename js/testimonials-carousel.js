const carousel = document.querySelector('.testimonials__carousel');
const carouselInner = carousel.querySelector('.carousel__feedback-list');
const prevButton = carousel.querySelector('.button--left');
const nextButton = carousel.querySelector('.button--right');
const carouselCards = carouselInner.querySelectorAll('.carousel__feedback-card');

let currentIndex = 0;
let cardsInARow;
let cardSize;

setCardsSettings();
window.addEventListener("resize", setCardsSettings, true);


function setCardsSettings() {
    if (window.innerWidth >= 1024) cardsInARow = 4;
    else if (window.innerWidth > 768) cardsInARow = 2;
    else cardsInARow = 1;

    cardSize = 100 / cardsInARow;
    currentIndex = 0;
	updateCarousel();
};


function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * cardSize}%)`;
};

prevButton.addEventListener('click', () => {
    if (currentIndex === 0) currentIndex = carouselCards.length - cardsInARow;
    else currentIndex--;
    
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex + cardSize === carouselCards.length) currentIndex = 0;
    else currentIndex++;

    updateCarousel();
});

