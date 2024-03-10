import {goods} from './modules/goods.js';
import {renderGoods} from './modules/render.js';
import calculation from './modules/calculation.js';
import control from './modules/control.js';


const {
  updateResultSum,
  modalGoodsSum,
  goodsCount,
  goodsPrice,
} = calculation;


const {
  modalControl,
  formControl,
  tbody,
} = control;

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

