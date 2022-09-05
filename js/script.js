// --бургер меню--
let navBlock = document.querySelector('.header__navigation');
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  navBlock.classList.toggle('scale');
  menuButton.classList.toggle('active');
});