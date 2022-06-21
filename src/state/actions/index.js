// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file
import axios from 'axios';

// Action Types
export const SET_DATA = 'SET_DATA';
export const SET_CURRENT_CASE = 'SET_CURRENT_CASE';

// Action Creators
export function fetchAllData() {
  return function(dispatch) {
    axios
      .get(/*/cases*/)
      .then(res => {
        dispatch({ type: SET_DATA, payload: res.data });
      })
      .catch(err => console.log(err));
  };
}
export function fetchCaseInfo() {
  return function(dispatch) {
    axios
      .get(/*/cases/{caseId}*/)
      .then(res => {
        dispatch({ type: SET_CURRENT_CASE, payload: res.data });
      })
      .catch(err => console.log(err));
  };
}
