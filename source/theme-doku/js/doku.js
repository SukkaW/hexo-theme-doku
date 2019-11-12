(function (window, document) {
    /* Auto fixed */
    function autoFixed(targetElID, relativeElID, navbarElID) {
        var navbarHeight;
        var relativeHeight = document.getElementById(relativeElID).clientHeight;
        var target = document.getElementById(targetElID);

        if (navbarElID) {
            navbarHeight = document.getElementById(navbarElID).clientHeight;
            relativeHeight += navbarHeight;
        };

        function updateSidebarPosition() {
            var scrollTop = document.scrollingElement.scrollTop;

            if (scrollTop > relativeHeight) {
                target.classList.add('doku-fixed');
            } else {
                target.classList.remove('doku-fixed');
            }
        }

        window.addEventListener('scroll', function () {
            window.requestAnimationFrame(updateSidebarPosition);
        });

        updateSidebarPosition();
    };

    autoFixed('doku-sidebar', 'doku-navbar');
    /* Copyright year auto update */
    document.getElementById('doku-copyrght-year').textContent = new Date().getFullYear();
})(window, document);