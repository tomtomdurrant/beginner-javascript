const p = document.querySelector('p');
console.log(p);
document.addEventListener('DOMContentLoaded', () => console.log('hello'));
const heading = document.querySelector('h2');
console.dir(heading);
heading.textContent = 'Hello Tom'
heading.insertAdjacentText('afterbegin', 'This guy is cool')

const pic = document.querySelector('.hello');
pic.classList.add('bye');

pic.addEventListener('click', () => pic.classList.toggle('round'));
pic.alt = "A random photo"


console.log(pic.dataset);


