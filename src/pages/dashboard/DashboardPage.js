import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadDashboardPage } from '../../actions/pageLoadActions';
import { getCountries } from '../../selectors/countriesSelectors';

class DashboardPage extends React.Component {
  componentDidMount() {
    this.props.loadDashboardPage();
  }

  render() {
    return (
      <div>
        {_.map(this.props.countries, ((country, index) => (
          <div key={`${country.name}-${index}`}>
            <h2>{country.name}</h2>
            {country.totalPopulation && (<h3>{JSON.stringify(country.totalPopulation)}</h3>)}
          </div>
        )))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: getCountries(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadDashboardPage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
