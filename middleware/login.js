export default function(context) {
  if (typeof window !== 'undefined') {
    // console.log('on client')
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') == null) {
      console.log('redirected by cool middleware')
      context.redirect('/')
    }
  }
}
