import { fetchAllCountries } from '../service/http';
import { setCountries } from './countriesActions';

export const loadDashboardPage = () => (dispatch) => fetchAllCountries().then(({ countries }) => {
  dispatch(setCountries(countries));
}).catch((exception) => {
  console.log(exception);
});
