import React from 'react';
import styled from 'styled-components';

const CountryTableRowStyled = styled.tr`
  cursor:pointer;
  &:hover {
    background: #f4e3d9;
  }
  
  td {
    padding: 2px 4px;
  }
`;

const CountryTableRow = ({ country, population, index }) => (
  <CountryTableRowStyled onClick={() => alert(`Data for country to be shown ${country}`)}>
    <td>{index}</td>
    <td>{country}</td>
    <td>{population}</td>
  </CountryTableRowStyled>
);

export default CountryTableRow;