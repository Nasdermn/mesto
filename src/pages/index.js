//ИМПОРТ
import { elements, validationConfig, buttonEdit, buttonAdd, buttonAvatar} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupWithButton from '../components/PopupWithButton.js';

export const popupWithImage = new PopupWithImage('.popup_type_image');
const deletePopup = new PopupWithButton('.popup_type_delete');

function createCard(data, templateType, id) {
  const card = new Card(data, templateType,
    () => {
      popupWithImage.open(data.name, data.link);
    },
    (cardId) => {return api.likeCard(cardId)},
    (cardId) => {return api.dislikeCard(cardId)},
    id, deletePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

//ВАЛИДАЦИЯ
const profileEditFormValidator = new FormValidator(validationConfig, editform);
const profileAddFormValidator = new FormValidator(validationConfig, addform);
const profileAvatarFormValidator = new FormValidator(validationConfig, avatarform);
profileEditFormValidator.enableValidation();
profileAddFormValidator.enableValidation();
profileAvatarFormValidator.enableValidation();

//UserInfo и Api
const user = new UserInfo('.profile__name', '.profile__description', '.profile__avatar');

const options = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '0fa98e94-ea07-4d0e-8a4c-48f3981dda97',
    'Content-Type': 'application/json'
  }
}

export const api = new Api(options);

Promise.all([api.getUserProfile(), api.getInitialCards()])
  .then((res) => {
    //Отрисовка профиля
    user.setUserInfo(res[0].name, res[0].about, res[0].avatar);
    buttonAvatar.style.backgroundImage = `url('${res[0].avatar}')`
    const myId = res[0]._id;

    //Отрисовка карточек
    const cardList = new Section({
      items: res[1],
      renderer: (cardElement) => {
        cardList.appendItem(createCard(cardElement, '.template_type_default', myId));
        },
    }, elements);

    cardList.renderItems();
    //ПОПАПЫ
    const popupEditProfile = new PopupWithForm('.popup_type_edit', () => {
      return (api.patchProfile(popupEditProfile.getInputValues().username, popupEditProfile.getInputValues().description)
        .then((data) => user.setUserInfo(data.name, data.about))
      )
    });

    const popupEditAvatar = new PopupWithForm('.popup_type_avatar', (data) => {
      return (api.patchAvatar(data.avatar)
        .then((data) => buttonAvatar.style.backgroundImage = `url('${data.avatar}')`
      ))
    });

    const popupAddElement = new PopupWithForm('.popup_type_add', 
      (formData) => {
        return (api.postCard(popupAddElement.getInputValues())
          .then((data) => cardList.prependItem(createCard(data, '.template_type_default', myId))
        ))
      });

    //СЛУШАТЕЛИ
    //Нажатие на кнопку редактирования профиля
    buttonEdit.addEventListener('click', function(){
      const info = user.getUserInfo();
      popupEditProfile.inputList.forEach((input) => {
        input.value = info[input.name];
      })
      popupEditProfile.open();
      profileEditFormValidator.resetValidation();
    });

    //Нажатие на кнопку изменения фотографии
    buttonAvatar.addEventListener('click', function(){
      popupEditAvatar.open();
      profileAvatarFormValidator.resetValidation();
    });

    //Нажатие на кнопку добавления элемента
    buttonAdd.addEventListener('click', function(){
      popupAddElement.open();
      profileAddFormValidator.resetValidation();
    });
  })
  .catch(() => console.log('Ошибка при отрисовке карточек и профиля'))
