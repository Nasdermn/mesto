//ИМПОРТ
import { elements, validationConfig, buttonEdit, buttonAdd, profileName, profileDescription } from '../utils/constants.js';
import { initialCards } from '../utils/constants.js';
import { createCard } from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import PopupWithImage from '../components/PopupWithImage.js';

//КЛАССЫ
const cardList = new Section({
  items: initialCards,
  renderer: (cardElement) => {
    cardList.addItem(createCard(cardElement, '.template_type_default'));
    },
}, elements);

cardList.renderItems();

const user = new UserInfo('.profile__name', '.profile__description');

export const popupWithImage = new PopupWithImage('.popup_type_image');

const popupAddElement = new PopupWithForm('.popup_type_add', 
    (formData) => {
      const card = createCard(formData, '.template_type_default');
      cardList.addItem(card);
    }, () => {return {}}
);

const popupEditProfile = new PopupWithForm('.popup_type_edit',
  (formData) => {
    user.setUserInfo(formData.username, formData.description);
  }, user.getUserInfo.bind(user)
);

const profileEditFormValidator = new FormValidator(validationConfig, editform);
const profileAddFormValidator = new FormValidator(validationConfig, addform);
profileEditFormValidator.enableValidation();
profileAddFormValidator.enableValidation();

//СЛУШАТЕЛИ

//Нажатие на кнопку редактирования профиля
buttonEdit.addEventListener('click', function(){
  popupEditProfile.open();
});

//Нажатие на кнопку добавления элемента
buttonAdd.addEventListener('click', function(){
  popupAddElement.open();
  profileAddFormValidator.resetValidation();
});