import {goods} from './goods.js';

// Ф-я обновляет итоговую стоимость товаров в таблице
const updateResultSum = () => {
  const resultGoodsSum = document.querySelector('.cms__result-value');
  resultGoodsSum.textContent = `$${goods.reduce((acc, item) =>
    acc + item.price * item.count, 0)}`;
};

const goodsCount = document.querySelector('.modal__form-count .modal__form-input');
const goodsPrice = document.querySelector('.modal__form-price .modal__form-input');
const goodsSum = document.querySelector('.modal__goods-value');
// Ф-я расчитывает итоговую стоимость товаров при заполнении количества и цены в модальное окно
const modalGoodsSum = () => {
  goodsSum.textContent = `$${goodsCount.value * goodsPrice.value}`;
};

export default {
  updateResultSum,
  modalGoodsSum,
  goodsCount,
  goodsPrice,
  goodsSum,
};