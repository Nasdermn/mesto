# Project-Mesto

## Обзор (Ru)

  Данный проект создан с целью тренировки навыков работы с языком JavaScript, получения опыта
работы с ветками Git, укрепления навыков вёрстки и обращения с HTML и CSS, а также
освоения базовых вещей в работе с Api.

  Сайт подключен к серверу Яндекс Практикума и имеет свой токен для авторизации, описанный в
константе "options" в файле index.js. Для каждого ученика 60й когорты был выдан свой токен, поэтому если вы решили протестировать данный проект на GitHub Pages с моим токеном, то прошу вас не добавлять материалы недопустимого характера.

  Проект __Место__ функционирует на любых браузерах и на любых их версиях, поддерживается языком HTML5, 
использует современный синтаксис ES6. Сайт написан по методологии БЭМ Nested и использует слабое связывание классов.


  В визуальной части проекта на данный момент имеется 9 основных элементов - header, секция profile, секция
elements, footer и 5 всплывающих окон popup. Также проект имеет 9 компонентов - класс "Popup" и 3 наследуемых от него класса. Данные компоненты описывают методы работы всплывающих окон. Имеется класс Api, который описывает методы, связанные с обращением к серверу; класс Card, оживляющий элементы на странице; класс FormValidator, который настраивает собственную валидацию полей формы; класс Section, отвечающий за отрисовку карточек на странице; ну и наконец класс UserInfo, отвечающий за получение и изменение информации вашего профиля.

## Review (Eng)

  This project was created to train skills in working with the JavaScript language, gain experience
working with Git branches, strengthen the skills of layout and handling HTML and CSS, as well
as mastering the basic things in working with the Api.

The site is connected to the Yandex Practicum server and has its own token for authorization, described in
the "options" constant in the file "index.js" . A token was issued for each student of the 60th cohort, so if you decided to test this project on GitHub Pages with my token, then I ask you not to add materials of an unacceptable nature.

The __Place__ project functions on any browsers and on any of their versions, it is supported by the HTML5 language, uses modern ES6 syntax. The site is written according to the BEM Nested methodology and uses weak class binding.


At the moment there are 9 main elements in the visual part of the project - header, profile section, section elements, footer and 5 popup popups. The project also has 9 components - the "Popup" class and 3 classes inherited from it. These components describe the methods of pop-up windows. There is an Api class that describes methods related to accessing the server; a Card class that animates elements on the page; a FormValidator class that configures its own validation of form fields; a Section class responsible for drawing cards on the page; and finally a userInfo class responsible for receiving and changing your profile information.

## Ссылка на GitHub Pages (GitHub Pages link):
https://nasdermn.github.io/mesto