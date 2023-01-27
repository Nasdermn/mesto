export const popupFullImage = document.querySelector('.popup_full-image');
export const popupImage = document.querySelector('.popup__image');
export const popupFigcaption = document.querySelector('.popup__figcaption');

//Закрытие попапа
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  //Удаление слушателя для закрытия попапа при нажатии клавиши escape
  document.removeEventListener('keydown', closePopupEsc);
}

//Закрытие попапа на клавишу Escape
export function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
}

//Открытие попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  //Добавление слушателя для закрытия попапа при нажатии клавиши escape
  document.addEventListener('keydown', closePopupEsc);
}