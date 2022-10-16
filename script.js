import Router from './src/scripts/router.js';

const Routes = {
	'#inbox': 'src/inbox/index.html',
	'#saved': 'src/saved/index.html',
	'#settings': 'src/settings/index.html',
	'#account': 'src/account/index.html',
}
const Scripts = {
	'#inbox': './src/inbox/script.js'
}

const router = new Router('#page_view');

window.onload = function () {
	// load html of new route
	if (Routes[location.hash] == undefined) return;
	router.routeTo(Routes[location.hash])

	// load script of new route
	if (Scripts[location.hash] === undefined) return;
	import(Scripts[location.hash]);
}

window.onhashchange = function () {
	location.reload(true);
}