import axios from "axios";

export default class AuthService {
  apiBase = process.env.REACT_APP_API_BASE;
  constructor() {
    if (AuthService.exists) {
      return AuthService.instance;
    }
  }
  async login(userData) {
    const res = await axios.post(`${this.apiBase}/admin/login`, userData);
    const { token } = res.data;
    localStorage.setItem("token", token);
    return true;
  }
}
