import {goods} from './goods.js';
import variables from './variables.js';

const {goodsCount, goodsPrice, goodsSum} = variables;

// Ф-я обновляет итоговую стоимость товаров в таблице
const updateResultSum = () => {
  const resultGoodsSum = document.querySelector('.cms__result-value');
  resultGoodsSum.textContent = `$${goods.reduce((acc, item) =>
    acc + item.price * item.count, 0)}`;
};


// Ф-я расчитывает итоговую стоимость товаров при заполнении количества и цены в модальное окно
const modalGoodsSum = () => {
  goodsSum.textContent = `$${goodsCount.value * goodsPrice.value}`;
};

export default {
  updateResultSum,
  modalGoodsSum,
};
