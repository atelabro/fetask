import styled from 'styled-components';

const Arrow = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
`;

export const ArrowUp = styled(Arrow)`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

export const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;