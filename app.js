const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const username = document.querySelector("[name='username']").value.trim();
  const email = document.querySelector("[name='email']").value.trim();
  const password = document.querySelector("[name='password']").value.trim();
  const confirmPassword = document.querySelector("[name='confirm-Password']").value.trim();

  const errors = [];

  if (username === '')
    errors.push("Username can't be blank");
  if (email === '')
    errors.push("Email cant't be blank");
  if (password === '')
    errors.push("Password can't be blank");
  if (password !== confirmPassword)
    errors.push("Passwords must match");
  console.log(errors)
});