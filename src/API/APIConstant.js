import { BASE_URL } from '../Utils';

const AUTH_API = {
  /**
   * @method POST
   * @param
   */
  CREATE_SIGNUP: `${BASE_URL}/auth/send/signup`,
  /**
   * @method POST
   * @param
   */
  CREATE_SIGNIN: `${BASE_URL}/auth/send/signin`,
  /**
   * @method GET
   * @param {string}signup_id
   */
  GET_SIGNUP: `${BASE_URL}/auth/u/:signup_id`,
  /**
   * @method GET
   * @param {string} signin_id
   */
  GET_SIGNIN: `${BASE_URL}/auth/i/:signin_id`,
  /**
   * @method POST
   * @param
   */
  REQUEST_SIGNUP: `${BASE_URL}/auth/signup`,
  /**
   * @method POST
   * @param
   */
  REQUEST_SIGNIN: `${BASE_URL}/auth/signin`,
  /**
   * @method POST
   * @param
   */
};

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

const APIConstant = {
  ...AUTH_API,
  ...USER_API,
  ...ART_API,
};

export default APIConstant;
