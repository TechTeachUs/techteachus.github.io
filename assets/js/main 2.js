const totalTime = 12 * 1000;
let canChange = false;
let currentSlide = 1;
let wrapInt;
let wrapper = document.getElementById('wrapper');

changeSlide();

function changeSlide() {
	if (currentSlide == 1 && canChange == true) {
		wrapper.style.setProperty('transition', 'left 0.75s ease');
		wrapper.style.setProperty('left', '0');
		currentSlide++;
	} else if (currentSlide == 2) {
		wrapper.style.setProperty('left', '-50vw');
		currentSlide++;
	} else if (currentSlide == 3) {
		wrapper.style.setProperty('left', '-100vw');
		currentSlide++;
	} else if (currentSlide == 4) {
		wrapper.style.setProperty('transition', 'none');
		wrapper.style.setProperty('left', '50vw');
		currentSlide = 1;
	} else {
		canChange = true;
	}
	wrapInt = setTimeout(changeSlide, totalTime / 4);
}

