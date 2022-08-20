const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');


btn.addEventListener('click', () => {
  let color = getRandomHexColor();
  document.body.style.background = color;
  span.textContent = color;
});

 
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
