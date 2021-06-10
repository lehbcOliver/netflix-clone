import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    background-size: cover;
    background-position: center;

    & div.degradVertical{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%,  transparent 90%);
    }

    & div.degradHorizontal{
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 5%, transparent 95%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-bottom: 150px;
        padding-top: 70px;
    }
    & div.title{
        font-size: 60px;
        font-weight: bold;
    }

    & div.info{
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
    }
    & div.points{
        display: inline-block;
        color: #46d369;
        margin-right: 15px;
    }
    & div.year{
        display: inline-block;
        margin-right: 15px;
    }

    & div.seasons{
        display: inline-block;
    }
    & div.description {
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
    }

    & div.buttons{
        margin-top: 15px;
    }
    & a.watchButton, & a.listButton{
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 12px 25px;
        text-decoration: none;
        border-radius: 5px;
        margin-right: 10px;
        opacity: 1;
        transition: all ease 0.2s;
    }
    & a.watchButton {
        background-color: #fff;
        color: #000;
    }
    & a.listButton{
        background-color: #333;
        color: #fff;
    }
    & a.watchButton:hover, a.listButton:hover{
        opacity: 0.7;
    }

    & div.genres{
        margin-top: 15px;
        font-size: 18px;
        color: #999;
    }
`;

