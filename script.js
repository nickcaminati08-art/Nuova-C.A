
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');

    menu.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        nav.classList.remove('open');

        menu.setAttribute('aria-expanded', 'false');
    });
});



if ('IntersectionObserver' in window) {

    document.documentElement.classList.add('js');

    const observer = new IntersectionObserver(entries => {

        entries.forEach(e => {

            if (e.isIntersecting) {

                e.target.classList.add('visible');

                observer.unobserve(e.target);

            }

        });

    }, {
        threshold: 0.08
    });

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

}



document.querySelectorAll('.gallery img').forEach(img => {

    const show = () => {

        img.hidden = false;

        img.nextElementSibling.hidden = true;

        img.nextElementSibling.style.display = 'none';

    };

    img.addEventListener('load', show);

    if (img.complete && img.naturalWidth) {
        show();
    }

});




document.querySelector('#year').textContent =
    new Date().getFullYear();



const quoteDialog = document.querySelector('#quote-dialog');

document.querySelectorAll('.quote-trigger').forEach(link => {

    link.addEventListener('click', e => {

        if (typeof quoteDialog.showModal === 'function') {

            e.preventDefault();

            quoteDialog.showModal();

        }

    });

});




quoteDialog.querySelector('.close-dialog')
    .addEventListener('click', () => {

        quoteDialog.close();

    });




quoteDialog.addEventListener('click', e => {

    if (e.target === quoteDialog) {

        quoteDialog.close();

    }

});
