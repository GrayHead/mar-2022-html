// // // 43 functions at object + this
// // // 58 Rest Spread
// // 1: 22 classes
// // 1^42 Closures
// //
// // const arr = ['Igor', 'Anrii', 'Nastya', 'Kristina'];
// //
// // const user = {
// //   name: 'Viktor',
// //   age: 26,
// //   car: true,
// //   password: '12345',
// //   sayHelloArrow: () => {
// //     console.log(this)
// //     console.log(`${this.age} say hello 2 u`)
// //   },
// //   sayHelloRegular: function () {
// //     console.log(this)
// //     console.log(`${this.age} say hello 2 u`)
// //   },
// //   motorcycles: ['Yamaha Fazre', 'Yamana XV1600'],
// //   job: {
// //     title: 'Senior',
// //     exprs: 4
// //   }
// // }
// //
// //
// // // console.log(user);
// // //
// // // console.log(user.age);
// // // console.log(user.motorcycles[0]);
// // //
// // // user.phone = {
// // //   producer: 'Samsung'
// // // };
// // //
// // // console.log(user.age);
// // //
// // // delete user.age;
// // //
// // // console.log(user.age);
// // //
// // // for (const mot of user.motorcycles) {
// // //   console.log(mot)
// // // }
// // //
// // // let arrayAsObject = {
// // //   0: 'Igor',
// // //   1: 'Anrii',
// // //   true: 'Hello',
// // //   age: 19
// // // }
// // //
// // // console.log(arrayAsObject[0]);
// // // console.log(arrayAsObject.true);
// // //
// // // console.log(user.age);
// // // console.log(user['age']);
// // //
// // // function getObjectData(keyToGet) {
// // //   console.log(user[keyToGet])
// // // }
// // //
// // // getObjectData('test')
// // // getObjectData('age')
// // // getObjectData('girl')
// // //
// // //
// // // for (const userKey in user) {
// // //   console.log(user[userKey]);
// // //   console.log('_______________');
// // // }
// // //
// // //
// // // user.sayHelloArrow()
// // // console.log('___________________________________')
// // // user.sayHelloRegular()
// // //
// // // const arrForTestThis = [
// // //   function () {
// // //     console.log('this this this this this this this this')
// // //     console.log(this)
// // //     console.log('this this this this this this this this')
// // //   },
// // //   22
// // // ];
// // //
// // // arrForTestThis[0]()
// // //
// // // const age = 15;
// // // const name = 'Karina';
// // // const job = 'Beatiful';
// // //
// // // const { job: userJob, name: userName, age: userAge } = user;
// // //
// // // console.log(user);
// // // console.log(job);
// // // console.log(name);
// // // console.log(age);
// // // console.log('______________________-')
// // //
// // // console.log(userJob)
// // // console.log(userName)
// // // console.log(userAge)
// // //
// // // const {job: {title, exprs}, motorcycles: [one, two]} = user;
// // //
// // // const { name, age, ...other } = user;
// // //
// // // console.log(name);
// // // console.log(age);
// // // console.log(user);
// // // console.log(other);
// //
// // const { password, ...safetyUser } = user;
// //
// // console.log(password);
// //
// // console.log('______________________');
// // console.log(safetyUser);
// // console.log('______________________');
// //
//
//
// class Car {
//   constructor(color, interior, power) {
//     this._producer = 'Mercedes'
//     this.model = 'C'
//     this.color = color;
//     this.interior = interior;
//     this.power = power;
//   }
//
//   get producer() {
//     return this._producer;
//   }
//
//   set producer(value) {
//     console.log('SETTER WAS TRIGGERED');
//
//     if (value === 'Porsche') {
//       this._producer = value
//     }
//   }
//
//   ride(driverName) {
//     console.log(`${driverName} drive ${this.color} ${this._producer}`);
//   }
// }
//
// const redCar = new Car('red', 'white', 120);
// const niceCar = new Car('pink', 'pink', 200);
//
// console.log(niceCar);
// console.log(redCar);
//
// console.log(redCar.producer);
//
// redCar.producer = 'Porsche';
// // redCar._producer = 'Volga';
//
// redCar.ride('Olha')
//
//


function counter() {
  let x = 0;

  return {
    increment: () => {
      x++
      console.log(x)
    }
  }
}

// console.log(x);

let counerRes = counter();

counerRes.increment()
counerRes.increment()
counerRes.increment()
counerRes.increment()

let counterRes2 = counter();

counterRes2.increment()
counterRes2.increment()


counerRes.increment()
counerRes.increment()
counerRes.increment()
