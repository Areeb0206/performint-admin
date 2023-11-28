const actions = {
  CREATE_PARTNER_BEGIN: 'CREATE_PARTNER_BEGIN',
  CREATE_PARTNER_SUCCESS: 'CREATE_PARTNER_SUCCESS',
  CREATE_PARTNER_ERROR: 'CREATE_PARTNER_ERROR',

  GET_COLLECTION_COMPLAINT_LIST_BEGIN: 'GET_COLLECTION_COMPLAINT_LIST_BEGIN',
  GET_COLLECTION_COMPLAINT_LIST_SUCCESS: 'GET_COLLECTION_COMPLAINT_LIST_SUCCESS',
  GET_COLLECTION_COMPLAINT_LIST_ERROR: 'GET_COLLECTION_COMPLAINT_LIST_ERROR',

  GET_PARTNER_LIST_BEGIN: 'GET_PARTNER_LIST_BEGIN',
  GET_PARTNER_LIST_SUCCESS: 'GET_PARTNER_LIST_SUCCESS',
  GET_PARTNER_LIST_ERROR: 'GET_PARTNER_LIST_ERROR',

  GET_REPORT_BEGIN: 'GET_REPORT_BEGIN',
  GET_REPORT_SUCCESS: 'GET_REPORT_SUCCESS',
  GET_REPORT_ERROR: 'GET_REPORT_ERROR',
  CLEAR_REPORT_DETAILS: 'CLEAR_REPORT_DETAILS',

  createPartnerBegin: () => {
    return {
      type: actions.CREATE_PARTNER_BEGIN,
    };
  },

  createPartnerSuccess: (data) => {
    return {
      type: actions.CREATE_PARTNER_SUCCESS,
      data,
    };
  },

  createPartnerError: (err) => {
    return {
      type: actions.CREATE_PARTNER_ERROR,
      err,
    };
  },

  getListBegin: () => {
    return {
      type: actions.GET_COLLECTION_COMPLAINT_LIST_BEGIN,
    };
  },

  getListSuccess: (data) => {
    return {
      type: actions.GET_COLLECTION_COMPLAINT_LIST_SUCCESS,
      data,
    };
  },

  getListError: (err) => {
    return {
      type: actions.GET_COLLECTION_COMPLAINT_LIST_ERROR,
      err,
    };
  },

  getPartnerListBegin: () => {
    return {
      type: actions.GET_PARTNER_LIST_BEGIN,
    };
  },

  getPartnerListSuccess: (data) => {
    return {
      type: actions.GET_PARTNER_LIST_SUCCESS,
      data,
    };
  },

  getPartnerListError: (err) => {
    return {
      type: actions.GET_PARTNER_LIST_ERROR,
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
