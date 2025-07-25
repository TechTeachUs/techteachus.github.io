$(function() {
	// ======================
	// Functions
	// ======================

	const changeNav = (num) => {
		const navBar = document.querySelector('nav');
		const link = document.querySelector('.nav__links');
		const logo = document.querySelector('.nav__logo');
		if (num === 0) {
			navBar.style.backgroundColor = 'transparent';
			navBar.style.paddingTop = '25px';
			navBar.style.paddingBottom = '0px';
			navBar.style.boxShadow = 'none';
			navBar.classList.add('top');
			link.style.color = '#111';
			logo.style.color = '#111';
			logo.style.backgroundColor = 'var(--bg-color)';
		} else {
			navBar.style.backgroundColor = '#111';
			navBar.style.paddingTop = '8px';
			navBar.style.paddingBottom = '8px';
			navBar.style.boxShadow = '0px 2px 5px 0px rgba(0,0,0,0.5)';
			navBar.classList.remove('top');
			link.style.color = '#fff';
			logo.style.color = '#fff';
			logo.style.backgroundColor = '#111';
		}
	};

	// ======================
	// Text Shuffling
	// ======================

	let $randomnbr = $('.nbr');
	let $timer = 5;
	let $it;
	let $data = 0;
	let index;
	let change;
	let text = "Ramirez's Classroom";
	let currentTxt = [];
	let textCheck;
	let letters = [ 'R', 'a', 'm', 'i', 'r', 'e', 'z', "'", 's', '&nbsp;', 'C', 'l', 'a', 's', 's', 'e', 's', '!' ];
	const targetTxt = letters.join('');

	$randomnbr.each(function() {
		change = Math.round(Math.random() * 200 + 100);
		$(this).attr('data-change', change);
	});

	function random() {
		const randomNum = 1;
		const randomTxt = [ ...Array(randomNum) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');
		return randomTxt;
	}

	function select() {
		return Math.round(Math.random() * $randomnbr.length + 1);
	}

	function value() {
		$('.nbr:nth-child(' + select() + ')').html('' + random() + '');
		$('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
		$data++;

		$randomnbr.each(function() {
			if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
				index = $('.ltr').index(this);
				$(this).html(letters[index]);
				$(this).removeClass('nbr');
			}
		});
	}

	function addAnimations() {
		document.body.classList.remove('hidden');
		const animatedElmnts = document.querySelectorAll('.animated');

		for (let i = 0; i < animatedElmnts.length; i++) {
			if (animatedElmnts[i].dataset.animation !== 'rubberBand infinite') {
				animatedElmnts[i].classList.add(animatedElmnts[i].dataset.animation);
			}
		}

		setTimeout(function() {
			const arrow = document.querySelector('.arrow');
			arrow.classList.remove('hidden');
			arrow.classList.add('rubberBand');
			arrow.classList.add('infinite');
		}, 1500);
	}

	function checkTxt() {
		currentTxt = [];
		const currentLtrs = document.querySelectorAll('.ltr');

		for (let i = 0; i < currentLtrs.length; i++) {
			currentTxt.push(currentLtrs[i].innerHTML);
		}

		currentTxt = currentTxt.join('');

		if (currentTxt === targetTxt) {
			clearInterval($it);
			clearInterval(textCheck);

			setTimeout(function() {
				for (let i = 0; i < 7; i++) {
					currentLtrs[i].classList.add('accent');
				}
			}, 250);

			setTimeout(function() {
				addAnimations();
			}, 1000);
		}
	}

	$it = setInterval(value, $timer);
	textCheck = setInterval(checkTxt, $timer);

	// ======================
	// Scrollify
	// ======================

	$.scrollify.disable();

	$.scrollify({
		section: '.container',
		sectionName: 'section-name',
		scrollSpeed: 1000,
		easing: 'easeOutExpo',
		setHeights: false,
		overflowScroll: false,
		updateHash: false,
		before: function(index, section) {
			const circle = document.querySelector('.bar__circle');
			const links = document.querySelectorAll('.nav__links a');
			const particleBG = document.querySelector('#particles-js canvas');
			const person = document.querySelector('.person');
			const personContainer = document.querySelector('.person-container');

			if (index === 0) {
				circle.style.top = '0';
				changeNav(0);
				for (let i = 0; i < links.length; i++) {
					links[i].classList.remove('active');
				}
				links[index].classList.add('active');
				particleBG.style.opacity = 1;
				person.style.right = '-90px';
				personContainer.style.opacity = 1;
			} else if (index === 1) {
				circle.style.top = '50%';
				changeNav(1);
				for (let i = 0; i < links.length; i++) {
					links[i].classList.remove('active');
				}
				links[index].classList.add('active');
				particleBG.style.opacity = 0.3;
				person.style.right = -1 * (person.offsetWidth / 4) - 10 + 'px';
				personContainer.style.opacity = 0;
			} else if (index === 2) {
				circle.style.top = '100%';
				changeNav(2);
				for (let i = 0; i < links.length; i++) {
					links[i].classList.remove('active');
				}
				links[index].classList.add('active');
				particleBG.style.opacity = 0.3;
				person.style.right = -1 * (person.offsetWidth / 4) - 10 + 'px';
				personContainer.style.opacity = 0;
			}
		}
	});

	// ======================
	// Reset
	// ======================

	const iframeWCP = document.querySelector('.iframe-wcp');
	const overlay = document.querySelector('.wcp__overlay');
	function setLinks() {
		const trgets = [ 6, 7, 15, 16, 17, 20, 24, 26, 35, 36, 37 ];
		const rNum = Math.floor(Math.random() * trgets.length);
		const setLink =
			'http://techteach.us/' + trgets[rNum] + '/lab' + trgets[rNum] + '.html';
		iframeWCP.setAttribute('src', setLink);
		overlay.dataset.href = setLink;
	}
	setLinks();

	$('html, body').animate({ scrollTop: '0px' }, 0.5);
	window.scrollTo(0, 0);
	changeNav(0);
	const cir = document.querySelector('.bar__circle');
	cir.style.top = '0%';
	$.scrollify.enable();
});

function goTo(target) {
	window.location = target.dataset.href;
}

// ======================
// Modal
// ======================

const modal = document.querySelector('.modal');

for (let i = 0; i < 43; i++) {
	const modalLink = document.createElement('a');
	modalLink.href = 'WCP/Labs/Lab%20%23' + (i + 1) + '/lab' + (i + 1) + '.html';
	modalLink.innerHTML = 'Lab #' + (i + 1);
	modalLink.classList.add('modal__links');
	modal.appendChild(modalLink);
}

const modalLinks = document.querySelectorAll('.modal a');
const lab18v2 = document.createElement('a');
lab18v2.href = 'WCP/Labs/Lab#18v2/lab18v2.html';
lab18v2.innerHTML = 'Lab #18v2';
lab18v2.classList.add('modal__links');

modal.insertBefore(lab18v2, modalLinks[18]);
