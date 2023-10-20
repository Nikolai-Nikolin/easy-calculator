'use strict';

const firstNumber = document.getElementById('inputOne');
const secondNumber = document.getElementById('inputTwo');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multip = document.querySelector('.multip');
const split = document.querySelector('.split');
const percent = document.querySelector('.percent');
const reset = document.querySelector('.reset');
const whiteTheme = document.querySelector('.white-theme');
const darkTheme = document.querySelector('.dark-theme');
let conteiner = document.querySelector('.main-conteiner');
let result = document.querySelector('.result');


plus.onclick = function() {
    result.innerHTML = parseInt(+firstNumber.value) + parseInt(+secondNumber.value);
    result.style.color = 'black';
    result.style.fontSize = '2rem';
}

minus.onclick = function() {
    result.innerHTML = parseInt(+firstNumber.value) - parseInt(+secondNumber.value);
    result.style.color = 'black';
    result.style.fontSize = '2rem';
}

multip.onclick = function() {
    result.innerHTML = parseInt(+firstNumber.value) * parseInt(+secondNumber.value);
    result.style.color = 'black';
    result.style.fontSize = '2rem';
}

split.onclick = function() {
    result.innerHTML = parseInt(+firstNumber.value) / parseInt(+secondNumber.value);
    result.style.color = 'black';
    result.style.fontSize = '2rem';
}

percent.onclick = function() {
    result.innerHTML = (parseInt(+firstNumber.value) / parseInt(+secondNumber.value)) * 100 + '%';
    result.style.color = 'black';
    result.style.fontSize = '2rem';
}

reset.onclick = function() {
    firstNumber.value = '';
    secondNumber.value = '';
    result.innerHTML = 'Your result';
    result.style.color = 'gray';
    result.style.fontSize = '1.5rem';
}

whiteTheme.onclick = function() {
    conteiner.style.backgroundColor = 'white';
    whiteTheme.style.backgroundColor = 'white';
    darkTheme.style.backgroundColor = 'white';
}

darkTheme.onclick = function() {
    conteiner.style.backgroundColor = 'Gray'
    whiteTheme.style.backgroundColor = 'Gray';
    darkTheme.style.backgroundColor = 'Gray';
    result.style.backgroundColor = 'white';
}