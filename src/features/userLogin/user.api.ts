import axios from 'axios';
import { LoginCredential, LoginSuccessResponse } from './models';

export default class UserApi {
  private static endpoint = 'http://sandbox.potalava.com:9095/api/Auth/authenticate';

  static login(userLogin: LoginCredential) {
    return axios.post<LoginSuccessResponse>(this.endpoint, userLogin).then((res) => res.data);
  }
}
