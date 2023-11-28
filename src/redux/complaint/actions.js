const actions = {
  CREATE_COMPLAINT_BEGIN: 'CREATE_COMPLAINT_BEGIN',
  CREATE_COMPLAINT_SUCCESS: 'CREATE_COMPLAINT_SUCCESS',
  CREATE_COMPLAINT_ERROR: 'CREATE_COMPLAINT_ERROR',

  GET_MY_COMPLAINT_LIST_BEGIN: 'GET_MY_COMPLAINT_LIST_BEGIN',
  GET_MY_COMPLAINT_LIST_SUCCESS: 'GET_MY_COMPLAINT_LIST_SUCCESS',
  GET_MY_COMPLAINT_LIST_ERROR: 'GET_MY_COMPLAINT_LIST_ERROR',

  GET_ALL_COMPLAINT_LIST_BEGIN: 'GET_ALL_COMPLAINT_LIST_BEGIN',
  GET_ALL_COMPLAINT_LIST_SUCCESS: 'GET_ALL_COMPLAINT_LIST_SUCCESS',
  GET_ALL_COMPLAINT_LIST_ERROR: 'GET_ALL_COMPLAINT_LIST_ERROR',

  GET_REPORT_BEGIN: 'GET_REPORT_BEGIN',
  GET_REPORT_SUCCESS: 'GET_REPORT_SUCCESS',
  GET_REPORT_ERROR: 'GET_REPORT_ERROR',
  CLEAR_REPORT_DETAILS: 'CLEAR_REPORT_DETAILS',

  createComplaintBegin: () => {
    return {
      type: actions.CREATE_COMPLAINT_BEGIN,
    };
  },

  createComplaintSuccess: (data) => {
    return {
      type: actions.CREATE_COMPLAINT_SUCCESS,
      data,
    };
  },

  createComplaintError: (err) => {
    return {
      type: actions.CREATE_COMPLAINT_ERROR,
      err,
    };
  },

  getListBegin: () => {
    return {
      type: actions.GET_MY_COMPLAINT_LIST_BEGIN,
    };
  },

  getListSuccess: (data) => {
    return {
      type: actions.GET_MY_COMPLAINT_LIST_SUCCESS,
      data,
    };
  },

  getListError: (err) => {
    return {
      type: actions.GET_MY_COMPLAINT_LIST_ERROR,
      err,
    };
  },

  getAllListBegin: () => {
    return {
      type: actions.GET_ALL_COMPLAINT_LIST_BEGIN,
    };
  },

  getAllListSuccess: (data) => {
    return {
      type: actions.GET_ALL_COMPLAINT_LIST_SUCCESS,
      data,
    };
  },

  getAllListError: (err) => {
    return {
      type: actions.GET_ALL_COMPLAINT_LIST_ERROR,
      err,
    };
  },

  getReportBegin: () => {
    return {
      type: actions.GET_REPORT_BEGIN,
    };
  },

  getReportSuccess: (data) => {
    return {
      type: actions.GET_REPORT_SUCCESS,
      data,
    };
  },

  getReportError: (err) => {
    return {
      type: actions.GET_REPORT_ERROR,
      err,
    };
  },

  clearReportDetails: (err) => {
    return {
      type: actions.CLEAR_REPORT_DETAILS,
      err,
    };
  },
};

export default actions;
