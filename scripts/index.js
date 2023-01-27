//ИМПОРТ
import { openPopup, closePopup} from './utils.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';

//ПЕРЕМЕННЫЕ И ОБЪЕКТЫ
const initialCards = [
  {
    name: 'Долина гейзеров. Камчатка',
    link: 'https://www.eurolux-rostov.ru/wp-content/uploads/2020/07/84114.jpeg'
  },
  {
    name: 'Хибины',
    link: 'https://sportishka.com/uploads/posts/2022-11/1667576128_34-sportishka-com-p-ozero-goltsovoe-khibini-krasivo-35.jpg'
  },
  {
    name: 'Котлин',
    link: 'images/kotlin.png'
  },
  {
    name: 'Мамаев Курган',
    link: 'https://images.unsplash.com/photo-1588424157150-fb13a23a2101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const popups = document.querySelectorAll('.popup');
const elements = document.querySelector('.elements');
const popupEditElement = document.querySelector('.popup_edit-element');
const popupAddElement = document.querySelector('.popup_add-element');
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
const validator1 = new FormValidator(validationConfig, popupEditForm);
const validator2 = new FormValidator(validationConfig, popupAddForm);

//ФУНКЦИИ

//Сохранение формы
function submitEditProfileForm() {
  event.preventDefault();
  profileName.textContent = inputUserName.value;
  profileDescription.textContent = inputUserDescription.value;
  closePopup(popupEditElement);
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
  validator1.toggleButtonState(Array.from(popupAddForm.querySelectorAll(validationConfig.inputSelector)), popupAddForm.querySelector(validationConfig.buttonSelector), validationConfig);
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
  const element = new Card(obj, '.template_type_default');
  const cardElement = element.generateCard();
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
  const card = new Card(item, '.template_type_default');
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
});

validator1.enableValidation();
validator2.enableValidation();