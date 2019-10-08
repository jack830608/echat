import styled , {keyframes} from 'styled-components';

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:${props => props.scroll? '#FFF' : 'rgba(0,0,0,0.1)'};
    box-shadow:${props => props.scroll? '0 3px 4px -3px #c6c6c6' : 'none'};
    width:100vw;
    height:64px;
    position:fixed;
    top:0;
    left:0;
    box-sizing:border-box;
    padding:0 3%;
    transition: background 0.4s linear;
    z-index:9999;
    @media only screen and (min-width:768px) {
    }
`;
export const RightPart = styled.div`
        display: flex;
        justify-content:space-between;
        align-items: center;
    @media only screen and (min-width:768px) {
    }
`; 
export const Img = styled.img`
    height:35px;
    cursor: pointer;
    @media only screen and (min-width:768px) {
        height:40px;
    }
`;
export const Button = styled.div`
    display:none;
    @media only screen and (min-width:768px) {
        display:block;
        letter-spacing:3px;
        padding: 8px 30px;
        color: #D14657;
        border: 1px solid #D14657;
        border-radius: 30px;
        font-weight: 400;
        transition: all 0.3s ease 0s;
        cursor: pointer;
        font-size:14px;
        :hover{
            color: #FFF;
            background:#D14657;
        }
    }
`; 