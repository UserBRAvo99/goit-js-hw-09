function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
let timerId;

refs.bodyEl.addEventListener('click', chColor);

function chColor(event) {
  if (event.target === refs.btnStart) {
    timerId = setInterval(colorBody, 1000);
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
  } else if (event.target === refs.btnStop) {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
  }
}

function colorBody() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}
