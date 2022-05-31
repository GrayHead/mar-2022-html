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
//             innerDiv.innerHTML = `<h2>UserId : ${item.userId}</h2>
//                                    <h3>ID : ${item.id}</h3>
//                                     <p>Title : ${item.title}</p>
//                                      <p>Body : ${item.body}</p>`;
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
//             for (const itemElement in item) {
//                 const divElement = document.createElement('div');
//                 divElement.innerText =`${itemElement} ${item[itemElement]}`;
//                 innerDiv.append(divElement);
//             }
//         }
//     });

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(value => {
//         for (const post of value) {
//             const div = document.createElement('div');
//             document.body.append(div);
//             const {userId, id, title, body} = post;
//             div.innerHTML = `<h2>UserId : ${userId} - ID : ${id} - Title : ${title}</h2>
//                               <p>Body : ${body}</p>`;
//             const button = document.createElement('button');
//             button.innerText = 'Click';
//             div.append(button);
//
//             button.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//                     .then(value => value.json())
//                     .then(value => {
//                         const wrapComments = document.createElement('div');
//                         div.append(wrapComments);
//                         for (const comment of value) {
//
//                             const commentsItem = document.createElement('div');
//                             commentsItem.innerText = comment.postId + ' ' + comment.id + ' ' + comment.name + ' '
//                                 + comment.email + ' ' + comment.body;
//                             wrapComments.append(commentsItem);
//                             button.disabled = true;
//                         }
//
//
//                     });
//             }
//
//         }
//
//     });


// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(value => {
//         for (const post of value) {
//             const div = document.createElement('div');
//             document.body.append(div);
//             const { userId, id, title, body } = post;
//             div.innerHTML = `<h2>UserId : ${userId} - ID : ${id} - Title : ${title}</h2>
//                               <p>Body : ${body}</p>`;
//             const button = document.createElement('button');
//             button.innerText = 'Click';
//             div.append(button);
//
//             button.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/comments`)
//                     .then(value => value.json())
//                     .then(value => {
//                         const wrapComments = document.createElement('div');
//                         div.append(wrapComments);
//                         for (const comment of value) {
//                             if (post.id === comment.postId) {
//                                 const commentsItem = document.createElement('div');
//                                 commentsItem.innerText = comment.postId + ' ' + comment.id +' '+ comment.name + ' '
//                                     + comment.email + ' ' + comment.body;
//                                 wrapComments.append(commentsItem);
//                                 button.disabled = true;
//                             }
//
//                         }
//                     });
//             }
//
//         }
//
//     });




















