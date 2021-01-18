export default function (context) {
	// console.log('login')
	if (context.store.getters.getloggedIn === false) {
		console.log('redirected by cool middleware')
		context.redirect('/')
	}
}
