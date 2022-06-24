// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.
import { combineReducers } from 'redux';
import { SET_DATA } from '../actions';

// SET_DATA should return all cases in format:
// {asylum_office, citizenship, raceOrEthnicity, caseOutcome, completionFrom, completionTo, currentDate, isFiscalYear}
// SET_CURRENT_CASE should return current case in format:
// {caseId, asylumOffice, ciizenship, raceOrEthnicity, caseOutcome, completion, currentDate}
const dataState = {
  id: [],
  completion: [],
  asylumOffice: [],
  citizenship: [],
  currentDate: [],
  caseOutcome: [],
  raceOrEthnicity: [],
};

function data(state = dataState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        id: action.payload.id,
        completion: action.payload.completion,
        asylumOffice: action.payload.asylumOffice,
        citizenship: action.payload.citizenship,
        currentDate: action.payload.currentDate,
        caseOutcome: action.payload.caseOutcome,
        raceOrEthnicity: action.payload.raceOrEthnicity,
      };
    default:
      return state;
  }
}

export default combineReducers({ data });
