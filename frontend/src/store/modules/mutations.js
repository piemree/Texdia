export default {
  setErrors(state,errors){
    state.errors=errors
  },
  setLoginErrors(state,loginErrors){
    state.loginErrors=loginErrors
  },
  setToken(state,token){
    state.token=token
  },
  setUser(state,user){
    state.user=user
  },
  isAuth(state,isAuth){
    state.authState=isAuth
  }
};
