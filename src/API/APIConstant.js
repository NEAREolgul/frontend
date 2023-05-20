import { BASE_URL } from '../Utils';

const USER_API = {
  /**
   * @method GET
   * @param { string } user_id
   */
  GET_USERINFO: `${BASE_URL}/user/:user_id`,
};

const ART_API = {
  /**
   * @method POST
   * @param
   */
  CREATE_ART: `${BASE_URL}/art`,
  /**
   * @method GET
   * @param
   */
  GET_ART_LIST: `${BASE_URL}/art`,
  /**
   * @method GET
   * @param { string } equipment_id
   */
  GET_ART: `${BASE_URL}/art/:art_id`,
  /**
   * @method POST
   * @param
   */
  UPDATE_ART: `${BASE_URL}/art`,
};


const PLAYGROUND_API = {
  /**
   * @method GET
   * @param { string } pg_id
   */
  GET_PLAYGROUNDINFO: `${BASE_URL}/playground/:pg_id`,
};

const APIConstant = {
  ...USER_API,
  ...ART_API,
  ...PLAYGROUND_API,
};

export default APIConstant;
