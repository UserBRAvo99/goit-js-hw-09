import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  timeDays: document.querySelector('span[data-days]'),
  timeHours: document.querySelector('span[data-days]'),
  timeMinutes: document.querySelector('span[data-days]'),
  timeSeconds: document.querySelector('span[data-days]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
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

// console.log(convertMs(20000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

refs.input.addEventListener('input', event => {
  const timeNow = new Date();
  const timeInput = +fp.selectedDates[0].getTime();
  if (timeInput < timeNow) {
    alert('Please choose a date in the future');
    return;
  }
  let timeObj = convertMs(timeInput - timeNow);
  console.log(timeObj);
  console.log(timerStart(timeObj));
  console.log(refs.timeDays.textContent);
});

function timerStart({ days, hours, minutes, seconds }) {
  refs.timeDays.textContent = this.days;
  refs.timeHours.textContent = hours;
  refs.timeMinutes.textContent = minutes;
  refs.timeSeconds.textContent = seconds;
  console.log(days);
}
