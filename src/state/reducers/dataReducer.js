// import { combineReducers } from 'redux';
import { GET_DATA } from '../constants';

const initialStates = {
  asylum: [],
  filteredData: [],
  filteredCount: 0,
};
export const dataReducer = (state = initialStates, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, asylum: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
