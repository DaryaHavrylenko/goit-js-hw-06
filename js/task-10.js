const btnCreate = document.querySelector('button[data-create');
const btnDestroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('#controls > input');
const boxesContainer = document.querySelector('#boxes');

const createBoxes = amount => {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.background = getRandomHexColor();
    boxes.push(divEl);
  }
  return boxes;
}

btnCreate.addEventListener('click', () => {
  let boxesAdd = createBoxes(input.value);
  boxesContainer.append(...boxesAdd);
})

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesContainer.innerHTML = "";
 }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}