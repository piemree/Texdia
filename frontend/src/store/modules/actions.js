import axios from "axios";
import router from '../../router'
export default {
  async registerNewUser(vuexContext, newUser) {
    try {
       await axios.post(
        "http://localhost:5000/api/users/register",
        newUser
      );
      router.push("/login")
      
    } catch (error) {
      vuexContext.commit("setErrors",error.response.data.errors)
    }
  },
};
