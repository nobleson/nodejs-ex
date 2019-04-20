import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _ede6062a = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _a7a641c6 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _5dcd1d54 = () => interopDefault(import('..\\pages\\cslmis\\Artisans.vue' /* webpackChunkName: "pages_cslmis_Artisans" */))
const _97bf1b1e = () => interopDefault(import('..\\pages\\cslmis\\Centers.vue' /* webpackChunkName: "pages_cslmis_Centers" */))
const _70af244e = () => interopDefault(import('..\\pages\\cslmis\\Companies.vue' /* webpackChunkName: "pages_cslmis_Companies" */))
const _093bf8a7 = () => interopDefault(import('..\\pages\\cslmis\\dashboard.vue' /* webpackChunkName: "pages_cslmis_dashboard" */))
const _008be1a8 = () => interopDefault(import('..\\pages\\cslmis\\Trades.vue' /* webpackChunkName: "pages_cslmis_Trades" */))
const _3c39bff2 = () => interopDefault(import('..\\pages\\pages\\Page404.vue' /* webpackChunkName: "pages_pages_Page404" */))
const _1690fd44 = () => interopDefault(import('..\\pages\\pages\\Page500.vue' /* webpackChunkName: "pages_pages_Page500" */))
const _234268a0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/login",
      component: _ede6062a,
      name: "login"
    }, {
      path: "/register",
      component: _a7a641c6,
      name: "register"
    }, {
      path: "/cslmis/Artisans",
      component: _5dcd1d54,
      name: "cslmis-Artisans"
    }, {
      path: "/cslmis/Centers",
      component: _97bf1b1e,
      name: "cslmis-Centers"
    }, {
      path: "/cslmis/Companies",
      component: _70af244e,
      name: "cslmis-Companies"
    }, {
      path: "/cslmis/dashboard",
      component: _093bf8a7,
      name: "cslmis-dashboard"
    }, {
      path: "/cslmis/Trades",
      component: _008be1a8,
      name: "cslmis-Trades"
    }, {
      path: "/pages/Page404",
      component: _3c39bff2,
      name: "pages-Page404"
    }, {
      path: "/pages/Page500",
      component: _1690fd44,
      name: "pages-Page500"
    }, {
      path: "/",
      component: _234268a0,
      name: "index"
    }],

    fallback: false
  })
}
