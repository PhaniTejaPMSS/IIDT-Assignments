const form = document.getElementById("signupForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function validateForm() {
  let isValid = true;
  if (username.value.trim() === "") {
    showError(username, "Username is required");
    isValid = false;
  } else {
    showSuccess(username);
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!isEmailValid(email.value.trim())) {
    showError(email, "Email is not valid");
    isValid = false;
  } else {
    showSuccess(email);
  }

  if (password.value.trim() === "") {
    showError(password, "Password is required");
    isValid = false;
  } else {
    showSuccess(password);
  }

  if (confirmPassword.value.trim() === "") {
    showError(confirmPassword, "Confirm Password is required");
    isValid = false;
  } else if (password.value.trim() !== confirmPassword.value.trim()) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  } else {
    showSuccess(confirmPassword);
  }

  return isValid;
}

function showError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.innerText = message;
  errorMessage.style.display = "block";
}

function showSuccess(input) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.style.display = "none";
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
