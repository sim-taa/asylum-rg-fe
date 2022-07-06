// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file

// import axios from 'axios';
import {
  GET_DATA,
  INPUT_CHANGE,
  FILTER_SEARCH,
  FILTER_CATEGORIES,
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

export function inputChange({ name, value }) {
  return { type: INPUT_CHANGE, payload: { name, value } };
}

export function filterSearch({ data, searchTerm, searchCategory }) {
  const filteredData = data.filter(info => info[searchCategory] === searchTerm);

  return { type: FILTER_SEARCH, payload: filteredData };
}

export function filterCategories(categories, searchCategory) {
  const filteredCategories = categories.filter(
    category => category !== searchCategory
  );

  return { type: FILTER_CATEGORIES, payload: filteredCategories };
}
