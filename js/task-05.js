const refs = {
    input: document.querySelector('#name-input'),
    span : document.querySelector('#name-output')
}
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.span.textContent = event.currentTarget.value;
    if (refs.input.value.length === 0) {
       refs.span.textContent = 'Anonymous'  
    }
}

