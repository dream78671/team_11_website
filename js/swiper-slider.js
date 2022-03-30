"use strict";

(function() {
    var mapsSlider = new Swiper('.maps-list', {
        spaceBetween: 24,
        slidesPerView: 1,
        navigation: {
            nextEl: '.slider-nav-next',
            prevEl: '.slider-nav-prev'
        }
    });
})();