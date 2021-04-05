window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // slider

    let slides = document.querySelectorAll('.slider__item'),
        currentSlide = 0,
        slideInterval = setInterval(nextSlide, 4000);

    function nextSlide() {
        slides[currentSlide].className = 'slider__item';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slider__item active fade';
    }
});