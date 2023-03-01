import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form=this._popup.querySelector('.popup__form');
    this.inputList = this._form.querySelectorAll('.popup__input');
    this._submitForm = this._submitForm.bind(this);
    this._buttonText = this._popupButton.textContent;
  }

  _handleLoading(isLoading) {
    if (isLoading) {
      this._popupButton.textContent = 'Сохранение...';
    } else {
      this._popupButton.textContent = this._buttonText;
    }
  }

  getInputValues() {
    this._formValues = {};
    this.inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }
  
  _submitForm(evt) {
    evt.preventDefault();
    this._handleLoading(true);
    this._handleFormSubmit(this.getInputValues())
      .then(()=>this.close())
      .catch(()=>console.log('Ошибка при сабмите формы'))
      .finally(()=>this._handleLoading(false));
  }

  setEventListeners() {
    this._popup.addEventListener('submit', this._submitForm);
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}