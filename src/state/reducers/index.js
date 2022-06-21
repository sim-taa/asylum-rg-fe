// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.
import { combineReducers } from 'redux';
import { SET_DATA, SET_CURRENT_CASE } from '../actions';

// SET_DATA should return all cases in format:
// {asylum_office, citizenship, raceOrEthnicity, caseOutcome, completionFrom, completionTo, currentDate, isFiscalYear}
// SET_CURRENT_CASE should return current case in format:
// {caseId, asylumOffice, ciizenship, raceOrEthnicity, caseOutcome, completion, currentDate}
const dataState = {
  asylum_office: [],
  citizenship: [],
  raceOrEthnicity: [],
  caseOutcome: [],
  completionFrom: [],
  completionTo: [],
  currentDate: [],
  isFiscalYear: [],
  currentCase: {
    caseId: null,
    asylumOffice: '',
    ciizenship: '',
    raceOrEthnicity: '',
    caseOutcome: '',
    completion: '',
    currentDate: '',
  },
};

function data(state = dataState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        asylum_office: action.payload.asylum_office,
        citizenship: action.payload.citizenship,
        raceOrEthnicity: action.payload.raceOrEthnicity,
        caseOutcome: action.payload.caseOutcome,
        completionFrom: action.payload.completion.completionFrom,
        completionTo: action.payload.completion.completionTo,
        currentDate: action.payload.currentDate,
        isFiscalYear: action.payload.isFiscalYear,
      };
    case SET_CURRENT_CASE:
      return {
        ...state.currentCase,
        caseId: action.payload.caseId,
        asylumOffice: action.payload.asylum_office,
        ciizenship: action.payload.citizenship,
        raceOrEthnicity: action.payload.raceOrEthnicity,
        caseOutcome: action.payload.caseOutcome,
        completion: action.payload.completion,
        currentDate: action.payload.currentDate,
      };
  }
}

export default combineReducers({ data });
