let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slides img').length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= slideCount) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

setInterval(showSlides, 3000);
