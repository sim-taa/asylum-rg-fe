//This reducer handles fetching and storing
//summary data used for visualizations
import { regions } from '../../data/filterConstants';
import { SET_HEAT_MAP_YEAR } from '../actionTypes';

/*This auto-generates sample summary data
for use in displaying heat maps until the
API summary data endpoint is created
at which point the logic here will need to be
adjusted to match the shape of the data */
const apiData = regions.map(region => {
  return {
    location: region.territory,
    caseTotals: [
      {
        year: 2018,
        grant: Math.floor(Math.random() * 100),
        deny: Math.floor(Math.random() * 100),
        dismiss: Math.floor(Math.random() * 100),
      },
      {
        year: 2019,
        grant: Math.floor(Math.random() * 100),
        deny: Math.floor(Math.random() * 100),
        dismiss: Math.floor(Math.random() * 100),
      },
      {
        year: 2020,
        grant: Math.floor(Math.random() * 100),
        deny: Math.floor(Math.random() * 100),
        dismiss: Math.floor(Math.random() * 100),
      },
      {
        year: 2021,
        grant: Math.floor(Math.random() * 100),
        deny: Math.floor(Math.random() * 100),
        dismiss: Math.floor(Math.random() * 100),
      },
    ],
  };
});

const initialState = {
  heatMapYear: 'all',
  heatMapData: apiData,
};

const vizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEAT_MAP_YEAR: {
      return {
        ...state,
        heatMapYear: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default vizReducer;
