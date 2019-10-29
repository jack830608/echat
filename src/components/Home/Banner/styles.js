import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    background:#154071;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transition:1s;
    @media only screen and (min-width:768px) {
    height:700px;
}
`;
export const Title = styled.div`
    font-size:50px;
    font-weight: 500;
    color:#FFF;
    padding:0 10px;
    text-align:center;
    letter-spacing: 5px;
    @media only screen and (min-width:768px) {
        font-size:70px;
    }
`;
export const SubTitle = styled.div`
    font-size:30px;
    font-weight: 300;
    color:#FFF;
    margin-top: 8px;
    padding:0 20px;
    text-align:center;
    @media only screen and (min-width:768px) {
        margin-top: 10px;
        font-size:36px;
    }
`;
export const BannerButton = styled.div`
    border-radius:30px;
    background-color:#D14657;
    color:#FFF;
    padding:5px 25px;
    font-size:16px;
    cursor:pointer;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
    margin-top: 80px;
    letter-spacing:2px;
    :hover{
    transform: translateY(-1px);
    }
    @media only screen and (min-width:768px) {
        padding:10px 35px;
        font-size:20px;
    }
`;
