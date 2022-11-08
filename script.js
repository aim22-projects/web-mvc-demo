const Routes = {
	'#inbox': './src/inbox.js',
	'#saved': './src/saved.js',
	'#settings': './src/settings.js',
	'#account': './src/account.js',
};

const root = document.getElementById('page_view');

window.onload = async () => {
	// return if route not found
	if (!Routes[location.hash]) return;
	// fetch data from page
	const { template, inject } = await import(Routes[location.hash]);
	// set html
	root.innerHTML = template;
	// inject callbacks
	inject();
};

window.onhashchange = () => {
	location.reload(true);
};
