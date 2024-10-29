const fetchScript = async (url, id) => {
	const request = await fetch(url)
	const result = await request.text()

	postMessage([`${id}-loaded`, result])
}

const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

addEventListener("message", e => {
	fetchScript(e.data[0], e.data[1])
})

