const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');


input.addEventListener('input', inputFontSizeChange);

function inputFontSizeChange(event) {
    span.style.fontSize = event.currentTarget.value + "px";
  
}




