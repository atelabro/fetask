import React from 'react';
import { ThemeProvider } from 'styled-components';

import PageContainer from './components/styled/PageContainer';
import Header from './components/header/Header';

// Styles
import './styles/global-styles';

// Theme
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Header />
      <p>
        Page content
      </p>
    </PageContainer>
  </ThemeProvider>
);

export default App;
