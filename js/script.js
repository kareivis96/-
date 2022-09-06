// --бургер меню--
let navBlock = document.querySelector('.header__navigation');
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  navBlock.classList.toggle('scale');
  menuButton.classList.toggle('active');
});

//--скрывать хедер--
let lastScroll = 0;
const defaultOffset = document.documentElement.clientHeight;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset;
const isContainHide = () => header.classList.contains('_hide');

window.addEventListener('scroll', function() {
  if (scrollPosition() > lastScroll && !isContainHide() && scrollPosition() > defaultOffset) {
    //scroll down
    header.classList.add('_hide');
  } else if (scrollPosition() < lastScroll && isContainHide()) {
    //scroll up
    header.classList.remove('_hide');
  }

  lastScroll = scrollPosition();
});