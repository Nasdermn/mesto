import { popupWithImage } from "../pages/index.js";

export default class Card {
  constructor(data, templateSelector, popupOpener) {
    this._name=data.name;
    this._link=data.link;
    this._templateSelector = templateSelector;
    this._popupOpener = popupOpener;
  }

  _getTemplate() {
    const cardElement = document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.card__picture');
    this._like = this._element.querySelector('.card__like');
    this._remove = this._element.querySelector('.card__remove');
    this._text = this._element.querySelector('.card__text');

    this._text.textContent=this._name;
    this._image.src=this._link;
    this._image.alt=this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._handleLikeButton();
    })

    this._remove.addEventListener('click', () => {
      this._handleDeleteButton();
    })

    this._image.addEventListener('click', () => {
      this._popupOpener(this._name, this._link);
    })
  }

  _handleLikeButton() {
    this._like.classList.toggle('card__like_active');
  }

  _handleDeleteButton() {
    this._element.remove();
  }
}