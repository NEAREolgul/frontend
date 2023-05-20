import { APIManager } from '../../utils/';
import APIConstant from '../APIConstant';
const $http = new APIManager();

const UserAPI = {
  /**
   * 회원가입
   * --
   * @param { Object } userInfo
   * @returns
   */
  signUp: async (userInfo) => {
    try {
      const url = APIConstant.SIGNUP;
      const result = await $http.post(url, userInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      return false;
    }
  },
  /**
   * 로그인
   * --
   * @param { Object } loginInfo
   * @returns
   */
  signIn: async (loginInfo) => {
    try {
      const url = APIConstant.SIGNIN;
      const result = await $http.post(url, loginInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      return false;
    }
  },
  getUserByAddr: async (near_addr) => {
    try {
      const url = APIConstant.GET_USER_BY_ADDR.replace(':near_addr', near_addr);
      const result = await $http.get(url);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      return false;
    }
  },
};

export default UserAPI;
