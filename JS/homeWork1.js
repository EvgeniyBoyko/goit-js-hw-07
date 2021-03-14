const categoriesEl = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoriesEl.length} категории.`);

const listRef = document.querySelectorAll('.item')

for (const elem of listRef) {
    const h2El = elem.querySelector('h2').textContent;
    const itemEl = elem.querySelectorAll('li').length;
    console.log(`В категории ${h2El}, ${itemEl} елемента`);
}

// 

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4