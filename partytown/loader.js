const fetchScript = async (url, id) => {
	const request = await fetch(url)
	const result = await request.text()

	postMessage([`${id}-loaded`, result])
}

addEventListener("message", e => {
	fetchScript(e.data[0], e.data[1])
})