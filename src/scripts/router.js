
class Router {
	#root = null;
	#routes = [];
	constructor({ query, routes }) {
		this.root = query;
		this.routes = routes;
		this.routeTo(location.hash);
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
		const _templatePath = this.routes[path];
		if(_templatePath === undefined) return;
		const response = await fetch(_templatePath);
		const html = await response.text();
		this.#root.innerHTML = html;
	}
}
export default Router;