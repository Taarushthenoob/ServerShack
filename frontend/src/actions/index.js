import url from '../apis/url';
import { SIGN_IN, SIGN_OUT, SEND_USER_INFO } from './types';
// import history from '../history';

export const signIn = (_id, email, fullname, image) => {
  return {
    type: SIGN_IN,
    payload: { _id, email, fullname, image },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const sendUserInfo = () => async (dispatch, getState) => {
  const { _id, email, fullname, image } = getState().auth;

  const formData = new FormData();
  formData.append('_id', _id);
  formData.append('email', email);
  formData.append('fullname', fullname);
  formData.append('image', image);

  await url.post('/user/create', formData);

  dispatch({ type: SEND_USER_INFO });
};
