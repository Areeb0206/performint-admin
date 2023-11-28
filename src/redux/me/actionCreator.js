import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import { logOut } from '../authentication/actionCreator';

const { getMeBegin, getMeSuccess, getMeErr } = actions;

const getMe = (callback) => {
  return async (dispatch) => {
    dispatch(getMeBegin());
    try {
      const response = await DataService.get('/me');
      if (response.data.errors) {
        dispatch(logOut());
        dispatch(getMeErr(response.data.errors));
      } else {
        dispatch(getMeSuccess(response.data.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(logOut());
      dispatch(getMeErr(err));
    }
  };
};

export { getMe };
