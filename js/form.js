const popup = document.querySelector('.popup');
const buttonOpenPopupFirst = document.querySelector('.lead__button');
const buttonOpenPopupSecond = document.querySelector('.contacts__button');
const buttonToclosePopup = document.querySelector('.close-button');



// функция закрытия попапа по нажатию на оверлей
function hendlerToClosePopupOnClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    evt.currentTarget.classList.remove('popup_opened');
  }
};
// функция закрытия попапа по нажатию на Esc
function hendlerToClosePopupOnClickEsc(evt) {
  if (evt.key === 'Escape') {
    const popupToClose = document.querySelector('.popup_opened');
    popupToClose.classList.remove('popup_opened');
  }
};
// функция закрытия попапа
function closePopup(popupToClose) {
  popupToClose.classList.remove('popup_opened');

  popupToClose.removeEventListener('click', hendlerToClosePopupOnClickOverlay);

  document.removeEventListener('keydown', hendlerToClosePopupOnClickEsc);
};
// функция открыти попапа
function openPopup(popupToOpen) {
  popupToOpen.classList.add('popup_opened');

  popupToOpen.addEventListener('click', hendlerToClosePopupOnClickOverlay);

  document.addEventListener('keydown', hendlerToClosePopupOnClickEsc);
};

// слушвтели на открытие и закрытие попапа
buttonOpenPopupFirst.addEventListener('click', () => {
  openPopup(popup);
});
buttonOpenPopupSecond.addEventListener('click', () => {
  openPopup(popup);
});
buttonToclosePopup.addEventListener('click', () => {
  closePopup(popup);
});