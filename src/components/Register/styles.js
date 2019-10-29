import styled from 'styled-components';

export const Container = styled.div`
    background:#154071;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    @media only screen and (min-width:768px) {
    }
`;

export const Title = styled.div`
    color:#FFF;
    font-size:26px;
    @media only screen and (min-width:768px) {
        font-size:36px;
    }
`;
export const Form = styled.div`
    background:#FFF;
    border-radius:15px;
    box-sizing:border-box;
    padding:10px;
    width:95vw;
    a {
        color:#154071;
        text-decoration:none;
        margin:0 3px;
        :hover{
            text-decoration:underline; 
        }
    }
    @media only screen and (min-width:768px) {
        padding:20px;
        width:500px;
        /* ::-webkit-scrollbar { 
        display: none;
        } */
    }
`;
export const Subtitle = styled.div`
    color:#154071;
    font-size:26px;
    text-align:center;
    margin-bottom:5px;
    @media only screen and (min-width:768px) {
        font-size:36px;
        margin-bottom:10px;
    }
`;
export const Button = styled.div`
    color: #B0B0B0;
    border-radius:5px;
    background:#EDEDED;
    padding:10px;
    cursor:pointer;
    transition: all 500ms ease;
    font-weight: 400;
    font-size:20px;
    text-align:center;
    margin-top:50px;
    :hover{
        transform:translateY(-3px)
    }
    @media only screen and (min-width:768px) {
        margin-top:80px;
        font-size:26px;
        padding:12px;
    }
`;
export const Require = styled.div`
    margin-left:auto;
    width: fit-content;
    color:#D14657;
    font-size:14px;
    height:20px;
    @media only screen and (min-width:768px) {
        font-size:16px;
        height:24px;
    }
`;
export const CheckBox = styled.div`
    color:#BABABA;
    font-size:14px;
    input{
        font-size:16px;
        :focus {
            outline: none;
        }
    }
    @media only screen and (min-width:768px) {
        font-size:16px;
        input{
            font-size:20px;
        }
    }

`