'use strict';

/* 
1. Создайте функцию createRow, которая будет получать объект и на основе объекта формировать элемент <tr> с <td> внутри

2. Создайте функцию renderGoods, принимает один параметр массив с объектами
Функция renderGoods перебирает массив и вставляет строки, созданные на основе createRow, в таблицу (советую использовать метод map)

Для тестирования функционала можете написать свой массив
*/ 

const goods = [
  {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "category": "mobile-phone",
    "units": "шт",
    "count": 3,
    "price": 270,
    "result": 810,
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 253842679,
    "title": "Смартфон Samsung S23 8/256GB",
    "category": "mobile-phone",
    "units": "шт",
    "count": 1,
    "price": 900,
    "result": 900,
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
];

// Ф-я создает строку на основе объекта
const createRow = (obj) => {
  // Создаем строку
  const row = document.createElement('tr');
// Перебираем свойства объекта
  Object.values(obj).forEach(value => {
  // Добавляем значение в строку
  row.insertAdjacentHTML('beforeend',`<td>${value}</td>`);
  });
  // Возвращаем гтовую строку
  return row;
};

// Ф-я принимает массив с объектами
const renderGoods = (arr) => {
  // Получаем таблицу по классу
  const table = document.querySelector('.cms__table');
    // Перебираем массив объектов и создаем строки с помощью createRow
    const allRow = goods.map(createRow);
    // Вставляем строки в таблицу
    allRow.forEach(row => table.append(row));
  };
renderGoods();
