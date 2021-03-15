const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const objImagesEl = document.querySelector('#gallery')
objImagesEl.style.display = 'flex';
objImagesEl.style.listStyle = 'none';
objImagesEl.style.display = 'flex';
// const makeProductCard = images.map(image => {
//     const itemRef = document.createElement('li');
//     itemRef.style.marginLeft = '20px';
//     itemRef.style.listStyle = 'none';
//     const imgRef = document.createElement('img');
//     imgRef.width = 320;
//     imgRef.height = 240;
//     imgRef.setAttribute('src', image.url);
//     imgRef.setAttribute('alt', image.alt);
//     itemRef.append(imgRef);
//     return itemRef;
// });

// objImagesEl.append(...makeProductCard);

const makeProductCard = images.map(image =>
  objImagesEl.insertAdjacentHTML('beforeend', `<li><img src="${image.url}" alt="${image.alt}" width = 320 height = 240></li>`)
); 
// console.log(...makeProductCard);
// objImagesEl.append(...makeProductCard);
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.