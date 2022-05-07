// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// let str1 = 'lorem ipsum';
// let str2 = 'javascript is cool';
// console.log(str.length);
// console.log(str1.length);
// console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// let str1 = 'lorem ipsum';
// let str2 = 'javascript is cool';
// console.log(str.toUpperCase());
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'hello world';
// let str1 = 'lorem ipsum';
// let str2 = 'javascript is cool';
// console.log(str.toLowerCase());
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// let str = 'Ревуть воли як ясла повні';
// let stringToArray = (str) => str.split(' ');
// console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let array = [10,8,-7,55,987,-1011,0,1050,0];
// // console.log(array.map(value => value.toString()));
// console.log(array.map(value => value + ''));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в
// залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         arr.sort((a, b) => b - a)
//     }
//     return arr;
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// // -- відсортувати його за спаданням за monthDuration
//
// let sortArray = (array) => array.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortArray(coursesAndDurationArray));
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let filterArray = (array) => array.filter(value => value.monthDuration > 5);
// console.log(filterArray(coursesAndDurationArray));


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let deckOfCards = [
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'black'
//     },
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '6',
//         color: 'red'
//     }
// ]

// - знайти піковий туз

// console.log(deckOfCards.find(value => value.cardSuit === 'clubs' && value.value === 'ace'));
// console.log(deckOfCards.filter(value => value.cardSuit === 'clubs' && value.value === 'ace'));

// - всі шістки

// console.log(deckOfCards.filter(value => value.value === '6'));

// - всі червоні карти

// console.log(deckOfCards.filter(value => value.color === 'red'));

// - всі буби

// console.log(deckOfCards.filter(value => value.cardSuit === 'diamond'));

// - всі трефи від 9 та більше

// console.log(deckOfCards.filter(value => value.cardSuit === 'clubs' && value.value > '8' || value.value === '10' &&
// value.cardSuit === 'clubs' || value.value === 'Joker'));
// console.log(deckOfCards.filter(value => value.cardSuit === 'clubs' && value.value > '8' && value.value.length > 1
//     || value.value === 'Joker'));


// let obj = {
//     cardSuit : ['spade', 'diamond','heart', 'clubs'],
//     value : ['6'-'10', 'ace','jack','queen','king','joker'],
//     color : ['red','black']
// }
//
// let card = {};
// card.cardSuit = obj.cardSuit.filter(value => value === 'spade')[0];
// card.value = obj.value.filter(value => value === 'ace')[0];
// card.color = obj.color.filter(value => value === 'black')[0];
// console.log(card);













