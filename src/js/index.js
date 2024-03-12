import {goods} from './modules/goods.js';
import variables from './modules/variables.js';
import {renderGoods} from './modules/render.js';
import calculation from './modules/calculation.js';
import control from './modules/control.js';


const {
  updateResultSum,
  modalGoodsSum,
} = calculation;


const {
  modalControl,
  formControl,
  delItemTable,
  toggleCheckbox,
} = control;

const {
  tbody,
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
    delItemTable();
    toggleCheckbox();
    modalGoodsSum();
    goodsCount.addEventListener('input', modalGoodsSum);
    goodsPrice.addEventListener('input', modalGoodsSum);
  };

  init();
};

