//ИМПОРТ
import { initialCards } from '../utils/constants.js';
import { createCard } from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

//ПЕРЕМЕННЫЕ
const elements = document.querySelector('.elements');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button',
  inactiveButtonSelector: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'input-error_active',
};

const user = new UserInfo('.profile__name', '.profile__description');

//сделать
const popupAddElement = new PopupWithForm('.popup_type_add', 
    (formData) => {
      const card = createCard(formData, '.template_type_default');
      elements.prepend(card);
    }
);

const popupEditProfile = new PopupWithForm('.popup_type_edit',
  (formData) => {
    profileName.textContent = formData.username;
    profileDescription.textContent = formData.description;
  }, user.getUserInfo.bind(user)
);

const profileEditFormValidator = new FormValidator(validationConfig, editform);
const profileAddFormValidator = new FormValidator(validationConfig, addform);
profileEditFormValidator.enableValidation();
profileAddFormValidator.enableValidation();

//СЛУШАТЕЛИ
//Нажатие на кнопку редактирования профиля
buttonEdit.addEventListener('click', function(){
  // const {name, description} = user.getUserInfo();
  popupEditProfile.open();
});

//Нажатие на кнопку добавления элемента
buttonAdd.addEventListener('click', function(){
  popupAddElement.open();
  profileAddFormValidator.resetValidation();
});

//Создание дефолтных карточек
const cardList = new Section({
  items: initialCards,
  renderer: (cardElement) => {
    cardList.addItem(createCard(cardElement, '.template_type_default'));
    },
}, elements);

cardList.renderItems();