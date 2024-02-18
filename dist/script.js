const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('hidden');
	window.addEventListener('scroll', () => {
		menu.classList.add('hidden');
	});
});
