import actions from './actions';

const {
  CREATE_PARTNER_BEGIN,
  CREATE_PARTNER_SUCCESS,
  CREATE_PARTNER_ERROR,
  GET_COLLECTION_COMPLAINT_LIST_BEGIN,
  GET_COLLECTION_COMPLAINT_LIST_SUCCESS,
  GET_COLLECTION_COMPLAINT_LIST_ERROR,
  GET_PARTNER_LIST_BEGIN,
  GET_PARTNER_LIST_SUCCESS,
  GET_PARTNER_LIST_ERROR,
  GET_REPORT_BEGIN,
  GET_REPORT_SUCCESS,
  GET_REPORT_ERROR,
  CLEAR_REPORT_DETAILS,
} = actions;

const initState = {
  createLoading: false,
  createError: null,

  list: [],
  listTotal: 0,
  listLoading: false,
  listError: null,

  partnerList: [],
  partnerListTotal: 0,
  partnerListLoading: false,
  partnerListError: null,

  reportDetails: null,
  reportDetailsLoading: false,
  reportDetailsError: null,
};

/**
 *
 * @todo impure state mutation/explanation
 */
const complaintReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CREATE_PARTNER_BEGIN:
      return {
        ...state,
        createLoading: true,
      };
    case CREATE_PARTNER_SUCCESS:
      return {
        ...state,
        createLoading: false,
      };
    case CREATE_PARTNER_ERROR:
      return {
        ...state,
        createError: err,
        createLoading: false,
      };
    case GET_COLLECTION_COMPLAINT_LIST_BEGIN:
      return {
        ...state,
        listLoading: true,
      };
    case GET_COLLECTION_COMPLAINT_LIST_SUCCESS:
      return {
        ...state,
        list: data.complaints,
        listTotal: data.total,
        listLoading: false,
      };
    case GET_COLLECTION_COMPLAINT_LIST_ERROR:
      return {
        ...state,
        listError: err,
        listLoading: false,
      };
    case GET_PARTNER_LIST_BEGIN:
      return {
        ...state,
        partnerListLoading: true,
      };
    case GET_PARTNER_LIST_SUCCESS:
      return {
        ...state,
        partnerList: data.partners,
        partnerListTotal: data.total,
        partnerListLoading: false,
      };
    case GET_PARTNER_LIST_ERROR:
      return {
        ...state,
        detailsError: err,
        partnerListLoading: false,
      };
    case GET_REPORT_BEGIN:
      return {
        ...state,
        reportDetailsLoading: true,
      };
    case GET_REPORT_SUCCESS:
      return {
        ...state,
        reportDetails: data,
        reportDetailsLoading: false,
      };
    case GET_REPORT_ERROR:
      return {
        ...state,
        reportDetailsError: err,
        reportDetailsLoading: false,
      };
    case CLEAR_REPORT_DETAILS:
      return {
        ...state,
        reportDetails: null,
        reportDetailsLoading: false,
        reportDetailsError: null,
      };
    default:
      return state;
  }
};
export default complaintReducer;
