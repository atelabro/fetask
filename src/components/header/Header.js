import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 10px 5px;
  border-bottom: 1px solid ${prop('theme.colors.headerBorder')};
`;

const Title = styled.h1`
  font-size: ${prop('theme.fontSizes.headerTitle')};
  font-weight: ${prop('theme.fontWeights.headerTitle')};
`;

const SubTitle = styled.h2`
  font-size: ${prop('theme.fontSizes.headerSubtitle')};
  font-weight: ${prop('theme.fontWeights.headerSubtitle')};
`;

export default () => (
  <HeaderContainer>
    <Title>Statistics on some basic demographics</Title>
    <SubTitle>An example application that uses the populaton.io API</SubTitle>
  </HeaderContainer>
);