/*
*****************************
Navbar
*****************************
*/
const navlinks = document.querySelector('.navbar__links');
const hamburger = document.querySelector('.hamburger__menu');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('show');

    const isopen = navlinks.classList.contains('show');


    icon.setAttribute("class", isopen ? "fa-solid fa-xmark" : "fa-solid fa-bars");

});

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
/*
*****************************
Scroll
*****************************
*/
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal('.home__container', {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 400,
});

ScrollReveal().reveal('.hotel__container h1', {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal('.hotel__cards', {
    ...scrollRevealOption,
    origin: "right",
    delay: 800,
});

ScrollReveal().reveal('.head__title', {
    ...scrollRevealOption,
    origin: "bottom",
});

ScrollReveal().reveal('.pro__cards', {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 900,
});

ScrollReveal().reveal('.services__boxes', {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1100,
});

ScrollReveal().reveal('.contact__box', {
    ...scrollRevealOption,
    origin: "right",
    delay: 1300,
});



