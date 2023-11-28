import actions from './actions';
import { DataService, addQueryParamsToUrl } from '../../config/dataService/dataService';

const {
  createPartnerBegin,
  createPartnerSuccess,
  createPartnerError,
  getListBegin,
  getListSuccess,
  getListError,
  getPartnerListBegin,
  getPartnerListSuccess,
  getPartnerListError,
  // getReportBegin,
  // getReportSuccess,
  // getReportError,
  // clearReportDetails,
} = actions;

const createPartner = (data, callback, onError) => {
  return async (dispatch) => {
    dispatch(createPartnerBegin());
    try {
      const response = await DataService.post('/collection/partners', data);
      if (response.data.errors) {
        dispatch(createPartnerError(response.data.errors));
        if (onError) onError(response.data.errors);
      } else {
        dispatch(createPartnerSuccess(response.data.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(createPartnerError(err));
      if (onError) onError(err);
    }
  };
};

const getCollectionComplaintsList = (data, callback) => {
  return async (dispatch) => {
    dispatch(getListBegin());
    try {
      let url = '/collection/complaints';
      url = addQueryParamsToUrl(url, data?.query);
      const response = await DataService.get(url);
      if (response.data.errors) {
        dispatch(getListError(response.data.errors));
      } else {
        dispatch(getListSuccess(response.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(getListError(err));
    }
  };
};

const getCollectionPartnerComplaintsList = (data, callback) => {
  return async (dispatch) => {
    dispatch(getListBegin());
    try {
      let url = '/collection/partner/complaints';
      url = addQueryParamsToUrl(url, data?.query);
      const response = await DataService.get(url);
      if (response.data.errors) {
        dispatch(getListError(response.data.errors));
      } else {
        dispatch(getListSuccess(response.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(getListError(err));
    }
  };
};

const getCollectionPartnersList = (data, callback) => {
  return async (dispatch) => {
    dispatch(getPartnerListBegin());
    try {
      let url = '/collection/partners';
      url = addQueryParamsToUrl(url, data?.pathParams);
      const response = await DataService.get(url);
      if (response.data.errors) {
        dispatch(getPartnerListError(response.data.errors));
      } else {
        dispatch(getPartnerListSuccess(response.data));
        if (callback) callback();
      }
    } catch (err) {
      dispatch(getPartnerListError(err));
    }
  };
};

// const getSingleComplaint = (data, callback) => {
//   return async (dispatch) => {
//     dispatch(getReportBegin());
//     try {
//       const response = await DataService.get(`/complaint/${data.id}`);
//       if (response.data.errors) {
//         dispatch(getReportError(response.data.errors));
//       } else {
//         dispatch(getReportSuccess(response.data.data));
//         if (callback) callback();
//       }
//     } catch (err) {
//       dispatch(getReportError(err));
//     }
//   };
// };

// const clearComplaint = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(clearReportDetails());
//     } catch (err) {
//       dispatch(getReportError(err));
//     }
//   };
// };

// const getComplaintList = (my, callback) => {
//   return async (dispatch) => {
//     dispatch(getListBegin());
//     try {
//       const response = await DataService.get(`/complaint`);
//       if (response.data.errors) {
//         dispatch(getListError(response.data.errors));
//       } else {
//         dispatch(getListSuccess(response.data.data));
//         if (callback) callback();
//       }
//     } catch (err) {
//       dispatch(getListError(err));
//     }
//   };
// };

// const getDispatchGuardReport = (data, callback) => {
//   return async (dispatch) => {
//     dispatch(getReportBegin());
//     try {
//       const response = await DataService.get(`/complaint/dispatchguard/${data.id}`);
//       if (response.data.errors) {
//         dispatch(getReportError(response.data.errors));
//       } else {
//         dispatch(getReportSuccess(response.data.data));
//         if (callback) callback();
//       }
//     } catch (err) {
//       dispatch(getReportError(err));
//     }
//   };
// };

// const clearDispatchGuardReport = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(clearReportDetails());
//     } catch (err) {
//       dispatch(getReportError(err));
//     }
//   };
// };

export {
  createPartner,
  getCollectionComplaintsList,
  getCollectionPartnerComplaintsList,
  getCollectionPartnersList,
  // getSingleComplaint,
  // clearComplaint,
  // getComplaintList,
  // getAllComplaintList,
  // getDispatchGuardReport,
  // clearDispatchGuardReport,
};
