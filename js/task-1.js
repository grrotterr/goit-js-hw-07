const categoriesList = document.querySelector('#categories');

const item = document.querySelectorAll('.item');

console.log(`Number of categories: ${item.length}`);

item.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsCount = item.querySelector('ul').querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});