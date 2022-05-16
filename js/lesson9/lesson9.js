// 0:45:00 How to draw cars
// 1:08:00 Events
// 1:38:00 HW howTo

// function closure() {
//   let count = 0;
//
//   function increment() {
//     ++count; // count = count + 1;
//     console.log(count);
//   }
//
//   function decrement() {
//     --count;
//     console.log(count);
//   }
//
//   return {
//     increment,
//     decrement
//   }
// }
//
// const actionsOne = closure();
//
// actionsOne.decrement();
// actionsOne.decrement();
// actionsOne.decrement();
// actionsOne.increment();
//
// console.log('_________')
// const actionsTwo = closure();
//
// actionsTwo.decrement()
// actionsTwo.decrement()
// actionsTwo.decrement()
// actionsTwo.decrement()
//
// console.log('_________')
// const actionsThree = closure();
//
// actionsThree.increment()
// actionsThree.increment()
// actionsThree.increment()
// actionsThree.increment()
//
// const divka = document.getElementById('my_div');
//
// divka.setAttribute('user', 'viktor');
// divka.setAttribute('group', 'mar-2022');
//
//
// const link = document.createElement('a');
// link.innerText = 'Google.com';
//
// link.setAttribute('href','https://www.google.com');
// link.setAttribute('target','_blank');
//
// document.body.appendChild(link)
//
// const cars = [
//   { producer: 'Chevrolet', model: 'Lacceti' },
//   { producer: 'Mazda', model: 'CX-7' },
//   { producer: 'Audi', model: 'RS6' },
//   { producer: 'Opel', model: 'Vectra' },
//   { producer: 'Nissan', model: 'Quash' },
// ];
//
// for (const car of cars) {
//   const red = Math.random() * 255;
//   const green = Math.random() * 255;
//   const blue = Math.random() * 255;
//
//   const carLink = `https://uk.lmgtfy.app/#gsc.tab=0&gsc.q=${car.model}`;
//
//   const carDiv = document.createElement('div');
//   const carLinkElemnt = document.createElement('a');
//   carLinkElemnt.innerText = `Google it`;
//   carLinkElemnt.setAttribute('href', carLink);
//   carLinkElemnt.setAttribute('target', '_blank');
//
//   carDiv.innerHTML =
//     `<hr/>
// <h2 style="color: rgb(${red}, ${green}, ${blue})">${car.producer}</h2>
//     <p>${car.model}</p>`
//
//   carDiv.appendChild(carLinkElemnt)
//
//   document.body.appendChild(carDiv);
// }

const divka = document.getElementById('my_div');
const button = document.getElementById('btn');

divka.onmousemove = (e) => {
  console.log(e);

  const red = e.x;
  const green = e.y;
  const blue = (e.y + e.x) / 2;

  divka.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}


button.onmouseover = () => {
  divka.style.display = 'none'
}

button.onmouseleave = () => {
  divka.style.display = 'block'
}

const form = document.forms.login;

console.log(form);

const checkBox = form.isDivOn;

console.log(checkBox.checked);
