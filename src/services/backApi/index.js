import { userApi } from "../api";

const userAPI = () => ({
  async register(email, password, displayName) {
    try {
      const resp = await userApi.post("/user", {
        email,
        password,
        displayName,
      });
      return resp.data;
    } catch (err) {
      console.error("err.response: ", err.response);
      return err.response.data;
    }
  },
  async login(email, password) {
    try {
      const resp = await userApi.post("/login", { email, password });
      return resp.data;
    } catch (err) {
      console.error("err.response: ", err.response);
      return err.response.data;
    }
  },
});

export default userAPI;
