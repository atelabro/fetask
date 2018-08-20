import React from 'react';
import propTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CountriesByNameLengthLineChart = ({ data }) => (
  <LineChart width={600} height={300} data={data}
             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <XAxis dataKey="nameLength"/>
    <YAxis name={"Name Length"} />
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip />
    <Legend />
    <Line
      name="Number of Countries"
      type="monotone"
      dataKey="numberOfCountries"
      stroke="#8884d8" activeDot={{ r: 8 }}
    />
  </LineChart>
);

CountriesByNameLengthLineChart.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    nameLength: propTypes.string,
    numberOfCountries: propTypes.number,
  }))
};

CountriesByNameLengthLineChart.defaultProps = {
  data: []
};

export default CountriesByNameLengthLineChart;