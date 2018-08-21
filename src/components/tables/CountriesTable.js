import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import TableHeaderCell from './TableHeaderCell';
import CountryTableRow from './CountryTableRow';

export const ORDER = {
  ASC: 'ASC',
  DESC: 'DESC'
};

const SORT_BY = {
  POPULATION: 'population',
  COUNTRY: 'country'
};

class CountriesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: SORT_BY.COUNTRY,
      order: ORDER.ASC,
    };
    this.setOrderBy = this.setOrderBy.bind(this);
  }

  setOrderBy(newSortBy) {
    // if we clicked the same row we want to update the 'order' only
    const { sortBy, order } = this.state;

    if (sortBy === newSortBy) {
      this.setState({
        ...this.state,
        order: order === ORDER.ASC ? ORDER.DESC : ORDER.ASC
      })
    } else {
      this.setState({
        ...this.state,
        sortBy: newSortBy,
        order: ORDER.ASC,
      })
    }

  }

  render() {
    const { countries } = this.props;
    const { sortBy, order } = this.state;

    let sortedCountries = _.sortBy(countries, sortBy);

    if (ORDER.DESC === order) {
      sortedCountries.reverse();
    }

    return (
      <table>
        <thead>
          <tr>
            <th />
            <TableHeaderCell
              label="Country"
              sortId={SORT_BY.COUNTRY}
              selectedOrder={order}
              selectedSortBy={sortBy}
              onClickHandler={this.setOrderBy}
            />
            <TableHeaderCell
              label="Population"
              sortId={SORT_BY.POPULATION}
              selectedOrder={order}
              selectedSortBy={sortBy}
              onClickHandler={this.setOrderBy}
            />
          </tr>
        </thead>
        <tbody>
          {sortedCountries.map(({ country, population }, index) => (
            <CountryTableRow key={`${country}-${index}`} country={country} population={population} index={index} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default CountriesTable;