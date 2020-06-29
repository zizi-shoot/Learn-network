'use strict';

let uploadButton = document.querySelector('.inputfile');
let imgPath;
uploadButton.addEventListener('change', uploadPic);

function uploadPic(event) {
	imgPath = URL.createObjectURL(event.target.files[0]);
	document.querySelector('.hero__pic').setAttribute('src', imgPath)
}


