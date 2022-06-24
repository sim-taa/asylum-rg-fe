import { SET_DATA } from '../constants';

const initialState = {
  asylum: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      // return {
      //     ...state,
      //     id: action.payload.id,
      //     completion: action.payload.completion,
      //     asylumOffice: action.payload.asylumOffice,
      //     citizenship: action.payload.citizenship,
      //     currentDate: action.payload.currentDate,
      //     caseOutcome: action.payload.caseOutcome,
      //     raceOrEthnicity: action.payload.raceOrEthnicity,
      // };
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;
