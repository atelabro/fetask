import { handleActions } from 'redux-actions';
import { SET_COUNTRIES } from '../constant/actions';

const initialCountriesState = [];

const setCountries = (state, action) => action.payload;

const countriesReducer = handleActions(
  {
    [SET_COUNTRIES]: setCountries,
  },
  initialCountriesState
);


export default countriesReducer;