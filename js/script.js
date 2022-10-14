// --бургер меню--
let navBlock = document.querySelector('.header__navigation');
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  navBlock.classList.toggle('scale');
  menuButton.classList.toggle('active');
});

//--скрывать хедер--
let lastScroll = 0;
const defaultOffset = document.documentElement.clientHeight + 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset;
const isContainHide = () => header.classList.contains('_hide');

window.addEventListener('scroll', function () {
  if (scrollPosition() > lastScroll && !isContainHide() && scrollPosition() > defaultOffset) {
    //scroll down
    header.classList.add('_hide');
  } else if (scrollPosition() < lastScroll && isContainHide()) {
    //scroll up
    header.classList.remove('_hide');
  }

  lastScroll = scrollPosition();
});

// открытие слайдера
const sliderHeadingArray = document.querySelectorAll('.slider__heading');

sliderHeadingArray.forEach((el) => {
  el.addEventListener('click', () => {
    const sliderParagraph = el.closest('.slider__list-element').querySelector('.slider__paragraph');

    document.querySelectorAll('.slider__paragraph').forEach((el) => el.classList.remove('slider__paragraph_visible'));

    sliderParagraph.classList.toggle('slider__paragraph_visible');
  });
});

// выплывание карточек отзывов
const recallsLeftCardsArray = Array.from(document.querySelectorAll('.card_left'));
const recallsRightCardsArray = Array.from(document.querySelectorAll('.card_right'));

document.addEventListener('scroll', function setVisibilityOnCard() {
  const lastScroll = window.pageYOffset + document.documentElement.clientHeight;

  recallsLeftCardsArray.forEach((el) => {
    const distanceFromCardToTop = el.getBoundingClientRect().top + window.pageYOffset;

    if (lastScroll >= distanceFromCardToTop + 100) {
      el.classList.add('card_type_visible_left');
    } else if (lastScroll < distanceFromCardToTop) {
      el.classList.remove('card_type_visible_left');
    };
  });
  recallsRightCardsArray.forEach((el) => {
    const distanceFromCardToTop = el.getBoundingClientRect().top + window.pageYOffset;

    if (lastScroll >= distanceFromCardToTop + 100) {
      el.classList.add('card_type_visible_right');
    } else if (lastScroll < distanceFromCardToTop) {
      el.classList.remove('card_type_visible_right');
    };
  });
});