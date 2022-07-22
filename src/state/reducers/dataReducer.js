import {
  FILTER_SEARCH,
  RESET_DATA,
  GET_DEFAULT_COMPARISONS,
  GET_FILTERED_DATA,
  GET_MOCK_FILTERED_DATA,
} from '../actionTypes';

const initialState = {
  cases: [],
  comparisonData: {
    //This will hold keys and values for default displays on the site landing page, similar to TRAC
  },
  filterCount: 0,
  filteredCases: [],
};
function dataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DEFAULT_COMPARISONS: {
      //When memoized comparison data is fetched from the server to display on the site landing page
      return {
        ...state,
        comparisonData: action.payload,
      };
    }
    //When a filter querystring is passed to the server and case data is returned
    case GET_FILTERED_DATA: {
      return {
        ...state,
        cases: action.payload,
      };
    }
    case GET_MOCK_FILTERED_DATA: {
      return {
        ...state,
        cases: action.payload,
      };
    }
    case FILTER_SEARCH: {
      return {
        ...state,
        filteredCases: action.payload,
        filterCount: state.count + 1,
      };
    }
    case RESET_DATA: {
      return { ...state, filterCount: 0, filteredCases: [] };
    }
    default: {
      return state;
    }
  }
}

export default dataReducer;
