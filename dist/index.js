const mediaContainer = document.querySelector('#media-container');
const mediaButtonContainer = document.querySelector('#media-article ul');
const linkArr = [
	'a-whiter-shade-of-pale',
	'besame-mucho',
	'blackbird-and-strawberry-fields',
	'comin-home-baby',
	'exactly-like-you',
	'get-together',
	'the-water-is-wild',
	'wayfaring-stranger',
	'what-a-wonderful-world',
];
mediaButtonContainer.addEventListener('click', (e) => {
	const pressedButtonId = e.target.id;
	if (pressedButtonId) {
		const linkTitle = linkArr[Number(pressedButtonId.slice(-1)) - 1];
		const src = `https://davidsmediabucket.s3.us-west-1.amazonaws.com/jonathan-spivack/video/${linkTitle}.mp4`;
		mediaContainer.innerHTML = `
		<video controls="controls">
		<source
		src=${src}
		type="video/mp4"
		/>
	</video>
    <h3>${e.target.textContent}</h3>
        `;
	}
});
