export default {
getErrors(state){
  return state.errors
},
getLoginErrors(state){
  return state.loginErrors
},
getToken(state){
  return state.token
},
getUser(state){
  return state.user
},
getAuthState(state){
  return state.authState
}
};
