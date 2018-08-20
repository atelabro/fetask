import React from 'react';
import propTypes from 'prop-types';

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#dfff93'];

const CountriesPieChart = ({ data }) => (
  <PieChart width={400} height={340} >
    <Pie
      data={data}
      cx={200}
      cy={120}
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={5}
      label
      dataKey="value"
      nameKey="name"
    >
      {
        data.map((entry, index) => <Cell key={entry} fill={COLORS[index % COLORS.length]}/>)
      }
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

CountriesPieChart.defaultProps = {
  data: []
};

CountriesPieChart.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    value: propTypes.number
  }))
};

export default CountriesPieChart;