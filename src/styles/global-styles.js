import { injectGlobal } from 'styled-components';
import { prop } from 'styled-tools';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    color: ${prop('theme.colors.primaryFontColor')};
    font-family: FrutigerRoman, sans-serif;
  }
  
  button {
    font-family: FrutigerRoman, sans-serif;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }
`;
