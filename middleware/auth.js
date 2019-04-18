export default function(context) {
  console.log("[Middleware] Just Auth");
  if (!context.store.getters['authentication/isAuthenticated']) {
    context.redirect('/login')
  }
}
