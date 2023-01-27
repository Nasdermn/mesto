export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;

    this._formSelector = this._config.formSelector;
    this._inputSelector = this._config.inputSelector;
    this._buttonSelector = this._config.buttonSelector;
    this._inactiveButtonSelector = this._config.inactiveButtonSelector;
    this._inputErrorClass = this._config.inputErrorClass;
    this._errorClass = this._config.errorClass;
  }

  _showInputError(input, errorMessage) {
    const error = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    const error = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    error.textContent = '';
    error.classList.remove(this._errorClass);
  }

  _isValid(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    }
    else{
      this._showInputError(input, input.validationMessage);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState(inputList, button) {
    if (this._hasInvalidInput(inputList)) {
      button.classList.add(this._inactiveButtonSelector);
      button.disabled = true;
    }
    else {
      button.classList.remove(this._inactiveButtonSelector);
      button.disabled = false;
    }
  }

  _setEventListeners() {
    const inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const button = this._formElement.querySelector(this._buttonSelector);
    this.toggleButtonState(inputs, button);
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this.toggleButtonState(inputs, button);
      });
    });
  }

  enableValidation() {
      this._setEventListeners();
  }
}