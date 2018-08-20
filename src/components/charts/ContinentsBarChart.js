import React from 'react';
import propTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import theme from '../../styles/theme';

const data = [
  { name: 'Page A', value: 400 },
  { name: 'Page B', value: 300 },
  { name: 'Page C', value: 200 },
  { name: 'Page D', value: 278 },
  { name: 'Page E', value: 189 },
  { name: 'Page F', value: 239 },
  { name: 'Page G', value: 349 },
];
const ContinentsBarChart = ({ data }) => (
  <BarChart width={600} height={300} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="name"/>
    <YAxis/>
    <Tooltip/>
    <Legend/>
    <Bar dataKey="value" fill={theme.colors.chartsPrimary} name="Population" domain={['auto', 'auto']} />
  </BarChart>
);

ContinentsBarChart.defaultProps = {
  data: data
};

ContinentsBarChart.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    value: propTypes.number
  }))
};

export default ContinentsBarChart;