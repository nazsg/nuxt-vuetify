export default function(context) {
  // console.log('login')
  // if (!localStorage.getItem('token')) {
  // console.log(context.app)
  if (context.store.getters.getloggedIn === false) {
    console.log('redirected by cool middleware')
    context.redirect('/')
  }
}
