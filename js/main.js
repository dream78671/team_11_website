"use strict";

(function() {
    var windowsDownload = '/game/v1/kingofthejungle-windows.zip';
    var mainDownloadBtn = document.getElementById('main-download-btn');

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
                        downloadBtns[i].setAttribute('href', windowsDownload);
                    }
                    mainDownloadBtn.textContent = 'Download for Windows';
                }
            } else if (os.name.toLowerCase() === 'mac os' || os.name.toLowerCase().indexOf('mac') !== -1) {
                mainDownloadBtn.textContent = 'Download for Mac'
            }
        }
    }
})();