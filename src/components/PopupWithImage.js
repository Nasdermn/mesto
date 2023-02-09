import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupFigcaption = this._popup.querySelector('.popup__figcaption');
  }

  open(placeName, imgSrc) {
    super.open();
    this._popupFigcaption.textContent = placeName;
    this._popupImage.alt = placeName;
    this._popupImage.src = imgSrc;
  }
}