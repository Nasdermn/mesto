import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, getFieldsValues) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form=this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submitForm = this._submitForm.bind(this);
    this._getFieldsValues = getFieldsValues;
  }

  getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }
  
  _submitForm(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this.getInputValues());
    this.close();
  }

  setEventListeners() {
    this._popup.addEventListener('submit', this._submitForm);
    super.setEventListeners();
  }

  open() {
    this._setInputValues(this._getFieldsValues());
    super.open();
  }

  close() {
    this._form.reset();
    super.close();
  }

  _setInputValues(formData) {
    this._inputList.forEach((input) => {
      if(typeof formData[input.name] !== 'undefined') {
        input.value = formData[input.name];
      }
    })
  }
}