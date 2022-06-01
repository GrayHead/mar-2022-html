// console.log(1)
//
// setTimeout(() => {
//   console.log(2)
// }, 0);
//
// console.log(3)
//
// for (let i = 0; i < 1000; i++) {
//   console.log(i)
// }
//
//
//
//
// document.getElementById('btn').onclick = () => {
//   console.log('clc');
// }
//
// let i = 0
// while (i < 999999999) {
//   i++;
// }

// function dead() {
//   return dead();
// }
//
// dead();

function goWork(isJobComplete) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isJobComplete) {
        resolve(999);
      } else {
        reject('No work no money');
      }
    }, 100)
  });
}

function goToEgypt(moneyForTour) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (moneyForTour < 450) {
        reject('Not enough money')
      } else {
        console.log('HOOORAY')
        resolve(moneyForTour - 450);
      }
    }, 400)
  })
}

function buySouvenirs(money, souvenirCount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const totalPrice = souvenirCount * 10;
      if (totalPrice > money) {
        reject('Not enough');
      } else {
        resolve(`Here you go. ${souvenirCount} items`)
      }
    }, 300)
  })
}

// goWork(true)
//   .then((money) => {
//     console.log('Good job. Here you go', money, '$');
//
//     return goToEgypt(money);
//   })
//   .then(moneyAfterTour => {
//     console.log('It was great vacation', moneyAfterTour);
//
//     return buySouvenirs(moneyAfterTour, 105)
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(reason => {
//     console.log('OOOOPS', reason);
//   })
//   .finally(() => {
//     console.log('FINAL')
//   })


async function workation() {
  try {
    const money = await goWork(false);
    console.log('Good job. Here you go', money, '$');

    const moneyAfterTour = await goToEgypt(money);
    console.log('It was great vacation', moneyAfterTour);

    const res = await buySouvenirs(moneyAfterTour, 15);
    console.log(res);
  } catch (e) {
    console.warn('Hoolly ****', e)
  }
}

workation()
