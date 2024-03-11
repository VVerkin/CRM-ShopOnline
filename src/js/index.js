import {goods} from './modules/goods.js';
import {renderGoods} from './modules/render.js';
import calculation from './modules/calculation.js';
import control from './modules/control.js';
import variables from './modules/variables.js';

const {
  updateResultSum,
  modalGoodsSum,
} = calculation;


const {
  modalControl,
  formControl,
  tbody,
} = control;

const {
  goodsCount,
  goodsPrice,
} = variables;

{
// Ф-я, которая инициализирует наше приложение
  const init = () => {
    renderGoods(goods);
    updateResultSum();
    const {closeModal} = modalControl();
    formControl(tbody, closeModal);
    modalGoodsSum();
    goodsCount.addEventListener('input', modalGoodsSum);
    goodsPrice.addEventListener('input', modalGoodsSum);
  };

  init();
};

