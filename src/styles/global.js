import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
body{
  margin : 0;
  padding : 0;
  outline : 0;
  box-sizing : border-box;
}
  *:focus{
    outline : none;
  }

  html , body , #root{
    height : 100%;


  }
  #root{
    color : #444;

  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
    background-color:#504f55;
  }
  a {
    text-decoration : none;
  }
  ul {
    list-style : none;
  }
  button {
    cursor : pointer;
  }
  h1,h2,h3,h6,h4,h5{
    margin : 0;
  }

`;
