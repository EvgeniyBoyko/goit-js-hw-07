const btnPlus = document.querySelector('.add');
const btnMinus = document.querySelector('.remove');
const value = document.querySelector('#value');
let counterValue = 0;
btnPlus.addEventListener('click', increment)
btnMinus.addEventListener('click', decrement)
function increment() {
    counterValue += 1;
    value.textContent = counterValue;
};

function decrement() {
    counterValue -= 1;
    value.textContent = counterValue;
};

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
/* 
<div id="counter">
    <button type="button" data-action="decrement">-1</button>
    <span id="value">0</span>
    <button type="button" data-action="increment">+1</button>
</div> 
*/