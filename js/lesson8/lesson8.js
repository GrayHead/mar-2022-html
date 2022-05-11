// 0:00:01 Get and style
// 0:28:01 Create element
// 0:28:01 Create element
// 0:37:01 Student list
// 0:45:01 Query Selector
// 0:57:01 Class list
// 1:02:01 Forms API

// // // HERE YOY WILL GET JUST !!!ONE!!! ELEMENT
// // const divka = document.getElementById('my_div');
// //
// //
// //
// // console.log(divka);
// //
// // // divka.innerText = '<h1>TEST</h1>'
// // // divka.innerHTML = '<h1>TEST</h1>'
// // divka.style.backgroundColor = 'yellow';
// //
// // const elemByTag = document.getElementsByTagName('p');
// // const allParag = document.getElementsByClassName('my_class');
// //
// // console.log('_______________');
// // console.log(allParag);
// // console.log('_______________');
// //
// // // allParag.style.backgroundColor = 'red'
// //
// // for (let i = 0; i < allParag.length; i++) {
// //   const singleP = allParag[i];
// //
// //   if (i % 2) {
// //     singleP.style.color = 'red';
// //   }
// // }
// //
// //
//
// const divka = document.getElementById('my_div');
//
// const myOwnP = document.createElement('p');
//
// myOwnP.innerText = 'I AM VIKTOR`S P'
//
// divka.appendChild(myOwnP)
//
// document.body.appendChild(myOwnP);
//
// const studentsList = [
//   { name: 'Viktor', score: 3 },
//   { name: 'Ira', score: 4 },
//   { name: 'Oleg', score: 3 },
//   { name: 'Karina', score: 5 },
//   { name: 'Dimas', score: 2 },
// ]
// const divka = document.getElementById('my_div');
//
// for (let i = 0; i < studentsList.length; i++) {
//   const student = studentsList[i];
//
//   const studentDiv = document.createElement('div');
//   studentDiv.style.margin = '20px';
//   studentDiv.innerHTML = `
//   ID: ${i + 1} <br>
//   Name: ${student.name} <br>
//   Score: ${student.score} <hr>`;
//
//   divka.appendChild(studentDiv);
// }
//
// const element = document.querySelector('#my_div');
//
// console.log(element.classList);
//
// let b = element.classList.contains('hello');
// element.classList.add('hello', 'my_class');
//
// element.classList.remove('hello', 'second');
//
// console.log(b);

console.log(document.forms.login);

const loginForm = document.forms.login;

const allUSers = []

loginForm.onsubmit = (e) => {
  e.preventDefault()
  console.log(loginForm.login.value, 'LOGIN');
  console.log(loginForm.password.value, 'PASSWORD');

  const data = {
    name: loginForm.login.value,
    password: loginForm.password.value
  }

  allUSers.push(data)
  //
  loginForm.login.value = ''
  loginForm.password.value = ''

}
