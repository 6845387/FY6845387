// Array of slide image URLs
var slideImages = ["assets/slides/Slide1.PNG", "assets/slides/Slide2.PNG", "assets/slides/Slide3.PNG", "assets/slides/Slide4.PNG", "assets/slides/Slide5.PNG"];
var currentSlide = 0;

function showSlide() {
    document.getElementById('slide-window').src = slideImages[currentSlide]
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideImages.length;
    showSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
    showSlide();
}

function showSlideNumber(slideNumber) {
    currentSlide = slideNumber - 1;
    showSlide();
}

showSlide();