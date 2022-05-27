// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// const s1 = '       Harry-23234-       Potter3333      ';
// const s2 = '         Harry-%$#*^%   - **Potter          ';
// const s3 = '         Harry--   +Potter         ';
//
// const normalize = (str) => {
//     let string = str.split('')
//         .map(value => (value >= "A" && value <= "Z") || (value >= "a" && value <= "z") ? value : ' ')
//         .join('')
//         .trim();
//     while (string.includes('  ')) {
//         string = string.replace('  ', ' ');
//     }
//     return string;
// }
// console.log(normalize(s1));
// console.log(normalize(s2));
// console.log(normalize(s3));