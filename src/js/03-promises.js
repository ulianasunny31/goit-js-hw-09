const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('select[name="amount"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      } else {
      }
    }, delay);
  });
}

function createPromise() {
  const delay = Number(delayInput.value, 10);
  const step = Number(stepInput.value, 10);
  const amount = Number(amountInput.value, 10);

  7777788;
}
