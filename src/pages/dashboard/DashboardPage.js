import React from 'react';
import _ from 'lodash';
import { fetchAllCountries } from '../../service/http';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    fetchAllCountries().then(countries => {
      this.setState({
        ...this.state,
        countries
      })
    }).catch(exception => {
      console.log(exception);
    })
  }

  render() {
    return (
      <div>
        {_.map(this.state.countries, (country => (
          <div key={country}>{country} </div>
        )))}
      </div>
    );
  }
}

export default DashboardPage;
