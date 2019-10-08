import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column-reverse;
    transform:${props => props.show ? "translateX(0)" : "translateX(-500px)"};
    opacity:${props => props.show ? 1 : 0};
    transition: 0.5s linear;
    @media only screen and (min-width:768px) {
        flex-direction:row;
    }
`;
export const Img = styled.img`
        width:150px;
    @media only screen and (min-width:768px) {
        width:300px;
    }
`;
export const Content = styled.div`

`;
export const Box = styled.div`
    width:100%;
    height:300px;
    display:flex;
    justify-content:center;
    align-items:center;
    background: ${props => props.background ? props.background : '#FFF'};
    @media only screen and (min-width:768px) {
    width:50vw;
    height:500px;
    }
`;
export const Title = styled.div`
    font-size: 32px;
    margin-bottom: 0.4rem;
    color: #4A4A4A;
    font-weight: 500;
    text-align:center;
    @media only screen and (min-width:768px) {
        font-size: 42px;
    }
`;
export const SubTitle = styled.div`
    font-size: 26px;
    margin-bottom: 1.3rem;
    color: #9B9B9B;
    text-align:center;
    @media only screen and (min-width:768px) {
        font-size: 34px;
    }
`;
export const SmallTitle = styled.div`
    font-size: 12px;
    color: #9B9B9B;
    text-align:center;
    @media only screen and (min-width:768px) {
        font-size: 14px;
    }
`;