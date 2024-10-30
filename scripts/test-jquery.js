const normalFunction = () => {
	if (typeof $ === 'undefined') return;

	const helloTextDiv = $('#helloText')
	helloTextDiv.text(helloTextDiv.data('text'))

	$(".accordion-title").click(function(){
		$(this).parent(".accordion-item").find(".accordion-content").slideToggle();
		$(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp();
		$(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp();
	});
}

pubsub.on('jquery-loaded', () => {
		setTimeout(() => {
			normalFunction()
		}, 1000);
})

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		normalFunction()
	}, 1000);
})