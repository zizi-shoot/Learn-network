'use strict'

let otherOpenBtn = document.querySelector('.header__other-btn');
let otherCloseBtn = document.querySelector('.other-header__close-btn');
let otherMenu = document.querySelector('.header__other')
let blur = document.createElement('div');
blur.className = 'blur';

otherOpenBtn.addEventListener('click', displayOtherMenu);
otherCloseBtn.addEventListener('click', hideOtherMenu);

function displayOtherMenu() {
	otherCloseBtn.style.top = '0';
	otherMenu.style.top = '0';
	blur.style.zIndex = 25;
	setTimeout(() => {
		document.body.append(blur);
	}, 700);

}
function hideOtherMenu() {
	otherCloseBtn.style.top = '-100vh';
	otherMenu.style.top = '-100vh';
	setTimeout(() => {
		blur.remove();
	}, 700);
}
