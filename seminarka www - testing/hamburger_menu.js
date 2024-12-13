// Výběr prvků
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');

// Přidání události kliknutí na hamburger
hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});
