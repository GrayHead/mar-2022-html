// за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику
// headings,всі параграфи покласти в характеристику (масив) paragraphs

const ps = [];
const hs = [];

const rec = (item) => {
    for (const element of item.children) {
        if (element.localName === 'h2') hs.push(element.innerText);
        if (element.localName === 'p') ps.push(element.innerText);
        if (element.children) rec(element);
    }
}

const element = document.getElementById('wrap');
rec(element);

const obj = {
    title: hs,
    paragraph: ps
}
console.log(obj);