const carousel = document.querySelector('.testimonials__carousel');
const carouselItem = carousel.querySelector('.carousel__feedback-list');
const prevButton = carousel.querySelector('.button--left');
const nextButton = carousel.querySelector('.button--right');
const carouselItems = carouselInner.querySelectorAll('.carousel__feedback-card');

let currentIndex = 0;
let pageSize = calculatePageSize();

function calculatePageSize() {
    if (window.innerWidth >= 1024) {
        return 4;
    } else if (window.innerWidth >= 992) {
        return 3;
    } else if (window.innerWidth >= 768) {
        return 2;
    } else {
        return 1;
    }
};

function updateCarousel() {
    const totalItems = carouselItems.length;
    const remainingItems = totalItems - currentIndex;
    const visibleItems = Math.min(pageSize, remainingItems);

carouselItem.style.transform = `translateX(-${currentIndex * (100 / pageSize)}%)`;

if (remainingItems < pageSize + 1) {
    const emptySpace = pageSize + 1 - remainingItems;
    for (let i = 0; i < emptySpace; i++) {
        const cloneIndex = (currentIndex + i) % totalItems;
        const cloneItem = carouselItems[cloneIndex].cloneNode(true);
        cloneItem.classList.add('carousel__feedback-card--clone');
        carouselItem.appendChild(cloneItem);
    }
}
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

