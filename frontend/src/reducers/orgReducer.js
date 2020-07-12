import _ from 'lodash';
import { GET_ALL_ORGS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ORGS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    default:
      return state;
  }
};
