const popup = document.querySelector('.popup');
const popupName = popup.querySelector('.popup__name');
const popupDescription = popup.querySelector('.popup__description');
const popupCross = popup.querySelector('.popup__cross');
const popupButton = popup.querySelector('.popup__button');
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
popupName.value=profileName.textContent;
popupDescription.value=profileDescription.textContent;

function popupOpen() {
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupSave() {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpen);
popupCross.addEventListener('click', popupClose);
popupButton.addEventListener('click', popupSave);