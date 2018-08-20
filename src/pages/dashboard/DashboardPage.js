import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadDashboardPage } from '../../actions/pageLoadActions';
import {
  getContinentsChartData,
  getCountriesGroupedByNameLengthChartData,
  getTopFiveCountriesByPopulationChartData
} from '../../selectors/countriesSelectors';

import CountriesByNameLengthLineChart from '../../components/charts/CountriesByNameLenghtLineChart';
import { DashboardPageContainer, ChartContainer, ChartTitle } from './styled';
import CountriesPieChart from '../../components/charts/CountriesPieChart';
import ContinentsBarChart from '../../components/charts/ContinentsBarChart';

class DashboardPage extends React.Component {
  componentDidMount() {
    this.props.loadDashboardPage();
  }

  render() {
    const {
      countriesByNameLengthChartData,
      topFiveCountriesByPopulationChartData,
      continentsChartData
    } = this.props;

    return (
      <DashboardPageContainer>
        <ChartContainer>
          <ChartTitle>
            Continents
          </ChartTitle>
          <ContinentsBarChart data={continentsChartData} />
        </ChartContainer>
        <ChartContainer>
          <ChartTitle>Countries grouped by the length of their name</ChartTitle>
          <CountriesByNameLengthLineChart data={countriesByNameLengthChartData}/>
        </ChartContainer>
        <ChartContainer>
          <ChartTitle>
            Top 5 by current population
          </ChartTitle>
          <CountriesPieChart data={topFiveCountriesByPopulationChartData}/>
        </ChartContainer>
      </DashboardPageContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  countriesByNameLengthChartData: getCountriesGroupedByNameLengthChartData(state),
  topFiveCountriesByPopulationChartData: getTopFiveCountriesByPopulationChartData(state),
  continentsChartData: getContinentsChartData(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadDashboardPage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
