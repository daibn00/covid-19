import React from 'react';
import  {Container} from './styles';
import {GrFacebook , FaGithubSquare } from 'react-icons/fa';
const Footer = () => {
  return (
    <Container>
      <span>
         Made with <span> ♥ </span> by Nguyễn Viết Đại
      </span>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100013965903901" title="FaceBook">
          <FaGithubSquare color="f5f5f5" size ="25"/>
        </a>
        <a href="https://github.com/daibn00" title="GitHub">
          <FaGithubSquare color="f5f5f5" size="25" />
        </a>
      </div>

    </Container>
  );
}

export default Footer;
