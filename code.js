const spanText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = "Lorem ipsum fdfefe";

let indexText = 0;

const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) {
        clearInterval(indexTyping);
    }
}

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, 50);
setInterval(cursorAnimation, 400);
