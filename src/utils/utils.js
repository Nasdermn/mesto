import Card from '../components/Card.js';
//Создание карточки
export function createCard(data, templateType) {
  const card = new Card(data, templateType);
  const cardElement = card.generateCard();
  return cardElement;
}