import _ from 'lodash';
import { fetchAllCountries, fetchPopulationForCountryTodayAndTomorrow } from '../service/http';
import { setCountries } from './countriesActions';
import { toastr } from 'react-redux-toastr';

export const loadDashboardPage = () => (dispatch) => fetchAllCountries().then(({ countries }) => {
  const enrichedCountries = _.map(countries, country => ({ name: country, totalPopulation: '' }));
  dispatch(setCountries(enrichedCountries));

  return Promise.all(countries.map(country => fetchPopulationForCountryTodayAndTomorrow(country)
    .then(({ total_population }) => ({
      name: country,
      totalPopulation: total_population
    }))
    .catch((exception) => {
      toastr.error('An exception occurred while getting the population for a given country');
      console.error(exception);
    })))
    .then((countriesWithCurrentPopulation) => {
      console.log('countries completely fetched');
      dispatch(setCountries(countriesWithCurrentPopulation));
      return countriesWithCurrentPopulation;
    })
}).catch((exception) => {
  toastr.error('An exception occurred while fetching the countries');
  console.error(exception);
});


export const loadReportPage = loadDashboardPage;