const inputRef = document.querySelector('#name-input');
const userName = document.querySelector('#name-output')

inputRef.addEventListener('input', onInputChange)

function onInputChange() {
    // (inputRef.target.value.length !== '') ? userName.textContent = inputRef.target.value : userName.textContent = 'незнакомец'
    // if (inputRef.value !== '') {
    //     userName.textContent = inputRef.value;
    // } else {
    //     userName.textContent = 'незнакомец';
    // }
        
    if (inputRef.value.length > 0) {
        userName.textContent = inputRef.value;
    } else {
        userName.textContent = 'незнакомец';
    }
}

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

/* 
<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
 */