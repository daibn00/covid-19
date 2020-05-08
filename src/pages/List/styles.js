import styled from 'styled-components'
;
export const Container = styled.div`
width:90%;
margin: 0 auto;
border-top : 1px solid black;
& > section{
  display:flex;
  flex-wrap : wrap;
  justify-content: space-between;
  margin-top : 30px;

  & > div{
    display:flex;
    background : white;
    border-radius : 5px;
    flex-direction: column;
    width : 15%;
    margin-bottom : 20px;
    padding : 5px;
    transition : 0.2s all ease-in-out;
    &:hover {
      transform: translateY(10px);
      transition : 0.2s all ease-in-out;
    }
    @media (max-width: 1000px) {
      width:100%;
    }
    div{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    section{
      display:flex;
      flex-direction: column;
      span{
        svg {
          margin : 10px 10px 0 0 ;
          vertical-align: sub;
        }
      }
    }
    a {
      padding : 10px;
      text-align : center;
      margin-top:10px;
      background : #282B2D;
      border-radius : 3px;
      color: white;

    }
  }
}

`
