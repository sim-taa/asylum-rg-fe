// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file

// import axios from 'axios';
import {
  GET_DATA,
  SET_DATE_FILTER_FORMAT,
  SET_ASYLUM_OFFICE_FILTER,
  SET_CONTINENT_FILTER,
  FILTER_SEARCH,
  RESET_DATA,
} from '../constants';

// Action Creators
// export function fetchAllData() {
//   return function(dispatch) {
//     axios
//       .get(/*/cases*/)
//       .then(res => {
//         dispatch({ type: GET_DATA, payload: res.data });
//       })
//       .catch(err => console.log(err));
//   };
// }

export function getAllData(data) {
  return { type: GET_DATA, payload: data };
}

export function filterSearch({ data, searchTerm, category }) {
  const filteredData = data.filter(info =>
    info[category].toUpperCase().includes(searchTerm.toUpperCase())
  );

  return { type: FILTER_SEARCH, payload: filteredData };
}

export function resetData() {
  return { type: RESET_DATA };
}

export function setDateFilterFormat(isFiscalYear) {
  return { type: SET_DATE_FILTER_FORMAT, payload: isFiscalYear };
}

export function setAsylumOfficeFilter(offices) {
  return { type: SET_ASYLUM_OFFICE_FILTER, payload: offices };
}

export function setContinentFilter(continents) {
  return { type: SET_CONTINENT_FILTER, payload: continents };
}
