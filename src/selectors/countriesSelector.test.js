import { getContinents, getTopFiveCountriesByPopulation } from './countriesSelectors';

const state = {
  countries: [
    {
      name: 'Afghanistan',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 35038874
        },
        {
          date: '2018-08-21',
          population: 35040943
        }
      ]
    },
    {
      name: 'AFRICA',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 1281531434
        },
        {
          date: '2018-08-21',
          population: 1281616560
        }
      ]
    },
    {
      name: 'Albania',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 2920519
        },
        {
          date: '2018-08-21',
          population: 2920541
        }
      ]
    },
    {
      name: 'Algeria',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 41820794
        },
        {
          date: '2018-08-21',
          population: 41822587
        }
      ]
    },
    {
      name: 'Angola',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 27613761
        },
        {
          date: '2018-08-21',
          population: 27616104
        }
      ]
    },
    {
      name: 'Antigua and Barbuda',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 94705
        },
        {
          date: '2018-08-21',
          population: 94707
        }
      ]
    },
    {
      name: 'Arab Rep of Egypt',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 97252266
        },
        {
          date: '2018-08-21',
          population: 97257131
        }
      ]
    },
    {
      name: 'Argentina',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 44748132
        },
        {
          date: '2018-08-21',
          population: 44749274
        }
      ]
    },
    {
      name: 'Armenia',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 3035350
        },
        {
          date: '2018-08-21',
          population: 3035356
        }
      ]
    },
    {
      name: 'Aruba',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 104912
        },
        {
          date: '2018-08-21',
          population: 104913
        }
      ]
    },
    {
      name: 'ASIA',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: -8.906696484068948e+237
        },
        {
          date: '2018-08-21',
          population: -9.035812157713392e+237
        }
      ]
    },
    {
      name: 'Australia',
      totalPopulation: [
        {
          date: '2018-08-20',
          population: 25010227
        },
        {
          date: '2018-08-21',
          population: 25011105
        }
      ]
    },
    {
      name: 'Australia/New Zealand'
    }
  ]
};

it('should get top five countries by population', () => {
  let topFiveCountriesByPopulation = getTopFiveCountriesByPopulation(state);
  expect(topFiveCountriesByPopulation.length).toBe(5);
  expect(topFiveCountriesByPopulation[0].name).toBe("AFRICA");
  expect(topFiveCountriesByPopulation[1].name).toBe("Arab Rep of Egypt");
  expect(topFiveCountriesByPopulation[2].name).toBe("Argentina");
  expect(topFiveCountriesByPopulation[3].name).toBe("Algeria");
  expect(topFiveCountriesByPopulation[4].name).toBe("Afghanistan");
});


it('should get the continents', () => {
  let continents = getContinents(state);
  expect(continents.length).toBe(3);
  expect(continents[0].name).toBe("AFRICA");
  expect(continents[1].name).toBe("ASIA");
  expect(continents[2].name).toBe("Australia");
});
