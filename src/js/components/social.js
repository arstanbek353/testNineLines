import Share from 'ninelines-sharing';
import html2canvas from 'html2canvas';

if (document.querySelector('[data-social]')) {
    const html = document.querySelector('html');
    const socialPopupTrigger = document.querySelector('.main-banner__social');
    const socialPopup = document.querySelector('.share-popup');
    const title = document.querySelector('.share-popup__title');
    const description = document.querySelector('.share-popup__description');
    const titleTextarea = document.querySelector('.share-popup__textarea--title');
    const descriptionTextarea = document.querySelector('.share-popup__textarea--description');
    const list = document.querySelectorAll('[data-social]');

    socialPopupTrigger.addEventListener('click', (e) => {
        socialPopup.classList.add('is-active')
        html.classList.add('is-lock-scroll')
    });

    socialPopup.addEventListener('click', (e) => {
        if (e.target == title) {
            title.classList.add('is-active')
            titleTextarea.classList.add('is-active')

        } else if (e.target == description) {
            description.classList.add('is-active')
            descriptionTextarea.classList.add('is-active')
        }
    });

    titleTextarea.addEventListener('blur', (e) => {
        title.classList.remove('is-active')
        titleTextarea.classList.remove('is-active')
        title.innerHTML = titleTextarea.value
    });

    descriptionTextarea.addEventListener('blur', (e) => {
        description.classList.remove('is-active')
        descriptionTextarea.classList.remove('is-active')
        description.innerHTML = descriptionTextarea.value
    });

    Array.prototype.forEach.call(list, (item) => {
        item.addEventListener('click', (e) => {
            const social = e.currentTarget.dataset.social;
            const url = location.origin + location.pathname;
            Share[social](url);
            html2canvas(socialPopup, { backgroundColor: "#F1F1F1" }).then(function (canvas) {
                document.body.appendChild(canvas);
                socialPopup.classList.remove('is-active')
                html.classList.remove('is-lock-scroll')
            });
        });
    });
}
