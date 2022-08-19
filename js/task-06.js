const input = document.querySelector('#validation-input');
    
input.addEventListener('blur', onInputBlurChange);

function onInputBlurChange(event) {
    const onInput = event.currentTarget;
    const inputLength = onInput.dataset.length;
    
    if (onInput.value.length !== Number(inputLength)) {
        onInput.classList.remove('valid');
        onInput.classList.add('invalid');
    } else {
        onInput.classList.remove('invalid');
        onInput.classList.add('valid');
    }
}
