const myPara = document.createElement('p');
console.log(myPara);
myPara.textContent = 'Para';
myPara.classList.add('other');

const newImg = document.createElement('img');
newImg.src = 'https://source.unsplash.com/random/300x300';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

myDiv.appendChild(myPara);
myDiv.appendChild(newImg);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'New heading';

const items = document.querySelector('.items');
items.insertAdjacentElement('afterbegin', heading);

const ul = document.createElement('ul');
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    ul.insertAdjacentElement('beforeend', li);
}

console.log(ul);

document.body.appendChild(ul);
