import styled from 'styled-components';

export const Container = styled.div`
position:fixed;
width : 10%;
height : 100vh;
display : flex;
justify-content : center;
align-item : center;
max-width:80px;
background-color : black;
color : white;
   nav {
     width : 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content : center;
    a{
      margin-bottom : 40px;
      .nav-icon{
        color : white;
      }
      svg {
        &:hover {
          fill: #f5f5f5;
        }
      }
    }

    a.active {
      svg {
        fill: #f5f5f5;
      }
    }
    }
   }
`
