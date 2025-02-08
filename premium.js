'use strict';
const back = document.querySelector('.back');
const money = document.querySelector('.price-money');
const gold = document.querySelector('.btn-gold');
const premium = document.querySelector('.btn-premium');
const btn = document.querySelector('.btn');
const headGold = document.querySelector('.head-gold');
let number = 0;
money.textContent = 0;
const btnClick = function () {
  btn.style.transform = 'scale(0.7)';
  setTimeout(() => {
    btn.style.transform = 'scale(1)';
  }, 180);
  money.textContent = number;
  number++;
};
const buyPremium = function () {
  if (number >= 100) {
    document.querySelector('.premium').style.display = 'none';
    headGold.textContent = 'BUY';
    number -= 100;
    alert('you buy premium account');
  } else {
    alert(`you haven't got enough coins`);
  }
};
const buyGold = function () {
  if (number >= 50) {
    number -= 50;
    document.querySelector('.gold').style.display = 'none';
    alert('you buy gold account');
  } else {
    alert(`you haven't got enough coins`);
  }
};
btn.addEventListener('click', btnClick);
premium.addEventListener('click', buyPremium);
gold.addEventListener('click', buyGold);
back.addEventListener('click', function () {
  open('index.html');
});
