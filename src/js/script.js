const navBtn = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav__items');
const allNavItems = document.querySelectorAll('.nav__item');
const navHeight = document.querySelector('.nav');
const html = document.querySelector('html');
const footerYear = document.querySelector('.footer__year');

html.style.scrollPaddingTop = navHeight.offsetHeight - 1 + 'px';

const handleNav = () => {
	document.body.classList.toggle('nav__sticky');
	navBtn.classList.toggle('is-active');
	navItems.classList.toggle('nav__items--active');
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navBtn.classList.remove('is-active');
			navItems.classList.remove('nav__items--active');
			document.body.classList.remove('nav__sticky');
		});
	});
	handlenavItemsAnimation();
};

const handlenavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

navBtn.addEventListener('click', handleNav);
