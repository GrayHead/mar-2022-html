// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [];
// let user1 = new User(5, 'Vasya', 'Pupkin', 'qq@gmail.com', 1234556778);
// let user2 = new User(6, 'Vasya', 'Pupkin', 'qq@gmail.com', 1234556778);
// let user3 = new User(1, 'Vasya', 'Pupkin', 'qq@gmail.com', 1234556778);
// let user4 = new User(2, 'Vasya', 'Pupkin', 'qq@gmail.com', 1234556778);
// let user5 = new User(4, 'Vasya', 'Pupkin', 'qq@gmail.com', 1234556778);
// let user6 = new User(3, 'Vasya', 'Pupkin', 'qq@gmail.com', 1234556778);
// let user7 = new User(7, 'Vasya', 'Pupkin', 'qq@gmail.com', 1234556778);
// let user8 = new User(8, 'Vasya', 'Pupkin', 'qq@gmail.com', 1234556778);
// let user9 = new User(10, 'Vasya', 'Pupkin', 'qq@gmail.com', 1234556778);
// let user10 = new User(9, 'Vasya', 'Pupkin', 'qq@gmail.com', 1234556778);
// array = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// let users = array.filter(value => value.id % 2 ===0);
// console.log(users);
// let users1 = array.sort((a, b) => a.id - b.id);
// console.log(users1);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class User {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
//
// let array = [];
// let user1 = new User(5, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','milk']);
// let user2 = new User(6, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','milk']);
// let user3 = new User(1, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','milk']);
// let user4 = new User(2, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','milk']);
// let user5 = new User(4, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','milk']);
// let user6 = new User(3, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','juice','milk']);
// let user7 = new User(7, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread']);
// let user8 = new User(8, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','meat']);
// let user9 = new User(10, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','apple','lime','tomato']);
// let user10 = new User(9, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread']);
// array = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// let users = array.sort((a, b) => a.order.length - b.order.length);
// console.log(users);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxspeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume
//     this.drive = function () {
//         // console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const item in this) {
//             // console.log(`${item} - ${this[item]}`);
//             // console.log(this);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//     };
//     this.year = function (newYear) {
//         this.year = newYear;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let newCar = new Car('bmv', 'germany', 2020, 280, 3.5);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(50);
// newCar.year(2021);
// newCar.addDriver('Vasya');
// console.log(newCar);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxspeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//
//
//     drive() {
//         // console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//
//     info() {
//         for (const item in this) {
//             // console.log(`${item} - ${this[item]}`);
//             // console.log(this);
//         }
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxspeed += newSpeed;
//     };
//
//     yearCar(newYear) {
//         return this.year = newYear;
//     };
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// let newCar = new Car('bmv', 'germany', 2020, 280, 3.5);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(50);
// newCar.yearCar(2021);
// newCar.addDriver({
//     name: 'Vasya',
//     age: 22
// });
// console.log(newCar);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella(name,age,footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let arrCinderella = [
//     new Cinderella('Natasha',22,36),
//     new Cinderella('Marina',23,37),
//     new Cinderella('Sveta',60,45)
// ];
// function Prince(name,age,findSize) {
//     this.name = name;
//     this.age = age;
//     this.findSize = findSize;
// }
// let newPrince = new Prince('Vasya', 30,36);
//
// let find = (arrCind,prince) => {
//     for (const item of arrCind) {
//         if(item.footSize === prince.findSize) {
//             return `${item.name}`;
//         }
//     }
// }
// console.log(find(arrCinderella, newPrince));
//
// let cind = arrCinderella.find(value => value.footSize === newPrince.findSize);
// console.log(cind);



















