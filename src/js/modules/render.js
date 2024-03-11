import {createRow} from './createElements.js ';
import variables from './variables.js';

const {tbody} = variables;

export const renderGoods = (arr) => {
  // Создаем элементы перебирая массив с объектами
  const allRow = arr.map(createRow);
  // выводим результат на страницу
  allRow.forEach(tr => tbody.append(tr));
};