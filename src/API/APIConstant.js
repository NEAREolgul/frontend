import { BASE_URL } from '../utils';

const USERAPI = {
  SIGNUP: `${BASE_URL}/user`,
  SIGNIN: `${BASE_URL}/user/signin`,
  GET_USER_BY_ADDR: `${BASE_URL}/user/addr/:near_addr`,
};

const CONTENTAPI = {
  CREATE_CONTENT: `${BASE_URL}/content`,
  GET_CONTENT_BY_USER: `${BASE_URL}/content/user/:user_id`,
};

const APIConstant = {
  ...USERAPI,
  ...CONTENTAPI,
};

export default APIConstant;
