import url from '../apis/url';
import { SIGN_IN, SIGN_OUT, SEND_USER_DETAILS } from './types';
import history from '../history';

export const signIn = (_id) => {
  console.log(_id);
  return {
    type: SIGN_IN,
    payload: _id,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const sendUserDetails = (_id, email, fullname, image) => {

}