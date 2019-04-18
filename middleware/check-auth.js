export default function(context) {
  console.log('check auth before')
  context.store.dispatch('authentication/initAuth', context.req);
  console.log("[Middleware] Check Auth");
}
