// зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>

const divElement = document.createElement('div');
document.body.append(divElement);

divElement.setAttribute('contenteditable', 'true');
divElement.style.height = '100px';
divElement.style.border = '1px solid black';

divElement.onkeydown = (e) => {
    const name = e.key;

    if (name === 'Tab') {
        divElement.innerText = `<${divElement.innerText}></${divElement.innerText}>`;
    }
}