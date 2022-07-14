import { SET_DATE_FILTER_FORMAT } from '../constants';

const initialState = {
  isFiscalYear: false,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE_FILTER_FORMAT: {
      return {
        ...state,
        isFiscalYear: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
