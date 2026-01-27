import { getRandomArrayElement } from '../utils.js';

// Получение списка дополнительных предложений

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'f4b62001-293f-4c3d-a702-94eec4a2808c',
        title: 'Багажное место и габаритный груз',
        price: 150
      },
      {
        id: 'f4b62002-293f-4c3d-a702-94eec4a2808c',
        title: 'Поговорить по душам с бомбилой',
        price: 0
      },
      {
        id: 'f4b62003-293f-4c3d-a702-94eec4a2808c',
        title: 'Услуги гида по городу',
        price: 5000
      },
      {
        id: 'f4b62004-293f-4c3d-a702-94eec4a2808c',
        title: 'Выбор радиостанции на свой вкус',
        price: 50
      },
      {
        id: 'f4b62005-293f-4c3d-a702-94eec4a2808b',
        title: 'Апгрейд до тарифа "Комфорт"',
        price: 120
      },
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'aaaaaa1-293f-4c3d-a702-94eec4a2808b',
        title: 'Постельный комплект',
        price: 450
      },
      {
        id: 'aaaaaa2-293f-4c3d-a702-94eec4a2808b',
        title: 'Покупка лотерейного билета',
        price: 200
      },
      {
        id: 'aaaaaa3-293f-4c3d-a702-94eec4a2808b',
        title: 'Вафли или печенье к чаю',
        price: 300
      },
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'bbbbbb1-293f-4c3d-a702-94eec4a2808b',
        title: 'Дополнительное багажное место',
        price: 5000
      },
      {
        id: 'bbbbbb2-293f-4c3d-a702-94eec4a2808b',
        title: 'Питание на борту',
        price: 2500
      },
      {
        id: 'bbbbbb3-293f-4c3d-a702-94eec4a2808b',
        title: 'Выбор посадочного места',
        price: 500
      },
      {
        id: 'bbbbbb4-293f-4c3d-a702-94eec4a2808b',
        title: 'Сувениры',
        price: 3000
      },
      {
        id: 'bbbbbb5-293f-4c3d-a702-94eec4a2808b',
        title: 'Алкоголь',
        price: 3000
      },
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'cccccc1-293f-4c3d-a702-94eec4a2808b',
        title: 'Багажное место',
        price: 500
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'dddddd1-293f-4c3d-a702-94eec4a2808b',
        title: 'Караоке',
        price: 2000
      },
      {
        id: 'dddddd2-293f-4c3d-a702-94eec4a2808b',
        title: 'Косметические процедуры',
        price: 2000
      },
      {
        id: 'dddddd3-293f-4c3d-a702-94eec4a2808b',
        title: 'Бар/Ресторан',
        price: 2000
      },
    ]
  },
  {
    type: 'drive',
    offers: [
    ]
  },
  {
    type: 'check-in',
    offers: [
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 'eeeeee1-293f-4c3d-a702-94eec4a2808b',
        title: 'Пешая прогулка',
        price: 200
      },
      {
        id: 'eeeeee2-293f-4c3d-a702-94eec4a2808b',
        title: 'Экскурсия по городу',
        price: 1000
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'fffffff1-293f-4c3d-a702-94eec4a2808b',
        title: 'Завтрак',
        price: 500
      },
      {
        id: 'fffffff2-293f-4c3d-a702-94eec4a2808b',
        title: 'Бизнес-ланч',
        price: 700
      },
      {
        id: 'fffffff3-293f-4c3d-a702-94eec4a2808b',
        title: 'Комплексный Обед',
        price: 1000
      },
      {
        id: 'fffffff4-293f-4c3d-a702-94eec4a2808b',
        title: 'Ужин',
        price: 700
      },
      {
        id: 'fffffff5-293f-4c3d-a702-94eec4a2808b',
        title: 'Зайти за кофе',
        price: 200
      }
    ]
  },
];

function getRandomOffers() {
  return getRandomArrayElement(mockOffers);
}

export { mockOffers, getRandomOffers };
