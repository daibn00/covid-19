import styled from 'styled-components'


// eslint-disable-next-line no-undef
export const Container = styled.div`
    width:100%;
    align-seft : center;
    text-align : center;
    font-size : 1.5rem;
    color : white;
    margin-bottom:30px;

    header{
      display : flex;
      justify-content : space-around;
      svg{
        vertical-align : sub ;
        padding-right : 15px;
        color : white;
      }
      & > div {
        display : flex;
        & > strong{
          display : flex;
          & > span {
            margin-left: 10px;
          }
        }
      }

    }

`;
