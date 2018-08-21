import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadReportPage } from '../../actions/pageLoadActions';
import { getCountriesWithCurrentPopulation } from '../../selectors/countriesSelectors';
import CountriesTable from '../../components/tables/CountriesTable';
import { FilterContainer, NameFilter, ReportPageContainer } from './styled';

class ReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      nameFilter: null
    };
    this.setLoading = this.setLoading.bind(this);
    this.updateNameFilter = this.updateNameFilter.bind(this);
  }

  setLoading(loading) {
    this.setState({
      ...this.state,
      loading
    });
  }

  updateNameFilter(event) {
    this.setState({
      ...this.state,
      nameFilter: event.target.value
    })
  }

  componentDidMount() {
    this.setLoading(true);
    this.props.loadReportPage().then(() => this.setLoading(false));
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (<div>Loading...</div>);
    }

    const { countries } = this.props;

    let filteredCountries = countries;
    const { nameFilter } = this.state;
    if (nameFilter) {
      filteredCountries = _.filter(
        countries,
        ({ country }) => country.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1
      );
    }

    return (
      <ReportPageContainer>
        <FilterContainer>
          <div>Country Name Filter</div>
          <NameFilter onChange={this.updateNameFilter} />
        </FilterContainer>
        <CountriesTable countries={filteredCountries} />
      </ReportPageContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: getCountriesWithCurrentPopulation(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadReportPage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);
