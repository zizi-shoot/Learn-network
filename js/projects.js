'use strict';

let projectsAmount = document.querySelector('.projects__list').children.length;
let skillsAmount = document.querySelector('.skills__list').children.length;

let dataProjects = document.querySelector('.projects__more');
let dataSkills = document.querySelector('.skills__more');

dataProjects.setAttribute('data-show-all', `(${projectsAmount})`);
dataSkills.setAttribute('data-show-all', `(${skillsAmount})`);





let projectsItem = document.querySelectorAll('.projects__item');
let skillsItem = document.querySelectorAll('.skills__item');

setDefaultAmount(projectsItem);
setDefaultAmount(skillsItem);

function setDefaultAmount(item) {
	item.forEach((e, i) => {
		while (i <= 2) {
			e.style.display = 'block';
			i++
		}
	});
}





let dataProjectsTitle = document.querySelector('.projects__title');
let shownArr;
setProjectTitle();

function getShownArr(item) {
	shownArr = Array.from(item).filter(e => e.style.display == 'block');
}

function setProjectTitle() {
	getShownArr(projectsItem);
	dataProjectsTitle.setAttribute('data-projects', `${shownArr.length} of ${projectsAmount}`)
}




let projectsShowAll = document.querySelector('.projects__more');
let skillsShowAll = document.querySelector('.skills__more');

projectsShowAll.addEventListener('click', showAll);
skillsShowAll.addEventListener('click', showAll);

function showAll(event) {
	let item = event.target.parentNode.querySelectorAll('[class*=__item]');
	getShownArr(item);
	if (shownArr.length < item.length) {
		item.forEach(e => e.style.display = 'block');
		event.target.setAttribute('data-show-all', '')
		event.target.innerHTML = 'Show less'
	} else {
		let itemAmount = event.target.parentNode.querySelector('[class*=__list]').children.length;
		item.forEach(e => e.style.display = 'none');
		setDefaultAmount(item);
		event.target.setAttribute('data-show-all', `(${itemAmount})`)
		event.target.innerHTML = 'Show all'
	}
	setProjectTitle();
}


