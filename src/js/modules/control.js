import {goods} from './goods.js';
import calculation from './calculation.js';
import {createRow} from './createElements.js ';
import variables from './variables.js';

const {
  tbody,
  discountCheckbox,
  discountInput,
} = variables;

const {
  updateResultSum,
} = calculation;

const addItemGoods = item => {
  goods.push(item);
  console.log('goods:', goods);
};

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

// Ф-я добавляет элемент в таблицу
const addItemTable = (item, tbody) => {
  tbody.append(createRow(item));
  // Обновляем итоговую стоимость товаров в таблице после удаления элемента
  updateResultSum();
};

const formControl = (tbody, closeModal) => {
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
    updateResultSum();
  });
};

/* В модальном окне, если поставить чекбокс то поле рядом разблокируется.
Если чекбокс убрать, то оно очищается и блокируется */

const toggleCheckbox = () => {
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
};
toggleCheckbox();

// Ф-я при помощи делегирования удаляет строкку при нажатии
// на иконку "удалить"и эл-т из массива
const delItemTable = () => {
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
      // Обновляем итоговую стоимость товаров в таблице после удаления элемента
      updateResultSum();
    }
  });
};
delItemTable();


export default {
  addItemGoods,
  modalControl,
  addItemTable,
  formControl,
  tbody,
  discountCheckbox,
  discountInput,
  delItemTable,
};
