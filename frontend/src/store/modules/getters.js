export default {
getErrors(state){
  return state.errors
},
getLoginErrors(state){
  return state.loginErrors
},
getUser(state){
  return state.user
},
getAuthState(state){
  return state.authState
}
};
