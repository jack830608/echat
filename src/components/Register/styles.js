import styled ,{keyframes}from 'styled-components';

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
export const SubTitle = styled.div`
    color:#154071;
    font-size:26px;
    text-align:center;
    margin-bottom:10px;
    @media only screen and (min-width:768px) {
        font-size:36px;
    }
`;
export const Info = styled.div`
    color:${props => props.alert  ? '#D14657' : '#A1A1A1'};
    font-size:16px;
    text-align:center;
    height:24px;
    @media only screen and (min-width:768px) {
        font-size:18px;
        height:27px;
    }
`;
export const SmallTitle = styled.div`
    color:#154071;
    font-size:16px;
    margin-bottom:10px;
    @media only screen and (min-width:768px) {
    }
`;
export const Form = styled.div`
    background:#FFF;
    border-radius:15px;
    box-sizing:border-box;
    padding:10px;
    width:95vw;
    overflow:hidden;
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
    margin-top:30px;
    :hover{
        background:#154071;
        color: #FFF;
    }
    @media only screen and (min-width:768px) {
        margin-top:50px;
        font-size:26px;
        padding:12px;
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

const In = keyframes`
    from {
        transform: translateX(300px);
    }
    to {
        transform: translateX(0);
    }
`;

export const Step = styled.div`
    animation: ${In} 500ms;
    @media only screen and (min-width:768px) {

    }
`;

export const SelectBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    @media only screen and (min-width:768px) {

    }
`;

export const SelectDate = styled.div`
    background:${props => props.selected  ? '#154071' : ''};
    border: ${props => props.selected  ? '2px solid #154071' : '2px solid #D4D4D4'};
    color: ${props => props.selected  ? '#FFF' : '#D4D4D4'};
    width:30px;
    height:30px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    transition:0.2s linear;
    @media only screen and (min-width:768px) {
        width:40px;
        height:40px;
    }
`;
export const TimeBox = styled.div`
    padding:10px 0 ;
    @media only screen and (min-width:768px) {

    }
`;
export const StepImg = styled.div`
    padding:60px 0 10px 0;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width:768px) {
        padding:100px 0 30px 0;
    }
`;
export const Img = styled.img`
    height:110px;
    margin:0 auto 40px auto;
    @media only screen and (min-width:768px) {
        height:140px;
    }
`;
export const ImgInfo = styled.div`
    font-size:16px;
    color:#A1A1A1;
    text-align:center;
    @media only screen and (min-width:768px) {

    }
`;