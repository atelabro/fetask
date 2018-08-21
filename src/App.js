import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Redirect, Route, Router, Switch } from 'react-router';
import ReduxToastr from 'react-redux-toastr';

// Config
import routes from './routing/routes';

// History
import history from './config/history';

// Styles
import './styles/global-styles';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

// Theme
import theme from './styles/theme';

// Components
import PageContainer from './components/styled/PageContainer';
import PageContentContainer from './components/styled/PageContentContainer';
import Header from './components/header/Header';

// Pages
import DashboardPage from './pages/dashboard/DashboardPage';
import ReportPage from './pages/report/ReportPage';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <PageContainer>
        <Header />
        <PageContentContainer>
            <Switch>
              <Route path={routes.DASHBOARD} component={DashboardPage} />
              <Route path={routes.REPORT} component={ReportPage} />
              <Redirect path={routes.BASE} exact to={routes.DASHBOARD} />
            </Switch>
        </PageContentContainer>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          closeOnToastrClick
        />
      </PageContainer>
    </Router>
  </ThemeProvider>
);

export default App;
