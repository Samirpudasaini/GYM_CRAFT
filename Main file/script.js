const galleryContainer = document.querySelector('.gallery-container');
const galleryImages = document.querySelectorAll('.gallery-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let imageWidth = galleryImages.length > 0 ? galleryImages[0].clientWidth : 0;
let autoSlide;
let autoSlideInterval = 3000;

function updateGallery() {
    if (galleryImages.length === 0) return;

    galleryContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function startAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        if (currentIndex < 4) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first image 
        }
        updateGallery();
    }, autoSlideInterval);
}

prevBtn.addEventListener('click', () => {
    if (galleryImages.length === 0) return;

    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    } else {
        currentIndex = 0; // Reset to first if already at the first image
        updateGallery();
    }
    startAutoSlide();
});

nextBtn.addEventListener('click', () => {
    if (galleryImages.length === 0) return;

    if (currentIndex < 4) {
        currentIndex++;
        updateGallery();
    } else {
        currentIndex = 0; // Reset to first if already at the last image
        updateGallery();
    }
    startAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (galleryImages.length === 0) return;

        currentIndex = index;
        updateGallery();
        startAutoSlide();
    });
});

window.addEventListener('resize', () => {
    if (galleryImages.length > 0) {
        imageWidth = galleryImages[0].clientWidth;
        updateGallery();
    }
});

updateGallery();
startAutoSlide();
