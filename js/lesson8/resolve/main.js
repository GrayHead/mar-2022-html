// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

// let elementById = document.getElementById('content');
// const text = elementById.innerText;
// console.log(text);

// -- отримує текст з блоку з id "rules"
//
// console.log(document.getElementById('rules').innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

// let elementById = document.getElementById('content');
// elementById.innerText = '<p>Hello</p>';
// elementById.innerHTML = '<p>Hello</p>';
// elementById.textContent = 'Hello';

// -- замініть текст параграфа з id 'rules' на будь-який інший

// let elementById = document.getElementById('rules');
// elementById.innerText = 'Hello';

// -- змініть кожному елементу колір фону на червоний

// let children = document.body.children;
// for (const child of children) {
//     child.style.background = 'green';
// }

// -- змініть кожному елементу колір тексту на синій

// let elementNodeListOf = document.querySelectorAll('*');
// for (const elementNodeListOfElement of elementNodeListOf) {
//     elementNodeListOfElement.style.color = 'red';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let elementsByClassName = document.getElementsByClassName('fc_rules');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.color = 'blue';
// }


// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let elementById = document.getElementById('main_header');
// elementById.className = 'Hello1';
// elementById.classList.add('Hello2');
// elementById.setAttribute('class','Hello3 hello4');

// b) робить шириниу елементу ul 400px

// let elementsByTagName = document.getElementsByTagName('ul');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.width = '400px';
// }

// let elementsByTagName = document.getElementsByTagName('ul')[0];
// elementsByTagName.style.width = '600px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsByClassName = document.getElementsByClassName('linkList');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let elementsByClassName = document.getElementsByClassName('listElement2');
// for (const elementsByClassNameElement of elementsByClassName) {
//     console.log(elementsByClassNameElement.innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let elementsByTagName = document.getElementsByTagName('li');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.background = 'gray';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.className = 'anchor';
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту
// на 40 пікселів

// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     if (elementsByTagNameElement.innerText === 'link3') {
//         elementsByTagNameElement.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.classList.add(`element_${elementsByTagNameElement.innerText}`);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let bG = prompt('Enter color');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.background = bG;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment .
// Колір отримати з prompt()

// let color = prompt('Enter color');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName) {
//     if (elementsByClassNameElement.innerText === 'content 2 segment') {
//         elementsByClassNameElement.style.color = color;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()

// let text = prompt('Enter text');
// let elementsByClassName = document.getElementsByClassName('content_1');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.innerText = text;
// }

// l) отримати елементи p та змінити їм padding на 20px

// let elementsByTagName = document.getElementsByTagName('p');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример march-2022)

// let elementsByClassName = document.getElementsByClassName('text2');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.innerText = 'march-2022';
// }

// let elementsByClassNameElement = document.getElementsByClassName('item2')[0];
// console.log(elementsByClassNameElement.previousElementSibling);
// console.log(elementsByClassNameElement.nextElementSibling);
// console.log(elementsByClassNameElement.parentElement);


// function foo(start) {
//     console.log(start);
//     let children = start.children;
//     for (const child of children) {
//         foo(child);
//     }
// }
//
// foo(document.body);

// const array = [1,2,3,[23,[1,2,3,4],[56,78,90,[12,34,456,78,[100,200,300]]],[1,2,3,4]],[45,56,687,89]];
















