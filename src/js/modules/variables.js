
const goodsCount = document.querySelector('.modal__form-count .modal__form-input');
const goodsPrice = document.querySelector('.modal__form-price .modal__form-input');
const goodsSum = document.querySelector('.modal__goods-value');
const tbody = document.querySelector('.cms__table-body');
// Получаем чекбокс модального окна
const discountCheckbox = document.querySelector('.modal__form-checkbox-input');
// Получаем modalInput
const discountInput = document.querySelector('.modal__form-input-small');

export default {
  goodsCount,
  goodsPrice,
  goodsSum,
  tbody,
  discountCheckbox,
  discountInput,
};
