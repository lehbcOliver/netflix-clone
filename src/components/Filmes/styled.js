import styled from 'styled-components';


export const Container = styled.div`
    margin-bottom: 30px;
    margin-top: -100px;

    & .movie-left, & .movie-right{
        position: absolute;
        width: 40px;
        height: 225px;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: rgba(0,0,0,0.6);
        cursor: pointer;
        opacity: 0;
        transition: all ease 0.5s;
        
    }
    & .movie-left{
        left: 0;
    }

    & .movie-right{
        right: 0;
    }
        &#container:hover .movie-left,
        &#container:hover .movie-right{
            opacity: 1;
        }
    @media(max-width: 760px){
        &#container:hover .movie-left,
        &#container:hover .movie-right{
            opacity: 1;
        }
    }
   
`;

export const H2 = styled.h2`
    color: #fff;
    margin: 0 0 0 30px;
`;
export const ContainerRow =  styled.div`
    overflow-x: hidden;
    padding-left: 30px;
    

`;

export const MovieRow = styled.div`
    transition: all ease 0.5s;
    margin-bottom: 80px;

   
`;

export const MovieRowItem = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;


    & img{
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.3s;
    }
    & img:hover {
        transform: scale(1);
    }

    
`;

export const Modal = styled.div`
  position: fixed;
  top: 10px;
  right: 0;
  bottom: 0;
  left: 20%;
  background: rgba(0,0,0,0.8);
  z-index: 99999;
  opacity:0;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: none;
  width: 50%;
  height: 90vh;


  &#modalView {
      opacity: 1;
      pointer-events: auto;
  }
  & .close{
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      text-align: center;
      z-index: 999;
      background-color: red;
      width: 30px;
      height: 30px;
      border-radius: 15px;
  }
  & .Image img{
      width: 100%;
  }
  & .degrade{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      background: linear-gradient(to top, #111 30%,  transparent 60%);

      & h1{
      margin: 300px 0 10px 30px;
      z-index: 999;
      }
      & h3 {
          padding: 0 0 0 30px;
      }
      & p{
          padding: 30px 50px 10px 30px;
      }
  }
  
`;