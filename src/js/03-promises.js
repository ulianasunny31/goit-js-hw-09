import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selectors = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};
const options = {
  position: 'right-bottom',
  borderRadius: '5px',
  cssAnimationStyle: 'from-top',
  clickToClose: true,
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function createPromises(evt) {
  evt.preventDefault();

  let delayValue = Number(selectors.delay.value);
  let step = Number(selectors.step.value);
  let amount = Number(selectors.amount.value);

  for (let i = 1; i <= amount; i++) {
    let delayPromise = delayValue + step * i;

    createPromise(i, delayPromise)
      .then(({ position, delay }) => {
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          options
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          options
        );
      });
  }
  selectors.form.reset();
}

selectors.form.addEventListener('submit', createPromises);
