const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = event.currentTarget.elements.email.value.trim();
  const passwordValue = event.currentTarget.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  event.currentTarget.reset();
});