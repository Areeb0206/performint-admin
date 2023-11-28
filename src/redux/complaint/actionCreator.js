import actions from './actions';
import { DataService, addQueryParamsToUrl } from '../../config/dataService/dataService';

const {
  createComplaintBegin,
  createComplaintSuccess,
  createComplaintError,
  getListBegin,
  getListSuccess,
  getListError,
  getAllListBegin,
  getAllListSuccess,
  getAllListError,
  getReportBegin,
  getReportSuccess,
  getReportError,
  clearReportDetails,
} = actions;

const createComplaint = (data, callback, onError) => {
  return async (dispatch) => {
    dispatch(createComplaintBegin());
    try {
      const response = await DataService.post('/complaint', data);
      if (response.data.errors) {
        dispatch(createComplaintError(response.data.errors));
        if (onError) onError(response.data.errors);
      } else {
        dispatch(createComplaintSuccess(response.data.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(createComplaintError(err));
      if (onError) onError(err);
    }
  };
};

const getMyComplaintList = (data, callback) => {
  return async (dispatch) => {
    dispatch(getListBegin());
    try {
      let url = '/complaint/my';
      url = addQueryParamsToUrl(url, data?.pathParams);
      const response = await DataService.get(url);
      if (response.data.errors) {
        dispatch(getListError(response.data.errors));
      } else {
        dispatch(getListSuccess(response.data.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(getListError(err));
    }
  };
};

const getSingleComplaint = (data, callback) => {
  return async (dispatch) => {
    dispatch(getReportBegin());
    try {
      const response = await DataService.get(`/complaint/${data.id}`);
      if (response.data.errors) {
        dispatch(getReportError(response.data.errors));
      } else {
        dispatch(getReportSuccess(response.data.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(getReportError(err));
    }
  };
};

const clearComplaint = () => {
  return async (dispatch) => {
    try {
      dispatch(clearReportDetails());
    } catch (err) {
      dispatch(getReportError(err));
    }
  };
};

const getAllReportList = (data, callback) => {
  return async (dispatch) => {
    dispatch(getAllListBegin());
    try {
      let url = '/complaint/dispatchguard/all';
      url = addQueryParamsToUrl(url, data?.pathParams);
      const response = await DataService.get(url);
      if (response.data.errors) {
        dispatch(getAllListError(response.data.errors));
      } else {
        dispatch(getAllListSuccess(response.data.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(getAllListError(err));
    }
  };
};

const getAllComplaintList = (data, callback) => {
  return async (dispatch) => {
    dispatch(getAllListBegin());
    try {
      let url = '/complaint/all';
      url = addQueryParamsToUrl(url, data?.pathParams);
      const response = await DataService.get(url);
      if (response.data.errors) {
        dispatch(getAllListError(response.data.errors));
      } else {
        dispatch(getAllListSuccess(response.data.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(getAllListError(err));
    }
  };
};

const getComplaintList = (my, callback) => {
  return async (dispatch) => {
    dispatch(getListBegin());
    try {
      const response = await DataService.get(`/complaint`);
      if (response.data.errors) {
        dispatch(getListError(response.data.errors));
      } else {
        dispatch(getListSuccess(response.data.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(getListError(err));
    }
  };
};

const getDispatchGuardReport = (data, callback) => {
  return async (dispatch) => {
    dispatch(getReportBegin());
    try {
      const response = await DataService.get(`/complaint/dispatchguard/${data.id}`);
      if (response.data.errors) {
        dispatch(getReportError(response.data.errors));
      } else {
        dispatch(getReportSuccess(response.data.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(getReportError(err));
    }
  };
};

const clearDispatchGuardReport = () => {
  return async (dispatch) => {
    try {
      dispatch(clearReportDetails());
    } catch (err) {
      dispatch(getReportError(err));
    }
  };
};

export {
  createComplaint,
  getComplaintList,
  getMyComplaintList,
  getAllReportList,
  getAllComplaintList,
  getDispatchGuardReport,
  clearDispatchGuardReport,
  getSingleComplaint,
  clearComplaint,
};
