import { combineReducers } from 'redux';
import { GET_DATA, FILTER_SEARCH } from '../constants';

// States
const initialAsylumData = [];

const initialFilteredStates = {
  count: 0,
  data: [],
};

// Reducers
function asylumReducer(state = initialAsylumData, action) {
  switch (action.type) {
    case GET_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

function filteredReducer(state = initialFilteredStates, action) {
  switch (action.type) {
    case FILTER_SEARCH: {
      return { ...state, data: action.payload, count: state.count + 1 };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({ asylumReducer, filteredReducer });
