import Router from './src/scripts/router.js';

const Routes = {
	inbox: '#inbox',
	saved: '#saved',
	settings: '#settings',
	account: '#account',
};

const router = new Router({
	query: '#page_view',
	routes: {
		[Routes.inbox]: 'src/inbox/index.html',
		[Routes.saved]: 'src/saved/index.html',
		[Routes.settings]: 'src/settings/index.html',
		[Routes.account]: 'src/account/index.html',
	},
});

const InboxLink = document.getElementById('inbox_link');
const SavedLink = document.getElementById('saved_link');
const SettingsLink = document.getElementById('settings_link');
const AccountLink = document.getElementById('account_link');

InboxLink.onclick = () => router.navigate(Routes.inbox);
SavedLink.onclick = () => router.navigate(Routes.saved);
SettingsLink.onclick = () => router.navigate(Routes.settings);
AccountLink.onclick = () => router.navigate(Routes.account);
