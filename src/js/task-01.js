const allItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', allItemEl.length);

allItemEl.forEach(function (categories) {
    console.log('Category:', categories.firstElementChild.textContent);
    console.log('Elements:', categories.lastElementChild.children.length);
})


