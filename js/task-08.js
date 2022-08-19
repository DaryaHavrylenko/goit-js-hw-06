const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
      if(email.value.length === 0 || password.value.length === 0) {
        alert('все поля должны быть заполнены!');
    }
    console.log({ email: email.value, password: password.value });
    form.reset();
});