const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        closeList = document.querySelector('.menu__list'),
        closeSection = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeList.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeSection.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.use__ratings-counter'),
    lines = document.querySelectorAll('.use__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});