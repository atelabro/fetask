import _ from 'lodash';
import { fetchAllCountries, fetchPopulationForCountryTodayAndTomorrow } from '../service/http';
import { setCountries } from './countriesActions';

export const loadDashboardPage = () => (dispatch) => fetchAllCountries().then(({ countries }) => {
  const enrichedCountries = _.map(countries, country => ({ name: country, totalPopulation: '' }));
  dispatch(setCountries(enrichedCountries));

  Promise.all(countries.map(country => fetchPopulationForCountryTodayAndTomorrow(country)
    .then(({ total_population }) => ({
      name: country,
      totalPopulation: total_population
    }))
    .catch((exception) => console.log(exception))))
    .then((countriesWithCurrentPopulation) => {
      console.log('all are fetched', countriesWithCurrentPopulation);
      dispatch(setCountries(countriesWithCurrentPopulation));
    })
}).catch((exception) => {
  console.log(exception);
});
