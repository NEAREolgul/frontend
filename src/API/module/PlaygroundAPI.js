import { APIManager } from 'Utils';
import APIConstant from '../APIConstant';
const $http = new APIManager();

const PlaygroundApi = {
  /**
   * 유저 상세정보 조회
   * --
   * @param {string} pg_id
   * @returns
   */
  getUserInfo: async (pg_id) => {
    try {
      const url = APIConstant.GET_PLAYGROUNDINFO.replace(':pg_id', pg_id);
      const result = await $http.get(url);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      throw e;
    }
  },
};

export default PlaygroundApi;
