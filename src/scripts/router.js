
class Router {
	#root = null;
	constructor(query) {
		this.#root = document.querySelector(query);
	}
	async navigate(path) {
		location.hash = path;
		location.reload();
	}
	async routeTo(path) {
		try {
			if (this.#root === null) return;
			const response = await fetch(path);
			const html = await response.text();
			this.#root.innerHTML = html;
		} catch (exception) {
			console.log(exception);
		}
	}
}
export default Router;