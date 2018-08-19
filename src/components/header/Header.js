import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 10px;
`;

const Header = styled.h1`
  font-size: ${prop('theme.fontSizes.headerTitle')};
  font-weight: ${prop('theme.fontWeights.headerTitle')};
`;

export default () => (
  <HeaderContainer>
    <Header>Statistics on some basic demographics</Header>
  </HeaderContainer>
);