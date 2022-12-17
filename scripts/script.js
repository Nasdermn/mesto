const elements = document.querySelector('.elements');
const popupEditElement = document.querySelector('.popup_edit-element');
const popupAddElement = document.querySelector('.popup_add-element');
const popupEditForm = popupEditElement.querySelector('.popup__form');
const popupAddForm = popupAddElement.querySelector('.popup__form');
const inputUserName = popupEditElement.querySelector('.popup__input_field_name');
const inputUserDescription = popupEditElement.querySelector('.popup__input_field_description');
const inputCardTitle = popupAddElement.querySelector('.popup__input_field_place');
const inputCardLink = popupAddElement.querySelector('.popup__input_field_link');
const popupFullImage = document.querySelector('.popup_full-image');
const crossPopupEdit = popupEditElement.querySelector('.popup__cross');
const crossPopupAdd = popupAddElement.querySelector('.popup__cross');
const imagePopupCross = popupFullImage.querySelector('.popup__cross');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const template = document.querySelector('#elements-template').content;
const popupImage = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');
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

//Создание элементов
function createElement(elName, elLink) {
  const element = template.querySelector('.elements__element').cloneNode(true);
  const elementRemove = element.querySelector('.elements__remove');
  const elementPicture = element.querySelector('.elements__picture');
  const elementText = element.querySelector('.elements__text');
  const elementLike = element.querySelector('.elements__like');

  elementPicture.src = elLink;
  elementPicture.alt = elName;
  elementText.textContent = elName;

  elementLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  })

  elementRemove.addEventListener('click', function () {
    element.remove();
  })

 elementPicture.addEventListener('click', function (evt) {
    openPopup(popupFullImage);
    popupImage.alt = evt.target.alt;
    popupImage.src = evt.target.src;
    popupFigcaption.textContent = elementText.textContent;
  })
  return element;
}

//Добавление элемента в начало
function addElement(el) {
  elements.prepend(el);
}

//Добавление элементов из шаблона
function addDefaultElements() {
  for (let i = 0; i < initialCards.length; i++) {
    addElement(createElement(initialCards[i].name, initialCards[i].link));
  }
}

addDefaultElements();

//Открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Сохранение формы
function submitEditProfileForm() {
  event.preventDefault();
  profileName.textContent = inputUserName.value;
  profileDescription.textContent = inputUserDescription.value;
  closePopup(popupEditElement);
}

//Нажатие на кнопку редактирования профиля
buttonEdit.addEventListener('click', function(){
  openPopup(popupEditElement);
  inputUserName.value=profileName.textContent;
  inputUserDescription.value=profileDescription.textContent;
});

//Нажатие на кнопку добавления элемента
buttonAdd.addEventListener('click', function(){
  openPopup(popupAddElement);
});

//Нажатие на крестик попапа изменения элемента
crossPopupEdit.addEventListener('click', () => {
  closePopup(popupEditElement);
});

//Нажатие на крестик попапа добавления элемента
crossPopupAdd.addEventListener('click', () => {
  inputCardTitle.value = "";
  inputCardLink.value = "";
  closePopup(popupAddElement);
})

//Нажатие на крестик попапа просмотра фотографии
imagePopupCross.addEventListener('click', () => {
  closePopup(popupFullImage);
})

//Сохранение изменений формы попапа изменения элемента
popupEditForm.addEventListener('submit', submitEditProfileForm);

//Сохранение изменений формы попапа добавление элемента
popupAddForm.addEventListener('submit', () => {
  event.preventDefault();
  const place = inputCardTitle.value;
  const link = inputCardLink.value;
  const element = createElement(place, link);
  addElement(element);
  inputCardTitle.value = "";
  inputCardLink.value = "";
  closePopup(popupAddElement);
});