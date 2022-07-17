import {
  SET_DATE_FILTER_FORMAT,
  SET_ASYLUM_OFFICE_FILTER,
  SET_REGION_FILTER,
} from '../constants';

const initialState = {
  isFiscalYear: false,
  asylumOffice: [],
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
    case SET_REGION_FILTER: {
      return {
        ...state,
        region: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
