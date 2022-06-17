$(function () {

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        variableWidth: true
    });


    $('.say__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        arrows: true,
        variableWidth: true,
        centerMode: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                }
            },
        ],

        prevArrow: '<button class="slider__btn slider__btn-left"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M20 1.50049C9.784 1.50049 1.5 9.78249 1.5 20.0005C1.5 30.2165 9.784 38.5005 20 38.5005C30.216 38.5005 38.5 30.2165 38.5 20.0005C38.5 9.78249 30.216 1.50049 20 1.50049Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '<path d="M22.8847 13.0581L15.9127 20.0001L22.8847 26.9421" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="slider__btn slider__btn-right"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M20 38.4996C30.216 38.4996 38.5 30.2176 38.5 19.9996C38.5 9.78363 30.216 1.49963 20 1.49963C9.784 1.49963 1.5 9.78363 1.5 19.9996C1.5 30.2176 9.784 38.4996 20 38.4996Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '<path d="M17.1153 26.942L24.0873 20L17.1153 13.058" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n</button>',
    });


    $('.menu_btn').on('click', function () {
        $('.menu_btn').toggleClass('menu_btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.header_menu-link').on('click', function () {
        $('.menu_btn').removeClass('menu_btn--active');
        $('.menu__list').removeClass('menu_list--active');
    });

    var mixer = mixitup('.gallery_inner', {
        load: {
            filter: '.all'
        }
    });

});