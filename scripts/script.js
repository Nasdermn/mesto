const elements = document.querySelector('.elements');
const editPopup = document.querySelector('.popup_edit-element');
const addPopup = document.querySelector('.popup_add-element');
const editPopupForm = editPopup.querySelector('.popup__form');
const addPopupForm = addPopup.querySelector('.popup__form');
const popupName = editPopup.querySelector('.popup__input_field_name');
const popupDescription = editPopup.querySelector('.popup__input_field_description');
const popupPlace = addPopup.querySelector('.popup__input_field_place');
const popupLink = addPopup.querySelector('.popup__input_field_link');
const popupFullImage = document.querySelector('.popup_full-image');
const editPopupCross = editPopup.querySelector('.popup__cross');
const addPopupCross = addPopup.querySelector('.popup__cross');
const imagePopupCross = popupFullImage.querySelector('.popup__cross');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const template = document.querySelector('#elements-template').content;
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
  const popupImage = document.querySelector('.popup__image');
  const popupFigcaption = document.querySelector('.popup__figcaption');

  element.querySelector('.elements__picture').src = elLink;
  element.querySelector('.elements__picture').alt = elName;
  element.querySelector('.elements__text').textContent = elName;

  elementLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  })

  elementRemove.addEventListener('click', function () {
    element.remove();
  })

 elementPicture.addEventListener('click', function (evt) {
    popupOpen(popupFullImage);

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
function popupOpen(pop) {
  pop.classList.add('popup_opened');
}
//Закрытие попапа
function popupClose(pop) {
  pop.classList.remove('popup_opened');
}
//Сохранение формы
function popupSave() {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  popupClose(editPopup);
}

//Нажатие на кнопку редактирования профиля
editButton.addEventListener('click', function(){
  popupOpen(editPopup);
  popupName.value=profileName.textContent;
  popupDescription.value=profileDescription.textContent;
});

//Нажатие на кнопку добавления элемента
addButton.addEventListener('click', function(){
  popupOpen(addPopup);
});

//Нажатие на крестик попапа изменения элемента
editPopupCross.addEventListener('click', () => {
  popupClose(editPopup);
});

//Нажатие на крестик попапа добавления элемента
addPopupCross.addEventListener('click', () => {
  popupClose(addPopup);
})

//Нажатие на крестик попапа просмотра фотографии
imagePopupCross.addEventListener('click', () => {
  popupClose(popupFullImage);
})

//Сохранение изменений формы попапа изменения элемента
editPopupForm.addEventListener('submit', popupSave);

//Сохранение изменений формы попапа добавление элемента
addPopupForm.addEventListener('submit', () => {
  event.preventDefault();
  const pl = popupPlace.value;
  const li = popupLink.value;
  const elem = createElement(pl, li);
  addElement(elem);
  popupClose(addPopup);
});