import styled ,{keyframes}from 'styled-components';

export const Container = styled.div`
    background:#F5F5F5;
    min-height:100vh;
    box-sizing:border-box;
    padding:2%;
    position:relative;
    @media only screen and (min-width:768px) {
    }
`;

export const Form = styled.div`
    background:#FFF;
    display:flex;
    flex-direction:column-reverse;
    box-shadow:10px 10px 12px -2px rgba(12,0,51,0.2);
    border-radius:10px;
    @media only screen and (min-width:768px) {
        flex-direction:row;
        align-items:flex-end;
        justify-content:center;
    }
`;
export const Right = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    border-radius:10px 10px 0 0;
    @media only screen and (min-width:768px) {
        width:35%;
        border-radius:0 10px 10px 0;
    }
`;
export const Left = styled.div`
    width:100%;
    height:100%;
    font-weight:700;
    box-sizing:border-box;
    padding: 5%;
    @media only screen and (min-width:768px) {
        width:65%;
        height:92vh;
        padding:4% 5%;
        overflow-y:auto;
        ::-webkit-scrollbar { 
        display: none;
        }
    }
`;
export const Subtitle = styled.div`
    color:#484848;
    font-size:16px;
    @media only screen and (min-width:768px) {
        font-size:20px;
    }
`;
export const Button = styled.div`
    color: #ff6859;
    border: 1px solid #ff6859;
    border-radius:30px;
    background-color:#FFF;
    color:#ff6859;
    padding:8px 25px;
    cursor:${props => props.check ? 'pointer' : 'not-allowed'};
    border:1px solid #ff6859;
    transition: all 500ms ease;
    font-weight: 400;
    letter-spacing:2px;
    width:fit-content;
    font-size:14px;
    text-align:center;
    margin-left:auto;
    margin-top:50px;
    :hover{
        background-color:#ff6859;
        color:#FFF;
        box-shadow:0 4px 8px 0 rgba(12,0,51,0.1);
    }
    @media only screen and (min-width:768px) {
        font-size:16px;
        padding:10px 30px;
        letter-spacing:3px;
    }
`; 
export const Box = styled.div`
    display:flex;
    @media only screen and (min-width:768px) {
    }
`;
export const LeftHolder = styled.div`
    width:100%;
    margin-right:5px;
    position:relative;
    @media only screen and (min-width:768px) {
    }
`;
export const RightHolder = styled.div`
    width:100%;
    margin-left:5px;
    position:relative;
    @media only screen and (min-width:768px) {
    }
`;
export const Filter = styled.div`
    height:100%;
    width:100%;
    background:rgba(255,255,255,0.3);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media only screen and (min-width:768px) {
        border-radius:0 10px 10px 0;
    }
`;
export const Img = styled.div`
    width:100%;
    height:35vh;
    background-image:${props => props.img ? `url(/images/${props.img})` : 'url(/images/form_1.jpg)'};
    background-size:cover;
    background-position-y:bottom;
    border-radius:10px 10px 0 0;
    @media only screen and (min-width:768px) {
        background-position:center top; 
        height:92vh;
        border-radius:0 10px 10px 0;
    }
`;
export const Require = styled.div`
    margin-left:auto;
    width: fit-content;
    font-weight:${props => props.alert ? '700' : '400'};
    color:${props => props.alert ? '#ff6859' : '#484848'};
    font-size:12px;
    transition:0.1s ease;
    @media only screen and (min-width:768px) {
        font-size:14px;
    }
`;
export const RequireBox = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    @media only screen and (min-width:768px) {

    }
`;
export const Triangle = styled.div`
    display:none;
    border-color: ${props => props.back ? '#F5F5F5 rgba(255, 103, 89, 1) transparent transparent;':'#F5F5F5 rgba(255, 103, 89, 0.8) transparent transparent'};
    border-style: solid solid solid solid;
    border-width: ${props => props.back ? '70px 70px 0 0' : '60px 60px 0px 0px'};
    height: 0px;
    width: 0px;
    position:absolute;
    transition:0.3s linear;
    transform:${props => props.back ? 'translate(5px,5px)' : 'translate(0,0)'};
    @media only screen and (min-width:768px) {
        display:block;
    }
`;
export const BackPage = styled.div`
    cursor:pointer;
    position:absolute;
    width:60px;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    @media only screen and (min-width:768px) {

    }
`;
export const BackImg = styled.div`
    z-index:1;
    position:absolute;
    width:25px;
    opacity:0.8;
    margin-top:auto;
    transition:0.3s linear;
    @media only screen and (min-width:768px) {
        width:${props => props.back ? '30px' : '25px'};
        opacity:${props => props.back ? '0.6' : '0'};
    }
`;