import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { prop } from 'styled-tools';
import routes from '../../routing/routes';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 10px 5px;
  border-bottom: 1px solid ${prop('theme.colors.headerBorder')};
`;

const Title = styled.h1`
  font-size: ${prop('theme.fontSizes.headerTitle')};
  font-weight: ${prop('theme.fontWeights.headerTitle')};
  margin-top: 5px;
`;

const SubTitle = styled.h2`
  font-size: ${prop('theme.fontSizes.headerSubtitle')};
  font-weight: ${prop('theme.fontWeights.headerSubtitle')};
`;

const NavigationBar = styled.div`
  display: flex;
  margin: 0;
  padding: 10px 10px 0 10px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 4px;
  color: ${prop('theme.colors.navbarFont')};
  text-decoration: none;
  
  &:hover {
    color: ${prop('theme.colors.navbarFontHovered')};
    
    hr {
      width: 95%;
      background: ${prop('theme.colors.navbarUnderlineHovered')};
    }
  }
`;

const LinkUnderline = styled.hr`
  display: inline;
  width: 80%;
  border: 0;
  height: 2px;
  position: relative;
  background: ${prop('theme.colors.navbarUnderline')};
  transition: width 0.5s;
`;

export default () => (
  <HeaderContainer>
    <NavigationBar>
      <StyledLink to={routes.DASHBOARD}>
        Dashboard
        <LinkUnderline />
      </StyledLink>
      <StyledLink to={routes.REPORT}>
        Report
        <LinkUnderline />
      </StyledLink>
    </NavigationBar>
    <Title>Statistics on demographics</Title>
    <SubTitle>An example application that uses the populaton.io API</SubTitle>
  </HeaderContainer>
);