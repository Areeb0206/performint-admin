import actions from './actions';

const {
  CREATE_COMPLAINT_BEGIN,
  CREATE_COMPLAINT_SUCCESS,
  CREATE_COMPLAINT_ERROR,
  GET_MY_COMPLAINT_LIST_BEGIN,
  GET_MY_COMPLAINT_LIST_SUCCESS,
  GET_MY_COMPLAINT_LIST_ERROR,
  GET_ALL_COMPLAINT_LIST_BEGIN,
  GET_ALL_COMPLAINT_LIST_SUCCESS,
  GET_ALL_COMPLAINT_LIST_ERROR,
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

  allList: [],
  allListTotal: 0,
  allListLoading: false,
  allListError: null,

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
    case CREATE_COMPLAINT_BEGIN:
      return {
        ...state,
        createLoading: true,
      };
    case CREATE_COMPLAINT_SUCCESS:
      return {
        ...state,
        createLoading: false,
      };
    case CREATE_COMPLAINT_ERROR:
      return {
        ...state,
        createError: err,
        createLoading: false,
      };
    case GET_MY_COMPLAINT_LIST_BEGIN:
      return {
        ...state,
        listLoading: true,
      };
    case GET_MY_COMPLAINT_LIST_SUCCESS:
      return {
        ...state,
        list: data.complaints,
        listTotal: data.total,
        listLoading: false,
      };
    case GET_MY_COMPLAINT_LIST_ERROR:
      return {
        ...state,
        listError: err,
        listLoading: false,
      };
    case GET_ALL_COMPLAINT_LIST_BEGIN:
      return {
        ...state,
        allListLoading: true,
      };
    case GET_ALL_COMPLAINT_LIST_SUCCESS:
      return {
        ...state,
        allList: data.complaints,
        allListTotal: data.total,
        allListLoading: false,
      };
    case GET_ALL_COMPLAINT_LIST_ERROR:
      return {
        ...state,
        detailsError: err,
        allListLoading: false,
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
