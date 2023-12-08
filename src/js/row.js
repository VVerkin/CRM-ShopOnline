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

const createRow = ({id, title, category, units, count, price, result, images}) => { // Переименовываем name в firatName, т.к. в глобальной области видимости уже есть name 
    // Создаем строку
    const tr = document.createElement('tr');
    // Назначаем класс
    tr.classList.add('cms__tr');
    // Формируем верстку и вставляем в tr
    tr.insertAdjacentHTML('afterbegin', `
    <td class='cms__table-id'>${id}</td>
    <td class='cms__table-name'>${title}</td>
    <td class='cms__table-category'>${category}</td>
    <td class='cms__table-units'>${units}</td>
    <td class='cms__table-count'>${count}</td>
    <td class='cms__table-price'>$${price}</td>
    <td class='cms__table-result'>$${count*price}</td>
    <td class='cms__table-btn'>
      <button class="cms__table-btn-icon" aria-label='image'>
      <img src="./src/img/icons/no-image.svg" alt="" />
      </button>
      <button class="cms__table-btn-icon" aria-label='edit'>
      <img src="./src/img/icons/edit.svg" alt="" />
      </button>
      <button class="cms__table-btn-icon" aria-label='delete'>
      <img src="./src/img/icons/delete.svg" alt="" />
      </button>
    </td>
    `);
      // Возвращаем получившуюся строку
      return tr;
    };

    const renderGoods = (arr) => {
        const table = document.querySelector('.cms__table');
        // Создаем элементы перебирая массив с объектами
        const allRow = arr.map(createRow);
        // выводим результат на страницу
        allRow.forEach(tr => table.append(tr));
      };
      renderGoods(goods);