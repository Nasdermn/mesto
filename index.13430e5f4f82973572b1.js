(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{h:()=>X});var e=document.querySelector(".elements"),n=document.querySelector(".profile__edit-button"),r=document.querySelector(".profile__add-button"),o=document.querySelector(".profile__avatar"),i=(document.querySelector(".popup__button_type_delete"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),{formSelector:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__button",inactiveButtonSelector:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"input-error_active"});function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=n,this._formSelector=this._config.formSelector,this._inputSelector=this._config.inputSelector,this._buttonSelector=this._config.buttonSelector,this._inactiveButtonSelector=this._config.inactiveButtonSelector,this._inputErrorClass=this._config.inputErrorClass,this._errorClass=this._config.errorClass,this._inputs=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._button=this._formElement.querySelector(this._buttonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._button.classList.add(this._inactiveButtonSelector),this._button.disabled=!0):(this._button.classList.remove(this._inactiveButtonSelector),this._button.disabled=!1)}},{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonState(),this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this.toggleButtonState(),this._inputs.forEach((function(e){t._hideInputError(e)}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._renderedItems.forEach((function(e){return t._renderer(e)}))}},{key:"prependItem",value:function(t){this._container.prepend(t)}},{key:"appendItem",value:function(t){this._container.append(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._handleClickClose=this._handleClickClose.bind(this),this._popupButton=this._popup.querySelector(".popup__button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this.removeEventListeners()}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleClickClose",value:function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__cross"))&&this.close()}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._handleClickClose)}},{key:"removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("click",this._handleClickClose)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popup.querySelector(".popup__form"),n.inputList=n._form.querySelectorAll(".popup__input"),n._submitForm=n._submitForm.bind(b(n)),n._buttonText=n._popupButton.textContent,n}return e=u,(n=[{key:"_handleLoading",value:function(t){this._popupButton.textContent=t?"Сохранение...":this._buttonText}},{key:"getInputValues",value:function(){var t=this;return this._formValues={},this.inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"_submitForm",value:function(t){var e=this;t.preventDefault(),this._handleLoading(!0),this._handleFormSubmit(this.getInputValues()).then((function(){return e.close()})).catch((function(){return console.log("Ошибка при сабмите формы")})).finally((function(){return e._handleLoading(!1)}))}},{key:"setEventListeners",value:function(){this._popup.addEventListener("submit",this._submitForm),_(g(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),_(g(u.prototype),"close",this).call(this)}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var E=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e),this._description=document.querySelector(n),this._avatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{username:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(t,e,n){this._name.textContent=t,this._description.textContent=e,this._avatar.src=n,this._avatar.alt="Аватар пользователя ".concat(t)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var j=function(){function t(e,n,r,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._likesNumber=e.likes.length,this._templateSelector=n,this._imagePopupOpener=r,this._handleLike=o,this._handleDislike=i,this._id=e._id,this._ownerId=e.owner._id,this._userId=u,this._deletePopup=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._image=this._element.querySelector(".card__picture"),this._like=this._element.querySelector(".card__like"),this._likeCounter=this._element.querySelector(".card__like-counter"),this._remove=this._element.querySelector(".card__remove"),this._text=this._element.querySelector(".card__text"),this._text.textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._setEventListeners(),this._likeCounter.textContent=this._likesNumber,-1!==this._likes.findIndex((function(e){return e._id===t._userId}))&&this._like.classList.add("card__like_active"),this._ownerId!=this._userId&&(this._remove.style.display="none"),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._like.addEventListener("click",(function(){t._handleLikeButton()})),this._remove.addEventListener("click",(function(){t._handleTrashcanClick()})),this._image.addEventListener("click",(function(){t._imagePopupOpener(t._name,t._link)}))}},{key:"_handleLikeButton",value:function(){var t=this;this._like.classList.contains("card__like_active")?this._handleDislike(this._id).then((function(e){t._likeCounter.textContent=e.likes.length})).catch((function(){console.log("Ошибка при дизлайке карточки")})):this._handleLike(this._id).then((function(e){t._likeCounter.textContent=e.likes.length})).catch((function(){console.log("Ошибка при лайке карточки")})),this._like.classList.toggle("card__like_active")}},{key:"_handleTrashcanClick",value:function(){this._deletePopup.open(this._element,this._id)}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupFigcaption=e._popup.querySelector(".popup__figcaption"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupFigcaption.textContent=t,this._popupImage.alt=t,this._popupImage.src=e,I(R(u.prototype),"open",this).call(this)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var V=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e.url,this.headers=e.headers}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this.url,"/cards"),{method:"GET",headers:this.headers}).then(this.handleResponse)}},{key:"getUserProfile",value:function(){return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:this.headers}).then(this.handleResponse)}},{key:"patchProfile",value:function(t,e){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t,about:e})}).then(this.handleResponse)}},{key:"patchAvatar",value:function(t){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t})}).then(this.handleResponse)}},{key:"postCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:n})}).then(this.handleResponse)}},{key:"likeCard",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this.headers}).then(this.handleResponse)}},{key:"dislikeCard",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this.headers}).then(this.handleResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t),{method:"DELETE",headers:this.headers}).then(this.handleResponse)}},{key:"handleResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка при обращении к серверу")}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._button=e._popup.querySelector(".popup__button"),e}return e=u,(n=[{key:"open",value:function(t,e){this._card=t,this._id=e,U(N(u.prototype),"open",this).call(this)}},{key:"_handleClickClose",value:function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__cross")||t.target.classList.contains("popup__button_type_delete"))&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._button.addEventListener("click",(function(){X.deleteCard(t._id),t._card.remove()})),U(N(u.prototype),"setEventListeners",this).call(this)}},{key:"removeEventListeners",value:function(){var t=this;this._button.removeEventListener("click",(function(){X.deleteCard(t._id),t._card.remove()})),U(N(u.prototype),"removeEventListeners",this).call(this)}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y),G=new q(".popup_type_image"),H=new J(".popup_type_delete");function z(t,e,n){return new j(t,e,(function(){G.open(t.name,t.link)}),(function(t){return X.likeCard(t)}),(function(t){return X.dislikeCard(t)}),n,H).generateCard()}var M=new c(i,editform),K=new c(i,addform),Q=new c(i,avatarform);M.enableValidation(),K.enableValidation(),Q.enableValidation();var W=new E(".profile__name",".profile__description",".profile__avatar"),X=new V({url:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"0fa98e94-ea07-4d0e-8a4c-48f3981dda97","Content-Type":"application/json"}});Promise.all([X.getUserProfile(),X.getInitialCards()]).then((function(t){W.setUserInfo(t[0].name,t[0].about,t[0].avatar),o.style.backgroundImage="url('".concat(t[0].avatar,"')");var i=t[0]._id,u=new f({items:t[1],renderer:function(t){u.appendItem(z(t,".template_type_default",i))}},e);u.renderItems();var a=new S(".popup_type_edit",(function(){return X.patchProfile(a.getInputValues().username,a.getInputValues().description).then((function(t){return W.setUserInfo(t.name,t.about)}))})),c=new S(".popup_type_avatar",(function(t){return X.patchAvatar(t.avatar).then((function(t){return o.style.backgroundImage="url('".concat(t.avatar,"')")}))})),l=new S(".popup_type_add",(function(t){return X.postCard(l.getInputValues()).then((function(t){return u.prependItem(z(t,".template_type_default",i))}))}));n.addEventListener("click",(function(){var t=W.getUserInfo();a.inputList.forEach((function(e){e.value=t[e.name]})),a.open(),M.resetValidation()})),o.addEventListener("click",(function(){c.open(),Q.resetValidation()})),r.addEventListener("click",(function(){l.open(),K.resetValidation()}))})).catch((function(){return console.log("Ошибка при отрисовке карточек и профиля")}))})();