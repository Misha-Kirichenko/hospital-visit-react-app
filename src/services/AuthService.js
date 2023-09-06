import axios from "axios";

export default class AuthService {
  apiBase = process.env.REACT_APP_API_BASE;
  constructor() {
    if (AuthService.exists) {
      return AuthService.instance;
    }
  }
  async login(userData) {
    const { email, password, remember } = userData;
    const res = await axios.post(`${this.apiBase}/admin/login`, {
      email,
      password,
    });
    const { token } = res.data;
    if (remember) localStorage.setItem("token", token);
    else sessionStorage.setItem("token", token);
    return true;
  }
}
