const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
} else {
    console.error('menuIcon or navLinks not found');
}