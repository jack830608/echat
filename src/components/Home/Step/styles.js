import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    padding: 2em 8%;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    background:#393939;
    @media only screen and (min-width:768px) {
        padding: 5em 10%;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
    }
`;
export const Img = styled.div`
    width:60px;
    height:60px;
    margin:0 0 20px 0;
    @media only screen and (min-width:768px) {
        margin:30px 0;
        width:80px;
        height:80px;
    }
`;
export const Holder = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    transition: opacity 0.5s;
    margin-bottom:30px;
    @media only screen and (min-width:768px) {
        margin-bottom:0;
    }
`;
export const Info = styled.div`
    letter-spacing: 1.5px;
    color:#FFF;
    font-size:20px;
    @media only screen and (min-width:768px) {

    }
`;