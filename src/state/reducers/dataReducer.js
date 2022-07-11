import { GET_DATA } from '../constants';

const initialState = {
  asylum: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;

// testing my git
