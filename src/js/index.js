'use strict'

// Заголовок модального окна
const modalTitle = document.querySelector('.modal__title');
console.log(modalTitle);

// Кнопка возле id и сам id
const goodsId = document.querySelector('.modal__id-value');
const editGoodsIdBtn = document.querySelector('.madal__id-btn');
console.log(goodsId, editGoodsIdBtn);

// Форма
const form = document.querySelector('.modal__form');
console.log(form);

// Чекбокс и  Поле рядом с чекбоксом
const discountCheckbox = document.querySelector('.modal__form-checkbox-input');
const discountInput = document.querySelector('.modal__form-input-small');
console.log(discountCheckbox, discountInput );

// Итоговая стоимость
const resultCoast = document.querySelector('.modal__goods-value');
console.log(resultCoast);