const carousel = document.querySelector('.gallery__carousel');
const carouselItem = carousel.querySelector('.carousel__items');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
const carouselItems = carouselItem.querySelectorAll('.carousel__item');
const dotsContainer = carousel.querySelector('.carousel__dots');

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

function createDots() {
    const numItems = carouselItems.length;
    const numDots = Math.ceil(numItems / pageSize);
  
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel__dot');
        dot.addEventListener('click', () => {
            currentIndex = i * pageSize;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }
};

function updateDots() {
    const dots = dotsContainer.querySelectorAll('.carousel__dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', currentIndex >= index * pageSize && currentIndex < (index + 1) * pageSize);
    });
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
            cloneItem.classList.add('carousel__item--clone');
            carouselItem.appendChild(cloneItem);
        }
    }

    updateDots();
};






prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
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
        dotsContainer.innerHTML = '';
        createDots();
        updateCarousel();
    }
});

createDots();
updateCarousel();