function transision(i) {
    document.location.href = 'result.html?number=' + i
}

$(function($) {
    $('.bg-swicher').bgswitcher({
        images: ['images/gacha2.jpeg', 'images/gacha3.jpeg', 'images/gacha4.jpeg'],
        interval: 5000,
        loop: true
    });

    $(window).scroll(function() {
        var targetElement = $('.fadein').offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200) {
            $(".fadein").css('opacity', '1');
            $(".fadein").css('transform', 'translateY(0)');
        }

    });
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: '20%',
    });
});
