import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Redirect, Route, Router, Switch } from 'react-router';

// Config
import routes from './routing/routes';

// History
import history from './config/history';

// Styles
import './styles/global-styles';

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
    <PageContainer>
      <Header />
      <PageContentContainer>
        <Router history={history}>
          <Switch>
            <Route path={routes.DASHBOARD} component={DashboardPage} />
            <Route path={routes.REPORT} component={ReportPage} />
            <Redirect path={routes.BASE} exact to={routes.DASHBOARD} />
          </Switch>
        </Router>
      </PageContentContainer>
    </PageContainer>
  </ThemeProvider>
);

export default App;
