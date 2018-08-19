import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  toastr: toastrReducer,
});

export default rootReducer;
