import {
  SET_DATE_FILTER_FORMAT,
  SET_ASYLUM_OFFICE_FILTER,
  SET_CONTINENT_FILTER,
} from '../constants';
import { regionsFilterList } from '../../data/filterConstants';

const initialState = {
  isFiscalYear: false,
  asylumOffice: [],
  region: [],
  continents: [],
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
    case SET_CONTINENT_FILTER: {
      return {
        ...state,
        continents: action.payload,
      };
    }
    // case BUILD_QUERY_STRING: {
    //   return {
    //     //Using regionsFilterList data, create a coordinating list of citizenship to add to api request
    //     //Build out API query parameter string
    //   };
    // }
    default: {
      return state;
    }
  }
};

export default filterReducer;
