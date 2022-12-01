const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const popupName = popup.querySelector('.popup__input_field_name');
const popupDescription = popup.querySelector('.popup__input_field_description');
const popupCross = popup.querySelector('.popup__cross');
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function popupOpen() {
  popup.classList.add('popup_opened');
  popupName.value=profileName.textContent;
  popupDescription.value=profileDescription.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupSave() {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
popupCross.addEventListener('click', popupClose);
popupForm.addEventListener('submit', popupSave);