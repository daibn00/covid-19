import React from 'react';
import Menu from '../Menu/index';
import { Container } from './styles';
const App = ( { children } ) => {
  console.log(1)
  return (
    <Container>
      <Menu/>
      { children }
    </Container>
  );
}

export default App;
