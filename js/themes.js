'use strict';

let modeSwitch = document.querySelector('.header__theme-btn');
let linkFeed = document.querySelector('.link-feed');
let linkNetwork = document.querySelector('.link-network');
let linkJobs = document.querySelector('.link-jobs');
let linkChat = document.querySelector('.link-chat');
let linkNotices = document.querySelector('.link-notices');
let moreVertical = document.querySelector('.more-btn');
let moreHorizontal = document.querySelector('.header__other-btn');
let closeBtn = document.querySelector('.other-header__close-btn');
let uploadBtn = document.querySelector('.upload-btn');
let editBtn = document.querySelector('.edit-btn');

initialState('light-theme');
modeSwitch.addEventListener('click', e => {
	e.preventDefault();
	toggleTheme();
})

function initialState(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}

function toggleTheme() {
	if (localStorage.getItem('theme') === 'light-theme') {
		initialState('dark-theme');
		modeSwitch.innerHTML = 'Light';
		modeSwitch.style.backgroundImage = 'url(img/light_mode.svg)';
		linkFeed.style.backgroundImage = 'url(img/head-feed_copy.svg)';
		linkNetwork.style.backgroundImage = 'url(img/head-network_copy.svg)';
		linkJobs.style.backgroundImage = 'url(img/head-jobs_copy.svg)';
		linkChat.style.backgroundImage = 'url(img/head-chat_copy.svg)';
		linkNotices.style.backgroundImage = 'url(img/head-notices_copy.svg)';
		moreVertical.style.backgroundImage = 'url(img/more-vertical_copy.svg)';
		moreHorizontal.style.backgroundImage = 'url(img/more-horizontal_copy.svg)';
		closeBtn.style.backgroundImage = 'url(img/x_copy.svg)';
		uploadBtn.style.backgroundImage = 'url(img/hero-upload_copy.svg)';
		editBtn.style.backgroundImage = 'url(img/hero-edit_copy.svg)';


	} else {
		initialState('light-theme');
		modeSwitch.innerHTML = 'Dark';
		modeSwitch.style.backgroundImage = 'url(img/dark_mode.svg)';
		linkFeed.style.backgroundImage = 'url(img/head-feed.svg)';
		linkNetwork.style.backgroundImage = 'url(img/head-network.svg)';
		linkJobs.style.backgroundImage = 'url(img/head-jobs.svg)';
		linkChat.style.backgroundImage = 'url(img/head-chat.svg)';
		linkNotices.style.backgroundImage = 'url(img/head-notices.svg)';
		moreVertical.style.backgroundImage = 'url(img/more-vertical.svg)';
		moreHorizontal.style.backgroundImage = 'url(img/more-horizontal.svg)';
		closeBtn.style.backgroundImage = 'url(img/x.svg)';
		uploadBtn.style.backgroundImage = 'url(img/hero-upload.svg)';
		editBtn.style.backgroundImage = 'url(img/hero-edit.svg)';
	}
}

