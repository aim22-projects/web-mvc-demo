const state = {
	username: 'admin',
	password: '12345',
	greet: () => {
		console.log('hello');
	},
};

export const template = `<div>
    <h5>hello</h5>
    <h6>${state.username}</h6>
    <button id='click'>click</button>
</div>`;

export function inject() {
	document.getElementById('click').onclick = state.greet;
}
