const menuButton = document.querySelector('.hamburger') as HTMLDivElement;

menuButton.addEventListener('click', () => {
	(document.querySelector('.nav-links') as HTMLDivElement).classList.toggle(
		'expanded'
	);
});

export {};
