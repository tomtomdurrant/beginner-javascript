const items = document.querySelector('.items');
console.log(items.innerHTML)
const src = 'https://source.unsplash.com/random/300x300';
const myHTML = `
    <div class="image">
        <h2>Random image</h2>
        <img src="${src}" alt="" />
    </div>
`;

const fragment = document.createRange().createContextualFragment(myHTML);
console.log(fragment);
document.body.append(fragment);


