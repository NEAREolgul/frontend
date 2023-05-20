import { APIManager } from '../../utils/';
import APIConstant from '../APIConstant';
const $http = new APIManager();

const ContentAPI = {
  createContent: async (contentInfo) => {
    try {
      const url = APIConstant.CREATE_CONTENT;
      const result = await $http.post(url, contentInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      return false;
    }
  },
  getContentByUser: async (user_id) => {
    try {
      const url = APIConstant.GET_CONTENT_BY_USER.replace(':user_id', user_id);
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

export default ContentAPI;
