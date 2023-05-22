document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('.carousel');
    var inner = carousel.querySelector('.carousel-inner');
    var items = carousel.querySelectorAll('.carousel-item');
    var prevButton = carousel.querySelector('.carousel-prev');
    var nextButton = carousel.querySelector('.carousel-next');

    var currentItem = 0;
    var itemWidth = items[0].offsetWidth;
    var itemCount = items.length;

    function navigateCarousel(direction) {
        if (direction === 'prev') {
            currentItem--;
            if (currentItem < 0) {
                currentItem = itemCount - 1;
            }
        } else {
            currentItem++;
            if (currentItem >= itemCount) {
                currentItem = 0;
            }
        }

        var translateX = -currentItem * itemWidth;
        inner.style.transform = 'translateX(' + translateX + 'px)';
    }

    prevButton.addEventListener('click', function (e) {
        e.preventDefault();
        navigateCarousel('prev');
    });

    nextButton.addEventListener('click', function (e) {
        e.preventDefault();
        navigateCarousel('next');
    });
});
