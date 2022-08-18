let counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
      this.value -= 1;  
    },
    };

const btnDecrement = document.querySelector('button[data-action = "decrement"]');
const btnIncrement = document.querySelector('button[data-action = "increment"]');
const btnCounter = document.querySelector('#value');

    
btnDecrement.addEventListener("click", () => {
    counterValue.decrement();  
    console.log(counterValue);
    btnCounter.textContent = counterValue.value;
});

btnIncrement.addEventListener("click",  () => {
    counterValue.increment();  
    console.log(counterValue);
    btnCounter.textContent = counterValue.value;
});



