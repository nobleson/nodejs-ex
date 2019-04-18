import Cookie from 'js-cookie'

export const state = () => ({
  user: null,
  token: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setToken(state, tok) {
    state.token = tok;
  }

}

export const actions= {
  authenticateUser(vuexContext,userData) {
    let myUrl;
    let user = {
      email: userData.email,
      password: userData.password,
      returnSecureToken: true
    }
    if(userData.isSignIn) {
      myUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCl6IxLV7itYUWRNZs9SUKYRT6w70_h3mc';
    }else {
      myUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCl6IxLV7itYUWRNZs9SUKYRT6w70_h3mc';
    }

    return this.$axios.$post(myUrl,
      user ).then(e => {
      vuexContext.commit('setUser', {email: e.email})
      let token = e.idToken;
      vuexContext.commit('setToken', token);
      Cookie.set('jwt', token);
      localStorage.setItem('user-token', token);
    });

  },


  signOut(vuexContext) {
    localStorage.removeItem('user-token');
    Cookie.remove('jwt')
    vuexContext.commit('setToken', null);
    this.$router.push('/auth')
  },
  initAuth(vuexContext, req) {
    let token;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
    } else {
      token = localStorage.getItem("user-token");
    }
    vuexContext.commit("setToken", token);
  }
}

export const getters = {
  getUser: state => state.user,
  getToken: state => state.token,
  isAuthenticated: state => state.token !== null
}
