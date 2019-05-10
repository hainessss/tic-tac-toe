import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:600,800');
    font-family: 'Montserrat', sans-serif;
    background-color: ${props => props.theme.navy};
  }
`;

export default Globals;