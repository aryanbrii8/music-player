'use strict';

//Variables
const email = 'Leonard477@gmail.com';
const password = 'Leonard12';
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btn = document.querySelector('.btn');

// Function
const validEmail = function () {
  if (emailInput.value.length < 8) {
    emailInput.style.border = '1px solid red';
    alert('your email must be higher than 8');
    emailInput.focus();
  } else {
    emailInput.value.length > 8;
    emailInput.style.border = 'none';
    emailInput.focus();
  }
};
const validPassword = function () {
  if (passwordInput.value.length < 6) {
    passwordInput.style.border = '1px solid red';
    alert('your password must be higher than 6');
    passwordInput.focus();
  } else {
    passwordInput.value.length > 6;
    passwordInput.style.border = 'none';
    passwordInput.focus();
  }
};
const accept = function () {
  validEmail();
  validPassword();
  if (emailInput.value == email) {
    open('index.html');
  } else {
    alert('wrong email');
  }
  if (passwordInput.value == password) {
    open('index.html');
  } else {
    alert('wrong password');
  }
};

btn.addEventListener('click', accept);
