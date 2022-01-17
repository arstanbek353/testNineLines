import helpers from '../helpers';

function openMenu() {
    $('html').addClass('is-lock-scroll');
    $('.js-burger').addClass('is-active');
    $('.header__menu').addClass('is-active');
}

function closeMenu() {
    $('html').removeClass('is-lock-scroll');
    $('.js-burger').removeClass('is-active');
    $('.header__menu').removeClass('is-active');
}

function toggleMenu() {
    $('html').toggleClass('is-lock-scroll');
    $('.js-burger').toggleClass('is-active');
    $('.header__menu').toggleClass('is-active');
}

function init() {
    helpers.$header = $('.header');
    let lastScrollTop = 0;

    $('.js-burger').on('click.header', toggleMenu);
    $('.header__menu').on('click.header', toggleMenu)

    helpers.$document
        .on('keyup.header', (e) => {
            if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu').hasClass('is-active')) {
                toggleMenu();
            }
        });
    helpers.$window.on('scroll.header', () => {
        const scrollTop = window.pageYOffset;
        helpers.$header.addClass('down');

        if (scrollTop < window.innerHeight) {
            helpers.$header.removeClass('down');
        }

        lastScrollTop = scrollTop;
    });
}

function destroy() {
    $('.js-burger').off('.header');
    helpers.$document.off('.header');
    helpers.$window.off('.header');
}

export default {
    init,
    destroy,
    openMenu,
    closeMenu,
};
