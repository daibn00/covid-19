import styled from 'styled-components';
export const Container = styled.div`
   display : flex;
   justify-content : center;
   margin-top : 20px;

   & > input {
     width : 30%;
     padding : 20px;
     border-bottom-left-radius: 30px;
     border-bottom-right-radius: 30px;
     border-top-left-radius: 30px;
     border-top-right-radius: 30px;
     font-size : 1rem;
     background-color: white;

  }

   & > button {
    padding: 0 20px;
    border-radius: 50%;
    /* color: wheat; */
    margin-left: 15px;
    background: white;

   }
`
