import React from 'react';
import _ from 'lodash';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadDashboardPage } from '../../actions/pageLoadActions';
import { getCountries } from '../../selectors/countriesSelectors';

class DashboardPage extends React.Component {
  componentDidMount() {
    this.props.loadDashboardPage();
    toastr.success('Title', 'Message');
  }

  render() {
    return (
      <div>
        <button onClick={() => toastr.error('test', 'test')}>Test</button>
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
