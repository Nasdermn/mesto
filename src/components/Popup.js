export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleClickClose = this._handleClickClose.bind(this);
    this._popupButton = this._popup.querySelector('.popup__button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this.removeEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleClickClose(evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__cross')) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleClickClose);
  }

  removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleClickClose);
  }
}