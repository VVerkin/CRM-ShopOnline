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
      // Оформляем омтальные элементы
      const tdId = document.createElement('td');
      tdId.classList.add('cms__table-id');
      tdId.textContent = id; 

      const tdTitle = document.createElement('td');
      tdTitle.classList.add('cms__table-name');
      tdTitle.textContent = title;

      const tdCategory = document.createElement('td');
      tdCategory.classList.add('cms__table-category');
      tdCategory.textContent = category;

      const tdUnits = document.createElement('td');
      tdUnits.classList.add('cms__table-units');
      tdUnits.textContent = units;

      const tdCount = document.createElement('td');
      tdCount.classList.add('cms__table-count');
      tdCount.textContent = count;

      const tdPrice = document.createElement('td');
      tdPrice .classList.add('cms__table-price');
      tdPrice.textContent = `$${price}`;

      const tdResult = document.createElement('td');
      tdResult.classList.add('cms__table-result');
      tdResult.textContent = `$${result}`;

      const tdImages = document.createElement('td');
      tdImages.classList.add('cms__table-btn');
      tdImages.textContent = images;

      // Вставляем td в tr
      tr.append(tdId, tdTitle, tdCategory, tdUnits, tdCount, tdPrice, tdResult, tdImages);
      // Возвращаем получившуюся строку
      return tr;
    };

    const renderGoods = (arr) => {
        const table = document.querySelector('.cms__table');
        // Создаем элементы перебирая массив с объектами
        const allRow = goods.map(createRow);
        // выводим результат на страницу
        allRow.forEach(tr => table.append(tr));
      };
      renderGoods(goods);