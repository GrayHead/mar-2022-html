// function squareP(xxx, yyy) {
//     let result = (xxx + yyy) * 2;
//     return result;
//     // return undefined;
// }
//
// // ctrl p
// // debugger;
// // let answer = squareP(10, 20);
// // console.log(answer);
//
// // ctrl alt v
// debugger;
// let number = squareP(100, 200);
// console.log(number);


// function divCreator(text) {
//     document.write(`<div>${text}</div>`);
// }
//
// divCreator('hello');
// divCreator('okten');
// divCreator('!!!');


// function iterator(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
//
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// iterator(users);
//
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// iterator(products);

// bar practise
// let x = 100;
// x = 99;
//
// function iterator2(arr) {
//     for (let i = 0; i < x; i++) {
//         const arrElement = arr[i];
//     }
//
// }

// function calculate(a, b) {
//     return a - b;
// }
//
// calculate(789, 10);


// function calc(num1, num2, action) {
//
//     switch (action) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         default:
//             return NaN;
//
//     }
//
// }
//
//
// let data = calc(100, 200, '+');
// console.log(data);
// console.log(calc(140, 12, '*'));
// let calc1 = calc(
//     +prompt('num1'),
//     +prompt('num2'),
//     prompt('action')
// );
//
// console.log(calc1)

// function calc2(arr) {
//
//
// }
//
// calc2([10, 20, 30, 40]);
// calc2([10, 20, 30]);


// function calc2(...nums) {
//     console.log(nums);
//
// }
//
// calc2(10, 20, 30, 40);
// calc2(10, 20, 30);


// function calc2() {
//     let result = 0;
//     for (const item of arguments) {
//         result = result + item;
//     }
//
//     return result;
// }
//
// console.log(calc2(10, 20, 30, 40));


function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function calculateMe(num1, num2, action) {
    let result;
    switch (action) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = minus(num1, num2);
            break;

        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = NaN;

    }
    return result

}

console.log(calculateMe(50, 12, '+'));





