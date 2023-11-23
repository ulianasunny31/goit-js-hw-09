import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const datePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const selectors = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let timerInterval;
let endDate;

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer() {
  const currentTime = new Date();
  const diff = endDate.getTime() - currentTime.getTime();

  if (diff <= 0) {
    clearInterval(timerInterval);
    resetTimer();
  } else {
    const { days, hours, minutes, seconds } = convertMs(diff);
    selectors.days.textContent = addLeadingZero(days);
    selectors.hours.textContent = addLeadingZero(hours);
    selectors.minutes.textContent = addLeadingZero(minutes);
    selectors.seconds.textContent = addLeadingZero(seconds);
  }
}

function resetTimer() {
  selectors.days.textContent = '00';
  selectors.hours.textContent = '00';
  selectors.minutes.textContent = '00';
  selectors.seconds.textContent = '00';
  startBtn.disabled = true;
}

const calendar = flatpickr(datePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedDate = selectedDates[0];

    if (selectedDate > new Date()) {
      startBtn.disabled = false;
      endDate = selectedDate;
    } else {
      Notify.failure('Please choose a date in the future!');
      startBtn.disabled = true;
    }
  },
});

startBtn.addEventListener('click', function () {
  clearInterval(timerInterval);
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
});
