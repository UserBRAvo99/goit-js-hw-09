import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  console.log(delay.value, step.value, amount.value);

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(`Promise${i}`, delay.value);
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(position, delay);
      } else {
        reject(position, delay);
      }
    }, delay);
  });
  return promise
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled ${position} in ${delay}ms!`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected ${position} in ${delay}ms!`);
    });
}
// return promise
//   .then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected ${position} in ${delay}ms`);
//   });
