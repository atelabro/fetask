import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadReportPage } from '../../actions/pageLoadActions';
import { getCountriesWithCurrentPopulation } from '../../selectors/countriesSelectors';
import CountriesTable from '../../components/tables/CountriesTable';

class ReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(loading) {
    this.setState({
      ...this.state,
      loading
    });
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

    return (
      <div>
        <CountriesTable countries={countries} />
      </div>
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
