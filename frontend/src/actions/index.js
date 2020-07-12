import url from '../apis/url';
import {
  SIGN_IN,
  SIGN_OUT,
  SEND_USER_INFO,
  SEND_ORG_INFO,
  SEND_QUAL_INFO,
  GET_ALL_BLOGS,
  GET_ALL_ORGS,
} from './types';
import history from '../history';

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
  const { label1, label2 } = formValues;

  const formData = new FormData();
  formData.append('website', label1);
  formData.append('upi', label2);
  formData.append('fullname', fullname);
  formData.append('_id', _id);

  await url.post('/user/addupiwebsite', formData);

  dispatch({ type: SEND_ORG_INFO });
  history.push('/');
};

export const sendQualDetails = (formValues) => async (dispatch, getState) => {
  const { _id } = getState().auth;
  const { label1, label2 } = formValues;

  const formData = new FormData();
  formData.append('qualifications', label1);
  formData.append('govt_id', label2);
  formData.append('_id', _id);

  await url.post('/user/updateprofile', formData);

  dispatch({ type: SEND_QUAL_INFO });
};

export const getAllBlogs = () => async (dispatch) => {
  const response = await url.get('/blog/blogsbydate');

  dispatch({ type: GET_ALL_BLOGS, payload: response.data.blogs });
};

export const getAllOrgs = () => async (dispatch) => {
  const response = await url.get('/user/allorgs');

  dispatch({ type: GET_ALL_ORGS, payload: response.data });
};
