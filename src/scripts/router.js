
class Router {
	#root = null;
	#routes = [];
	constructor() {
		// window.onhashchange = function () {
		// 	location.reload()
		// }
	}
	get root() {
		return this.#root;
	}
	set root(value) {
		this.#root = document.querySelector(value);
	}
	get routes() {
		return this.#routes;
	}
	set routes(values) {
		this.#routes = values;
	}
	async navigate(path) {
		location.hash = path;
		location.reload();
	}
	async routeTo(path) {
		try {
			const _templatePath = this.routes[path];
			if (_templatePath === undefined) return;
			const response = await fetch(_templatePath);
			const html = await response.text();
			this.#root.innerHTML = html;
		} catch (exception) {
			console.log(exception);
		}
	}
}
export default Router;