'use strict';

{
  const goodsName = prompt('Введите наименование товара', '');

  const goodsCount = +prompt('Введите количество товара', 'шт');
  console.log('Количество', typeof goodsCount);

  const goodsCategory = prompt('Введите категорию товара', '');

  const goodsPrice = +prompt('Введите цену товара', '');
  console.log('Цена:',typeof goodsPrice);

  const goodsCurrency = 'деревянных';
  const goodsResult = goodsCount * goodsPrice;

  console.log(`На складе ${goodsCount} единицы товара "${goodsName}" на сумму ${goodsResult} ${goodsCurrency}`);
}
