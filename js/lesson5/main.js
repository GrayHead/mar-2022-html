// // let x = 100;
// // y = x; // y = 100
// //
// // y += 200; // y 300 x 100
// // console.log(x, y);
//
// let user = {id: 1};
// let user2 = user;
//
// user2.id = 100500;
// console.log(user2);
//
// console.log(user);

// let arr = [];
//
// function foobar(array) {
//     array[0] = 100500;
// }
//
// foobar(arr);
//
//
// console.log(arr);
//
//
// let x = 0;
//
// function barfoo(num) {
//     num = 100;
// }
//
// barfoo(x);
// console.log(x);

// test();
//
// function test() {
//     console.log('test');
// }

// let fn = function (a,b,c,d) {
//     console.log('test');
// }
// fn();

// shf ctr j - inline
// let calc = (a, b) => console.log(a + b);
// calc(10, 20);

// self invoke fn
// (function (msg) {
//     console.log(msg);
// }(msg));


// function xxx(fn) {
//     fn();
// }
//
// let cb = function () {
//     console.log('asjdqre');
// };
//
// xxx(cb);


// function calc(a, b, action) {
//     if (action === '+') {
//         return a + b;
//     } else if (action === '-') {
//         return a - b;
//     } else if (action === 'pow') {
//         return Math.pow(a, b);
//     }else if (action === 'kokos') {
//         return Math.pow(a, b) / 125;
//     }
//
// }


// function calc(a, b, callback) {
//     let res = callback(a, b);
//     return res;
// }
//
// let num = calc(10, 20, function (a, b) {
//     return a + b
// });
//
// console.log(num);
//
//
// console.log(calc(10, 20, function (a, b) {
//     return a + b * 2 / 4;
// }));


// let users = [{name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}];
//
//
// let filter = users.filter(function (user) {
//     return user.age > 30;
// });
// console.log(filter);
//
// console.log(users.filter(user => user.status));

//
// let users = [{name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}];
//
// function filterArray(array, checkout) {
//     let container = [];
//     for (const item of array) {
//         if (checkout(item)) {
//             container.push(item);
//         }
//     }
//     return container;
// }
//
// console.log(filterArray(users, function (item) {
//     return item.age > 30;
// }));
//
// console.log(filterArray(users, (item) => item.status === true));
//
//
// console.log(filterArray(users, (user) => user.name.length > 4));


// function rec() {
//     rec();
//
// }

// function iterationRec(start) {
//     console.log(start);
//     start++;
//     if (start < 10) {
//         iterationRec(start);
//     }
//
// }
//
// iterationRec(0);









