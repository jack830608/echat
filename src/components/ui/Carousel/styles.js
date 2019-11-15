import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  position:relative;
`;


export const SlidersContainer = styled.div`
  display: flex;
  will-change: transform;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${ ({ width }) => width }px;
`;

export const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px auto;
`;
export const Dot = styled.div`
  width:8px;
  height:8px;
  border-radius:50%;
  margin:0 5px;
  transition:0.6s;
  background: ${ ({ isSelected }) => isSelected ? '#154071' : '#EAEAEA' };
  will-change: opacity;
  cursor: pointer;
  @media only screen and (min-width:768px) {
    width:10px;
    height:10px;
  }
`;
export const ArrowBox = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:absolute;
  top:40%;
  width:100%;
  @media only screen and (min-width:768px) {
    font-size:30px;
    top:45%;
}
`;
export const Arrow = styled.div`
  font-size:25px;
  color:#DEDEDE;
  cursor:pointer;
  transition:0.3s linear;
  font-weight: bold;
  :hover{
    color:#154071;
  }
  @media only screen and (min-width:768px) {
    font-size:30px;
}
`;