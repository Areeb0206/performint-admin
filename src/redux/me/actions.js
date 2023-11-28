const actions = {
  GET_ME_BEGIN: 'GET_ME_BEGIN',
  GET_ME_SUCCESS: 'GET_ME_SUCCESS',
  GET_ME_ERR: 'GET_ME_ERR',
  SET_PAYMENT_MODAL_VISIBLE: 'SET_PAYMENT_MODAL_VISIBLE',

  getMeBegin: () => {
    return {
      type: actions.GET_ME_BEGIN,
    };
  },

  getMeSuccess: (data) => {
    return {
      type: actions.GET_ME_SUCCESS,
      data,
    };
  },

  getMeErr: (err) => {
    return {
      type: actions.GET_ME_ERR,
      err,
    };
  },

  setPaymentModalVisible: (data) => {
    return {
      type: actions.SET_PAYMENT_MODAL_VISIBLE,
      data,
    };
  },
};

export default actions;
