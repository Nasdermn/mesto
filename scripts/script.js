const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const popupName = popup.querySelector('.popup__input_name');
const popupDescription = popup.querySelector('.popup__input_description');
const popupCross = popup.querySelector('.popup__cross');
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');

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