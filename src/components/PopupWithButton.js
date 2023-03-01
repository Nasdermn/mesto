import Popup from "./Popup.js";
import { api } from "../pages/index.js";

export default class PopupWithButton extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
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
      api.deleteCard(this._id);
      this._card.remove();
    });
    super.setEventListeners();
  }

  removeEventListeners() {
    this._button.removeEventListener('click', () => {
      api.deleteCard(this._id);
      this._card.remove();
    });
    super.removeEventListeners();
  }
}