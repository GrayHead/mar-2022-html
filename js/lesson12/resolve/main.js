// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(value => {
//         const divWrap = document.createElement('div');
//         divWrap.setAttribute('class', 'wrap');
//         document.body.append(divWrap);
//
//         for (const item of value) {
//             const innerDiv = document.createElement('div');
//             innerDiv.setAttribute('class', 'inner');
//             innerDiv.innerHTML = `<h2>UserID : ${item.userId}</h2>
// <h2>ID : ${item.id}</h2>
// <h2>Title : ${item.title}</h2>
// <h2>Body : ${item.body}</h2>`;
//             divWrap.append(innerDiv);
//         }
//     });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch(`https://jsonplaceholder.typicode.com/comments`)
//     .then(value => value.json())
//     .then(value => {
//         const divWrap = document.createElement('div');
//         document.body.append(divWrap);
//
//         for (const item of value) {
//             const innerDiv = document.createElement('div');
//             divWrap.append(innerDiv);
//             for (const itemKey in item) {
//                 const divElement = document.createElement('div');
//                 divElement.innerText = `${itemKey} ${item[itemKey]}`;
//                 divWrap.append(divElement);
//             }
//         }
//     });

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(value => {
//         const htmlDivElement = document.createElement('div');
//         document.body.append(htmlDivElement);
//         for (const post of value) {
//             const divWrap = document.createElement('div');
//             htmlDivElement.append(divWrap);
//             const { userId, id, title, body } = post;
//             divWrap.innerHTML = `<h2>UserId : ${userId}</h2>
// <h2>Id : ${id}</h2>
// <h2>title : ${title}</h2>
// <h2>body : ${body}</h2>`;
//
//             const button = document.createElement('button');
//             button.innerText = 'Click';
//             divWrap.append(button);
//
//             button.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//                     .then(value => value.json())
//                     .then(value => {
//                         const wrapComments = document.createElement('div');
//                         divWrap.append(wrapComments);
//                         for (const comment of value) {
//                             const div = 'div';
//                             const commentDiv = document.createElement(div);
//                             commentDiv.innerText = comment.postId + ' ' + comment.id + ' ' + comment.name
//                             + ' ' + comment.email + ' ' + comment.body;
//                             wrapComments.append(commentDiv);
//                             button.disabled = true;
//                         }
//                     });
//             }
//         }
//
//
//     });


// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(value => {
//         const htmlDivElement = document.createElement('div');
//         document.body.append(htmlDivElement);
//         for (const post of value) {
//             const divWrap = document.createElement('div');
//             htmlDivElement.append(divWrap);
//             const {userId, id, title, body} = post;
//             divWrap.innerHTML = `<h2>UserId : ${userId}</h2>
// <h2>Id : ${id}</h2>
// <h2>title : ${title}</h2>
// <h2>body : ${body}</h2>`;
//
//             const button = document.createElement('button');
//             button.innerText = 'Click';
//             divWrap.append(button);
//
//             button.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/comments`)
//                     .then(value => value.json())
//                     .then(value => {
//                         const wrapComments = document.createElement('div');
//                         divWrap.append(wrapComments);
//                         for (const comment of value) {
//                             if (post.id === comment.postId) {
//                                 const div = 'div';
//                                 const commentDiv = document.createElement(div);
//                                 commentDiv.innerText = comment.postId + ' ' + comment.id + ' ' + comment.name
//                                     + ' ' + comment.email + ' ' + comment.body;
//                                 wrapComments.append(commentDiv);
//                                 button.disabled = true;
//                             }
//
//                         }
//                     });
//             }
//         }
//     });
















