import Popup from "./Popup.js";

export default class PopupWithButton extends Popup {
  constructor(popupSelector, buttonHandle) {
    super(popupSelector);
    this._buttonHandle = buttonHandle;
    this._button = this._popup.querySelector('.popup__button');
  }

  open(card, id) {
    this._card=card;
    this._id = id;
    super.open();
  }

  _handleClickClose(evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__cross') || evt.target.classList.contains('popup__button_type_delete')) {
      this.close();
    }
  }

  setEventListeners() {
    this._button.addEventListener('click', () => {
      this._buttonHandle();
    });
    super.setEventListeners();
  }

  removeCard() {
    this._card.remove();
  }

  removeEventListeners() {
    this._button.removeEventListener('click', () => {
      this._buttonHandle();
    });
    super.removeEventListeners();
  }
}