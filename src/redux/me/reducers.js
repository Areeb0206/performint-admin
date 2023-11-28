import actions from './actions';

const { GET_ME_BEGIN, GET_ME_SUCCESS, GET_ME_ERR, SET_PAYMENT_MODAL_VISIBLE } = actions;

const initState = {
  data: {},
  loading: false,
  error: null,
  paymentModalVisible: false,
};

/**
 *
 * @todo impure state mutation/explaination
 */
const meReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case GET_ME_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_ME_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case GET_ME_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case SET_PAYMENT_MODAL_VISIBLE:
      return {
        ...state,
        paymentModalVisible: data,
      };
    default:
      return state;
  }
};
export default meReducer;
