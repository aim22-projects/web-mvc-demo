import Router from './src/scripts/router.js';

const Routes = {
	'#inbox': 'src/inbox/index.html',
	'#saved': 'src/saved/index.html',
	'#settings': 'src/settings/index.html',
	'#account': 'src/account/index.html',
}
const Scripts = {
	'#inbox' : './src/inbox/script.js'
}

const router = new Router();
router.root = '#page_view';
router.routes = Routes;

window.onload = function (){
	router.routeTo(location.hash)
	if(Scripts[location.hash] === undefined) return;
	import(Scripts[location.hash]);
}
window.onhashchange = function(){
	location.reload(true);
}