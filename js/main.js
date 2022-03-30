"use strict";

(function() {
    var path = '/game/v2/';
    var windowsDownloadUrl = path + 'kingofthejungle-windows.zip';
    var macDownloadUrl = path + 'kingofthejungle-mac.zip';
    var mainDownloadBtn = document.getElementById('main-download-btn');
    var altDownloadBtn = document.getElementById('alt-download-btn');

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        offset: function (anchor, toggle) {
            // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            // This example is a function, but you could do something as simple as `offset: 25`

            return 104;
        },
    });
    
    var ua = new UAParser(window.navigator.userAgent);
    var os = ua.getOS();

    if (os) {
        if (os.name) {
            if (os.name.toLowerCase() === 'windows') {
                var downloadBtns = document.getElementsByClassName('download-btn');
                if (downloadBtns && downloadBtns.length > 0) {
                    for (var i = 0; i < downloadBtns.length; i++) {
                        downloadBtns[i].setAttribute('href', windowsDownloadUrl);
                    }
                    mainDownloadBtn.textContent = 'Download for Windows';
                    altDownloadBtn.textContent = 'Download for Mac';
                    altDownloadBtn.setAttribute('href', macDownloadUrl);
                }
            } else if (os.name.toLowerCase() === 'mac os' || os.name.toLowerCase().indexOf('mac') !== -1) {
                mainDownloadBtn.textContent = 'Download for Mac'
                altDownloadBtn.textContent = 'Download for Windows';
                altDownloadBtn.setAttribute('href', windowsDownloadUrl);
            }
        }
    }

    window.onload = function() {
        var swiperCss = document.createElement('link');
        swiperCss.href = 'https://unpkg.com/swiper@8/swiper-bundle.min.css';
        swiperCss.setAttribute('rel', 'stylesheet');
        document.head.appendChild(swiperCss);
        swiperCss.onload = function(event) {
            var swiperJs = document.createElement('script');
            swiperJs.src = 'https://unpkg.com/swiper@8/swiper-bundle.min.js';
            document.body.appendChild(swiperJs);
            console.log('swiperjs:', swiperJs);
            swiperJs.onload = function(event) {
                console.log('event:', event);
                var mapsSlider = document.createElement('script');
                mapsSlider.src = './js/swiper-slider.js';
                document.body.appendChild(mapsSlider);
            }
        }
    }
})();