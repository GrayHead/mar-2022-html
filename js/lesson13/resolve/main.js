// let energy = 1000;
//
// function wakeUp(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             energy -= 500;
//             if (energy <= 0) {
//                 reject('Я не прокинувся');
//                 return;
//             }
//             console.log('Прокинувся');
//             resolve(energy);
//         },2000)
//     })
// }
//
// function eat(energy) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             energy += 200;
//             console.log('Поїв');
//             resolve(energy);
//         },1500)
//     })
// }
//
// function goToWork(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             energy -= 500;
//             if (energy <= 0) {
//                 reject('не дійшов');
//                 return;
//             }
//             console.log('дійшов');
//             resolve(energy);
//         },1000)
//     })
// }

// wakeUp(energy)
//     .then(value => {
//         console.log(`'енергія' ${value}`)
//         console.log('------------');
//         return eat(value);
//     })
//     .then(value => {
//         console.log(`'енергія' ${value}`);
//         console.log('------------');
//         return goToWork(value);
//     })
//     .then(value => {
//         console.log(`енергія ${value}`);
//         console.log('------------');
//
//     })
//     .catch(err => {
//         console.log(err);
//     })


// let energy = 100;
//
// function wakeUp(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             energy -= 500;
//             if (energy <= 0) {
//                 reject('Я не прокинувся');
//                 return;
//             }
//             resolve(energy);
//         },2000)
//     })
// }
//
// function eat(energy) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             energy += 200;
//             resolve(energy);
//         },1500)
//     })
// }
//
// function goToWork(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             energy -= 500;
//             if (energy <= 0) {
//                 reject('не дійшов');
//                 return;
//             }
//             resolve(energy);
//         },1000)
//     })
// }
//
//
// function message(msg, data) {
//     console.log(msg);
//     console.log(`залишилось ${data}`);
//     console.log('----------');
// }
//
// async function start(energy) {
//     try {
//        let data = await wakeUp(energy);
//        message('прокинувся', data);
//
//        data = await eat(data);
//        message('Поїв', data);
//
//        data = await goToWork(data);
//        message('Дійшов', data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// start(energy);

// let energy = 1000;
// function wakeUp(energy, cb) {
//     setTimeout(() => {
//         energy -= 500;
//         if (energy <= 0) {
//             cb('Не прокинувся', null);
//             return;
//         }
//         console.log('Прокинувся');
//         cb(null, energy);
//     },2000);
// }
//
// function eat(energy, cb) {
//     setTimeout(() => {
//         energy += 300;
//         console.log('Поїв');
//         cb(null, energy);
//     },1000);
// }
//
// function goToWork(energy, cb) {
//     setTimeout(() => {
//         energy -= 500;
//         if (energy <= 0) {
//             cb('Не дійшов', null);
//             return;
//         }
//         console.log('Дійшов');
//         cb(null, energy);
//     },500);
// }
//
// wakeUp(energy, (err,data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(`енергія ${data}`);
//     console.log('----------');
//
//     eat(energy, (err, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(`енергія ${data}`);
//         console.log('----------');
//
//         goToWork(energy, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(`енергія ${data}`);
//             console.log('----------');
//         })
//     })
// })

// При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let bold = document.getElementsByClassName('bold')[0];
// bold.onmouseup = function () {
//     let select = document.getSelection().toString();
//     bold.innerHTML = bold.innerText.replace(select, `<b>${select}</b>`);
// }

let one = new Promise(resolve => {
    setTimeout(() => {
        resolve(1);
    },2000);
})

let two = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(2);
    },1000);
})

let three = new Promise(resolve => {
    setTimeout(() => {
        resolve(3);
    },500);
})

// Promise.race([one, two, three]).then(value => {
//     console.log(value);
// })

// Promise.all([one, two, three]).then(value => {
//     console.log(value);
// })

Promise.allSettled([one, two, three]).then(value => {
    console.log(value);
})








