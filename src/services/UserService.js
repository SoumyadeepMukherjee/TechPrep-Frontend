import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/user';

class UserService {
  loginUser(email, password) {
    const credentials = { email, password };
    return axios.post(`${USER_API_BASE_URL}/login`, credentials);
  }
}

export default new UserService();
