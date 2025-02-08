'use strict';
// problem

// 1) Understanding the problem

// 2) Breaking up into sub-problems

// start coding

// Variables
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
btn1.addEventListener('click', function () {
  open('music.html');
});
btn2.addEventListener('click', function () {
  open('about.html');
});
btn3.addEventListener('click', function () {
  open('login.html');
});
btn4.addEventListener('click', function () {
  open('premium.html');
});
