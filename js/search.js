'use strict';

let searchSection = document.querySelector('.header__results');
let searchInput = document.querySelector('.header-search__input');
let searchBtn = document.querySelector('.header-search__btn');

searchInput.addEventListener('input', checkInput);

function checkInput() {
	if (searchInput.value.length) {
		displaySearch();
	} else {
		hideSearch();
	}
}

function displaySearch() {
	searchBtn.classList.add('header-search__btn--active');
	searchInput.style.paddingLeft = '31px';
	searchSection.style.top = '80px';
	setTimeout(() => {
		document.body.append(blur);
	}, 700);
}

function hideSearch() {
	searchBtn.classList.remove('header-search__btn--active');
	searchInput.style.paddingLeft = '74px';
	searchSection.style.top = '-1000px';
	setTimeout(() => {
		blur.remove();
	}, 700);
}
