
const normalFunction = () => {
	if (typeof $ === 'undefined') return;

	const helloTextDiv = $('#helloText')
	helloTextDiv.text(helloTextDiv.data('text'))
}

pubsub.on('jquery-loaded', () => {
		setTimeout(() => {
			normalFunction()
		}, 1000);
})