export default class Card {
  constructor(data, templateSelector, imagePopupOpener, handleLike, handleDislike, userId, deletePopup) {
    this._name=data.name;
    this._link=data.link;
    this._likes = data.likes;
    this._likesNumber = data.likes.length;
    this._templateSelector = templateSelector;
    this._imagePopupOpener = imagePopupOpener;
    this._handleLike = handleLike;
    this._handleDislike = handleDislike;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._deletePopup = deletePopup;
  }

  _getTemplate() {
    const cardElement = document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.card__picture');
    this._like = this._element.querySelector('.card__like');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._remove = this._element.querySelector('.card__remove');
    this._text = this._element.querySelector('.card__text');

    this._text.textContent=this._name;
    this._image.src=this._link;
    this._image.alt=this._name;

    this._setEventListeners();

    this._likeCounter.textContent = this._likesNumber;

    //Если находим в массиве лайков карточки лайк с нашим айди - при отрисовке карточек кнопка лайка будет активна
    if (this._likes.findIndex(e => e._id === this._userId) !== -1) {
      this.handleLikeButton();
    }
    //Если айди карточки не совпадает с нашим айди, делаем иконку корзины невидимой
    if (this._ownerId != this._userId) {
      this._remove.style.display = 'none';
    }

    return this._element;
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._handleLikeClick();
    })

    this._remove.addEventListener('click', () => {
      this._handleTrashcanClick();
    })

    this._image.addEventListener('click', () => {
      this._imagePopupOpener(this._name, this._link);
    })
  }

  _handleLikeClick() {
    if (this._like.classList.contains('card__like_active')) {
      this._handleDislike(this._id)
    }
    else {
      this._handleLike(this._id)
    }
  }

  handleLikeButton() {
    this._like.classList.add('card__like_active');
  }

  handleDislikeButton() {
    this._like.classList.remove('card__like_active');
  }

  handleCounter(data) {
    this._likeCounter.textContent = data.likes.length;
  }

  _handleTrashcanClick() {
    this._deletePopup.open(this._element, this._id);
  }
}