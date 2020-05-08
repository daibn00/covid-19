import React from 'react';
import { Container } from './styles';
import { GoLocation ,GoListUnordered ,AiOutlineInfoCircle  } from 'react-icons/all';
import { NavLink } from 'react-router-dom';
const Menu = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/" >
          <GoLocation size={30} />
        </NavLink>
        <NavLink to="/list" >
          <GoListUnordered size={30}  />
        </NavLink>
        <NavLink to="/info" >
          <AiOutlineInfoCircle size={30}  />
        </NavLink>
      </nav>
    </Container>
  );
}

export default Menu;
