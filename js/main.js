// Header style on scroll
const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
};
window.addEventListener('scroll', headerScroll);


//List menu open and close


const menuToggleIcon = document.querySelector('#menu-toggle-icon');
const navbarMenu = document.querySelector('#navbar_menu');

const toggleMenu = () => {

    navbarMenu.classList.toggle('active');
    menuToggleIcon.classList.toggle('active');
};
menuToggleIcon.addEventListener('click', toggleMenu);

const linksToggleMenu = (e) => {
    if (e.target.classList.contains('navbar_list-link')) {
        navbarMenu.classList.remove('active');
        menuToggleIcon.classList.remove('active');
    }
};
window.addEventListener('click', linksToggleMenu);


//Scroll Reveal

const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    reset: true
});

sr.reveal('.home_title, .home_image, .home_subtitle, .heading-group, .aboutme-description, .contactme-description, .btn-group', {
    origin: 'top',
    interval: 250
});

sr.reveal('.portfolio-card-1, .portfolio-card-3, .portfolio-card-5, .portfolio-card-7', {
    origin: 'left',
});

sr.reveal('.portfolio-card-2, .portfolio-card-4, .portfolio-card-6', {
    origin: 'right',
});

sr.reveal('.tech-stack-item', {
    interval: 250,
});

sr.reveal('.footer-container', {
    origin: 'top',
});