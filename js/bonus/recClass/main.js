// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

// function rec(startElement) {
//     let newArr = [];
//     for (const item of startElement) {
//         if (item.children) {
//             newArr.push(...rec(item.children));
//         }
//         newArr.push(...item.classList);
//     }
//     return newArr;
// }
//
// console.log(rec(document.body.children));