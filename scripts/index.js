//ИМПОРТ
import { initialCards } from './arrays.js';
import { openPopup, closePopup} from './utils.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';

//ПЕРЕМЕННЫЕ
const popups = document.querySelectorAll('.popup');
const elements = document.querySelector('.elements');
const popupEditElement = document.querySelector('.popup_type_edit');
const popupAddElement = document.querySelector('.popup_type_add');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupEditForm = popupEditElement.querySelector('.popup__form');
const popupAddForm = popupAddElement.querySelector('.popup__form');
const inputUserName = popupEditElement.querySelector('.popup__input_field_name');
const inputUserDescription = popupEditElement.querySelector('.popup__input_field_description');
const inputCardTitle = popupAddElement.querySelector('.popup__input_field_place');
const inputCardLink = popupAddElement.querySelector('.popup__input_field_link');
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button',
  inactiveButtonSelector: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'input-error_active',
};
const profileEditFormValidator = new FormValidator(validationConfig, popupEditForm);
const profileAddFormValidator = new FormValidator(validationConfig, popupAddForm);

//ФУНКЦИИ

//Сохранение формы
function submitEditProfileForm() {
  event.preventDefault();
  profileName.textContent = inputUserName.value;
  profileDescription.textContent = inputUserDescription.value;
  closePopup(popupEditElement);
}

//Создание карточки
function createCard(data, templateType) {
  const card = new Card(data, templateType);
  const cardElement = card.generateCard();
  return cardElement;
}

//СЛУШАТЕЛИ
//Нажатие на кнопку редактирования профиля
buttonEdit.addEventListener('click', function(){
  openPopup(popupEditElement);
  inputUserName.value=profileName.textContent;
  inputUserDescription.value=profileDescription.textContent;
});

//Нажатие на кнопку добавления элемента
buttonAdd.addEventListener('click', function(){
  openPopup(popupAddElement);
  popupAddForm.reset();
  profileAddFormValidator.resetValidation();
});

//Сохранение изменений формы попапа изменения элемента
popupEditForm.addEventListener('submit', submitEditProfileForm);

//Сохранение изменений формы попапа добавления элемента
popupAddForm.addEventListener('submit', () => {
  event.preventDefault();
  const obj = {
    name: inputCardTitle.value,
    link: inputCardLink.value,
  }
  const cardElement = createCard(obj, '.template_type_default');
  elements.prepend(cardElement);
  closePopup(popupAddElement);
});

//Закрытие любого попапа при нажатии на оверлей или крестик
popups.forEach((popup) =>{
  popup.addEventListener('click', (evt)=>{
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains("popup__cross")) {
      closePopup(popup);
    }
  });
});

//ИСПОЛНЕНИЕ

initialCards.forEach((item) => {
  const cardElement = createCard(item, '.template_type_default');
  elements.prepend(cardElement);
});

profileEditFormValidator.enableValidation();
profileAddFormValidator.enableValidation();