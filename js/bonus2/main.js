// Prototype method

// let array = [0,1,2,3,4,0,0,true,'',' '];
// let newArr = [];
// Array.prototype.myMethod = function (cb) {
//     for (const item of this) {
//         cb(item);
//     }
// }
// array.myMethod(function (value) {
//     if (!value) {
//        newArr.push(value);
//     }
// });
// console.log(newArr);

// function Animal(name, color) {
//     this.name = name;
//     this.color = color;
//     // this.run = function () {
//     //     console.log(this.name + ' ' + 'Running');
//     // }
// }
//
// Animal.prototype.run = function () {
//     console.log(this.name + ' ' + 'Run');
// }
//
// function Hamster(name, color, status) {
//     this.name = name;
//     this.color = color;
//     this.status = status;
// }
//
// // Hamster.prototype = Animal.prototype;
// // Hamster.prototype.__proto__ = Animal.prototype;
// Hamster.prototype = Object.create(Animal.prototype);
//
// const dog = new Animal('dog','white');
// const dog1 = new Animal('dog1','white');
// const dog2 = new Animal('dog2','white');
// // dog.run();
// // dog1.run();
// // dog2.run();
//
// const hamster = new Hamster('ham', 'white', true);
// Hamster.prototype.run = function () {
//     console.log(this.name + ' ' + 'Running');
// }
// hamster.run();
// dog.run();
// dog1.run();
// dog2.run();

// function Hamster(name) {
//     this.name = name;
//     // this.stomach = [];
// }
//
// Hamster.prototype.stomach = [];
//
// Hamster.prototype.findFood = function (food) {
//     this.stomach.push(food);
// }
//
// const sil = new Hamster('Sil');
// const sol = new Hamster('Sol');
//
// console.log(sil.stomach);
// console.log(sol.stomach);
// console.log('___________________________');
//
// sil.findFood('apple');
// // sol.findFood('lime');
//
// console.log(sil.stomach);
// console.log(sol.stomach);

// Call
//
// let user = {
//     name: 'Vasya',
//     foo: function (msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     }
// }
// let user1 = {
//     name: 'Roma'
// }
// // user.foo();
// user.foo.call(user1,'Hello world');

// Apply
//
// let user = {
//     name: 'Vasya',
//     foo: function (msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     },
//     foobar: function (a, b, c) {
//         console.log(this, a, b, c);
//     }
// }
// let user1 = {
//     name: 'Roma'
// }
// let args = ['qq', 'ww', 'ee'];
// user.foobar.apply(user1, args);

// Bind
//
// let user = {
//     name: 'Vasya',
//     foo: function (msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     }
// }
// let user1 = {
//     name: 'Roma'
// }
//
// const fooBar = user.foo.bind(user1);
// fooBar();
// fooBar('Hello world');
// fooBar('Hello people');

// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }
//
// Example1
// function Customer(name, age,password) {
//     User.apply(this, [name, age]);
//     this.password = password;
// }
//
// Example2
// function Customer(name, age,password) {
//     User.apply(this, arguments);
//     this.password = password;
// }
//
// const customer = new Customer('Ira', 20, 'qwerty');
// console.log(customer);























































