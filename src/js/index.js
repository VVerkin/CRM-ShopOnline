'use strict';

const goods = [
  {
    'id': 253842678,
    'name': 'Смартфон Xiaomi 11T 8/128GB',
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
    'name': 'Смартфон Samsung S23 8/256GB',
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
    'name': 'Смартфон Samsung А54 8/128GB',
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

const addItemGoods = item => {
  goods.push(item);
  console.log('goods:', goods);
};

const createRow = ({id, name, category, units, count, price}) => {
  // Создаем строку
  const tr = document.createElement('tr');
  // Назначаем класс
  tr.classList.add('cms__tr');
  // Формируем верстку и вставляем в tr
  tr.insertAdjacentHTML('afterbegin', `
      <td class='cms__table-id'>${id}</td>
      <td class='cms__table-name'>${name}</td>
      <td class='cms__table-category'>${category}</td>
      <td class='cms__table-units'>${units}</td>
      <td class='cms__table-count'>${count}</td>
      <td class='cms__table-price'>$${price}</td>
      <td class='cms__table-result'>$${count * price}</td>
      <td class='cms__table-btn'>
        <button class="cms__table-btn-img" aria-label='image'>
          <svg width="20" height="20" viewbox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 2.13375L17.8663 1.25L1.25 17.8663L2.13375 18.75L3.38375 17.5H16.25C16.5814 17.4995 16.899 17.3676 17.1333 17.1333C17.3676 16.899 17.4995 16.5814 17.5 16.25V3.38375L18.75 2.13375ZM16.25 16.25H4.63375L9.50437 11.3794L10.9913 12.8663C11.2257 13.1006 11.5435 13.2322 11.875 13.2322C12.2065 13.2322 12.5243 13.1006 12.7587 12.8663L13.75 11.875L16.25 14.3731V16.25ZM16.25 12.605L14.6337 10.9888C14.3993 10.7544 14.0815 10.6228 13.75 10.6228C13.4185 10.6228 13.1007 10.7544 12.8663 10.9888L11.875 11.98L10.3894 10.4944L16.25 4.63375V12.605Z" />
            <path d="M3.75 13.75V11.875L6.875 8.75187L7.73313 9.61062L8.61812 8.72563L7.75875 7.86625C7.52434 7.63191 7.20646 7.50027 6.875 7.50027C6.54354 7.50027 6.22566 7.63191 5.99125 7.86625L3.75 10.1075V3.75H13.75V2.5H3.75C3.41858 2.50033 3.10083 2.63213 2.86648 2.86648C2.63213 3.10083 2.50033 3.41858 2.5 3.75V13.75H3.75Z" />
          </svg>       
        </button>
        <button class="cms__table-btn-edit" aria-label='edit'>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M15.5629 4.86078L17.6394 6.93629L15.5629 4.86078ZM16.8982 3.03233L11.2834 8.64709C10.9933 8.9368 10.7955 9.3059 10.7148 9.70789L10.1962 12.304L12.7923 11.7844C13.1942 11.704 13.5629 11.5069 13.8531 11.2167L19.4678 5.60196C19.6366 5.43324 19.7704 5.23293 19.8617 5.01248C19.953 4.79203 20 4.55576 20 4.31714C20 4.07853 19.953 3.84225 19.8617 3.6218C19.7704 3.40136 19.6366 3.20105 19.4678 3.03233C19.2991 2.8636 19.0988 2.72976 18.8784 2.63845C18.6579 2.54714 18.4216 2.50014 18.183 2.50014C17.9444 2.50014 17.7081 2.54714 17.4877 2.63845C17.2672 2.72976 17.0669 2.8636 16.8982 3.03233V3.03233Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path id="Vector_2" d="M18.0394 14.2648V17.206C18.0394 17.726 17.8328 18.2248 17.4651 18.5925C17.0973 18.9602 16.5986 19.1668 16.0786 19.1668H5.29415C4.77411 19.1668 4.27537 18.9602 3.90765 18.5925C3.53993 18.2248 3.33334 17.726 3.33334 17.206V6.42157C3.33334 5.90154 3.53993 5.4028 3.90765 5.03508C4.27537 4.66735 4.77411 4.46077 5.29415 4.46077H8.23535" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>       
        </button>
        <button class="cms__table-btn-del" aria-label='delete'>
          <svg width="20" height="20" viewbox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.03125 3.59375H6.875C6.96094 3.59375 7.03125 3.52344 7.03125 3.4375V3.59375H12.9688V3.4375C12.9688 3.52344 13.0391 3.59375 13.125 3.59375H12.9688V5H14.375V3.4375C14.375 2.74805 13.8145 2.1875 13.125 2.1875H6.875C6.18555 2.1875 5.625 2.74805 5.625 3.4375V5H7.03125V3.59375ZM16.875 5H3.125C2.7793 5 2.5 5.2793 2.5 5.625V6.25C2.5 6.33594 2.57031 6.40625 2.65625 6.40625H3.83594L4.31836 16.6211C4.34961 17.2871 4.90039 17.8125 5.56641 17.8125H14.4336C15.1016 17.8125 15.6504 17.2891 15.6816 16.6211L16.1641 6.40625H17.3438C17.4297 6.40625 17.5 6.33594 17.5 6.25V5.625C17.5 5.2793 17.2207 5 16.875 5ZM14.2832 16.4062H5.7168L5.24414 6.40625H14.7559L14.2832 16.4062Z" />
          </svg>
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

// Ф-я управляет модальным окном (открыть/закрыть форму)

const modalControl = () => {
  const btnAdd = document.querySelector('.cms__subheader-add-goods');
  const formOverlay = document.querySelector('.modal-overlay');
  const btnClose = document.querySelector('.modal__btn-close');
  // Ф-я открывает модальное окно
  const openModal = () => {
    formOverlay.classList.add('modal__active');
  };
  // Ф-я закрывает модальное окно
  const closeModal = () => {
    formOverlay.classList.remove('modal__active');
  };

  // При клике на кнопку "Добавить товар" открывается модальное окно
  btnAdd.addEventListener('click', openModal);

  // Ф-я закрывает модальное окно при нажатии на overlay или крестик
  formOverlay.addEventListener('click', e => {
    const target = e.target;
    // Проверяем, что target - это formOverlay или крестик
    if (target === formOverlay || target === btnClose) {
    // Если да, вызываем ф-ю закрытия модального окна
      closeModal();
    }
  });
  return {
    closeModal,
  };
};

const {closeModal} = modalControl();
// A-z добавляет элемент в таблицу
const addItemTable = (item, list) => {
  list.append(createRow(item));
};

const formControl = (list, closeModal) => {
  // Получаем форму
  const form = document.querySelector('.modal__form');
  form.addEventListener('submit', e => {
    // Убираем стандартное поведение формы
    e.preventDefault();

    // Реализуем отправку данных
    // Создаем formData и передаем туда форму через e.target
    const formData = new FormData(e.target);
    // Создаем объект на основе данных, введенных в поля формы
    const newItem = Object.fromEntries(formData);
    console.log('newItem:', newItem);
    // Вызываем ф-ю добавления товара в таблицу
    addItemTable(newItem, tbody);
    // Вызываем ф-ю добавления нового элемента в массив
    addItemGoods(newItem);
    // Очищаем форму после нажатия кнопки добавить товар
    form.reset();
    // Вызываем ф-ю закрытия формы
    closeModal();
  });
};
formControl(tbody, closeModal);

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

/* В модальном окне, если поставить чекбокс то поле рядом разблокируется.
Если чекбокс убрать, то оно очищается и блокируется */

// Получаем чекбокс модального окна
const discountCheckbox = document.querySelector('.modal__form-checkbox-input');
// Получаем modalInput
const discountInput = document.querySelector('.modal__form-input-small');

// Навешиваем событие на изменение состояния чекбокса
discountCheckbox.addEventListener('change', () => {
  // Условие, при котором чекбокс "выбран"
  if (discountCheckbox.checked) {
    // Поле разблокировано
    discountInput.disabled = false;
  } else {
    // Очищаем и блокируем поле
    discountInput.value = '';
    discountInput.disabled = true;
  }
});
