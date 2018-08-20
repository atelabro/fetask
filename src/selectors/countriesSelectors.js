import _ from 'lodash';

const CONTINENTS = [
  'ASIA',
  'AFRICA',
  'EUROPE',
  'Australia',
  'NORTHERN AMERICA'
];

export const getCountries = (state) => state.countries;

export const getTopFiveCountriesByPopulation = (state) => {
  const { countries } = state;
  let sortedAscending = _.sortBy(countries, (country) => _.get(country, 'totalPopulation[0].population', 0));
  return sortedAscending.slice(sortedAscending.length - 5,sortedAscending.length).reverse();
};

export const getContinents = (state) => _.filter(state.countries, ({ name }) => CONTINENTS.includes(name));

export const getCountriesGroupedByNameLength = state => _.groupBy(state.countries, 'name.length');

export const getCountriesGroupedByNameLengthChartData = state => {
  const groupedByName = getCountriesGroupedByNameLength(state);

  const chartData = [];

  Object.keys(groupedByName).forEach((key) => {
    let numberOfCountries = groupedByName[key].length;
    chartData.push({
      nameLength: key,
      numberOfCountries
    });
  });

  return chartData;
};

export const getTopFiveCountriesByPopulationChartData = (state) => {
  const topFiveByPopulation = getTopFiveCountriesByPopulation(state);

  return mapCountriesToNameValueObject(topFiveByPopulation);
};

const mapCountriesToNameValueObject = (countries) => _.map(countries, country => {
  if (country.totalPopulation[0]) {
    return {
      name: country.name,
      value: Math.max(_.get(country, 'totalPopulation[0].population', 0), 0),
    };
  }

  return {
    name: 'name',
    value: 0,
  };
});

export const getContinentsChartData = (state) => {
  const continents = getContinents(state);

  return mapCountriesToNameValueObject(continents);
};