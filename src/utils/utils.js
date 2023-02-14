import Card from '../components/Card.js';
import { popupWithImage } from '../pages/index.js';
//Создание карточки
export function createCard(data, templateType) {
  const card = new Card(data, templateType, () => {
    popupWithImage.open(data.name, data.link);
  }
    );
  const cardElement = card.generateCard();
  return cardElement;
}