import styled , {keyframes} from 'styled-components';


const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 0.9; }
`;

export const Container = styled.div`
    transition: 800ms;
    position:absolute;
    padding:5px;
    background:#ECEFF1;
    border-radius: 8px;
    animation: ${fadeIn} 0.5s;
    left:${props => props.side === 'left' ? '5%' : 'auto'};
    right:${props => props.side === 'right' ? '5%' : 'auto'};
    opacity:0.9;
    font-family: 'Gugi', cursive;
    box-shadow:0 8px 8px 0 rgba(12,0,51,0.1);
    z-index: 1;
    @media screen and (min-width: 768px) {
      padding:10px;
      left:auto;
      right:auto;
  }
`;

export const Table = styled.table`
    border-collapse:collapse;
    @media screen and (min-width: 768px) {
  }
`;
export const TableHeader = styled.div`
    display:flex;
    justify-content:space-around;
    background:#ECEFF1;
    color:#8D6E63;
    padding:5px 0 8px 0 ;
    @media screen and (min-width: 768px) {
      padding:5px 0 10px 0;
  }
`;
export const BigDate = styled.div`
    font-size:14px;
    letter-spacing:5px;
    @media screen and (min-width: 768px) {
      font-size:16px;
  }
`;
export const LeftArrow = styled.div`
    cursor:pointer;
    padding:0 15px;
    transition:0.5s;
    font-size:14px;
    :hover{
        transform:translateX(-10px);
    }
    @media screen and (min-width: 768px) {
      font-size:16px;
  }
`;
export const RightArrow = styled.div`
    cursor:pointer;
    padding:0 15px;
    transition:0.5s;
    font-size:14px;
    :hover{
        transform:translateX(10px);
    }
    @media screen and (min-width: 768px) {
      font-size:16px;
  }
`;
export const Week = styled.td`
    padding:5px 0;
    text-align:center;
    color:#757575;
    font-size: 14px;
    font-weight:500;
    @media screen and (min-width: 768px) {
      font-size:16px;
  }
`;
export const Day = styled.td`
    text-align:center;
    color:#B0BEC5;
    font-size:14px;
    width:calc(100%/7);
    @media screen and (min-width: 768px) {
      font-size:16px;
  }
`;
export const DaySelect = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    border:2px solid #ECEFF1;
    width:30px;
    height:30px;
    max-height:calc(80vw / 7);
    max-width:calc(80vw / 7);
    border-radius:50%;
    margin: 0 auto;
    cursor: ${(props) => props.hover ? 'pointer' : 'default'};
    :hover{
        transition:800ms;
        border:${props => props.hover ? '2px solid #7395a5' : "2px solid #ECEFF1"};
    }
    @media screen and (min-width: 768px) {
      width:35px;
      height:35px;
  }
`