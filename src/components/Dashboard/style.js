import styled , {keyframes} from 'styled-components';

export const Container = styled.div`
    background:#154071;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media only screen and (min-width:768px) {
    }
`;
export const Top = styled.div`
`
export const Name = styled.div`
    color:#FFF;
    font-size:24px;
    @media only screen and (min-width:768px) {
        font-size:34px;
    }
`;
export const Select = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:15px 0;
    @media only screen and (min-width:768px) {
        margin:30px 0;
    }
`
export const Option = styled.div`
    color:#fff;
    opacity:${props => props.selected ? 1 : 0.6};
    font-size:18px;
    margin:0 10px;
    cursor:pointer;
    transition:0.1s;
    :hover{
        opacity:${props => props.selected ? 1 : 0.9};
    }
    @media only screen and (min-width:768px) {
        font-size:26px;
    }
`
export const Form = styled.div`
    background:#FFF;
    border-radius:15px;
    box-sizing:border-box;
    padding:10px;
    width:95vw;
    overflow:hidden;
    @media only screen and (min-width:768px) {
        padding:20px 10px;
        width:500px;
    }
`;
export const Title = styled.div`
    color:#154071;
    font-size:24px;
    text-align:center;
    @media only screen and (min-width:768px) {
        font-size:34px;
    }
`;
export const InfoBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:20px;
`

export const InfoTitle = styled.div`
    color:#BABABA;
    font-size:18px;
    font-weight:500;
    @media only screen and (min-width:768px) {
        font-size:20px;
    }
`
export const InfoData = styled.div`
    color:#BABABA;
    font-size:14px;
    max-width:60%;
    overflow:auto;
    @media only screen and (min-width:768px) {
        font-size:16px;
    }
`
export const Alert = styled.div`
    color:${props => props.alert ? '#D14657' : '#A1A1A1'};
    font-size:16px;
    text-align:center;
    height:24px;
    @media only screen and (min-width:768px) {
        font-size:18px;
        height:27px;
    }
`;
export const Button = styled.div`
    color: #B0B0B0;
    border-radius:5px;
    background:#F5F5F5;
    padding:10px;
    cursor:pointer;
    transition: all 500ms ease;
    font-weight: 400;
    font-size:20px;
    text-align:center;
    margin-top:40px;
    :hover{
        background:#154071;
        color: #FFF;
    }
    @media only screen and (min-width:768px) {
        margin-top:80px;
        font-size:26px;
        padding:12px;
    }
`;