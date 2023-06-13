import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/user';

class UserService {

  loginUser(username, password) {
    const credentials = { username, password };
    return axios.post(`${USER_API_BASE_URL}/login`, credentials);
  }

  fetchUser(userName)
  {
    return axios.get(USER_API_BASE_URL+"/"+userName);
  }
}

export default new UserService();
