import React from 'react';
import ContainerPages from '../../components/containerPages';
import Mapc from '../../components/Map/index';
import {Container} from './styles';
const Map = () => {
  return (
    <ContainerPages>
      <Container>
        <Mapc/>
      </Container>
    </ContainerPages>
  );
}

export default Map;
