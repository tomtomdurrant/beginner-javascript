// Make a div
const wrapperDiv = document.createElement('div');
// add a class of wrapper to it
wrapperDiv.classList.add('wrapper');
// put it into the body
document.body.append(wrapperDiv);
// make an unordered list
const ul = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const listHTML = `
    <li>one</li>
    <li>two</li>
    <li>three</li>
`;
const list = document.createRange().createContextualFragment(listHTML);
ul.append(list);
console.log(ul);
// put that list into the above wrapper
wrapperDiv.insertAdjacentElement('beforeend', ul);
// create an image
// set the source to an image
const src = 'https://source.unsplash.com/random/300x300';
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
const imgHTML = `
    <img src="${src}" width="250" class="cute" alt="Cute Puppy" />
`
// Append that image to the wrapper
wrapperDiv.insertAdjacentHTML('beforeend', imgHTML);

// with HTML string, make a div, with two paragraphs inside of it
const twoParaHTML = `<div><p>Para 1</p><p>Para 2</p></div>`;
// put this div before the unordered list from above
wrapperDiv.insertAdjacentHTML('beforebegin', twoParaHTML);
// add a class to the second paragraph called warning
const bothParas = document.querySelectorAll('div p');
bothParas[1].classList.add('warning');
// remove the first paragraph
bothParas[0].remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
    const ageInDogYears = age * 7;
    
    return `
    <div style="transition: all .5s;" id="${name}" class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old. In dog years this person would be ${ageInDogYears}. That would be an old dog </p>
        <button>Delete</button>
    </div>
    `
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let fourCards = '';
fourCards += generatePlayerCard('Tom', 20, '160cm');
fourCards += generatePlayerCard('Steve', 60, '150cm');
fourCards += generatePlayerCard('Bill', 80, '12cm');
fourCards += generatePlayerCard('al', 8, '1000cm');
// append those cards to the div
cards.insertAdjacentHTML('beforeend', fourCards);
// put the div into the DOM just before the wrapper element
wrapperDiv.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('button');
// make out delete function

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', (e) => e.target.parentElement.remove()));
