import { SET_DATE_FILTER_FORMAT, SET_ASYLUM_OFFICE_FILTER } from '../constants';

const initialState = {
  isFiscalYear: false,
  asylumOffice: ['zny'],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE_FILTER_FORMAT: {
      return {
        ...state,
        isFiscalYear: action.payload,
      };
    }
    case SET_ASYLUM_OFFICE_FILTER: {
      return {
        ...state,
        asylumOffice: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
