import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import fetchFilterReducer from './fetchFilterReducer';
import vizReducer from './vizReducer';

export default combineReducers({
  dataReducer,
  fetchFilterReducer,
  vizReducer,
});
