const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');


// var 1

// const elements = ingredients.map(option => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = option;
//   itemEl.classList.add('item');

//   return itemEl;
// });
// console.log(elements);
// listEl.append(...elements);

// var 2
const addIngredients = options => {
  return options.map(option => {
    const itemEl = document.createElement('li');
    itemEl.textContent = option;
    itemEl.classList.add('item');
    console.log(itemEl);
    return itemEl;
  }
  )
}
const elements = addIngredients(ingredients);
listEl.append(...elements);



