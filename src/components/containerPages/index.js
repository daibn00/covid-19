import React from 'react';
import {Container} from './styles';
import Header from '../Header/index';
import Footer from '../Footer/index';
// eslint-disable-next-line react/prop-types
const containerPage = ({children}) => {
  return (
    <Container>
      <Header/>
      {children}
      <Footer/>
    </Container>
  );
}

export default containerPage;
