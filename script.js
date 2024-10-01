// Toggle menu icon
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Counter for cart items
const cartCounter = document.querySelector('.cart span');
let