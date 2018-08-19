const config = {
  method: 'GET',
  headers: new Headers({
    'Accept': 'application/json'
  })
};

const getJson = (url) => fetch(url, config).then(response => response.json());

export const fetchAllCountries = () => getJson('countries');