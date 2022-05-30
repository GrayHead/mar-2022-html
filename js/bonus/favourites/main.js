// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


const users = [
    {name: 'sasha', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'dasha', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'natasha', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const  favouritesKey = 'favourites';
localStorage.setItem(favouritesKey, JSON.stringify([]));
const container = document.getElementById('container');

users.forEach(user => {
    const userDiv = document.createElement('div');

    const content = document.createElement('div');
    content.innerText= `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;

    const btn = document.createElement('button');
    btn.innerText = 'Add to favourites';
    btn.onclick = () => {
        const favourites = JSON.parse(localStorage.getItem(favouritesKey)) || [];
        favourites.push(user);
        localStorage.setItem(favouritesKey, JSON.stringify(favourites));
        btn.disabled = true;
    }
    userDiv.append(content, btn);
    container.append(userDiv);
})























