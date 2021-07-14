$(document).ready(function () {
    $('.user-panel__sort-date').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.user-panel__sort-box-date')
    });

    $('.user-panel__sort-page').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.user-panel__sort-box-page')
    });

    $('.js-user-dates-start').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.user-panel__dates-start')
    });
    $('.js-user-dates-end').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.user-panel__dates-end')
    });

    if ($('.user-panel__slider-right').length) {
        let button = document.getElementById('slide');
        button.onclick = function () {
            let container = document.getElementById('container');
            sideScroll(container, 'right', 25, 100, 10);
        };
        let back = document.getElementById('slideBack');
        back.onclick = function () {
            let container = document.getElementById('container');
            sideScroll(container, 'left', 25, 100, 10);
        };

        function sideScroll(element, direction, speed, distance, step) {
            scrollAmount = 0;
            var slideTimer = setInterval(function () {
                if (direction == 'left') {
                    element.scrollLeft -= step;
                } else {
                    element.scrollLeft += step;
                }
                scrollAmount += step;
                if (scrollAmount >= distance) {
                    window.clearInterval(slideTimer);
                }
            }, speed);
        }
    }

    $('.js-user-position').select2({
        minimumResultsForSearch: Infinity,
    });
})