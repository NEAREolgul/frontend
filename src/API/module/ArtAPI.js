import APIConstant from 'API/APIConstant';

const { default: ApiManager } = require('Utils/APIManager');

const $http = new ApiManager();

const ArtAPI = {
  /**
   * 장비 등록
   * --
   * @param {*} artInfo
   * @returns
   */
  createArt: async (artInfo) => {
    try {
      const url = APIConstant.CREATE_EQUIPMENT;
      const result = await $http.multipart(url, artInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  /**
   * 장비 목록 조회
   * --
   * @returns
   */
  getArtList: async () => {
    try {
      const url = APIConstant.GET_EQUIPMENT_LIST;
      const result = await $http.get(url);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  /**
   * 장비 상세 조회
   * --
   * @param {*} art_id
   * @returns
   */
  getArtInfo: async (art_id) => {
    try {
      const url = APIConstant.GET_EQUIPMENT.replace(
        ':art_id',
        art_id
      );
      const result = await $http.get(url);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },

  updateArt: async (artInfo) => {
    try {
      const url = APIConstant.UPDATE_EQUIPMENT;
      const result = await $http.put(url, artInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
};

export default ArtAPI;
