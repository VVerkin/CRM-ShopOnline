'use strict';

const goods = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'category': 'mobile-phone',
    'units': 'шт',
    'count': 3,
    'price': 270,
    'result': 810,
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 253842679,
    'title': 'Смартфон Samsung S23 8/256GB',
    'category': 'mobile-phone',
    'units': 'шт',
    'count': 1,
    'price': 900,
    'result': 900,
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 253842680,
    'title': 'Смартфон Samsung А54 8/128GB',
    'category': 'mobile-phone',
    'units': 'шт',
    'count': 4,
    'price': 300,
    'result': 1200,
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
];
const createRow = ({id, title, category, units, count, price}) => {
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
      <td class='cms__table-result'>$${count * price}</td>
      <td class='cms__table-btn'>
        <button class="cms__table-btn-img" aria-label='image'>
        <img src="./src/img/icons/no-image.svg" alt="" />
        </button>
        <button class="cms__table-btn-edit" aria-label='edit'>
        <img src="./src/img/icons/edit.svg" alt="" />
        </button>
        <button class="cms__table-btn-del" aria-label='delete'>
        <img src="./src/img/icons/delete.svg" alt="" />
        </button>
      </td>
    `);
  // Возвращаем получившуюся строку
  return tr;
};
const tbody = document.querySelector('.cms__table-body');
const renderGoods = (arr) => {
  // Создаем элементы перебирая массив с объектами
  const allRow = arr.map(createRow);
  // выводим результат на страницу
  allRow.forEach(tr => tbody.append(tr));
};
renderGoods(goods);

const btnAdd = document.querySelector('.cms__subheader-add-goods');
const formOverlay = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.modal__btn-close');

// При клике на кнопку "Добавить товар" открывается модальное окно
btnAdd.addEventListener('click', () => {
  formOverlay.classList.add('modal__active');
});

// Ф-я закрывает модальное окно при нажатии на overlay или крестик
formOverlay.addEventListener('click', e => {
  const target = e.target;
  // Проверяем, что target - это formOverlay или крестик
  if (target === formOverlay || target === btnClose) {
  // Если да, то закрываем форму
    formOverlay.classList.remove('modal__active');
  }
});

// Ф-я при помощи делегирования удаляет строкку при нажатии 
// на иконку "удалить"и эл-т из массива
// Вещшаем обработчик события на tbody
tbody.addEventListener('click', e => {
  // Получаем эл-т на котором произошел клик
  const target = e.target;
  // Проверяем, является ли ближайший родительский эл-т с классом 
  // "cms__table-btn-del" кнопкой удаления товара
  if (target.closest('.cms__table-btn-del')) {
    // В переменную получаем строку таблицы
    const tr = target.closest('.cms__tr');
    // Получаем содержимое элемента "id" из строки
    const id = parseInt(tr.querySelector('.cms__table-id').textContent);
    // Находим индекс объекта в массиве "goods",
    // у которого значение свойства "id" совпадает с id товара
    // и удаляем этот объект из массива с помощью метода "splice"
    goods.splice(goods.findIndex((item) => item.id === id), 1);
    // Удаляем строку таблицы из DOM
    tr.remove();
    // Выводим в консоль получившийся массив после удаления строк
    console.log(goods);
  }
});
