import { combineReducers } from 'redux';
import { GET_DATA, INPUT_CHANGE } from '../constants';

// States
const initialAsylumData = [];

const initialFilteredStates = {
  categories: [
    'asylumOffice',
    'citizenship',
    'raceOrEthnicity',
    'caseOutcome',
    'completion',
    'currentDate',
  ],
  count: 0,
  data: [],
};

const initialFormState = {
  searchTerm: '',
  category: '',
};

// Reducers
function asylumReducer(state = initialAsylumData, action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
}

function filteredReducer(state = initialFilteredStates, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function formReducer(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
}

export default combineReducers({ asylumReducer, filteredReducer, formReducer });
