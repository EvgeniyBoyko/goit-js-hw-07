const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// const versioneOne = document.querySelector('#ingredients')
// const itemEl = document.createElement('li');
// itemEl.textContent = ingredients[0];
// const itemEl1 = document.createElement('li');
// itemEl1.textContent = ingredients[1];
// const itemEl2 = document.createElement('li');
// itemEl2.textContent = ingredients[2];
// const itemEl3 = document.createElement('li');
// itemEl3.textContent = ingredients[3];
// const itemEl4 = document.createElement('li');
// itemEl4.textContent = ingredients[4];
// const itemEl5 = document.createElement('li');
// itemEl5.textContent = ingredients[5];


// versioneOne.append(itemEl, itemEl1, itemEl2, itemEl3, itemEl4, itemEl5)
// console.log(versioneOne);

const versione2 = document.querySelector('#ingredients');

const itemEl = ingredients.map(elem => {
        const item = document.createElement('li')
        item.textContent = elem;
        return item;
});
    
// const elements = itemEl(ingredients)
versione2.append(...itemEl)


// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().