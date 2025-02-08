'use strict';
const back = document.querySelector('.btn-back');
const drake = document.querySelector('.drake');
const bieber = document.querySelector('.bieber');
const eminem = document.querySelector('.eminem');
const taylorSwift = document.querySelector('.taylor-swift');
back.addEventListener('click', function () {
  open('index.html');
});
drake.addEventListener('click', function () {
  open('drake.html');
});
bieber.addEventListener('click', function () {
  open('bieber.html');
});
eminem.addEventListener('click', function () {
  open('eminem.html');
});
taylorSwift.addEventListener('click', function () {
  open('taylor swift.html');
});
