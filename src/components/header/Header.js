import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 10px;
`;

const Title = styled.h1`
  font-size: ${prop('theme.fontSizes.headerTitle')};
  font-weight: ${prop('theme.fontWeights.headerTitle')};
`;

export default () => (
  <HeaderContainer>
    <Title>Statistics on some basic demographics</Title>
  </HeaderContainer>
);