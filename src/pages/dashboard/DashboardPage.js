import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadDashboardPage } from '../../actions/pageLoadActions';
import {
  getContinents,
  getCountriesGroupedByNameLengthChartData,
  getTopFiveCountriesByPopulation
} from '../../selectors/countriesSelectors';

import CountriesByNameLengthLineChart from '../../components/charts/CountriesByNameLenghtLineChart';
import { DashboardPageContainer, LineChartContainer, LineChartTitle } from './styled';

class DashboardPage extends React.Component {
  componentDidMount() {
    this.props.loadDashboardPage();
  }

  render() {
    const { countriesByNameLengthChartData } = this.props;
    console.log('by name length', this.props.countriesByNameLengthChartData);
    return (
      <DashboardPageContainer>
        <LineChartContainer>
          <LineChartTitle>Countries grouped by the length of their name</LineChartTitle>
          <CountriesByNameLengthLineChart data={countriesByNameLengthChartData}/>
        </LineChartContainer>
      </DashboardPageContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  countriesByNameLengthChartData: getCountriesGroupedByNameLengthChartData(state),
  topFiveCountriesByPopulation: getTopFiveCountriesByPopulation(state),
  continents: getContinents(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadDashboardPage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
