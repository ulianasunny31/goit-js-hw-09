const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerID;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleStart = () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  timerID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const handleStop = () => {
  clearInterval(timerID);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);

//Були гарні стилі на кнопки, але щось сталося, тому виглядають дивно
