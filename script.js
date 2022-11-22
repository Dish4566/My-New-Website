let tab = document.querySelector('.chapters');
let buttons = document.querySelector('.sideButtons')
let button = document.querySelector('.showButton');
let moveBy = 10;

button.addEventListener('click', () => {
    tab.style.width = '0vh';
    buttons.style.width = '0vh';
});