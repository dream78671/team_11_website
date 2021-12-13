(function() {
    "use strict";

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        offset: function (anchor, toggle) {
            // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            // This example is a function, but you could do something as simple as `offset: 25`

            return 104;
        },
    });
})();