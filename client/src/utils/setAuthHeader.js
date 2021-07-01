import axios from "axios";
export default (token) => {
  token
    ? (axios.defaults.headers["Authorization"] = `Bearer ${token}`)
    : (axios.defaults.headers["Authorization"] = null);
};
