const red = document.querySelector('input[value="red"]');
const white = document.querySelector('input[value="white"]');
const green = document.querySelector('input[value="green"]');
red.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});
white.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
});
green.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});


const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', () => {
    if (inputName.value.trim() === '') {
        outputName.textContent = 'незнайомець';
    } else {
        outputName.textContent = inputName.value;
    }
});
const inputValidation = document.querySelector('#validation-input');
inputValidation.addEventListener('blur', () => {
    const reqLength = Number(inputValidation.dataset.length);
    if (inputValidation.value.length === reqLength) {
        inputValidation.classList.add('valid');
        inputValidation.classList.remove('invalid');
    } else {
        inputValidation.classList.add('invalid');
        inputValidation.classList.remove('valid');
    } 
});

const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontFamily = "Candara"; 
sizeControl.addEventListener('input', () => {
    text.style.fontSize = sizeControl.value + 'px';
});
