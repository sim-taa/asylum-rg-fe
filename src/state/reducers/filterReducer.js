import {
  SET_DATE_FILTER_FORMAT,
  SET_ASYLUM_OFFICE_FILTER,
  SET_CONTINENT_FILTER,
} from '../constants';
import { regions } from '../../data/filterConstants';

const initialState = {
  isFiscalYear: false,
  asylumOffice: [],
  region: [],
  continents: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE_FILTER_FORMAT: {
      return {
        ...state,
        isFiscalYear: action.payload,
      };
    }
    case SET_ASYLUM_OFFICE_FILTER: {
      return {
        ...state,
        asylumOffice: action.payload,
      };
    }
    case SET_CONTINENT_FILTER: {
      return {
        ...state,
        continents: action.payload,
        region: deriveRegion({ state, continents: action.payload }),
      };
    }
    // case BUILD_QUERY_STRING: {
    //   return {
    //     //Using regionsFilterList data, create a coordinating list of citizenship to add to api request
    //     //Build out API query parameter string
    //   };
    // }
    default: {
      return state;
    }
  }
};

// As regional filters are added, destructure them into this function and add the appropriate filter step
const deriveRegion = ({ continents }) => {
  const territoryList = {};
  regions.forEach(region => (territoryList[region.territory] = false));

  if (continents.length > 0) {
    regions.forEach(region => {
      if (continents.includes(region.continent))
        territoryList[region.territory] = true;
    });
  }
  return territoryList;
};

/* This will build the query parameter string to send to the api with all present filter values.
   As more filter parameters are added, add a check in the first line to ensure there is a
   filter that needs to be procesed.
   Then build out the query parameters as specified in the api docs.
*/
export const buildQueryString = ({ isFiscalYear, asylumOffice, region }) => {
  let query = '?';
  const regionArray = Object.entries(region)
    .filter(territory => territory[1])
    .map(territory => territory[0]);

  if (isFiscalYear) query += 'isFiscalYear=true&';
  if (asylumOffice.length > 0)
    query += `asylumOffice=${asylumOffice.join(',')}&`;
  if (regionArray.length > 0) query += `citizenship=${regionArray.join(',')}&`;

  return query;
};

export default filterReducer;
