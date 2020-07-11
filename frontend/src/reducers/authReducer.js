import { SIGN_IN, SIGN_OUT, SEND_USER_INFO } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  _id: null,
  email: null,
  fullname: null,
  image: null,
  org: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        _id: action.payload._id,
        email: action.payload.email,
        fullname: action.payload.fullname,
        image: action.payload.image,
      };
    case SEND_USER_INFO:
      return {
        ...state,
        isSignedIn: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        _id: null,
      };
    default:
      return state;
  }
};
