import styled from 'styled-components';

export const Container = styled.div`
   width : 90%;
   margin :auto;
   font-size: 19px;
   color : white;

   & > header{
     width : 120px;
     img {
       width : 100%;
     }
   }
   & > section{
     display : flex;
     flex-wrap : wrap;
     & > div{
       background : black;
       width : 19%;
       margin : 0 20px 20px 0;
       padding : 30px;
       border-radius : 5px;
       & > svg {
        vertical-align: middle;
       }
       & > strong {
         margin-left : 15px;
       }
     }
   }
 `;
