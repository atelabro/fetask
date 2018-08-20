import styled from 'styled-components';
import { prop } from 'styled-tools';

export const DashboardPageContainer = styled.div`
  padding: 20px;
`;

export const LineChartContainer = styled.div`
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid ${prop('theme.colors.dashboardArticleBorder')};
  flex-direction: row;
  justify-content: space-around;
`;

export const LineChartTitle = styled.h1`
  font-size: ${prop('theme.fontSizes.headerSubtitle')};
  font-weight: 400;
  text-align: center;
`;