//This reducer handles fetching and storing
//summary data used for visualizations
import { SET_HEAT_MAP_YEAR, GET_COUNTRY_YEAR_SUMMARY } from '../actionTypes';

const initialState = {
  heatMapYear: false,
  countryYearSummary: {},
};

const vizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEAT_MAP_YEAR: {
      return {
        ...state,
        heatMapYear: action.payload,
      };
    }
    case GET_COUNTRY_YEAR_SUMMARY: {
      return {
        ...state,
        countryYearSummary: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default vizReducer;
