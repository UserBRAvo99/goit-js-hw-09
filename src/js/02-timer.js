import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  timeDays: document.querySelector('span[data-days]'),
  timeHours: document.querySelector('span[data-hours]'),
  timeMinutes: document.querySelector('span[data-minutes]'),
  timeSeconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    if (selectedDates[0] > Date.now()) {
      refs.btnStart.disabled = false;
      Notify.success('The date is correct');
    }
  },
};

const fp = new flatpickr(refs.input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let startCounter;
let delta = 0;

refs.btnStart.addEventListener('click', timeCounter);

function timeCounter() {
  const timeInput = +fp.selectedDates[0].getTime();
  delta = timeInput - Date.now();
  startCounter = setInterval(() => {
    delta -= 1000;
    const timeObj = convertMs(delta);
    timerStart(timeObj);
  }, 1000);
}
// Додає цифри в таймер
function timerStart({ days, hours, minutes, seconds }) {
  refs.timeDays.textContent = addLeadingZero(days);
  refs.timeHours.textContent = addLeadingZero(hours);
  refs.timeMinutes.textContent = addLeadingZero(minutes);
  refs.timeSeconds.textContent = addLeadingZero(seconds);
}
// Додає нуль
function addLeadingZero(obj) {
  return String(obj).padStart(2, 0);
}

//   if (delta < 1000) {
//     clearTimeout();
//     return;
//   }
