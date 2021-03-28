const button = document.querySelector('.btn');
// const body = document.getElementsByTagName('body');

const colors = ['#264653', '#2a9d8f', '#fb8500', '#e76f51', '#ef476f', '#8338ec'];
const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four', 'Message Five', 'Message Six'];

let colorPicker;
let messagePicker;

/* 
landom color + landom message
if (body.lastElementChild.tagName === 'div')
div.style.bottom = lastElementChild.style.height * body.child + margin(15px) * body.child
else 
div.style.bottom = 10px;

setTimeout delete firstChild
*/

button.addEventListener('click', toast);

function toast() {

    colorPicker = colors[Math.floor(Math.random() * 6)];
    messagePicker = messages[Math.floor(Math.random() * 6)];

    let divs = document.querySelectorAll('div');

    if (divs.length <= 0) {
        let node = document.createElement('div');
        node.className = 'toast';
        let textnode = document.createTextNode(messagePicker);
        node.appendChild(textnode);
        let appendChild = document.body.appendChild(node);
        appendChild.style.bottom = '3px';
        appendChild.style.color = colorPicker;
        appendChild.style.opacity = 1;
        setTimeout(() => {
            document.body.removeChild(node);
        }, 2000);
    } else {
        let node = document.createElement('div');
        node.className = 'toast';
        let textnode = document.createTextNode(messagePicker);
        node.appendChild(textnode);
        let appendChild = document.body.appendChild(node);
        appendChild.style.bottom = `${divs.length * 60}px`;
        appendChild.style.color = colorPicker;
        appendChild.style.opacity = 1;
        console.log(appendChild.style.bottom)
        setTimeout(() => {
            document.body.removeChild(node);
        }, 2000);
    }



}