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

export const nonProfitOrg = (formValues) => async (dispatch, getState) => {
  const { _id, fullname } = getState().auth;
  const { website, upi } = formValues;

  const formData = new FormData();
  formData.append('website', website);
  formData.append('upi', upi);
  formData.append('fullname', fullname);
  formData.append('_id', _id);

  const response = await url.post('/user/addupiwebsite', formData);

  console.log(response);
};
