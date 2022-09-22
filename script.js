// class Router {
//     #root = null;
//     #routes = [];
//     constructor(query) {
//         this.#root = document.querySelector(query);
//     }
//     get routes() {
//         return this.#routes;
//     }
//     set routes(values) {
//         this.#routes = values;
//     }
//     async navigate(path) {
//         const _templatePath = this.routes[path];
//         const response = await fetch(_templatePath);
//         const html = await response.text();
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(html, 'text/html');
//         document.body.innerHTML = doc;
//     }
// }


// const Routes = {
//     inbox: "#inbox",
//     saved: "#saved",
//     settings: "#settings",
//     account: "#account",
// }
// const router = new Router('#page_view');
// router.routes = {
//     [Routes.inbox]: "/inbox/index.html",
//     [Routes.saved]: "/saved/index.html",
//     [Routes.settings]: "/settings/index.html",
//     [Routes.account]: "/account/index.html",
// };


// const PageView = document.getElementById('page_view');
// const InboxLink = document.links['inbox_link'];
// const SavedLink = document.links['saved_link'];
// const SettingsLink = document.links['settings_link'];
// const AccountLink = document.links['account_link'];

// InboxLink.onclick = () =>  router.navigate(Routes.inbox);
// SavedLink.onclick = () =>  router.navigate(Routes.saved);
// SettingsLink.onclick = () =>  router.navigate(Routes.settings);
// AccountLink.onclick = () =>  router.navigate(Routes.account);
