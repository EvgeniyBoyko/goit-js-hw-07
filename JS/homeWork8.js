// const refs = {
//     input: document.querySelector('#controls').firstElementChild,
//     add: document.querySelector('[data-action="render"]'),
//     remove: document.querySelector('[data-action="destroy"]'),
//     box: document.querySelector('#boxes'),
// }
const inputEl = document.querySelector('#controls').firstElementChild;
const addEl = document.querySelector('[data-action="render"]');
const removeEl = document.querySelector('[data-action="destroy"]');
const boxEl = document.querySelector('#boxes');

addEl.addEventListener('click', function(event) {
  createBoxes(inputEl.value)
});
removeEl.addEventListener('click', removeBoxes);

function removeBoxes() {
  boxEl.innerHTML = "";
};

function createBoxes(amount) {
  let pxW = 30;
  let pxH = 30;
  for (let i = 1; i <= amount; i += 1) {
    const addBoxEl = document.createElement('div');
    boxEl.append(addBoxEl);
    addBoxEl.style.width = `${pxW}px`;
    addBoxEl.style.height = `${pxH}px`;
    addBoxEl.style.backgroundColor = `rgba(${random()}, ${random()}, ${random()})`
    pxW += 10;
    pxH += 10;
  }
};

function random() {
  return Math.floor(Math.random() * 256);
}


// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


{/* <div id="controls">
      <input type="number" min="0" max="100" step="1" />
      <button type="button" data-action="render">Создать</button>
      <button type="button" data-action="destroy">Очистить</button>
    </div>

    <div id="boxes"></div> */}
